# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DSCubed (Data Science Student Society) website — a Next.js 16 App Router site with React 19, TypeScript, and Supabase backend. Deployed on Vercel at dscubed.org.au.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `next dev --experimental-https` — dev with HTTPS

## Architecture

**Routing:** Next.js App Router (`app/` directory). Pages are server components by default; add `"use client"` at the component level for interactivity.

**Data layer:**
- Supabase for database (PostgreSQL), auth, and file storage
- Server actions in `app/lib/action.ts` (form handling: createEvent, updateEvent, deleteEvent)
- Server data fetching in `app/lib/data.ts`
- Static data files for committee members: `app/components/committee/data/memberData{year}.ts`
- Supabase client setup lives in `utils/supabase/` (separate server.ts and client.ts)

**Components:** Feature-based organization under `app/components/` (e.g., `/committee`, `/events`, `/competitions`, `/home`). Shared layout components: Navbar, Footer, Section, Banner.

**Styling:** Tailwind CSS v4 (CSS-first config in `app/styles/globals.css`). Desktop-first responsive design using custom `@custom-variant` breakpoints (2xl, xl, lg, md, sm, xs — all max-width). Dark mode is the default theme. Uses `cn()` utility from `app/lib/utils.js` (clsx + tailwind-merge).

**3D/Visualization:** Three.js via React Three Fiber + Spline embeds. Custom hooks in `app/hooks/` (useRotation for 3D interaction, useEmbeddings for ML visualizer).

**Auth:** Supabase Auth with Google login. Admin access controlled by ADMIN_EMAILS env var.

**Images:** Next.js `<Image>` with remote patterns for Supabase CDN. Committee photos in `public/people/{year}/`. Upload flow uses compressorjs compression before Supabase storage upload.

## Key Conventions

- Path alias: `@/*` maps to project root
- Locale: `en_AU`
- Committee data types: `ExecMember`, `Director`, `Team`, `CommitteeMember` — defined per year in data files
- Committee pages are year-based routes (`/committee/2024`, `/committee/2025`, `/committee/2026`)
- CSS colors use `rgb(x y z)` format (no commas), theme via CSS custom properties (`--theme`, `--background`, `--text-primary`, etc.)
