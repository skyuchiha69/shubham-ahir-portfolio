import React from 'react';
import { personalData } from '../data/portfolioData';
import { Code2, BarChart3, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-section-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">[ 03 / BACKGROUND &amp; ORIENTATION ]</span>
          <h2 id="about-section-heading" className="section-title">
            About Me
          </h2>
          <p className="section-subtitle">
            Academic foundation and practical problem solving through code.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Main Narrative Column */}
          <div className="about-main-text">
            <p className="about-lead">
              {personalData.about.lead}
            </p>
            <p className="about-body">
              {personalData.about.paragraph2}
            </p>

            <div className="about-principles-block">
              <span className="block-label">PRACTICAL FOCUS &amp; APPROACH</span>
              <ul className="principles-list">
                <li>
                  <strong>Direct Implementation:</strong> Turning conceptual lecture topics in algorithms, web systems, and data structures into functional working prototypes.
                </li>
                <li>
                  <strong>Clean Separation of Concerns:</strong> Keeping client presentation, backend route controllers, and database schemas logically decoupled.
                </li>
                <li>
                  <strong>Grounded Data Exploration:</strong> Utilizing Python's data ecosystem to understand distribution patterns and surface factual summaries without premature assumptions.
                </li>
              </ul>
            </div>
          </div>

          {/* Key Academic & Practical Pillars */}
          <aside className="about-pillars-aside" aria-label="Key Competencies">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Code2 size={20} className="pillar-icon" aria-hidden="true" />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Full-Stack Development</h3>
                <p className="pillar-desc">
                  Building responsive React interfaces backed by Node.js and Express REST APIs with MongoDB document stores.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <BarChart3 size={20} className="pillar-icon" aria-hidden="true" />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Exploratory Data Analysis</h3>
                <p className="pillar-desc">
                  Data munging, missing-value handling, multi-column aggregation with Pandas &amp; NumPy, and clear plotting via Matplotlib.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Terminal size={20} className="pillar-icon" aria-hidden="true" />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Academic Growth</h3>
                <p className="pillar-desc">
                  Currently in 5th semester at GSFC University, actively seeking an internship to contribute to production codebases.
                </p>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
