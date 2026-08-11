# XO Inks — React Rebuild

A fresh React + Vite rebuild of the XO Inks tattoo studio site
(Mafikeng), keeping the original gold (#d2b356) / ink-black / paper
palette and real studio photography, built around two ideas:

1. **The artist's passion** — a "Story" section paired with a
   single-line rose that draws itself in as you scroll (see
   `SignatureMark.jsx`), standing in for the needle's line.
2. **The studio tour** — a scroll-driven walkthrough (`Tour.jsx`)
   that pans through four real stops in the studio (reception,
   consult, the chair, the reveal) before pushing visitors to book
   the real thing.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
```

## Structure

```
src/
  components/   one component + co-located CSS per section
  hooks/        useReveal.js — IntersectionObserver scroll-reveal
  assets/images/  the four real studio photos, reused across
                   the hero, story, tour and gallery sections
```

## Notes / next steps

- The contact form currently just prevents default submission —
  wire it to WhatsApp's click-to-chat API, a form backend (e.g.
  Formspree), or an email service before going live.
- Swap in more/varied studio and work photography if you have it —
  the site currently reuses the same four source images across
  sections since that's all that was in the original repo.
