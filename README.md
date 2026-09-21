# Saptarshi Paul — Developer Portfolio

> **Full-Stack Developer • AI Builder • Competitive Programmer**  
> Building resilient full-stack systems, scalable backends, and AI-driven products that survive production.

[![Live Site](https://img.shields.io/badge/Live-Portfolio-black?style=flat-square&logo=vercel)](https://saptadev27-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Sapta--Dev27-black?style=flat-square&logo=github)](https://github.com/Sapta-Dev27)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Saptarshi_Paul-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/saptarshi-paul-761124276/)

---

## ✨ Overview

A high-performance, dark-themed developer portfolio built with **React + Vite**, featuring a noir aesthetic with glassmorphism effects, micro-animations, and a fully responsive layout. Designed to make a strong first impression with recruiter-grade information architecture.

---

## 🚀 Features

- **Hero Section** — Animated intro with role, availability status & CTAs
- **About** — Personal background and engineering philosophy
- **Projects** — Detailed project cards with GitHub + live demo links, tech stack, and modal deep-dives
- **Skills** — Filterable, searchable skills grid organized by category (languages, frontend, backend, databases, CS fundamentals, DevOps)
- **Experience** — Professional timeline with role details
- **Education** — Academic background
- **Achievements** — Competitive programming highlights & certifications
- **Coding Dashboard** — Live LeetCode stats integration
- **Dev Terminal** — Interactive CLI-style terminal easter egg
- **Command Palette** — `Ctrl+K` powered keyboard navigation
- **Resume Modal** — In-browser resume viewer with download & print support
- **Contact** — Social links and contact info

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Confetti | canvas-confetti |
| Linting | Oxlint |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/        # All UI components
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── CodingDashboard.jsx
│   ├── CommandPalette.jsx
│   ├── ResumeViewerModal.jsx
│   └── ...
├── data/
│   └── portfolioData.js   # Single source of truth for all content
├── utils/
│   ├── confetti.js
│   └── leetcodeApi.js
└── index.css              # Global design system & tokens
```

---

## 🏃 Running Locally

```bash
# Clone the repo
git clone https://github.com/Sapta-Dev27/SaptaDev27-Portfolio.git
cd SaptaDev27-Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔧 Customization

All portfolio content lives in a **single file**: [`src/data/portfolioData.js`](./src/data/portfolioData.js)

Update the `PLACEHOLDERS` object at the top for social/project links, and edit the exported constants (`personalInfo`, `projects`, `experiences`, etc.) to personalize the content.

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Deployed on **Vercel** — any push to `main` auto-deploys.

---

## 📬 Contact

**Saptarshi Paul** — [saptarshi2027paul@gmail.com](mailto:saptarshi2027paul@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/saptarshi-paul-761124276/) · [GitHub](https://github.com/Sapta-Dev27) · [LeetCode](https://leetcode.com/u/SaptaDev27/)
