import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section className="education-section" id="education" aria-labelledby="education-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">[ 04 / FORMAL EDUCATION ]</span>
          <h2 id="education-heading" className="section-title">
            Education
          </h2>
          <p className="section-subtitle">
            Current undergraduate degree program and academic institution.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="education-cards-wrapper">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              
              <div className="education-meta-column">
                <div className="education-icon-box">
                  <GraduationCap size={24} className="accent-icon" aria-hidden="true" />
                </div>
                <div className="education-status-tag">
                  <Calendar size={13} aria-hidden="true" />
                  <span>{edu.status}</span>
                </div>
              </div>

              <div className="education-details-column">
                <div className="degree-header-row">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <span className="degree-type-pill">{edu.type}</span>
                </div>

                <div className="institution-info">
                  <div className="institution-row">
                    <span className="institution-name">{edu.institution}</span>
                    <span className="institution-dot" aria-hidden="true">·</span>
                    <span className="institution-location">
                      <MapPin size={13} aria-hidden="true" /> Gujarat, India
                    </span>
                  </div>
                </div>

                <p className="education-notes">
                  {edu.notes}
                </p>

                <div className="education-topics">
                  <span className="topics-label">ACTIVE CURRICULUM AREAS:</span>
                  <div className="topics-tags">
                    <span className="topic-pill">Software Engineering</span>
                    <span className="topic-pill">Data Structures &amp; Algorithms</span>
                    <span className="topic-pill">Database Systems</span>
                    <span className="topic-pill">Data Science &amp; Analysis</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
