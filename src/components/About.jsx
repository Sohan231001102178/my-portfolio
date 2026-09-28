import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Background, Credentials &amp; Objectives</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A closer look into my engineering background, academic foundation, and what drives my pursuit of software craftsmanship.
          </p>
        </div>

        {/* About Grid: 3-column / 2-column card hierarchy */}
        <div className="about-grid">
          {/* Card 1: Professional Bio (Spans large) */}
          <div className="about-card bio-card">
            <div className="card-header">
              <div className="card-icon-box">
                <svg className="card-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="card-title">Professional Summary</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                I am a dedicated software engineer with a strong focus on modern frontend architectures,
                component-driven design systems, and robust full-stack development. I enjoy deconstructing
                complex problems into intuitive, high-performance web applications that provide real utility.
              </p>
              <p className="card-text">
                My approach emphasizes clean code, semantic structure, responsive layouts across all screen
                dimensions, and continuous performance optimization. I believe in writing code that is not
                only functional today, but maintainable and extensible tomorrow.
              </p>
              <div className="bio-tags">
                <span className="bio-tag">Component-Driven</span>
                <span className="bio-tag">Modern Web Standards</span>
                <span className="bio-tag">Agile Development</span>
                <span className="bio-tag">Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Card 2: Educational Credentials */}
          <div className="about-card education-card">
            <div className="card-header">
              <div className="card-icon-box">
                <svg className="card-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="card-title">Educational Credentials</h3>
            </div>
            <div className="card-body">
              <div className="credential-item">
                <div className="credential-title">Bachelor of Computer Applications (BCA Hons.)</div>
                <div className="credential-meta">Computer Applications &amp; Software Development</div>
                <div className="credential-badge">Honours Program</div>
              </div>
              <div className="credential-coursework">
                <h4 className="coursework-heading">Key Academic Focus:</h4>
                <ul className="coursework-list">
                  <li className="coursework-item">Web Technologies &amp; Full-Stack Development</li>
                  <li className="coursework-item">Object-Oriented Programming (Java / C++)</li>
                  <li className="coursework-item">Database Management Systems (RDBMS &amp; SQL)</li>
                  <li className="coursework-item">Data Structures &amp; Algorithmic Thinking</li>
                  <li className="coursework-item">Software Engineering &amp; Project Management</li>
                  <li className="coursework-item">Computer Networks &amp; Operating Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Career Objectives */}
          <div className="about-card objectives-card">
            <div className="card-header">
              <div className="card-icon-box">
                <svg className="card-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="22" y1="12" x2="18" y2="12"></line>
                  <line x1="6" y1="12" x2="2" y2="12"></line>
                  <line x1="12" y1="6" x2="12" y2="2"></line>
                  <line x1="12" y1="22" x2="12" y2="18"></line>
                </svg>
              </div>
              <h3 className="card-title">Career Objectives</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                As a BCA (Hons.) graduate, my objective is to leverage strong foundations in computer applications,
                modern web technologies, and database systems to develop scalable, user-centric software solutions.
                Seeking opportunities to grow within dynamic development teams while delivering robust, production-ready applications.
              </p>
              <div className="objective-bullet-points">
                <div className="bullet-point">
                  <span className="bullet-dot"></span>
                  <span>Develop end-to-end, data-driven web applications solving practical business requirements.</span>
                </div>
                <div className="bullet-point">
                  <span className="bullet-dot"></span>
                  <span>Implement robust database schemas, secure API integrations, and efficient state management.</span>
                </div>
                <div className="bullet-point">
                  <span className="bullet-dot"></span>
                  <span>Master modern software frameworks, cloud deployments, and industry-standard agile practices.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Sub-Row */}
        <div className="values-banner">
          <h3 className="values-heading">Core Software &amp; Development Principles</h3>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-number">01</span>
              <h4 className="value-title">Application-Driven</h4>
              <p className="value-desc">Crafting practical, problem-solving software tailored for real-world user workflows.</p>
            </div>
            <div className="value-item">
              <span className="value-number">02</span>
              <h4 className="value-title">Data &amp; Architecture</h4>
              <p className="value-desc">Designing robust database structures, structured APIs, and secure data handling.</p>
            </div>
            <div className="value-item">
              <span className="value-number">03</span>
              <h4 className="value-title">Component Modularity</h4>
              <p className="value-desc">Building reusable, maintainable UI blocks adhering strictly to clean code standards.</p>
            </div>
            <div className="value-item">
              <span className="value-number">04</span>
              <h4 className="value-title">Responsive &amp; Accessible</h4>
              <p className="value-desc">Ensuring fast, intuitive, and consistent cross-platform user experiences on every device.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
