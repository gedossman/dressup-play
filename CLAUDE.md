# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Sofia Ossman's illustrator portfolio website with an embedded dress-up game. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm start` — Start production server

## Architecture

### Route Structure

Uses Next.js App Router route groups to separate portfolio pages (with shared nav/footer) from the game (its own layout):

```
src/app/
  layout.tsx                      ← Root layout (html/body, global metadata)
  globals.css                     ← Tailwind + portfolio base styles
  (portfolio)/
    layout.tsx                    ← Portfolio layout: Header + Footer
    page.tsx                      ← / — Homepage portfolio gallery
    about/page.tsx                ← /about — Bio, clients, awards
    contact/page.tsx              ← /contact — Mailto link + social links
  dress-up-seasons/
    layout.tsx                    ← Game layout (.game-root wrapper + back link)
    page.tsx                      ← /dress-up-seasons — Renders <Game />
    game.css                      ← Game-specific styles (scoped under .game-root)
```

### Portfolio Site

- `src/components/Header.tsx` — Nav with About, Portfolio, Contact links + "Play Dress Up" pill + social icons + mobile menu
- `src/components/Footer.tsx` — Copyright + back-to-top
- `src/components/SocialIcons.tsx` — Behance, LinkedIn, Instagram, Email SVG icons + `<SocialLinks>` component
- `src/components/PortfolioGallery.tsx` — CSS columns masonry grid with lightbox on click
- `src/components/Lightbox.tsx` — White overlay image viewer with keyboard nav (arrows, escape)
- `src/lib/portfolioData.ts` — Image array with dimensions for Next.js `<Image>`
- `public/images/portfolio/` — 37 portfolio illustrations (01.jpg–37.jpg)
- `public/images/sofia-portrait.png` — Portrait header image for about page

### Dress-Up Game

Game CSS is isolated in `game.css`, scoped under `.game-root` class (set in game layout). Game components are unchanged:

- `src/components/Game.tsx` — Main game: SVG scene rendering, character display, clothing equipment, PNG export, social sharing
- `src/components/ClothingSvgs.tsx` — SVG clothing items built from composable base shapes + decorative helpers
- `src/components/MusicPlayer.tsx` — Web Audio API synthesizer with 3 compositions
- `src/lib/gameData.ts` — Type definitions and static data (characters, 80 clothing items, season color themes)

**Adding game content:**
- New characters: add to `characters` array in gameData.ts + create a Body component in Game.tsx
- New clothing: add to `clothingItems` array in gameData.ts + create SVG component in ClothingSvgs.tsx using base shapes

### Key Patterns

- Path alias: `@/*` maps to `./src/*`
- Portfolio uses system-ui sans-serif; game uses Georgia serif
- Game CSS variables (--cream, --warm-brown, etc.) scoped under `.game-root`, not `:root`
- Discriminated union types for game data (`CharacterId`, `ClothingSlot`, `Season`)

## Deployment

Deployed to Vercel.
