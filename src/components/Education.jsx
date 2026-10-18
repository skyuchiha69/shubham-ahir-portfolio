import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Layers, Terminal, Lightbulb, Compass } from 'lucide-react';

const ITEM_ICONS = {
  'engineering-foundations': Layers,
  'practical-projects': Terminal,
  'analytical-thinking': Lightbulb,
  'continuous-learning': Compass
};

export default function Education() {
  return (
    <section className="education-section" id="education" aria-labelledby="education-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">[ 05 / FORMAL EDUCATION ]</span>
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

                {/* Learning by Building Subsection */}
                {edu.learningApproach && (
                  <div className="education-approach-section">
                    <div className="education-approach-header">
                      <h4 className="education-approach-title">{edu.learningApproach.title}</h4>
                      <p className="education-approach-intro">{edu.learningApproach.intro}</p>
                    </div>

                    <div className="education-items-grid">
                      {edu.learningApproach.items.map((item) => {
                        const IconComponent = ITEM_ICONS[item.id] || Layers;
                        return (
                          <div key={item.id} className="education-item-card">
                            <div className="education-item-icon-box" aria-hidden="true">
                              <IconComponent size={15} />
                            </div>
                            <div className="education-item-content">
                              <h5 className="education-item-title">{item.title}</h5>
                              <p className="education-item-desc">{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
