# Andrew Shi’s portfolio

Minimal Next.js App Router starter with React, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js 22 LTS or newer (Next.js requires at least Node.js 20.9).

```sh
npm install
npm run dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` to update the homepage.

## Check and build

```sh
npm run typecheck
npm run build
```

The build exports static files to `out/`, suitable for GitHub Pages. Dependencies are installed locally in `node_modules/`, with versions recorded in `package-lock.json`. TypeScript checks and the production build have passed.

## Later

Add experience and project components, then configure GitHub Actions and the custom domain. The configuration assumes deployment at the root of andrewshi.dev; deployment under a GitHub repository subpath needs a matching Next.js `basePath`.
