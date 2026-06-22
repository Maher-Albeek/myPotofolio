# Maher Albeek — Software Developer Portfolio

<p align="center">
  <img src="src/assets/1.png" alt="Maher Albeek" width="280" />
</p>

<p align="center">
  <a href="src/assets/CV_en.pdf">English CV</a> ·
  <a href="src/assets/CV_de.pdf">German CV</a> ·
  <a href="https://github.com/Maher-Albeek">GitHub</a> ·
  <a href="https://www.linkedin.com/in/maher-albeek">LinkedIn</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
</p>

## Recruiter overview

This portfolio presents my work as a software developer with a focus on modern web applications, REST API integration, responsive UI engineering, and maintainable component architecture.

- IHK-qualified application developer (2025)
- Full-stack project experience with React, Next.js, Vue, Angular, Java/Spring Boot, PHP, and MySQL
- Strong focus on TypeScript, responsive interfaces, accessibility, and visual design
- Professional background in photography, bringing a practiced eye for composition and user-facing detail
- Based in Gelsenkirchen, Germany and open to full-time software development roles

## What this project demonstrates

| Area | Implementation evidence |
| --- | --- |
| Frontend architecture | Reusable React components, typed props, data-driven sections, and clear separation between content and presentation |
| Interaction design | Animated introduction, project carousel, expandable skill cards, scroll reveals, progress feedback, and PDF certificate modal |
| Accessibility | Semantic elements, descriptive labels, keyboard interaction, Escape-to-close behavior, and reduced-motion support |
| Responsive design | Dedicated layouts for desktop, tablet, and mobile with fluid sizing and adaptive navigation |
| Performance | Vite production build, lazy-loaded project media and certificate documents, and requestAnimationFrame-based animation |
| Visual engineering | CSS custom properties, glass surfaces, animated gradients, scroll-linked effects, and consistent design tokens |

## Selected project work

### Full-stack photography platform

**Next.js · React · TypeScript · Tailwind CSS · MySQL · REST API**

Photography platform with an admin CMS, authenticated CRUD workflows, image handling, and an AVIF media pipeline.

### Vehicle booking system

**Java · Spring Boot · Angular · MySQL**

Booking application built around a REST API, DTO-based boundaries, JPA persistence, and transaction locking.

### Home and garden service platform

**Vue 3 · TypeScript · Tailwind CSS · MySQL**

Business website with editable content, gallery uploads, an admin dashboard, authentication, and database-backed content management.

### Barbershop booking interface

**React · TypeScript · Tailwind CSS · REST API**

Reusable booking and admin interface with analytics widgets and role-oriented dashboard views.

## Engineering highlights

### Efficient scroll reveal orchestration

A single `IntersectionObserver` manages section visibility and exposes the intersection ratio to CSS, keeping presentation effects outside the component logic.

```tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      target.style.setProperty(
        "--reveal-ratio",
        entry.intersectionRatio.toFixed(2)
      );
      target.dataset.revealState = entry.isIntersecting ? "in" : "out";
    });
  },
  { threshold: Array.from({ length: 11 }, (_, index) => index / 10) }
);

revealTargets.forEach((target) => observer.observe(target));
return () => observer.disconnect();
```

### Typed, data-driven project cards

Project content is modeled independently from its UI. Optional links, quality metrics, media modes, and technology icons are rendered from typed props without duplicating card markup.

```tsx
type ProjectCardProps = {
  title: string;
  description: string;
  demoLink?: string;
  githubLink?: string;
  stack: string;
  Image: string;
  previewMode?: "image" | "iframe";
  metrics?: Array<{ label: string; value: number }>;
};

const stackItems = stack
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

const Icon = techIcons[normalizeTech(item) as keyof typeof techIcons];
```

## Application structure

```text
src/
├── assets/       Project images, CVs, and certificates
├── components/   Reusable UI and interaction components
├── sections/     Portfolio page sections and section-level styles
├── App.tsx       Page composition and scroll orchestration
├── App.css       Global layout and transition behavior
└── main.tsx      React application entry point
```

## Technology stack

- **Core:** React 19, TypeScript 6, Vite 8
- **Styling:** Tailwind CSS 4, modular CSS, responsive design, CSS custom properties
- **Motion:** GSAP, Motion, Anime.js, custom requestAnimationFrame effects
- **UI:** Font Awesome, React Icons, Fancyapps UI
- **Quality:** ESLint, TypeScript project builds, semantic HTML, accessible interaction patterns

## Run locally

```bash
git clone https://github.com/Maher-Albeek/myPotofolio.git
cd myPotofolio
npm install
npm run dev
```

Available scripts:

```bash
npm run lint
npm run build
npm run preview
```

## Contact

- **Email:** [malbeek92@gmail.com](mailto:malbeek92@gmail.com)
- **LinkedIn:** [linkedin.com/in/maher-albeek](https://www.linkedin.com/in/maher-albeek)
- **GitHub:** [github.com/Maher-Albeek](https://github.com/Maher-Albeek)
- **Location:** Gelsenkirchen, Germany

---

If you are reviewing this repository for a role, the fastest path is: review the selected projects above, inspect `src/App.tsx` for page orchestration, then open `src/components/ProjectCard.tsx` and `src/components/SkillCard.tsx` for reusable component design.
