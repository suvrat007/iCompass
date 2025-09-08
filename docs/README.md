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
