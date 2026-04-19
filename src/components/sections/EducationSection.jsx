import React from 'react';
import { certifications, education } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './EducationSection.module.css';

function EducationSection() {
  return (
    <section id="certificacoes" className={styles.wrapper}>
      <RevealSection delay={170}>
        <div className="container">
          <p className={styles.kicker}>Formação e certificações</p>
          <h2>Base técnica e formação profissional</h2>

          <div className={styles.layout}>
            <section className={styles.box}>
              <h3>Educacao</h3>
              {education.map((item) => (
                <article key={item.degree}>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                  <p>{item.period}</p>
                </article>
              ))}
            </section>

            <section className={styles.box}>
              <h3>Certificacoes</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default EducationSection;
