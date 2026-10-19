import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, User, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenExplorer }) {
  const [imageError, setImageError] = useState(false);

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
        
        {/* Availability / Status Eyebrow */}
        <div className="hero-meta-strip">
          <div className="hero-status-pill">
            <span className="status-live-dot" aria-hidden="true"></span>
            <span className="status-live-text">{personalData.status}</span>
          </div>
          <span className="hero-meta-divider" aria-hidden="true">/</span>
          <span className="editorial-kicker">
            {personalData.eyebrow}
          </span>
        </div>

        {/* Two-Column Editorial Hero */}
        <div className="hero-editorial-grid">
          
          {/* Left Column: Personal Identity & Actions */}
          <div className="hero-intro-column">
            <h1 className="hero-name-heading">
              {personalData.name}
            </h1>
            
            <p className="hero-lead-intro">
              {personalData.introduction}
            </p>

            <p className="hero-supporting-line">
              {personalData.supporting}
            </p>

            {/* Editorial Quick Specs Strip */}
            <div className="hero-specs-row" aria-label="Quick Highlights">
              <div className="hero-spec-item">
                <span className="spec-label">DEGREE</span>
                <span className="spec-value">{personalData.degree}</span>
              </div>
              <div className="hero-spec-item">
                <span className="spec-label">INSTITUTION</span>
                <span className="spec-value">{personalData.university}</span>
              </div>
              <div className="hero-spec-item">
                <span className="spec-label">LOCATION</span>
                <span className="spec-value">{personalData.location}</span>
              </div>
            </div>

            {/* Action Buttons Row — Distinct Purpose CTAs */}
            <div className="hero-actions-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('#work')}
                aria-label="Explore projects (scrolls to Projects section)"
              >
                <span>Explore projects</span>
                <ArrowDown size={15} aria-hidden="true" className="btn-icon-move" />
              </button>

              <a
                href={`mailto:${personalData.contact.email}`}
                className="btn btn-secondary"
                aria-label={`Get in touch: send email to ${personalData.contact.email}`}
              >
                <Mail size={15} aria-hidden="true" />
                <span>Get in touch</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onOpenExplorer}
                aria-label="Open project archive with all 6 projects"
              >
                <Sparkles size={15} aria-hidden="true" />
                <span>Project Archive</span>
              </button>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon-only"
                aria-label="GitHub profile: skyuchiha69 (opens in new tab)"
                title="GitHub: skyuchiha69"
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>GitHub</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>

              {/* Resume download only if verified file exists */}
              {personalData.contact.resumeUrl && (
                <a
                  href={personalData.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FileText size={15} aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Portrait Frame */}
          <div className="hero-portrait-column">
            <div className="portrait-editorial-frame">
              
              {/* Outer Thin Border Registration Marks */}
              <div className="portrait-frame-corners" aria-hidden="true">
                <span className="corner-mark top-left">+</span>
                <span className="corner-mark top-right">+</span>
                <span className="corner-mark bottom-left">+</span>
                <span className="corner-mark bottom-right">+</span>
              </div>

              {/* Portrait Image Box */}
              <div className="portrait-image-wrapper">
                {!imageError ? (
                  <img
                    src="/portrait.jpg"
                    alt="Shubham Ahir - B.Tech Computer Science student"
                    className="portrait-real-img"
                    onError={() => setImageError(true)}
                    loading="eager"
                  />
                ) : (
                  /* Editorial Monogram Fallback Frame */
                  <div className="portrait-fallback-box" aria-label="Developer portrait placeholder">
                    <div className="fallback-monogram-circle">
                      <span className="fallback-initials">SA</span>
                    </div>
                    <div className="fallback-details">
                      <span className="fallback-name">{personalData.name}</span>
                      <span className="fallback-degree">B.Tech CSE · GSFC University</span>
                    </div>
                    <div className="fallback-badge-pill">
                      <User size={13} aria-hidden="true" />
                      <span>Developer Portrait</span>
                    </div>
                    <p className="fallback-hint">
                      Place your photo at <code>/public/portrait.jpg</code> to display here
                    </p>
                  </div>
                )}
              </div>

              {/* Frame Footer Caption */}
              <div className="portrait-caption-bar">
                <div className="caption-text-group">
                  <span className="caption-title">{personalData.name}</span>
                  <span className="caption-sub">Vadodara / Rajkot, Gujarat</span>
                </div>
                <div className="caption-status-badge">
                  <span className="dot-mini" aria-hidden="true"></span>
                  <span>Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
