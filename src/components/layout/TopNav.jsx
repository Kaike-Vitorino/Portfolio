import React, { useMemo, useState } from 'react';

import { navigationLinks, profile } from '../../data/portfolioData';
import styles from './TopNav.module.css';

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(() => navigationLinks, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.navShell} container`}>
        <a className={styles.brand} href="#hero" aria-label="Ir para o topo do portfolio">
          <span className={styles.brandStrong}>{profile.name}</span>
          <span className={styles.brandSub}>Backend / IA aplicada</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>

        <nav id="main-navigation" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navegacao principal">
          {links.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={handleLinkClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default TopNav;
