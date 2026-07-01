# Garima Jain — Portfolio

Animated personal portfolio built with **React**, **TypeScript**, **Vite**, and **Framer Motion**.

Live site: [https://garima2094.github.io/](https://garima2094.github.io/)

## Features

- Motion-rich hero, timeline, and scroll animations
- Responsive layout with mobile navigation
- Sections: About, Skills, Experience, Projects, Education, Contact
- GitHub Pages deployment via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to the `main` branch of **`garima2094/garima2094.github.io`**.
2. Open repo **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions** (not "Deploy from branch").
4. Push to `main` — the workflow builds `dist/` and deploys the compiled site.

> **Important:** If Pages is set to deploy the `main` branch directly, the site will break with a MIME type error because GitHub will serve raw `/src/main.tsx` instead of the built JavaScript bundle.

### After pushing

```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

Then check **Actions** tab — wait for the "Deploy to GitHub Pages" workflow to finish.

## Customize

- Update resume content in `src/data/resume.ts`
- Adjust colors and theme in `src/index.css`
- Update social links in `src/data/resume.ts`

## Tech stack

- React 19
- TypeScript
- Vite
- Framer Motion
- React Icons
