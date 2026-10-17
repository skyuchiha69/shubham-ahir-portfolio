import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
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

  // Click outside backdrop to close
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!project) return null;

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
            <span className="modal-status-badge">{project.status}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Title */}
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

        {/* Detailed Sections */}
        <div className="modal-body-grid">
          
          {/* Section: Problem & Solution */}
          <div className="modal-card">
            <div className="modal-card-header">
              <Compass size={17} className="accent-icon" aria-hidden="true" />
              <h3>The Problem &amp; The Solution</h3>
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

          {/* Section: Contribution & Current Status */}
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

          {/* Section: Architectural Highlights */}
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

          {/* Section: Learnings */}
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

        </div>

        {/* Modal Footer / Action Links */}
        <div className="modal-actions-footer">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={16} aria-hidden="true" />
              <span>View Repository</span>
            </a>
          ) : (
            <span className="link-status-notice">
              GitHub repository URL will be attached once published
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
              <ExternalLink size={16} aria-hidden="true" />
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
