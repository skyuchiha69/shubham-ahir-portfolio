import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass, Layout, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import RentWiseVisual from './RentWiseVisual';
import RetailDataVisual from './RetailDataVisual';
import DealIntelligenceVisual from './DealIntelligenceVisual';
import SoilSenseVisual from './SoilSenseVisual';
import CampusCopilotVisual from './CampusCopilotVisual';

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture'
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        setActiveTab('overview');
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle native ESC press
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  // Fallback backdrop click detection for browsers without native closedby support
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  const renderVisual = () => {
    if (project.visualType === 'rental-schematic') {
      return <RentWiseVisual />;
    }
    if (project.visualType === 'deal-intelligence-schematic') {
      return <DealIntelligenceVisual />;
    }
    if (project.visualType === 'campus-copilot-schematic') {
      return <CampusCopilotVisual />;
    }
    if (project.visualType === 'data-schematic') {
      return <RetailDataVisual />;
    }
    if (project.visualType === 'soilsense-schematic') {
      return <SoilSenseVisual />;
    }
    return null;
  };

  const hasVisual = Boolean(project.visualType);

  return (
    <dialog
      ref={dialogRef}
      className="project-modal-dialog"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="project-modal-title"
    >
      <div className="modal-content-container">
        
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-header-meta">
            <span className="modal-project-num">PROJECT {project.number}</span>
            <span className="modal-category-tag">{project.category}</span>
            {project.status && (
              <span className="modal-status-badge">{project.status}</span>
            )}
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Title & Tagline */}
        <div className="modal-title-section">
          <h2 id="project-modal-title" className="modal-title">
            {project.title}
          </h2>
          <p className="modal-tagline">{project.tagline}</p>
        </div>

        {/* Technologies Bar */}
        <div className="modal-tech-strip">
          <span className="tech-strip-label">VERIFIED STACK:</span>
          <div className="modal-tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Tabs if Visual Architecture Schematic exists */}
        {hasVisual && (
          <div className="modal-tabs-bar" role="tablist" aria-label="Case study views">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'overview'}
              className={`modal-tab-btn ${activeTab === 'overview' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Compass size={14} aria-hidden="true" />
              <span>Case Study &amp; Findings</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'architecture'}
              className={`modal-tab-btn ${activeTab === 'architecture' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              <Layout size={14} aria-hidden="true" />
              <span>System Schematic &amp; Flow</span>
            </button>
          </div>
        )}

        {/* Tab 1: Detailed Overview Grid */}
        {(!hasVisual || activeTab === 'overview') && (
          <div className="modal-body-grid">

            {/* Authentic Project Screenshot & Gallery */}
            {((project.gallery && project.gallery.length > 0) || project.image) && (
              <div className="modal-card full-width modal-screenshot-card">
                <div className="modal-card-header">
                  <ImageIcon size={17} className="accent-icon" aria-hidden="true" />
                  <h3>Authentic Interface Preview</h3>
                  {project.gallery && project.gallery.length > 1 && (
                    <span className="gallery-counter">
                      {activeImgIndex + 1} of {project.gallery.length} views
                    </span>
                  )}
                </div>

                <div className="modal-screenshot-frame">
                  <img
                    src={(project.gallery && project.gallery[activeImgIndex]) || project.image}
                    alt={`${project.title} interface preview`}
                    className="modal-screenshot-display"
                    loading="lazy"
                  />
                </div>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="modal-gallery-pills" role="tablist" aria-label="Screenshot gallery selector">
                    {project.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        role="tab"
                        aria-selected={activeImgIndex === idx}
                        className={`gallery-pill-btn ${activeImgIndex === idx ? 'is-active' : ''}`}
                        onClick={() => setActiveImgIndex(idx)}
                      >
                        <span>Screen 0{idx + 1}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Problem & Solution */}
            <div className="modal-card">
              <div className="modal-card-header">
                <Compass size={17} className="accent-icon" aria-hidden="true" />
                <h3>Problem &amp; Solution</h3>
              </div>
              <div className="modal-card-body">
                <div className="sub-block">
                  <span className="sub-label">THE PROBLEM</span>
                  <p>{project.overview.problem}</p>
                </div>
                <div className="sub-block">
                  <span className="sub-label">THE SOLUTION</span>
                  <p>{project.overview.solution}</p>
                </div>
              </div>
            </div>

            {/* Implementation & Contribution */}
            <div className="modal-card">
              <div className="modal-card-header">
                <Cpu size={17} className="accent-icon" aria-hidden="true" />
                <h3>Implementation &amp; Contribution</h3>
              </div>
              <div className="modal-card-body">
                <div className="sub-block">
                  <span className="sub-label">MY CONTRIBUTION</span>
                  <p>{project.overview.contribution}</p>
                </div>
                <div className="sub-block">
                  <span className="sub-label">CURRENT STATUS</span>
                  <p>{project.overview.statusDetails}</p>
                </div>
              </div>
            </div>

            {/* Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="modal-card full-width">
                <div className="modal-card-header">
                  <Layers size={17} className="accent-icon" aria-hidden="true" />
                  <h3>Key Engineering Considerations</h3>
                </div>
                <div className="highlights-list">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="highlight-row">
                      <span className="highlight-pill">{item.label}</span>
                      <p className="highlight-text">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div className="modal-card full-width">
                <div className="modal-card-header">
                  <CheckCircle2 size={17} className="accent-icon" aria-hidden="true" />
                  <h3>Key Learning Takeaways</h3>
                </div>
                <ul className="learnings-list">
                  {project.learnings.map((learning, idx) => (
                    <li key={idx} className="learning-item">
                      <span className="learning-bullet" aria-hidden="true">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Visual Architecture Schematic */}
        {hasVisual && activeTab === 'architecture' && (
          <div className="modal-schematic-wrapper">
            <div className="schematic-caption-strip">
              <span className="schematic-badge">ARCHITECTURE &amp; DATA FLOW SCHEMATIC</span>
              <span className="schematic-note">Interactive component model verified against source repository</span>
            </div>
            <div className="schematic-render-box">
              {renderVisual()}
            </div>
          </div>
        )}

        {/* Modal Actions Footer */}
        <div className="modal-actions-footer">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`View ${project.title} repository on GitHub`}
            >
              <GithubIcon size={16} aria-hidden="true" />
              <span>View Repository</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          ) : (
            <span className="link-status-notice">
              GitHub repository link will be attached once published
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}

          <button
            type="button"
            className="btn btn-secondary modal-close-action"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>

      </div>
    </dialog>
  );
}
