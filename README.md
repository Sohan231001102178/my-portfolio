# Personal Portfolio Website

A modern, modular, and professional personal portfolio website built with **React**, **JSX**, and **strict external CSS** adhering strictly to component-driven design principles.

---

## 🏗 Architecture & Component Hierarchy

The project is structured into **6 essential reusable components**:

| Component Name | File Path | Primary Responsibility |
|---|---|---|
| **Navbar** | `src/components/Navbar.jsx` | Sticky top navigation bar with brand logo, smooth scrolling anchors (`#about`, `#skills`, `#projects`), and animated mobile-responsive toggles. Semantic `<header>` and `<nav>` tags. |
| **Hero** | `src/components/Hero.jsx` | Landing banner with professional introduction, status radar pill, tagline, interactive terminal card, and dual CTAs. |
| **About** | `src/components/About.jsx` | Professional bio, background narrative, educational credentials, career objectives, and core engineering principles in clean layout cards. |
| **Skills** | `src/components/Skills.jsx` | Categorized technical proficiency showcase with filter tabs and visual progress indicators (Frontend, Backend, Tools) using pure external CSS classes. |
| **Projects** | `src/components/Projects.jsx` | Responsive grid layout highlighting recent software engineering works and repos with category filtering, tech badges, and source links. |
| **Footer** | `src/components/Footer.jsx` | Bottom section with direct email correspondence, LinkedIn/GitHub/Twitter links, interactive copy-to-clipboard, copyright notice, and scroll-to-top button. |

---

## 📂 Project File Structure

```text
my-portfolio/
├── public/
│   └── vite.svg            # Favicon
├── src/
│   ├── assets/             # Images & static assets
│   ├── components/         # 6 Core Components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Root component assembling all sub-components
│   ├── App.css             # External stylesheet for all portfolio styling
│   └── main.jsx            # React DOM root entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ✅ Constraint Verification Matrix

| Constraint Item | Compliance Status | Implementation Detail |
|---|---|---|
| **Minimum 6 Components** | **✓ Verified (6 Components)** | `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Footer` |
| **Responsive Design** | **✓ Fully Responsive** | CSS Flexbox & CSS Grid with media queries for mobile, tablet, and desktop |
| **External CSS Only** | **✓ Strictly Enforced** | 100% of styles in `App.css`. **Zero** inline `style={{...}}` attributes used |
| **JSX Syntax Only** | **✓ Strictly Applied** | Correct use of `className`, self-closing tags, and JS expression blocks |

---

## 🚀 How to Run in VS Code

1. **Open the project in VS Code**:
   ```bash
   code "C:\Users\Argya\Desktop\my-portfolio"
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** at [http://localhost:3000](http://localhost:3000).

---

## 📦 Production Build

```bash
npm run build
```
Build output will be generated inside the `dist/` directory.
