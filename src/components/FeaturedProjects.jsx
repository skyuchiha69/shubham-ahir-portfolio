import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function FeaturedProjects({ onOpenDetails, onOpenExplorer }) {
  // 4 primary projects showcased with compact editorial previews (exactly 1 screenshot each)
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-number">[ 01 / SELECTED WORK ]</span>
            <h2 id="work-heading" className="section-title">
              Selected Work
            </h2>
            <p className="section-subtitle">
              Authentic applications, hackathon prototypes, and verified data analysis studies.
            </p>
          </div>

          <div className="section-header-action">
            <button
              type="button"
              className="btn btn-secondary explore-all-btn"
              onClick={onOpenExplorer}
              aria-label="Open project archive with all 6 projects"
            >
              <Sparkles size={14} aria-hidden="true" />
              <span>Project Archive (6)</span>
              <ArrowRight size={13} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Compact Editorial 2-Column Grid */}
        <div className="projects-editorial-grid" role="list">
          {featured.map((project, index) => {
            const tagLabel = project.hackathonTag 
              ? project.hackathonTag.split('·')[0].trim() 
              : (project.status ? project.status.split('·')[0].trim() : '');

            return (
              <article
                key={project.id}
                data-project={project.id}
                className="project-compact-card"
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                {/* 1. Subtle Meta Header above preview */}
                <div className="project-compact-meta">
                  <div className="project-compact-meta-left">
                    <span className="project-compact-index">0{index + 1}</span>
                    <span className="project-compact-divider">/</span>
                    <span className="project-compact-category">{project.category}</span>
                  </div>
                  {tagLabel && (
                    <span className="project-compact-tag">{tagLabel}</span>
                  )}
                </div>

                {/* 2. Compact Single Preview Image Frame */}
                <div 
                  className="project-compact-preview"
                  onClick={() => onOpenDetails(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenDetails(project);
                    }
                  }}
                  aria-label={`View ${project.title} project details`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className="project-compact-img"
                    loading="lazy"
                  />
                </div>

                {/* 3. Title, Tech Stack, and Clean Actions */}
                <div className="project-compact-info">
                  <div className="project-compact-title-group">
                    <h3 id={`project-title-${project.id}`} className="project-compact-title">
                      {project.title}
                    </h3>
                    <p className="project-compact-tech">
                      {project.techStackString || project.technologies.join(' · ')}
                    </p>
                  </div>

                  <div className="project-compact-actions">
                    <button
                      type="button"
                      className="project-compact-btn-primary"
                      onClick={() => onOpenDetails(project)}
                      aria-label={`View project details for ${project.title}`}
                    >
                      <span>View project</span>
                      <ArrowRight size={13} aria-hidden="true" className="project-action-arrow" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-compact-btn-repo"
                        aria-label={`View ${project.title} repository on GitHub`}
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={13} aria-hidden="true" />
                        <span>Repo</span>
                        <ArrowUpRight size={11} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Section Archive Callout Footer */}
        <div className="projects-section-footer">
          <div className="callout-box">
            <div className="callout-text">
              <span className="callout-label">MORE EXPLORATIONS &amp; SCHEMATICS</span>
              <p className="callout-desc">
                Includes the SoilSense Telemetry System with live polling and the Quantum Scan Protocol crowd verification concept.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onOpenExplorer}
            >
              <span>Browse Full Archive (6)</span>
              <ArrowRight size={13} aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
