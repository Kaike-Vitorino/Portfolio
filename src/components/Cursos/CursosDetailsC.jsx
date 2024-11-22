import React, { useContext } from "react";
import { CursosContext } from "../../Context/CarrinhoContexto";
import NavBar from "./Navbar/Navbar";

import styles from "./Curso.module.css"

const CursoDetails = (props) => {

    return (
        <>
            <NavBar />
            <section className={styles.container}>
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>
            </section>
        </>
    );
};

export default CursoDetails;
