import React from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, FileText, ArrowUpRight, CheckCircle, Info } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const { contact } = personalData;
  const hasDirectLinks = contact.email || contact.github || contact.linkedin || contact.resumeUrl;

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">[ 05 / PROFESSIONAL DIALOGUE ]</span>
          <h2 id="contact-heading" className="section-title">
            Contact &amp; Connect
          </h2>
          <p className="section-subtitle">
            Open for software development and data-focused internship roles.
          </p>
        </div>

        <div className="contact-editorial-card">
          <div className="contact-inner-grid">
            
            {/* Left Column: Heading and Intent */}
            <div className="contact-copy-col">
              <span className="editorial-kicker">INTERNSHIP OPPORTUNITIES</span>
              <h3 className="contact-main-heading">
                {contact.heading}
              </h3>
              <p className="contact-supporting-text">
                {contact.subheading}
              </p>

              <div className="contact-details-list">
                <div className="contact-meta-row">
                  <span className="meta-label">CURRENT ENROLLMENT:</span>
                  <span className="meta-value">B.Tech CSE (5th Sem) · GSFC University</span>
                </div>
                <div className="contact-meta-row">
                  <span className="meta-label">PRIMARY INTERESTS:</span>
                  <span className="meta-value">Full-Stack Development, Backend APIs, Data Analysis</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Buttons or Configuration Guide */}
            <div className="contact-actions-col">
              {hasDirectLinks ? (
                <div className="contact-buttons-wrapper">
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="btn btn-primary contact-cta-btn"
                    >
                      <Mail size={17} aria-hidden="true" />
                      <span>Email Directly</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}

                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary contact-cta-btn"
                    >
                      <LinkedinIcon size={17} aria-hidden="true" />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}

                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary contact-cta-btn"
                    >
                      <GithubIcon size={17} aria-hidden="true" />
                      <span>GitHub Profile</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}

                  {contact.resumeUrl && (
                    <a
                      href={contact.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary contact-cta-btn"
                    >
                      <FileText size={17} aria-hidden="true" />
                      <span>View Résumé PDF</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              ) : (
                /* Honest Configuration Guide when links are not yet set */
                <div className="contact-pending-card" role="region" aria-label="Contact Channel Setup">
                  <div className="pending-header">
                    <Info size={18} className="pending-icon" aria-hidden="true" />
                    <span className="pending-title">Contact Channels Ready for Configuration</span>
                  </div>
                  <p className="pending-desc">
                    To connect your direct email, GitHub, LinkedIn, or résumé without broken links:
                  </p>
                  <ol className="pending-steps">
                    <li>
                      Open <code>src/data/portfolioData.js</code>
                    </li>
                    <li>
                      Update <code>email</code>, <code>github</code>, or <code>linkedin</code>
                    </li>
                    <li>
                      Direct, interactive buttons will automatically appear right here!
                    </li>
                  </ol>
                  <div className="pending-footer">
                    <CheckCircle size={14} aria-hidden="true" />
                    <span>Zero dead buttons or placeholder mock links on this site.</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
