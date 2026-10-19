import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import ProjectExplorer from './components/ProjectExplorer';
import './styles/App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  const handleOpenExplorer = () => {
    setIsExplorerOpen(true);
  };

  const handleCloseExplorer = () => {
    setIsExplorerOpen(false);
  };

  const handleSelectFromExplorer = (project) => {
    setIsExplorerOpen(false);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="portfolio-app-root">
      {/* WCAG Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar onOpenExplorer={handleOpenExplorer} />

      {/* Main Content Landmark */}
      <main id="main-content">
        
        {/* Editorial Hero Section with Portrait Frame */}
        <Hero onOpenExplorer={handleOpenExplorer} />

        {/* Featured Projects (Top 3) */}
        <FeaturedProjects
          onOpenDetails={handleOpenDetails}
          onOpenExplorer={handleOpenExplorer}
        />

        {/* Technical Capabilities & Skills Explorer */}
        <Skills />

        {/* Experience, Hackathons & Education */}
        <Experience />

        {/* Background & Principles */}
        <About />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Global Editorial Footer */}
      <Footer />

      {/* Full Project Case Study Modal (with Architecture Schematics) */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />

      {/* Interactive Project Archive & Lab Explorer */}
      <ProjectExplorer
        isOpen={isExplorerOpen}
        onClose={handleCloseExplorer}
        onSelectProject={handleSelectFromExplorer}
      />
    </div>
  );
}
