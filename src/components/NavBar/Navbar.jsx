import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import GojoDomain from "../GojoDomain/GojoDomain";

function NavBar() {
  const [showVideo, setShowVideo] = useState(false);
  const [showGojo, setShowGojo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 830);

  // Atualiza o estado ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 830);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenExpansion = () => {
    setShowVideo(true);
    document.body.style.overflow = "hidden"; // Impede o scroll
  };

  return (
    <>
      {/* Esconde todo o conteúdo quando a expansão ou o vídeo está ativo */}
      <div
        style={{
          display: showVideo || showGojo ? "none" : "block",
        }}
      >
        <nav className={styles.navbar}>
          <a className={styles.title} href="/">
            Portfólio
          </a>
          <div className={styles.menu}>
            {/* Botão de menu funcional */}
            <img
              className={styles.menuBtn}
              src={
                menuOpen
                  ? require('../../Assets/Images/icons/marca-cruzada.png') // Ícone de "fechar"
                  : require('../../Assets/Images/icons/menu-icon.png')     // Ícone de "abrir"
              }
              onClick={() => setMenuOpen(!menuOpen)} // Alterna o estado do menu
              alt="Menu Icon"
            />

            {/* Itens do menu */}
            <ul
              className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} // Exibe/esconde o menu
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um item
            >
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              {/* Renderiza o botão Gojo apenas em telas grandes */}
              {isLargeScreen && (
                <li>
                  <img
                    src={require('../GojoDomain/gojo-button.png')}
                    alt="Abrir Expansão"
                    onClick={handleOpenExpansion}
                    style={{
                      cursor: "pointer",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      {/* Exibe o vídeo antes da expansão */}
      {showVideo && !showGojo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src={require('../GojoDomain/Gojo2.mp4')}
            autoPlay
            onEnded={() => setShowGojo(true)}
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "10px",
            }}
            controls={false}
          />
        </div>
      )}

      {/* Exibe a expansão */}
      {showGojo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 1000,
          }}
        >
          <GojoDomain />
        </div>
      )}
    </>
  );
}

export default NavBar;
