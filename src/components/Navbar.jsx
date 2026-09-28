import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? "navbar-header scrolled" : "navbar-header"}>
      <nav className="navbar-container" aria-label="Main Navigation">
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-code-symbol">&lt;/&gt;</span>
          <span className="brand-name">Sohan Ghosh</span>
          <span className="brand-accent">.portfolio</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-desktop-menu">
          <ul className="navbar-links">
            <li className="nav-item">
              <a href="#hero" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>

          <div className="navbar-actions">
            <a href="#contact" className="nav-cta-btn">
              <span>Connect</span>
              <svg className="cta-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={isMenuOpen ? "mobile-toggle-btn active" : "mobile-toggle-btn"}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={isMenuOpen ? "mobile-drawer open" : "mobile-drawer"}>
          <ul className="mobile-links">
            <li className="mobile-item">
              <a href="#hero" className="mobile-link" onClick={closeMenu}>
                <span className="mobile-index">01.</span> Home
              </a>
            </li>
            <li className="mobile-item">
              <a href="#about" className="mobile-link" onClick={closeMenu}>
                <span className="mobile-index">02.</span> About
              </a>
            </li>
            <li className="mobile-item">
              <a href="#skills" className="mobile-link" onClick={closeMenu}>
                <span className="mobile-index">03.</span> Skills
              </a>
            </li>
            <li className="mobile-item">
              <a href="#contact" className="mobile-link" onClick={closeMenu}>
                <span className="mobile-index">04.</span> Contact
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-cta">
            <a href="#contact" className="mobile-cta-btn" onClick={closeMenu}>
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
