import React from 'react';
import { skills } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './SkillsSection.module.css';

function SkillsSection() {
  return (
    <section id="competencias" className={styles.wrapper}>
      <RevealSection delay={140}>
        <div className="container">
          <p className={styles.kicker}>Competencias</p>
          <h2>Stack organizando para impacto real</h2>

          <div className={styles.grid}>
            {skills.map((group) => (
              <article key={group.category} className={styles.group}>
                <h3>{group.category}</h3>
                <div className={styles.chips}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
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

export default SkillsSection;
