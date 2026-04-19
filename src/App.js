import React from 'react';

import TopNav from './components/layout/TopNav';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteudo principal
      </a>
      <TopNav />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
