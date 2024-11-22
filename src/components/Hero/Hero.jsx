import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span>Olá, eu sou Kaike!</span>
                </h1>
                <h3 className={styles.textAnimate}>
                    <code>Seja bem-vindo!</code>
                </h3>
                <p className={styles.description}>
                    Sou desenvolvedor backend com foco em performance e escalabilidade, apaixonado por Inteligência
                    Artificial e soluções complexas.
                    Meu objetivo é criar ferramentas eficientes que facilitem a vida das pessoas e ajudem empresas a
                    inovar.
                </p>
                <div className={styles.contact}>
                    <a className={styles.contact} href="mailto:kaikevoliveira@gmail.com">Entre em Contato</a>
                </div>
            </div>

            {/* Contêiner para controlar fundo e alinhamento da imagem */}
            <div className={styles.imageMy}>
                <img className={styles.imageMy} src={require('../../Assets/Images/kaike1.jpeg')} alt="Foto de Kaike"/>
            </div>

            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}

export default Hero;