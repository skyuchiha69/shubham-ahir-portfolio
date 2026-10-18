import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">[ 02 / PROFESSIONAL EXPERIENCE ]</span>
          <h2 id="experience-heading" className="section-title">
            Experience
          </h2>
          <p className="section-subtitle">
            Practical software development internship and industry exposure.
          </p>
        </div>

        {/* Experience Cards Wrapper */}
        <div className="experience-cards-wrapper">
          {experienceData.map((exp) => (
            <article key={exp.id} className="experience-card" aria-labelledby={`experience-title-${exp.id}`}>
              
              {/* Left Meta Column */}
              <div className="experience-meta-column">
                <div className="experience-logo-box" aria-hidden="true">
                  <span className="experience-monogram">LI</span>
                </div>
                <div className="experience-status-tag completed">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  <span>{exp.status}</span>
                </div>
                <div className="experience-type-tag">
                  <Briefcase size={12} aria-hidden="true" />
                  <span>{exp.type}</span>
                </div>
              </div>

              {/* Right Details Column */}
              <div className="experience-details-column">
                <div className="experience-header-row">
                  <div className="role-company-group">
                    <h3 id={`experience-title-${exp.id}`} className="experience-role-title">
                      {exp.role}
                    </h3>
                    <div className="company-info-row">
                      <span className="company-name">{exp.company}</span>
                      <span className="meta-separator" aria-hidden="true">·</span>
                      <span className="company-location">
                        <MapPin size={13} aria-hidden="true" />
                        <span>{exp.displayLocation || exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="experience-duration-pill">
                    <Calendar size={13} aria-hidden="true" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="experience-description">
                  {exp.description}
                </p>

                {/* Compact Highlight */}
                {exp.highlight && (
                  <div className="experience-highlight-card">
                    <div className="highlight-icon-box" aria-hidden="true">
                      <Sparkles size={14} />
                    </div>
                    <div className="highlight-text-content">
                      <span className="highlight-label">KEY TAKEAWAY</span>
                      <p className="highlight-text">{exp.highlight}</p>
                    </div>
                  </div>
                )}

                {/* Footer Metadata: Technologies & Project Guide */}
                <div className="experience-footer-meta">
                  <div className="experience-tech-stack" aria-label="Technologies used">
                    <span className="tech-stack-label">TECHNOLOGY:</span>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.projectGuide && (
                    <div className="experience-guide-meta">
                      <UserCheck size={13} className="guide-icon" aria-hidden="true" />
                      <span className="guide-label">Project Guide:</span>
                      <span className="guide-name">{exp.projectGuide}</span>
                    </div>
                  )}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
