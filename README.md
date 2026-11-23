# Portfolio

Personal portfolio of **Matteo Esposito Marroccella**, AI & Software Engineer.

**Live:** [espositomatteo.com](https://espositomatteo.com)

## Stack

- React 18 (Create React App)
- React Bootstrap
- tsParticles, Typewriter Effect, react-parallax-tilt
- Hosted on Netlify

## Development

Requires Node 20 (see `.nvmrc`).

```bash
npm install
npm start       # dev server on http://localhost:3000
npm test        # run tests
npm run build   # production build in ./build
```

## Structure

```
public/            index.html, manifest, social preview image (og-image.png)
src/
  App.js           page layout: Navbar, Home, About, Projects, Footer
  style.css        theme variables (dark / light) and all component styles
  Assets/          images (WebP) and resume
  components/
    Home/          hero, intro and social links
    About/         about card, tech stack, tools
    Projects/      project data (Projects.js) and card component
```

To add a project, append an entry to `personalProjects` or `universityProjects` in
`src/components/Projects/Projects.js`. Card images look best at a 2:1 ratio, about 1000px wide.
