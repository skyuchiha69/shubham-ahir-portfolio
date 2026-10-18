import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Terminal, Layout, Database } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming & Data':
        return <Terminal size={18} className="category-icon" aria-hidden="true" />;
      case 'Frontend':
        return <Layout size={18} className="category-icon" aria-hidden="true" />;
      case 'Backend & Databases':
        return <Database size={18} className="category-icon" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-section-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">[ 04 / TECHNICAL CAPABILITIES ]</span>
          <h2 id="skills-section-heading" className="section-title">
            Skills &amp; Technologies
          </h2>
          <p className="section-subtitle">
            Categorized technical tools verified through academic coursework and practical projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-category-grid">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category-card">
              
              <div className="category-header">
                <div className="category-title-row">
                  {getCategoryIcon(group.category)}
                  <h3 className="category-name">{group.category}</h3>
                </div>
                <p className="category-desc">{group.description}</p>
              </div>

              <div className="skills-items-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-row">
                    <div className="skill-tag-pill">
                      <span className="pill-dot" aria-hidden="true"></span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-context-text">
                      {skill.context}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="skills-editorial-note">
          <span className="note-label">NOTE:</span>
          <p className="note-text">
            All listed technologies reflect practical application in project implementations (e.g. Rent Wise and Retail Data Analysis). Rather than abstract percentage meters, skills are represented by demonstrated application.
          </p>
        </div>

      </div>
    </section>
  );
}
