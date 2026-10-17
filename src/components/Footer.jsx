import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="container footer-container">
        
        <div className="footer-top-row">
          <div className="footer-brand-info">
            <span className="footer-name">{personalData.name}</span>
            <span className="footer-degree">
              B.Tech in Computer Science and Engineering · GSFC University (5th Semester)
            </span>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {personalData.name}. All verified portfolio content.
          </p>
          <div className="footer-tech-colophon">
            Built with React &amp; Vite · Fully Static &amp; Accessible
          </div>
        </div>

      </div>
    </footer>
  );
}
