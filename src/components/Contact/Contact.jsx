import styles from './Contact.module.css'

function Contact(){
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contato</h2>
                <p>Entre contato comigo! Estou aberto para colaborações e oportunidades profissionais.</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:kaikevoliveira@gmail.com"><img className={styles.linkImg} src={require('../../Assets/Images/gmail.png')} alt="" /></a>
                    <h3>kaikevoliveira@gmail.com</h3>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/kaike-vitorino-de-oliveira/"><img className={styles.linkImg} src={require('../../Assets/Images/linkedin.png')} alt="" /></a>
                    <h3>linkedin.com/in/kaike-vitorino-de-oliveira</h3>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/Kaike-Vitorino"><img className={styles.linkImg} src={require('../../Assets/Images/github.png')} alt="" /></a>
                    <h3>github.com/Kaike-Vitorino</h3>
                    

                </li>
            </ul>
        </footer>
    )
    }

export default Contact;