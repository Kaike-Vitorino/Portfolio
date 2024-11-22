import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import guid from 'short-uuid'
import glsl from 'babel-plugin-glsl/macro'

class WaveMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        factor: { value: 0 },
        noiseImg: { value: null }
      },
      vertexShader: glsl`
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
      fragmentShader: glsl`
      uniform float time;
      uniform float factor;
      uniform sampler2D noiseImg;
      varying vec2 vUv;
     
      /////////////////////////////////////////////////
//                                             //
//                 CONSTANTS                   //
//                                             //
/////////////////////////////////////////////////
#define PI 3.14
#define TA 6.28
#define PH 1.57

/////////////////////////////////////////////////
//                                             //
//              NOISE GENERATION               //
//                                             //
/////////////////////////////////////////////////

// 2D value noise
float noisev(vec2 p)
{
    return fract(sin(p.x * 1234.0 + p.y * 2413.0) * 5647.0);
}

// Smoother noise
float noise(vec2 uv)
{
    // Noise vector
    vec2 nv = vec2(0.0);
    
    // Local positions
    vec2 lv = fract(uv);
    vec2 id = floor(uv);
    
    // Interpolate lv
    lv = lv * lv * (3.0 - 2.0 * lv);
    
    // Calculate each corner
    float bl = noisev(id);
    float br = noisev(id + vec2(1, 0));
    float tl = noisev(id + vec2(0, 1));
    float tr = noisev(id + vec2(1, 1));
    
    // Interpolate values
    float b = mix(bl, br, lv.x);
    float t = mix(tl, tr, lv.x);
    float n = mix(b, t, lv.y);
    
    // Return n
    return n;
}

// FBM function
float fbm(vec2 p)
{
    float f = 0.0;
    f += 0.5000 * noise(p); p *= 2.01;
    f += 0.2500 * noise(p+vec2(0.0, 1.0)); p *= 2.02;
    f += 0.1250 * noise(p+vec2(1.0, 0.0)); p *= 2.03;
    f += 0.0625 * noise(p+vec2(1.0, 1.0)); p *= 2.04;
    f /= 0.9375;
    return f;
}

/////////////////////////////////////////////////
//                                             //
//             HYPERSPACE EFFECT               //
//                                             //
/////////////////////////////////////////////////

// Calculates the hyperspace tunnel at uv
vec3 tunnel(vec2 uv)
{
    // Setup colour
    vec3 col = vec3(0.0);
    
    // Calculate polar co-ordinates
    float r = .5 / length(uv) + time * 4.;
    float mr = mod(r + 10000.0, 700.0);
    if (mr < 400.0)
        mr += 400.0;
    float theta = atan(uv.x + noise(vec2(step(time * 100., 1.)) / 2.), uv.y);
    
    // Calculate the colour
    // Convert the new polar co-ordinates to cartesian
    vec2 ptc = vec2(mr * cos(theta / TA), mr * sin(theta / TA));
    
    // Then create some noise
    float snv = fbm(ptc * 1.0);

  if (snv > 0.7)
    col = vec3(1.,0.,.2);
    
      if (snv > 0.75)
    col = vec3(1.);
          if (snv > 0.8)
        col = vec3(0.2,0.,1.);
      
    // Then make the tunnel. Use two noise values,
    // which are mirrors of each other. Use a small
    // value added to theta to prevent artifacts.
    float fbm1 = fbm(vec2( r, mod(theta + 0.001, PI) ));
    float fbm2 = fbm(vec2( r, PI - mod(theta - 0.001, PI) ));
    
    // Change fbm1 and fbm2 to make more contrast
    fbm1 = pow(fbm1, 3.0);
    fbm2 = pow(fbm2, 3.0);
    
    // More mirrored noise for colouring
    float fbm3 = fbm(vec2( r, mod(theta + 0.001, PI) ) * 2.0);
    float fbm4 = fbm(vec2( r, PI - mod(theta - 0.001, PI) ) * 2.0);
    
    // Colours for the tunnel
    vec3 tc1 = vec3(1.0, 0.1, 1.);
    vec3 tc2 = vec3(1., 0.0, 1.);
    
    // Set the noise value based on the angle
    if (theta > 0.0)
    	col = mix(col, mix(tc1, tc2, fbm4), fbm2);
    else
        col = mix(col, mix(tc1, tc2, fbm3), fbm1);
    
    // Return colour
    return col;
}



// Calculates the pixel at uv
vec3 calcPixel(vec2 uv)
{
    // Correct the UV co-ordinates
    uv = uv * 2.0 - 1.0;
   // uv.x *= vUv.x / vUv.y;
    // rotate tunnel here
    // Setup colour
    vec3 col = vec3(0.0);
    
    // Draw the tunnel
    col = tunnel(uv);
    
    // Return colour
    return col;
}


float circle(in vec2 _st, in float _radius){
  vec2 dist = _st-vec2(0.5);
return 1.-smoothstep(_radius-(_radius*0.01),
                       _radius+(_radius*0.01),
                       dot(dist,dist)*4.0);
}


  
mat2 rotation2d(float angle) {
	float s = sin(angle);
	float c = cos(angle);

	return mat2(
		c, -s,
		s, c
	);
}


vec2 rotate(vec2 v, float angle) {
	return rotation2d(angle) * v;
}
/////////////////////////////////////////////////
//                                             //
//              IMAGE PROCESSING               //
//                                             //
/////////////////////////////////////////////////
void main()
{
    vec2 uv = vUv;
    // Setup colour
    vec3 col = vec3(0.0);
    
    // Do some supersampling (heavy on the gpu)
    // for (float x = -1.0; x < 2.0; x += 0.5)
    // {
        for (float y = -1.0; y < 2.0; y += 0.5)
        {
            // Calculate pixel here
            vec3 pixel = calcPixel((gl_FragCoord.xy + vec2(-0.5, y)) / 500.);
            
            // Add it, and make a bloom effect
            col += pixel;
        }
    //}
    
    // Average it out
    col /= 16.0;
    
    vec2 st = vUv;
    
    float r = 0.57,
    a = atan(st.y, st.x),
    noiseA = a + time;
    
    vec2 nPos = vec2(cos(noiseA), sin(noiseA));
    
    float n = noise(nPos),
        n2 = noise(nPos + time);
    
    r -= cos(a*40.) * n*.05;
    r -= cos(a*20.) * n2*.1;
    
    // progress -> 0. -> 7.

    float noiseI = pow(texture2D(noiseImg, vUv).b, .4);
    float pct = circle(rotate(st, 0.), r * factor * noiseI); 

    
    // Output to screen
    gl_FragColor = vec4(mix(vec3(1.), col, pct),1.0);
}
      `
    })
  }

  set time(v) { this.uniforms.time.value = v } // prettier-ignore
  get time() { return this.uniforms.time.value } // prettier-ignore
  set factor(v) { this.uniforms.factor.value = v } // prettier-ignore
  get factor() { return this.uniforms.factor.value } // prettier-ignore
}

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
WaveMaterial.key = guid.generate()
// Make the material available in JSX as <waveMaterial />
extend({ WaveMaterial })

export { WaveMaterial }
