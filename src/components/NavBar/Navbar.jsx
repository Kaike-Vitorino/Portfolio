import React, { useState } from "react";
import styles from "./NavBar.module.css";
import GojoDomain from "../GojoDomain/GojoDomain"; // Importe o componente da expansão

function NavBar() {
  const [showVideo, setShowVideo] = useState(false); // Controle do vídeo
  const [showGojo, setShowGojo] = useState(false);  // Controle da expansão

  const handleOpenExpansion = () => {
    setShowVideo(true); // Primeiro exibe o vídeo
    document.body.style.overflow = "hidden"; // Impede o scroll
  };

  const handleReset = () => {
    window.location.reload(); // Atualiza a página para fechar a expansão
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
            <img
              className={styles.menuBtn}
              src={require('../../Assets/Images/icons/menu-icon.png')}
              onClick={() => {}}
              alt="Menu Icon"
            />
            <ul className={styles.menuItems}>
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
              {/* Botão de ativação da expansão como imagem */}
              <li>
                <img
                  src={require('../GojoDomain/gojo-button.png')}
                  alt="Abrir Expansão"
                  onClick={handleOpenExpansion}
                  style={{
                    cursor: "pointer",
                    width: "80px", // Ajuste o tamanho da imagem
                    height: "80px",
                  }}
                />
              </li>
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
            onEnded={() => setShowGojo(true)} // Exibe a expansão ao término do vídeo
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "10px",
            }}
            controls={false} // Remove os controles do vídeo
          />
        </div>
      )}

      {/* Exibe a expansão após o vídeo */}
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
