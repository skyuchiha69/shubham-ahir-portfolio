# Shubham Ahir — Personal Developer Portfolio

A modern, light editorial personal developer portfolio built for **Shubham Ahir**, B.Tech Computer Science and Engineering student at **GSFC University** (5th Semester).

Designed with an architectural, design-publication aesthetic combining warm off-white tones, deep ink typography, restrained cobalt accents, fine borders, and strict adherence to verified academic and project facts.

---

## 🏛️ Art Direction & Visual Identity

- **Design Philosophy**: Modern light editorial publication meets developer archive. No generic AI templates, no neon gradients, no glassmorphism clutter.
- **Color Palette**:
  - Background Canvas: `#F5F3EE` (Warm paper)
  - Card Surface: `#FBFAF7`
  - Primary Text: `#20201E` (Ink charcoal)
  - Supporting Text: `#68675F` (Muted grey)
  - Accent Color: `#315DEB` (Restrained cobalt blue)
  - Architectural Borders: `#DCD9D0`
- **Typography**: Google Fonts pairing of **Plus Jakarta Sans** (UI & body text) and **JetBrains Mono** (editorial tags, code labels, and metadata pills).
- **Project Visuals**: Restrained, truthful SVG architectural schematics illustrating actual verified workflows (dual-domain inventory architecture for Rent Wise; Python/Pandas/NumPy/Matplotlib pipeline for Retail Data Analysis; D3.js stakeholder graph and Gemini API integration for Deal Intelligence Agent; telemetry polling and Express/Mongoose pipeline for SoilSense), clearly labeled as visual representations.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS with CSS Custom Properties (Design Tokens), Flexbox, and CSS Grid
- **Icons**: Lucide Icons (`lucide-react`) & custom accessible SVG icons
- **Accessibility**: Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`), WCAG AA contrast compliance, native HTML5 `<dialog>` for modals, `:focus-visible` indicators, full `prefers-reduced-motion` support.

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg            # Custom SA monogram SVG favicon
│   ├── projects/              # Real project screenshots folder
│   │   └── README.txt         # Screenshot replacement instructions
│   └── resume/                # Résumé PDF folder
│       └── README.txt         # Résumé setup instructions
├── src/
│   ├── components/
│   │   ├── About.jsx          # Academic background and engineering principles
│   │   ├── Contact.jsx        # Direct connection channels & config notice
│   │   ├── DealIntelligenceVisual.jsx # Hack Baroda prototype SVG schematic
│   │   ├── Education.jsx      # B.Tech CSE at GSFC University (5th Sem)
│   │   ├── Footer.jsx         # Colophon, dynamic year & smooth back-to-top
│   │   ├── Hero.jsx           # Editorial introduction & academic profile card
│   │   ├── Icons.jsx          # Accessible SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx         # Sticky navigation with mobile drawer
│   │   ├── ProjectCard.jsx    # Project card with conditional links
│   │   ├── ProjectDetailsModal.jsx # Native <dialog> case study inspector
│   │   ├── RentWiseVisual.jsx # Rent Wise dual-domain SVG schematic
│   │   ├── RetailDataVisual.jsx # Retail analysis pipeline SVG schematic
│   │   └── SoilSenseVisual.jsx # SoilSense telemetry architecture SVG schematic
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all portfolio content
│   ├── styles/
│   │   ├── index.css          # Design tokens, reset, typography & utilities
│   │   └── App.css            # Component styles, responsive breakpoints & modal
│   ├── App.jsx                # Application root with modal state
│   └── main.jsx               # Entry point
├── index.html                 # Semantic HTML document with SEO meta tags
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- `npm`

### Installation

```bash
# Clone or navigate to the project directory
cd Portfolio

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Run Linter

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

The optimized, minified production assets will be built into the `dist/` folder.

---

## ⚙️ Customization & Updating Content

All personal data, project case studies, and external links are centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js).

### 1. Adding Your Contact Links
Open `src/data/portfolioData.js` and update the `contact` object:

```javascript
contact: {
  email: "your.email@example.com",        // Direct email link activates
  github: "https://github.com/yourhandle", // GitHub button activates
  linkedin: "https://linkedin.com/in/yourhandle", // LinkedIn button activates
  resumeUrl: "/resume/Shubham_Ahir_Resume.pdf"    // Résumé download button activates
}
```

> **Zero Dead Buttons Guarantee**: When any value is set to `null`, the public site cleanly suppresses the button or shows an informative setup status, so recruiters never experience broken links.

### 2. Adding Your Résumé PDF
1. Place your PDF in `public/resume/Shubham_Ahir_Resume.pdf`.
2. In `src/data/portfolioData.js`, set `resumeUrl: "/resume/Shubham_Ahir_Resume.pdf"`.
3. The "Download Résumé" button will automatically appear in the Hero and Contact sections.

### 3. Adding Real Project Screenshots
1. Place your screenshots in `public/projects/` (e.g., `rent-wise-preview.png`).
2. In `src/data/portfolioData.js`, add `image: "/projects/rent-wise-preview.png"` inside the project object.
3. The `ProjectCard` will automatically switch from the architectural schematic to your real screenshot.

### 4. Adding a New Project
Simply add a new object to the `projectsData` array in `src/data/portfolioData.js` following the existing schema. The website will automatically render the new project card and its interactive case-study modal.

---

## 🌐 Deployment Guide (Free Static Hosting)

This portfolio is a 100% static React application that requires no backend server and can be hosted for free.

### Option 1: Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shubham Ahir developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
   - Click **Add New** → **Project**.
   - Select your portfolio repository from the list.
   - Framework Preset: **Vite** (detected automatically).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**.

Your website will be live in under a minute with a free `.vercel.app` URL and automatic HTTPS.

### Option 2: GitHub Pages

1. In `vite.config.js`, set the base path if using a project repository:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/<your-repo-name>/' // Only needed for user.github.io/<repo>/
   })
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - Choose the standard Static HTML or Vite template.
   - Push your code; GitHub will build and deploy your site automatically.

---

## 🔒 Verification & Integrity Notice

- **No Invented Claims**: All claims, technologies, and academic milestones reflect only verified facts (B.Tech CSE, 5th Semester at GSFC University; Rent Wise; Retail Data Analysis; Deal Intelligence Agent at Hack Baroda; SoilSense Soil Monitoring System).
- **Independent**: This repository is completely decoupled from any project backend or credentials.

