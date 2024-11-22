import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img
                    src={require('../../Assets/Images/tech32.png')}
                    alt="Ícone de tecnologia"
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>

                    {/* Backend */}
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemsText}>
                            <h3>Back-end Developer</h3>
                            <p>
                                Experiência no desenvolvimento de APIs RESTful e microsserviços utilizando Go e Rust, com foco em escalabilidade, performance e arquitetura robusta.
                            </p>
                        </div>
                        <img className={styles.aboutItemImg} src={require('../../Assets/Images/backend.png')} alt="Ícone de Backend" />
                    </li>

                    {/* Inteligência Artificial e Automação */}
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemsText}>
                            <h3>Inteligência Artificial & Automação</h3>
                            <p>
                                Trabalho no desenvolvimento de soluções de automação e integração com IA, utilizando ferramentas e modelos pré-treinados para otimizar processos e sistemas. Foco em inferência local e personalização de modelos.
                            </p>
                        </div>
                        <img className={styles.aboutItemImg2} src={require('../../Assets/Images/ai.png')} alt="Ícone de IA e Automação" />
                    </li>

                    {/* Mainframe */}
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemsText}>
                            <h3>Mainframe Specialist</h3>
                            <p>
                                Especialista em tecnologias de mainframe, incluindo COBOL, VSAM, DB2 e CICS. Experiência em processamento Batch, desenvolvimento e manutenção de sistemas corporativos críticos.
                            </p>
                        </div>
                        <img className={styles.aboutItemImg} src={require('../../Assets/Images/mainframe.png')} alt="Ícone de Mainframe" />
                    </li>

                </ul>
            </div>
        </section>
    );
}

export default About;