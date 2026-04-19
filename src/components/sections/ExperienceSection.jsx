import React from 'react';
import { experience } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './ExperienceSection.module.css';

function ExperienceSection() {
  return (
    <section id="experiencia" className={styles.wrapper}>
      <RevealSection className={styles.inner} delay={120}>
        <div className="container">
          <p className={styles.kicker}>Experiencia</p>
          <h2>Trajetoria profissional e impacto</h2>

          <div className={styles.timeline}>
            {experience.map((item) => (
              <article key={item.company} className={styles.timelineItem}>
                <header className={styles.itemHeader}>
                  <h3>{item.role}</h3>
                  <div className={styles.period}>{item.period}</div>
                  <p>{item.company}</p>
                </header>

                <p className={styles.summary}>{item.summary}</p>

                <ul>
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default ExperienceSection;
