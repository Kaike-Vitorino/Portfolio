import React from 'react';
import { projects } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './ProjectsSection.module.css';

function ProjectsSection() {
  return (
    <section id="projetos" className={styles.wrapper}>
      <RevealSection delay={160}>
        <div className="container">
          <p className={styles.kicker}>Projetos em destaque</p>
          <h2>Arquiteturas e produtos complexos</h2>

          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.title} className={`${styles.card} ${styles[project.cover]}`}>
                <div className={styles.cardHeader}>
                  <h3>{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${project.title}`}>
                    GitHub
                  </a>
                </div>
                <p className={styles.summary}>{project.summary}</p>

                <div className={styles.stack}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <ul>
                  {project.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default ProjectsSection;
