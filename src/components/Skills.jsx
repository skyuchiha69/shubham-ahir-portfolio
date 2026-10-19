import React, { useState } from 'react';
import { Terminal, Layout, Database, BarChart2, Wrench, CheckCircle } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages':
        return <Terminal size={17} className="skill-cat-icon" aria-hidden="true" />;
      case 'frontend':
        return <Layout size={17} className="skill-cat-icon" aria-hidden="true" />;
      case 'backend':
        return <Database size={17} className="skill-cat-icon" aria-hidden="true" />;
      case 'data':
        return <BarChart2 size={17} className="skill-cat-icon" aria-hidden="true" />;
      case 'tools':
        return <Wrench size={17} className="skill-cat-icon" aria-hidden="true" />;
      default:
        return <CheckCircle size={17} className="skill-cat-icon" aria-hidden="true" />;
    }
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter((c) => c.id === selectedCategory);

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-section-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-number">[ 02 / TECHNICAL CAPABILITIES ]</span>
            <h2 id="skills-section-heading" className="section-title">
              Skills &amp; Technologies
            </h2>
            <p className="section-subtitle">
              Verified technical tools applied across coursework, hackathons, and software implementations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="skills-filter-tabs" role="tablist" aria-label="Skills domain filter">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              className={`skill-tab-pill ${selectedCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`skill-tab-pill ${selectedCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Editorial Skills Grid */}
        <div className="skills-editorial-grid">
          {displayedCategories.map((group) => (
            <div key={group.id} className="skill-group-card">
              
              <div className="skill-group-header">
                <div className="skill-group-title-row">
                  {getCategoryIcon(group.id)}
                  <h3 className="skill-group-name">{group.category}</h3>
                  <span className="skill-count-badge">{group.skills.length}</span>
                </div>
                <p className="skill-group-desc">{group.description}</p>
              </div>

              {/* Compact Chips */}
              <div className="skill-chips-wrap">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-editorial-chip">
                    <span className="chip-dot" aria-hidden="true"></span>
                    <span className="chip-text">{skill}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Note */}
        <div className="skills-footer-note">
          <span className="note-eyebrow">PRACTICAL EVIDENCE:</span>
          <p className="note-copy">
            Skills are backed by functional code in repositories rather than arbitrary proficiency percentages.
          </p>
        </div>

      </div>
    </section>
  );
}
