# Archit Joshi — Portfolio v2

Personal portfolio site built with Astro and Tailwind CSS.
Previous version : [Archit Joshi Portfolio - NextJS](https://github.com/JoshiArchit/joshiarchit.github.io_legacy)

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [Font Awesome](https://fontawesome.com) — icons

## Sections

- **Hero** — intro with animated color orbs, links to experience, projects, and resume download
- **Profile** — about me, work experience, and education
- **Projects** — project cards driven by `src/data/projects.json`
- **Contact** — email CTA with GitHub and LinkedIn links

## Project Structure

```
/
├── public/
│   ├── sprite.png          # Profile photo
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/
│   │   ├── experience/     # About, WorkExperience, Education
│   │   ├── Hero.astro
│   │   ├── Profile.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── projects.json   # Project cards data
│   │   ├── jobs.json       # Work experience data
│   │   └── degrees.json    # Education data
│   ├── layout/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |

## Requirements

Node.js >= 22.12.0
