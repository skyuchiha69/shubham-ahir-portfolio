import { ArrowDown, FileText, ArrowRight, BookOpen, Database, Code } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      const navHeight = 72;
      const elPosition = el.getBoundingClientRect().top;
      const offset = elPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="top" aria-label="Introduction">
      <div className="container hero-container">
        
        {/* Editorial Eyebrow */}
        <div className="hero-meta-strip">
          <span className="editorial-kicker">
            {personalData.eyebrow}
          </span>
          <span className="hero-meta-divider" aria-hidden="true">/</span>
          <span className="hero-status-pill">
            {personalData.status}
          </span>
        </div>

        {/* Main Heading & Editorial Copy */}
        <div className="hero-content-grid">
          <div className="hero-main">
            <h1 className="hero-title">
              {personalData.heading}
            </h1>
            <p className="hero-description">
              {personalData.headline}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('#work')}
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('#contact')}
              >
                <span>Contact Me</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>

              {/* Verified Résumé Link — Only shown if file URL is configured */}
              {personalData.contact.resumeUrl && (
                <a
                  href={personalData.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>Download Résumé</span>
                </a>
              )}
            </div>
          </div>

          {/* Academic & Project Focus Panel */}
          <aside className="hero-editorial-card" aria-label="Academic & Practical Focus">
            <div className="card-header-bar">
              <span className="card-label-mono">ACADEMIC PROFILE</span>
              <span className="card-badge">SEMESTER 05</span>
            </div>

            <div className="card-body">
              <div className="card-item">
                <span className="item-label">INSTITUTION</span>
                <span className="item-value">{personalData.university}</span>
              </div>
              <div className="card-item">
                <span className="item-label">PROGRAM</span>
                <span className="item-value">{personalData.degree}</span>
              </div>
              <div className="card-item">
                <span className="item-label">CORE FOCUS</span>
                <span className="item-value">Software Development &amp; Practical Engineering</span>
              </div>
            </div>

            <div className="card-footer-focus">
              <span className="focus-title">PRIMARY TECHNOLOGIES IN PRACTICE</span>
              <div className="focus-tags">
                <span className="focus-tag"><Code size={13} aria-hidden="true" /> React</span>
                <span className="focus-tag"><Code size={13} aria-hidden="true" /> Node.js</span>
                <span className="focus-tag"><Database size={13} aria-hidden="true" /> MongoDB</span>
                <span className="focus-tag"><BookOpen size={13} aria-hidden="true" /> Python</span>
                <span className="focus-tag">Pandas</span>
                <span className="focus-tag">NumPy</span>
                <span className="focus-tag">Matplotlib</span>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
}
