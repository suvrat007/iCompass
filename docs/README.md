# iConnect (Jharkhand Connect)

Monorepo containing the web platform (Next.js) and mobile app (Expo), plus shared utilities.

## Workspaces
- `web-platform`: Next.js 14, TypeScript, Tailwind CSS
- `mobile-app`: Expo React Native (to be scaffolded)
- `shared`: Shared TypeScript utilities

## Getting Started (Web)
```bash
# from repo root
npm install
npm run web:dev
```
Then open http://localhost:3000.

## Scripts
- `npm run web:dev`: Start Next.js dev server
- `npm run web:build`: Build web
- `npm run web:start`: Start production server

## Folder Structure
- `web-platform/src/app`: App Router pages (home, destinations, experiences, marketplace, guides, cultural, ai-guide, about, contact)
- `web-platform/src/components/layout`: Header and Footer

## License
MIT

## Asset Attributions
Remote images are used for prototyping purposes under Unsplash license:
- Hero avatar: Unsplash (photographer unknown via API crop)
- Floating avatar: Unsplash (portrait stock)
- Destination images:
  - Netarhat Hills (mountain sunrise) — Unsplash
  - Hundru Falls (waterfall) — Unsplash
  - Betla National Park (forest/wildlife ambiance) — Unsplash
  - Deoghar Temple (temple architecture) — Unsplash
- Gallery images: Unsplash curated set

Replace with owned/credited assets before production.
