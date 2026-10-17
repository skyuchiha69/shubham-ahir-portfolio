import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projectsData } from './data/portfolioData';
import './styles/App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="portfolio-app-root">
      {/* WCAG Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        
        {/* Hero Section */}
        <Hero />

        {/* Selected Projects Section */}
        <section className="work-section" id="work" aria-labelledby="work-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-number">[ 01 / SELECTED WORK &amp; CASE STUDIES ]</span>
              <h2 id="work-heading" className="section-title">
                Selected Projects
              </h2>
              <p className="section-subtitle">
                Academic and personal software engineering implementations. All features, architecture, and technology contexts verified against project deliverables.
              </p>
            </div>

            <div className="projects-grid">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={handleOpenDetails}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Project Case Study Native Dialog Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
}
