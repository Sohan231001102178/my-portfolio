import React, { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Proficiencies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const skillGroups = [
    {
      category: 'frontend',
      title: 'Frontend Engineering',
      icon: 'layout',
      skills: [
        { name: 'React & Hooks', level: '95%', cssClass: 'pct-95', tag: 'Core' },
        { name: 'JavaScript (ES6+)', level: '92%', cssClass: 'pct-92', tag: 'Core' },
        { name: 'HTML5 & Semantic Structure', level: '98%', cssClass: 'pct-98', tag: 'Web' },
        { name: 'CSS3, Flexbox & CSS Grid', level: '94%', cssClass: 'pct-94', tag: 'Styling' },
        { name: 'Responsive & Mobile-First Design', level: '92%', cssClass: 'pct-92', tag: 'UI/UX' },
        { name: 'TypeScript', level: '85%', cssClass: 'pct-85', tag: 'Language' }
      ]
    },
    {
      category: 'backend',
      title: 'Backend & Architecture',
      icon: 'server',
      skills: [
        { name: 'Node.js & Express', level: '88%', cssClass: 'pct-88', tag: 'Runtime' },
        { name: 'RESTful API Engineering', level: '92%', cssClass: 'pct-92', tag: 'Architecture' },
        { name: 'Python & Scripting', level: '85%', cssClass: 'pct-85', tag: 'Language' },
        { name: 'MongoDB & NoSQL', level: '84%', cssClass: 'pct-84', tag: 'Database' },
        { name: 'PostgreSQL & SQL', level: '82%', cssClass: 'pct-82', tag: 'Database' },
        { name: 'JWT & Web Security', level: '86%', cssClass: 'pct-86', tag: 'Security' }
      ]
    },
    {
      category: 'tools',
      title: 'Tools, DevOps & Workflows',
      icon: 'tool',
      skills: [
        { name: 'Git & GitHub Version Control', level: '94%', cssClass: 'pct-94', tag: 'VCS' },
        { name: 'VS Code & Chrome DevTools', level: '96%', cssClass: 'pct-96', tag: 'IDE' },
        { name: 'Vite & Modern Build Tooling', level: '90%', cssClass: 'pct-90', tag: 'Build' },
        { name: 'Postman & API Testing', level: '88%', cssClass: 'pct-88', tag: 'Testing' },
        { name: 'Component-Driven Design', level: '95%', cssClass: 'pct-95', tag: 'Design' },
        { name: 'CI/CD & Cloud Basics', level: '80%', cssClass: 'pct-80', tag: 'DevOps' }
      ]
    }
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Expertise</span>
          <h2 className="section-title">Skills &amp; Technology Stack</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Comprehensive breakdown of my technical proficiencies, categorized across frontend, backend, and development tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="filter-tab-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={activeCategory === cat.id ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {filteredGroups.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrap">
                  {group.category === 'frontend' && (
                    <svg className="cat-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  )}
                  {group.category === 'backend' && (
                    <svg className="cat-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  )}
                  {group.category === 'tools' && (
                    <svg className="cat-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="category-title">{group.title}</h3>
                  <span className="category-counter">{group.skills.length} core technologies</span>
                </div>
              </div>

              {/* Skill Bars with Progress Indicators */}
              <div className="skills-list">
                {group.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info-row">
                      <div className="skill-name-badge">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-badge-tag">{skill.tag}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>

                    {/* Pure CSS Progress Bar (no inline styles) */}
                    <div className="progress-track" role="progressbar" aria-valuenow={parseInt(skill.level, 10)} aria-valuemin="0" aria-valuemax="100">
                      <div className={`progress-bar-fill ${skill.cssClass}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary Cloud */}
        <div className="tech-cloud-strip">
          <span className="tech-cloud-label">Ecosystem Badges:</span>
          <div className="tech-badges-wrap">
            <span className="badge-pill">React 18</span>
            <span className="badge-pill">JavaScript ES6+</span>
            <span className="badge-pill">Node.js</span>
            <span className="badge-pill">Vite</span>
            <span className="badge-pill">HTML5</span>
            <span className="badge-pill">CSS3 Flex/Grid</span>
            <span className="badge-pill">Git / GitHub</span>
            <span className="badge-pill">VS Code</span>
            <span className="badge-pill">MongoDB</span>
            <span className="badge-pill">REST APIs</span>
            <span className="badge-pill">Python</span>
          </div>
        </div>
      </div>
    </section>
  );
}
