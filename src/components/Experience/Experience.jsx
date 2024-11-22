import { useContext } from "react";
import  {CursosContext} from "../../Context/CarrinhoContexto";
import styles from './Experience.module.css'

function Experience() {
  const { cursos } = useContext(CursosContext);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {cursos.map((item) => (
          <div className={styles.skills}>
            {item.Skills.map((e) => (
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={e.imageSrc} className={styles.skillImage} alt="" />
                </div>
                <p>{e.tittle}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <ul className={styles.history}>
        <h2 className={styles.title}>Certificações</h2>

        {/* IBM Z Xplore - Concepts */}
        <li className={styles.historyItem}>
          <img src="https://community.ibm.com/zsystems/uploads/image/content-card/qvgcex7orah.webp" alt="IBM Z Xplore" />
          <div className={styles.historyItemDetails}>
            <h3>IBM Z Xplore - Concepts</h3>
            <p>Certificação que cobre conceitos fundamentais de Mainframe, incluindo Z/OS e TSO.</p>
          </div>
        </li>

        {/* Python Foundation – Fundação Bradesco */}
        <li className={styles.historyItem}>
          <img src="https://seeklogo.com/images/B/bradesco-icon-logo-9924102675-seeklogo.com.png" alt="Fundação Bradesco" />
          <div className={styles.historyItemDetails}>
            <h3>Fundação Bradesco – Python Fundamentos</h3>
            <p>Curso introdutório sobre lógica de programação e desenvolvimento em Python.</p>
          </div>
        </li>

        {/* Python Avançado – Fundação Bradesco */}
        <li className={styles.historyItem}>
          <img src="https://seeklogo.com/images/B/bradesco-icon-logo-9924102675-seeklogo.com.png" alt="Fundação Bradesco" />
          <div className={styles.historyItemDetails}>
            <h3>Fundação Bradesco – Python Avançado</h3>
            <p>Certificação avançada cobrindo estruturas de dados complexas e automação em Python.</p>
          </div>
        </li>

        {/* NaturalONE – Software AG */}
        <li className={styles.historyItem}>
          <img src="https://companieslogo.com/img/orig/SOW.F-10212d55.png?t=1720244494" alt="Software AG" />
          <div className={styles.historyItemDetails}>
            <h3>Software AG – NaturalONE</h3>
            <p>Curso introdutório sobre os fundamentos do desenvolvimento e manutenção de aplicações em ambientes mainframe utilizando NaturalONE.</p>
          </div>
        </li>

        {/* Capacitação Mainframe */}
        <li className={styles.historyItem}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNlL3ecnvCOE7LfsPgwq7KM-zaoQ-uNZpLw&s" alt="Mainframe Capacitation" />
          <div className={styles.historyItemDetails}>
            <h3>Capacitação Mainframe - COBOL, VSAM, DB2 e CICS</h3>
            <p>
              Curso que aborda fundamentos e conceitos avançados de desenvolvimento em Mainframe, com foco em TSO, JCL, COBOL e CICS.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Experience;