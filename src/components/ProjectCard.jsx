import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import RentWiseVisual from './RentWiseVisual';
import RetailDataVisual from './RetailDataVisual';
import DealIntelligenceVisual from './DealIntelligenceVisual';
import SoilSenseVisual from './SoilSenseVisual';

export default function ProjectCard({ project, onOpenDetails }) {
  // Render visual: either custom image or verified architectural schematic
  const renderVisual = () => {
    if (project.image) {
      return (
        <div className="project-card-image-wrapper">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className="project-card-image"
          />
        </div>
      );
    }

    if (project.visualType === 'rental-schematic') {
      return <RentWiseVisual />;
    }

    if (project.visualType === 'data-schematic') {
      return <RetailDataVisual />;
    }

    if (project.visualType === 'deal-intelligence-schematic') {
      return <DealIntelligenceVisual />;
    }

    if (project.visualType === 'soilsense-schematic') {
      return <SoilSenseVisual />;
    }

    return null;
  };

  return (
    <article className="project-card" aria-labelledby={`project-title-${project.id}`}>
      
      {/* Top Meta Bar */}
      <div className="project-card-header">
        <div className="project-meta-left">
          <span className="project-number">PROJECT {project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>
        <span className="project-status-pill">{project.status}</span>
      </div>

      {/* Main Visual Section */}
      <div className="project-visual-container">
        {renderVisual()}
      </div>

      {/* Card Information */}
      <div className="project-card-info">
        <div className="project-title-group">
          <h3 id={`project-title-${project.id}`} className="project-title">
            {project.title}
          </h3>
          <span className="project-tagline">{project.tagline}</span>
        </div>

        <p className="project-description">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Actions */}
        <div className="project-card-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onOpenDetails(project)}
            aria-label={`View full case study for ${project.title}`}
          >
            <span>View Architecture &amp; Case Study</span>
            <ArrowRight size={15} aria-hidden="true" />
          </button>

          {/* GitHub Link (Only rendered if URL provided) */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon size={16} aria-hidden="true" />
              <span>View Source</span>
            </a>
          )}

          {/* Live Demo Link (Only rendered if URL provided) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`View ${project.title} live demo`}
            >
              <span>Live</span>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}

          {/* Clean status note if external links are pending */}
          {!project.githubUrl && !project.liveUrl && (
            <span className="pending-link-tag">
              Repository link will be published upon release
            </span>
          )}
        </div>
      </div>

    </article>
  );
}
