import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, ArrowRight, Filter } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function ProjectExplorer({ isOpen, onClose, onSelectProject }) {
  const dialogRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Handle native <dialog> open/close
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

  // Handle ESC key
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

  const categories = ['All', 'Web Development', 'AI / Data', 'Hackathons'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web Development') return p.categoryTag === 'Web Development';
    if (activeFilter === 'AI / Data') return p.categoryTag === 'AI / Data';
    if (activeFilter === 'Hackathons') return p.categoryTag === 'Hackathons' || Boolean(p.hackathonTag);
    return true;
  });

  return (
    <dialog
      ref={dialogRef}
      className="project-explorer-dialog"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="explorer-dialog-title"
    >
      <div className="explorer-modal-container">
        
        {/* Header Bar */}
        <div className="explorer-header-bar">
          <div className="explorer-title-group">
            <div className="explorer-eyebrow">
              <Sparkles size={14} className="accent-sparkle" aria-hidden="true" />
              <span>PROJECT LAB &amp; ARCHIVE</span>
            </div>
            <h2 id="explorer-dialog-title" className="explorer-title">
              Explore All Projects
            </h2>
            <p className="explorer-subtitle">
              Browse full-stack systems, academic prototypes, and hackathon architectures.
            </p>
          </div>

          <button
            type="button"
            className="explorer-close-btn"
            onClick={onClose}
            aria-label="Close project explorer"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Filter Bar with Live Counts */}
        <div className="explorer-filter-bar">
          <div className="filter-tabs-list" role="tablist" aria-label="Project category filters">
            {categories.map((cat) => {
              const count = projectsData.filter((p) => {
                if (cat === 'All') return true;
                if (cat === 'Web Development') return p.categoryTag === 'Web Development';
                if (cat === 'AI / Data') return p.categoryTag === 'AI / Data';
                if (cat === 'Hackathons') return p.categoryTag === 'Hackathons' || Boolean(p.hackathonTag);
                return true;
              }).length;

              const isSelected = activeFilter === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`filter-tab-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  <span>{cat}</span>
                  <span className="tab-count-pill">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="explorer-results-count">
            <Filter size={13} aria-hidden="true" />
            <span>Showing {filteredProjects.length} of {projectsData.length} projects</span>
          </div>
        </div>

        {/* Projects List / Grid */}
        <div className="explorer-list-container">
          {filteredProjects.length > 0 ? (
            <div className="explorer-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="explorer-project-card">
                  {project.image && (
                    <div 
                      className="explorer-card-thumbnail"
                      onClick={() => {
                        onClose();
                        onSelectProject(project);
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${project.title} details`}
                    >
                      <img src={project.image} alt={`${project.title} thumbnail`} loading="lazy" />
                    </div>
                  )}

                  <div className="explorer-card-top">
                    <span className="card-number">NO. {project.number}</span>
                    <span className="card-category-tag">{project.category}</span>
                    {project.status && (
                      <span className="card-status-pill">{project.status}</span>
                    )}
                  </div>

                  <h3 className="explorer-card-title">{project.title}</h3>
                  <span className="explorer-card-tagline">{project.tagline}</span>

                  <p className="explorer-card-desc">{project.shortDescription}</p>

                  <div className="explorer-card-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="mini-tech-pill">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="mini-tech-pill muted">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="explorer-card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        onClose();
                        onSelectProject(project);
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} aria-hidden="true" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={14} aria-hidden="true" />
                        <span>Repo</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="explorer-empty-state">
              <p>No projects match the selected category.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setActiveFilter('All')}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="explorer-footer-bar">
          <span className="explorer-footer-hint">
            Press <kbd>Esc</kbd> or click outside to close
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Close Explorer
          </button>
        </div>

      </div>
    </dialog>
  );
}
