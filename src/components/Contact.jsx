import React from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, ArrowUpRight, FileText } from 'lucide-react';
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
            
            {/* Left Column: Heading, Intent & Enrollment Info */}
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

            {/* Right Column: Working Contact Channels */}
            <div className="contact-actions-col">
              {hasDirectLinks ? (
                <div className="contact-channels-list" role="list" aria-label="Direct Contact Channels">
                  
                  {/* Email Option */}
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="contact-channel-item"
                      role="listitem"
                      aria-label={`Email Me: ${contact.email}`}
                    >
                      <div className="channel-icon-wrapper">
                        <Mail size={19} className="channel-icon" aria-hidden="true" />
                      </div>
                      <div className="channel-content">
                        <span className="channel-name">Email Me</span>
                        <span className="channel-detail">{contact.email}</span>
                      </div>
                      <ArrowUpRight size={17} className="channel-arrow" aria-hidden="true" />
                    </a>
                  )}

                  {/* GitHub Profile */}
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-item"
                      role="listitem"
                      aria-label="GitHub Profile"
                    >
                      <div className="channel-icon-wrapper">
                        <GithubIcon size={19} className="channel-icon" aria-hidden="true" />
                      </div>
                      <div className="channel-content">
                        <span className="channel-name">GitHub</span>
                        <span className="channel-detail">
                          {contact.github.replace('https://', '')}
                        </span>
                      </div>
                      <ArrowUpRight size={17} className="channel-arrow" aria-hidden="true" />
                    </a>
                  )}

                  {/* LinkedIn Profile */}
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-item"
                      role="listitem"
                      aria-label="LinkedIn Profile"
                    >
                      <div className="channel-icon-wrapper">
                        <LinkedinIcon size={19} className="channel-icon" aria-hidden="true" />
                      </div>
                      <div className="channel-content">
                        <span className="channel-name">LinkedIn</span>
                        <span className="channel-detail">
                          {contact.linkedin.replace('https://www.', '').replace('https://', '')}
                        </span>
                      </div>
                      <ArrowUpRight size={17} className="channel-arrow" aria-hidden="true" />
                    </a>
                  )}

                  {/* Optional Résumé Download */}
                  {contact.resumeUrl && (
                    <a
                      href={contact.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-item"
                      role="listitem"
                      aria-label="Download Official Résumé PDF"
                    >
                      <div className="channel-icon-wrapper">
                        <FileText size={19} className="channel-icon" aria-hidden="true" />
                      </div>
                      <div className="channel-content">
                        <span className="channel-name">Download Résumé</span>
                        <span className="channel-detail">Official PDF Format</span>
                      </div>
                      <ArrowUpRight size={17} className="channel-arrow" aria-hidden="true" />
                    </a>
                  )}

                </div>
              ) : null}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
