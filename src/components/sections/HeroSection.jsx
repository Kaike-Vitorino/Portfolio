import React from 'react';
import { profile } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './HeroSection.module.css';
import photo from '../../Assets/Images/kaike1.jpeg';

function HeroSection() {
  return (
    <RevealSection as="section" id="hero" className={styles.heroSection} delay={0}>
      <div className={`${styles.heroShell} container`}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Portfólio Profissional</p>
          <h1>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.summary}>{profile.summary}</p>
          <p className={styles.intro}>{profile.intro}</p>

          <p className={styles.location}>Local: {profile.location}</p>

          <div className={styles.ctaRow}>
            <a href={profile.ctas.projects} className={styles.primaryButton}>
              Ver projetos
            </a>
            <a
              href={profile.ctas.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostButton}
              aria-label="Perfil GitHub de Kaike Vitorino"
            >
              GitHub
            </a>
            <a
              href={profile.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostButton}
              aria-label="Perfil LinkedIn de Kaike Vitorino"
            >
              LinkedIn
            </a>
            <a href={profile.ctas.email} className={styles.ghostButton}>
              Entrar em contato
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <figure>
            <img
              src={photo}
              alt={`Foto profissional de ${profile.name}`}
              loading="eager"
              decoding="async"
            />
          </figure>
          <span className={styles.glow1} />
          <span className={styles.glow2} />
          <span className={styles.grid} />
        </div>
      </div>
    </RevealSection>
  );
}

export default HeroSection;
