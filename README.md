# My Portfolio

A personal portfolio website built with Angular that showcases projects, services, and contact information. It uses Tailwind CSS for styling and Font Awesome for icons.

> Generated and managed with Angular CLI 20.1.6.

## Features
- Responsive layout with Header, Home, Projects, Services, and Footer sections
- Font Awesome social icons (GitHub, LinkedIn, WhatsApp)
- Tailwind CSS v4 utility-first styling
- Angular 20 application structure and routing

## Tech Stack
- Angular 20
- Tailwind CSS 4
- Font Awesome (Angular wrapper)
- RxJS, Zone.js

## Prerequisites
- Node.js 18+ and npm
- Angular CLI (optional for global use):
  ```bash
  npm install -g @angular/cli
  ```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   Then open http://localhost:4200/ in your browser. The app reloads on file changes.

## Available Scripts
- Start dev server:
  ```bash
  npm start
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Watch build (development):
  ```bash
  npm run watch
  ```
- Run unit tests (Karma):
  ```bash
  npm test
  ```

## Project Structure (high level)
```
my-portfolio/
├─ public/
│  └─ image/
├─ src/
│  ├─ app/
│  │  ├─ app.html
│  │  └─ component/
│  │     ├─ header/
│  │     │  ├─ header.html
│  │     │  └─ header.ts
│  │     ├─ home/
│  │     │  └─ home.html
│  │     ├─ projects/
│  │     │  ├─ projects.html
│  │     │  └─ projects.ts
│  │     ├─ services/
│  │     │  └─ services.html
│  │     └─ footer/
│  │        ├─ footer.html
│  │        └─ footer.ts
│  └─ ... Angular bootstrapping files
├─ angular.json
├─ package.json
└─ README.md
```

## Styling
Tailwind CSS 4 is configured (via @tailwindcss/postcss). Utility classes are used directly in the component templates.

## Icons
This project uses @fortawesome/angular-fontawesome with brand, regular, and solid icon packs. See component templates (e.g., footer.html) for usage.

## Building and Deployment
- Production build outputs to dist/:
  ```bash
  npm run build
  ```
- You can deploy the contents of dist/ to any static hosting provider (e.g., GitHub Pages, Netlify, Vercel, Firebase Hosting, etc.).

## Customization
- Update contact links and socials in: `src/app/component/footer/footer.html`.
- Update your sections’ content in the corresponding component templates under `src/app/component/`.
- Replace images under `public/image/` as needed.

## Troubleshooting
- Ensure Node 18+ is installed.
- If Tailwind styles don’t apply, check your Angular/Tailwind integration and that the dev server restarted after dependency changes.

## License
This project is provided as-is for personal portfolio use. Add a LICENSE file if you plan to open-source it.
