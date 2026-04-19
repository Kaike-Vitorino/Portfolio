import React from 'react';
import { profile } from '../../data/portfolioData';
import RevealSection from '../ui/RevealSection';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section id="contato" className={styles.wrapper}>
      <RevealSection delay={190}>
        <div className="container">
          <p className={styles.kicker}>Contato</p>
          <h2>Disponibilidade para novas oportunidades</h2>
          <p className={styles.lead}>
            Procurando um perfil senior em backend, sistemas e IA aplicada para times de produto e
            infraestrutura.
          </p>
          <p className={styles.note}>Aberto para oportunidades remotas e presenciais no Brasil.</p>

          <div className={styles.grid}>
            <a href={`mailto:${profile.contact.email}`} className={styles.card}>
              <span>Email</span>
              <strong>{profile.contact.email}</strong>
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span>LinkedIn</span>
              <strong>kaike-vitorino-de-oliveira</strong>
            </a>
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span>GitHub</span>
              <strong>Kaike-Vitorino</strong>
            </a>
            <a href={profile.contact.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span>WhatsApp</span>
              <strong>{profile.contact.phone}</strong>
            </a>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default ContactSection;
