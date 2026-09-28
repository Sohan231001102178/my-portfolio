import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'sohanghosh2308@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        {/* Contact Banner / Callout */}
        <div className="contact-banner">
          <div className="contact-text-wrap">
            <span className="contact-tag">Get In Touch</span>
            <h2 className="contact-title">Let's Build Something Exceptional Together</h2>
            <p className="contact-subtitle">
              Whether you have a software engineering role, a collaborative project, or simply want to connect,
              my inbox is always open.
            </p>
          </div>

          <div className="contact-action-box">
            <div className="email-display-card">
              <span className="email-label">Direct Correspondence:</span>
              <a href={`mailto:${emailAddress}`} className="email-link">
                {emailAddress}
              </a>
              <div className="email-action-row">
                <a href={`mailto:${emailAddress}`} className="email-send-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  className={copied ? "copy-btn copied" : "copy-btn"}
                  onClick={handleCopyEmail}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Social Links Grid */}
        <div className="footer-links-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand" onClick={scrollToTop}>
              <span className="brand-code-symbol">&lt;/&gt;</span>
              <span className="brand-name">Sohan Ghosh</span>
              <span className="brand-accent">.dev</span>
            </a>
            <p className="footer-brand-tagline">
              Engineering modular, resilient, and responsive web applications with modern component-driven standards.
            </p>
            <div className="availability-pill">
              <span className="status-dot"></span>
              <span>Available for Full-time Roles &amp; Contracts</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About &amp; Credentials</a></li>
              <li><a href="#skills" className="footer-link">Technical Stack</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect &amp; Profiles</h4>
            <div className="social-links-list">
              <a
                href="https://github.com/Sohan231001102178"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                aria-label="GitHub Profile"
              >
                <div className="social-icon-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                  </svg>
                </div>
                <span>GitHub / Repos</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sohan-ghosh-204753399"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                aria-label="LinkedIn Profile"
              >
                <div className="social-icon-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </div>
                <span>LinkedIn / Network</span>
              </a>

              <a
                href="https://x.com/sohanGhosh68133"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                aria-label="Twitter Profile"
              >
                <div className="social-icon-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </div>
                <span>X / Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Pinned Bar: Copyright & Back-to-Top */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            <span>&copy; {new Date().getFullYear()} Sohan Ghosh. All rights reserved.</span>
            <span className="build-badge">Built with React &amp; Component-Driven Architecture</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
