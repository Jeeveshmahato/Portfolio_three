# Jeevesh Mahato — Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS.

## Development

```bash
npm install
npm run dev      # local dev server
npm run lint
npm run build    # production build in dist/
npm run deploy   # publish dist/ to GitHub Pages
```

## Updating content

All text (experience, projects, skills, links) lives in `src/data/profile.js`.
To publish a new Resume, replace `public/Jeevesh_Mahato_Resume.pdf`.

## Design system

Colors are defined once as CSS variables in `src/index.css` and exposed to
Tailwind in `tailwind.config.js` (`bg`, `surface`, `subtle`, `line`, `ink`,
`muted`, `faint`, `accent`). Light and dark themes swap the variable values;
components never hard-code colors.

- Neutrals: warm stone scale
- Accent: teal (`#0F766E` light / `#2DD4BF` dark)
- Type: Geist (UI and body), Geist Mono (labels, dates), Instrument Serif italic (one accent word per heading, via `<Em>`)
