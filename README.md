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

1. Create a GitHub repository named **`garima2094.github.io`** under your GitHub account.
2. Push this project to the `main` branch.
3. In GitHub repo settings → **Pages** → set **Source** to **GitHub Actions**.
4. Every push to `main` will build and deploy automatically.

### First-time push

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/garima2094/garima2094.github.io.git
git push -u origin main
```

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
