# Secure Stack Consulting — Landing Page

Marketing and product landing page for Secure Stack Consulting, including the interactive BRF (Blast Radius Framework) demo report.

## Stack

- **React + Vite** — frontend framework
- **Cloudflare Pages** — hosting & deployment

## Structure

```
src/
  pages/          # Page-level components
  components/     # Shared UI components
  assets/         # Fonts, images, brand assets
public/           # Static assets served at root
```

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output → dist/
npm run preview    # preview production build
```

## Deployment

Deployed via Cloudflare Pages.
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20

## BRF Report

The BRF demo report lives at `/report` and is built from the
[brf-report](https://github.com/oliver-clawd/brf-report) repo,
which will be integrated here as a route/subsection.
