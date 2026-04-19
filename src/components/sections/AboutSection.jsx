import React from 'react';
import { about } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section id="sobre" className={styles.wrapper}>
      <RevealSection className={styles.section} delay={80}>
        <div className="container">
          <p className={styles.kicker}>Sobre mim</p>
          <h2>Arquitetura para sistemas de produto</h2>
          <p className={styles.lead}>{about.headline}</p>

          <div className={styles.textGrid}>
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.focusGrid}>
            {about.focus.map((focusItem) => (
              <article key={focusItem.title} className={styles.focusCard}>
                <h3>{focusItem.title}</h3>
                <p>{focusItem.description}</p>
                <p className={styles.meta}>{focusItem.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default AboutSection;
