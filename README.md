# Dor Agayev - DevOps Engineer Portfolio

A professional, production-ready personal landing page portfolio for a DevOps Engineer. Built with React, Vite, and Tailwind CSS.

## Features

- **Bright corporate design** - Professional, recruiter-friendly aesthetic
- **Responsive** - Mobile-first, fully responsive layout
- **Accessible & SEO-friendly** - Semantic HTML, meta tags, ARIA labels
- **Smooth UX** - Sticky navbar, smooth scrolling, fade-in animations
- **Dynamic projects** - Fetches GitHub repositories automatically

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3

---

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build Production Version

```bash
npm run build
```

Output will be in the `dist/` directory. Preview the build with:

```bash
npm run preview
```

---

## Project Structure

```
cpage-self/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechStack.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionWrapper.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## License

© Dor Agayev. All rights reserved.
