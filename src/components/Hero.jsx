import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-glow">
        <div className="glow-circle glow-circle-1"></div>
        <div className="glow-circle glow-circle-2"></div>
      </div>

      <div className="hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-ping">
              <span className="status-ping-bubble"></span>
              <span className="status-dot"></span>
            </span>
            <span className="status-text">Available for Software Roles &amp; Collaborations</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name-gradient">Sohan Ghosh</span>
            <span className="hero-role">Full-Stack Engineer &amp; UI Architect</span>
          </h1>

          <p className="hero-description">
            Building performant, scalable, and modular web applications with component-driven architecture.
            Passionate about transforming complex requirements into elegant, accessible, and responsive user experiences.
          </p>

          <div className="hero-actions">
            <a href="#skills" className="btn btn-primary">
              <span>Explore My Skills</span>
              <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Get in Touch</span>
              <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Component-Driven</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat-card">
              <span className="stat-number">Clean</span>
              <span className="stat-label">Architecture &amp; Design</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat-card">
              <span className="stat-number">Modern</span>
              <span className="stat-label">React &amp; Web Stack</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal Card */}
        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot dot-close"></span>
                <span className="control-dot dot-minimize"></span>
                <span className="control-dot dot-maximize"></span>
              </div>
              <div className="terminal-tab">developer-profile.ts</div>
              <div className="terminal-spacer"></div>
            </div>

            <div className="terminal-body">
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
              </div>
              <div className="code-line indent-1">
                <span className="code-property">name</span>: <span className="code-string">'Sohan Ghosh'</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-property">title</span>: <span className="code-string">'Full Stack Developer'</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-property">architecture</span>: <span className="code-string">'Component-Driven Design'</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-property">coreStack</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="code-string">'React'</span>, <span className="code-string">'JavaScript (ES6+)'</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-string">'Node.js'</span>, <span className="code-string">'Vite'</span>, <span className="code-string">'CSS3'</span>
              </div>
              <div className="code-line indent-1">
                ],
              </div>
              <div className="code-line indent-1">
                <span className="code-property">focus</span>: <span className="code-string">'Building high-impact solutions'</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-property">passion</span>: <span className="code-string">'Clean Code &amp; Great UX'</span>
              </div>
              <div className="code-line">
                &#125;;
              </div>
            </div>

            <div className="terminal-footer">
              <div className="terminal-pill">
                <span className="pill-dot"></span>
                <span>Ready to deploy</span>
              </div>
              <span className="terminal-status">TypeScript / React 18</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
