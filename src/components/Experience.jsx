import React, { useState } from 'react';
import { Briefcase, MapPin, GraduationCap, UserCheck } from 'lucide-react';
import { experienceData, hackathonsData, educationData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience-hackathons'); // 'experience-hackathons' | 'education'

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-number">[ 03 / TRAJECTORY &amp; FORMATION ]</span>
            <h2 id="experience-heading" className="section-title">
              Experience &amp; Education
            </h2>
            <p className="section-subtitle">
              Professional internship, competitive hackathons, and undergraduate engineering studies.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="experience-tabs" role="tablist" aria-label="Trajectory sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'experience-hackathons'}
              className={`exp-tab-btn ${activeTab === 'experience-hackathons' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('experience-hackathons')}
            >
              <Briefcase size={14} aria-hidden="true" />
              <span>Experience &amp; Hackathons</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'education'}
              className={`exp-tab-btn ${activeTab === 'education' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={15} aria-hidden="true" />
              <span>Formal Education</span>
            </button>
          </div>
        </div>

        {/* Tab Panel 1: Experience & Hackathons */}
        {activeTab === 'experience-hackathons' && (
          <div className="trajectory-panel" role="tabpanel">
            
            {/* Internship Block */}
            <div className="trajectory-block">
              <div className="block-eyebrow-strip">
                <span className="block-label">PROFESSIONAL INTERNSHIP</span>
                <span className="block-status-tag">Verified Industry Exposure</span>
              </div>

              {experienceData.map((exp) => (
                <article key={exp.id} className="timeline-editorial-row internship-feature-card">
                  <div className="timeline-meta-col">
                    <span className="timeline-date">{exp.dates || exp.duration}</span>
                    <span className="timeline-duration-badge">{exp.durationLabel || "One month"}</span>
                    <span className="timeline-location">
                      <MapPin size={12} aria-hidden="true" />
                      <span>{exp.location}</span>
                    </span>
                    <span className="timeline-type-pill">{exp.type}</span>
                  </div>

                  <div className="timeline-body-col">
                    <div className="timeline-role-title-row">
                      <div>
                        <h3 className="timeline-role-title">{exp.role}</h3>
                        <span className="timeline-company-name">@ {exp.company}</span>
                      </div>

                      {exp.projectGuide && (
                        <div className="timeline-guide-badge" title="Project Mentorship">
                          <UserCheck size={13} aria-hidden="true" />
                          <span>Mentored by {exp.projectGuide}</span>
                        </div>
                      )}
                    </div>

                    {/* Narrative Description */}
                    <p className="timeline-narrative">
                      {exp.narrative || exp.description}
                    </p>

                    {/* Conservative Verified Takeaways */}
                    {exp.supportingPoints && exp.supportingPoints.length > 0 && (
                      <div className="timeline-takeaways-block">
                        <span className="takeaways-label">Core Exposure &amp; Practiced Workflows:</span>
                        <ul className="takeaways-list">
                          {exp.supportingPoints.map((point, idx) => (
                            <li key={idx} className="takeaway-item">
                              <span className="takeaway-bullet" aria-hidden="true">▪</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="timeline-footer-row">
                      <div className="timeline-tech-tags">
                        <span className="tech-label">CORE TECHNOLOGIES:</span>
                        {exp.technologies.map((t) => (
                          <span key={t} className="tech-badge-sm">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Hackathons Sub-Block */}
            <div className="trajectory-block">
              <div className="block-eyebrow-strip">
                <span className="block-label">COMPETITIVE HACKATHONS &amp; PROTOTYPES</span>
                <span className="block-status-tag">3 Events</span>
              </div>

              <div className="hackathons-editorial-grid">
                {hackathonsData.map((hack) => (
                  <article key={hack.id} className="hackathon-card">
                    <div className="hackathon-card-header">
                      <div className="hackathon-title-group">
                        <h4 className="hackathon-name">{hack.title}</h4>
                        <span className="hackathon-role">{hack.role}</span>
                      </div>
                      <span className="hackathon-badge">{hack.achievement}</span>
                    </div>

                    <p className="hackathon-description">{hack.description}</p>

                    <div className="hackathon-tags">
                      {hack.technologies.map((tech) => (
                        <span key={tech} className="hack-tech-pill">{tech}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab Panel 2: Formal Education */}
        {activeTab === 'education' && (
          <div className="trajectory-panel" role="tabpanel">
            {educationData.map((edu, idx) => (
              <div key={idx} className="education-editorial-card">
                
                <div className="edu-header-row">
                  <div className="edu-title-col">
                    <div className="edu-badge-row">
                      <span className="edu-status-tag">{edu.status}</span>
                      <span className="edu-type-tag">{edu.type}</span>
                    </div>
                    <h3 className="edu-degree-heading">{edu.degree}</h3>
                    <div className="edu-institution-row">
                      <span className="edu-institution-name">{edu.institution}</span>
                      <span className="meta-bullet" aria-hidden="true">·</span>
                      <span className="edu-location">
                        <MapPin size={13} aria-hidden="true" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="edu-monogram-box" aria-hidden="true">
                    <GraduationCap size={28} />
                  </div>
                </div>

                <p className="edu-notes-copy">{edu.notes}</p>

                {/* Academic Pillars */}
                <div className="edu-pillars-grid">
                  {edu.pillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="edu-pillar-card">
                      <h4 className="pillar-heading">{pillar.title}</h4>
                      <p className="pillar-text">{pillar.description}</p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
