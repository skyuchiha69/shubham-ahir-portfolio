import React from 'react';
import { personalData } from '../data/portfolioData';
import { Code2, BarChart3, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-section-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-number">[ 04 / BACKGROUND &amp; PHILOSOPHY ]</span>
            <h2 id="about-section-heading" className="section-title">
              About Me
            </h2>
            <p className="section-subtitle">
              Academic foundation and practical problem solving through code.
            </p>
          </div>
        </div>

        <div className="about-editorial-grid">
          
          {/* Main Narrative Column */}
          <div className="about-narrative-card">
            <p className="about-lead-copy">
              {personalData.about.lead}
            </p>
            <p className="about-sub-copy">
              {personalData.about.paragraph2}
            </p>

            <div className="about-methods-block">
              <span className="methods-heading">CORE ENGINEERING PRINCIPLES</span>
              <ul className="methods-list">
                <li>
                  <strong>Practical Implementation:</strong> Turning lecture topics in algorithms, web systems, and databases into working software.
                </li>
                <li>
                  <strong>Separation of Concerns:</strong> Keeping presentation, backend routing, and database logic clean and decoupled.
                </li>
                <li>
                  <strong>Empirical Analysis:</strong> Using Python's analytical stack to understand data patterns and draw factual conclusions.
                </li>
              </ul>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="about-pillars-column" aria-label="Key Competencies">
            <div className="about-pillar-row">
              <div className="pillar-icon-box" aria-hidden="true">
                <Code2 size={18} />
              </div>
              <div className="pillar-text-content">
                <h3 className="pillar-title">Full-Stack Web Engineering</h3>
                <p className="pillar-desc">
                  Building responsive React interfaces backed by Node.js and Express REST APIs with MongoDB document stores.
                </p>
              </div>
            </div>

            <div className="about-pillar-row">
              <div className="pillar-icon-box" aria-hidden="true">
                <BarChart3 size={18} />
              </div>
              <div className="pillar-text-content">
                <h3 className="pillar-title">Exploratory Data Analysis</h3>
                <p className="pillar-desc">
                  Data munging, missing-value handling, and aggregation using Pandas &amp; NumPy with clean plotting via Matplotlib.
                </p>
              </div>
            </div>

            <div className="about-pillar-row">
              <div className="pillar-icon-box" aria-hidden="true">
                <Terminal size={18} />
              </div>
              <div className="pillar-text-content">
                <h3 className="pillar-title">Academic &amp; Collaborative Growth</h3>
                <p className="pillar-desc">
                  Currently in 5th semester at GSFC University, actively seeking an internship to contribute to real-world codebases.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
