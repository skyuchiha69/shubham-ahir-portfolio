import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenExplorer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand / Wordmark */}
        <a 
          href="#top" 
          className="nav-brand"
          onClick={(e) => handleLinkClick(e, '#top')}
          aria-label="Shubham Ahir - Back to top"
        >
          <span className="brand-monogram">SA</span>
          <div className="brand-text">
            <span className="brand-name">{personalData.name}</span>
            <span className="brand-sub">B.Tech CSE · GSFC University</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Interactive Explore Lab Button in Navbar */}
            <li>
              <button
                type="button"
                className="nav-link-btn"
                onClick={onOpenExplorer}
                aria-label="Open project archive"
              >
                <Sparkles size={13} aria-hidden="true" />
                <span>Explore Lab</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Right CTA / Status */}
        <div className="nav-right">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamahir2525@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            aria-label="Compose email to shubhamahir2525@gmail.com on Gmail"
          >
            <span>Email</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        id="mobile-nav-menu"
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-header">
            <div>
              <span className="brand-name">{personalData.name}</span>
              <span className="mobile-semester-pill">5th Sem CSE</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="mobile-nav-link-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenExplorer();
                  }}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  <Sparkles size={15} aria-hidden="true" />
                  <span>Explore All Projects (6)</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={(e) => handleLinkClick(e, '#contact')}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
