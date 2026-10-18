import React, { useState, useEffect } from 'react';
import { GmailLogo, LinkedinLogo, GithubLogo } from './Icons';

/**
 * PixelArtIllustration
 * Crisp vector SVG recreation of the charming bird, trees, and butterfly from the reference screenshot.
 * Features crisp pixel alignment and subtle, gentle flight bobbing.
 */
function PixelArtIllustration() {
  return (
    <svg
      viewBox="0 0 240 130"
      className="contact-pixel-svg"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes birdFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes butterflyFlap {
            0%, 100% { transform: scaleX(1); }
            50% { transform: scaleX(0.75); }
          }
          .pixel-bird-animated {
            animation: birdFloat 3.2s ease-in-out infinite;
            transform-origin: center;
          }
          .pixel-butterfly-animated {
            animation: butterflyFlap 1.6s ease-in-out infinite;
            transform-origin: 154px 58px;
          }
          @media (prefers-reduced-motion: reduce) {
            .pixel-bird-animated,
            .pixel-butterfly-animated {
              animation: none !important;
            }
          }
        `}</style>
      </defs>

      {/* -------------------- TREE 1 (Left / Smaller) -------------------- */}
      <g id="tree-left" transform="translate(132, 12)">
        {/* Tree Base Plate */}
        <rect x="18" y="106" width="16" height="3" fill="#E8E5DD" />
        <rect x="20" y="104" width="12" height="2" fill="#DCD8CE" />

        {/* Trunk */}
        <rect x="24" y="68" width="4" height="37" fill="#795548" />
        <rect x="25" y="68" width="2" height="36" fill="#5D4037" />

        {/* Canopy Base Layers */}
        <rect x="12" y="24" width="28" height="42" fill="#388E3C" />
        <rect x="8" y="32" width="36" height="28" fill="#388E3C" />
        <rect x="16" y="16" width="20" height="12" fill="#43A047" />
        
        {/* Midtones & Highlights */}
        <rect x="12" y="20" width="16" height="20" fill="#4CAF50" />
        <rect x="20" y="28" width="18" height="24" fill="#4CAF50" />
        <rect x="10" y="36" width="12" height="18" fill="#66BB6A" />
        <rect x="28" y="44" width="12" height="12" fill="#2E7D32" />
        <rect x="16" y="52" width="20" height="12" fill="#2E7D32" />
        
        {/* Detail Pixels */}
        <rect x="14" y="28" width="4" height="4" fill="#81C784" />
        <rect x="26" y="24" width="4" height="4" fill="#81C784" />
        <rect x="22" y="40" width="4" height="4" fill="#2E7D32" />
        <rect x="32" y="34" width="4" height="4" fill="#1B5E20" />
        <rect x="10" y="46" width="4" height="4" fill="#2E7D32" />

        {/* Tiny Butterfly Detail */}
        <g className="pixel-butterfly-animated" transform="translate(18, 42)">
          <rect x="0" y="1" width="3" height="3" fill="#FF7043" />
          <rect x="4" y="1" width="3" height="3" fill="#FF7043" />
          <rect x="1" y="3" width="2" height="2" fill="#FFA726" />
          <rect x="4" y="3" width="2" height="2" fill="#FFA726" />
          <rect x="3" y="1" width="1" height="4" fill="#4E342E" />
          <rect x="2" y="0" width="1" height="1" fill="#4E342E" />
          <rect x="4" y="0" width="1" height="1" fill="#4E342E" />
        </g>
      </g>

      {/* -------------------- TREE 2 (Right / Taller) -------------------- */}
      <g id="tree-right" transform="translate(178, 0)">
        {/* Tree Base Plate */}
        <rect x="18" y="118" width="18" height="3" fill="#E8E5DD" />
        <rect x="20" y="116" width="14" height="2" fill="#DCD8CE" />

        {/* Trunk */}
        <rect x="25" y="66" width="5" height="51" fill="#795548" />
        <rect x="26" y="66" width="3" height="50" fill="#5D4037" />

        {/* Canopy Base Layers */}
        <rect x="10" y="16" width="34" height="48" fill="#388E3C" />
        <rect x="6" y="24" width="42" height="34" fill="#388E3C" />
        <rect x="14" y="8" width="26" height="14" fill="#43A047" />

        {/* Canopy Details */}
        <rect x="14" y="14" width="20" height="22" fill="#4CAF50" />
        <rect x="24" y="24" width="18" height="24" fill="#4CAF50" />
        <rect x="10" y="30" width="16" height="18" fill="#66BB6A" />
        <rect x="18" y="44" width="24" height="18" fill="#2E7D32" />
        <rect x="8" y="48" width="16" height="12" fill="#2E7D32" />

        {/* Detail Pixels */}
        <rect x="18" y="18" width="4" height="4" fill="#81C784" />
        <rect x="30" y="16" width="4" height="4" fill="#81C784" />
        <rect x="12" y="38" width="4" height="4" fill="#81C784" />
        <rect x="28" y="36" width="4" height="4" fill="#1B5E20" />
        <rect x="34" y="48" width="4" height="4" fill="#1B5E20" />
        <rect x="20" y="52" width="4" height="4" fill="#1B5E20" />
      </g>

      {/* -------------------- FLYING BIRD -------------------- */}
      <g className="pixel-bird-animated" transform="translate(36, 44)">
        {/* Tail Feathers */}
        <rect x="0" y="16" width="6" height="4" fill="#5D4037" />
        <rect x="4" y="12" width="4" height="6" fill="#6D4C41" />
        <rect x="2" y="18" width="4" height="4" fill="#4E342E" />

        {/* Bird Body */}
        <rect x="8" y="12" width="18" height="14" fill="#8D6E63" />
        <rect x="10" y="8" width="14" height="8" fill="#A1887F" />
        <rect x="12" y="18" width="14" height="10" fill="#BCAAA4" />
        <rect x="14" y="24" width="10" height="4" fill="#EFEBE9" />

        {/* Wing Outstretched */}
        <rect x="10" y="4" width="8" height="6" fill="#5D4037" />
        <rect x="12" y="2" width="6" height="4" fill="#4E342E" />
        <rect x="8" y="8" width="8" height="8" fill="#6D4C41" />

        {/* Head */}
        <rect x="22" y="8" width="10" height="10" fill="#8D6E63" />
        <rect x="24" y="6" width="8" height="4" fill="#A1887F" />

        {/* Eye with White Catchlight */}
        <rect x="28" y="9" width="4" height="4" fill="#42A5F5" />
        <rect x="29" y="10" width="2" height="2" fill="#0D47A1" />
        <rect x="28" y="9" width="1" height="1" fill="#FFFFFF" />

        {/* Beak */}
        <rect x="32" y="12" width="4" height="3" fill="#FFA000" />
        <rect x="34" y="13" width="3" height="2" fill="#FF8F00" />
      </g>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    id: 'email',
    label: 'Email',
    detail: 'shubhamahir2525@gmail.com',
    href: 'mailto:shubhamahir2525@gmail.com',
    target: undefined,
    rel: undefined,
    ariaLabel: 'Email shubhamahir2525@gmail.com',
    Icon: GmailLogo
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    detail: 'linkedin.com/in/shubham-ahir-a4781330a',
    href: 'https://www.linkedin.com/in/shubham-ahir-a4781330a',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'LinkedIn profile: linkedin.com/in/shubham-ahir-a4781330a (opens in new tab)',
    Icon: LinkedinLogo
  },
  {
    id: 'github',
    label: 'GitHub',
    detail: 'github.com/skyuchiha69',
    href: 'https://github.com/skyuchiha69',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'GitHub profile: github.com/skyuchiha69 (opens in new tab)',
    Icon: GithubLogo
  }
];

export default function Contact() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Close active tooltip when clicking outside on touch devices
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.contact-link-wrapper')) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleLinkClick = (e, link) => {
    // On touch devices, first tap reveals the tooltip detail; second tap or tooltip tap navigates
    if (window.matchMedia('(hover: none)').matches && activeTooltip !== link.id) {
      e.preventDefault();
      setActiveTooltip(link.id);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        
        {/* Reference Layout Wrapper */}
        <div className="contact-reference-wrapper">
          
          {/* 1. Green Indicator & Status Label */}
          <div className="contact-status-row">
            <span className="contact-status-dot" aria-hidden="true"></span>
            <span className="contact-status-label">Open to work · India</span>
          </div>

          {/* 2. Oversized Bold Headline */}
          <h2 id="contact-heading" className="contact-hero-headline">
            Let's build<br className="contact-headline-br" /> something real.
          </h2>

          {/* 3. Bottom Row: Interactive Links (Left) + Pixel Art Illustration (Right) */}
          <div className="contact-bottom-row">
            
            {/* Enhanced Interactive Links Row */}
            <nav className="contact-links-nav" aria-label="Direct Contact and Profiles">
              {SOCIAL_LINKS.map((link) => {
                const isActive = activeTooltip === link.id;
                const BrandIcon = link.Icon;
                return (
                  <div 
                    key={link.id} 
                    className={`contact-link-wrapper ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveTooltip(link.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="contact-text-link"
                      aria-label={link.ariaLabel}
                      aria-describedby={`tooltip-${link.id}`}
                      onClick={(e) => handleLinkClick(e, link)}
                      onFocus={() => setActiveTooltip(link.id)}
                      onBlur={() => setActiveTooltip(null)}
                    >
                      {BrandIcon && (
                        <BrandIcon 
                          size={19} 
                          className="contact-link-brand-icon" 
                        />
                      )}
                      <span className="contact-link-label">{link.label}</span>
                      <span className="contact-link-arrow" aria-hidden="true">↗</span>
                    </a>

                    {/* Smooth Tooltip Floating Directly Above Link */}
                    <div 
                      id={`tooltip-${link.id}`}
                      className="contact-link-tooltip" 
                      role="tooltip"
                    >
                      <a 
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        className="tooltip-link"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <span className="tooltip-value">{link.detail}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Pixel-Art Illustration Accent */}
            <div className="contact-illustration-wrap">
              <PixelArtIllustration />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
