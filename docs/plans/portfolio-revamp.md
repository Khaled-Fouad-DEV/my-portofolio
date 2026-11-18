# Portfolio revamp — plan

Date: 2026-11-18. Source of truth for content: `Khaled_Fouad_FlowCV_Resume_2026-11-18.pdf`.

## Decisions (agreed)

- **Direction:** editorial minimal. Light + dark themes (system default, manual toggle).
  Off-white / ink base, one accent, serif display headings, Inter body, hairline borders,
  no glows / gradients / hover-scale. Motion: subtle fade + small slide on enter only,
  respects `prefers-reduced-motion`.
- **Accent:** deep teal ("harbour" — Port Said, and the Harbour design system he built).
- **Type:** Instrument Serif (display), Inter (body), JetBrains Mono (small labels / meta).
  All via `next/font` (self-hosted, no render-blocking Google CSS `@import`).
- **Language:** English only. Bilingual / RTL expertise is stated in the copy.
- **Projects:** work case studies only:
  1. EPNU Attendance & HR Platform
  2. UNIHUB refactor + Harbour design system
  3. EPNU Admission Platform
  4. TameenNow Portal (Insuretekk)
  5. Locally (Teleoceans) — live, has a real screenshot
  Old side projects (Course Finisher, Meeting Scheduler, Docs Reader) are removed.
- **Assets (Magnific):** brand kit, one illustration style, abstract cover art for case
  studies that have no shareable screenshots, one OG image. Icons: Lucide only (already
  a dependency) — never AI icons. Tech logos PNG wall is removed (skills become text).

## Content changes (from resume)

- Title: Senior Frontend Engineer. Location: Port Said, Egypt.
- Summary rewritten from resume summary.
- Experience: EPNU (Jul 2026 – now), Insuretekk Senior (Oct 2025 – now),
  Self-employed full-stack (Jan 2025 – now), Teleoceans (Jan 2025 – Feb 2026).
- Skills: the 7 resume groups as text lists (no percentage bars — they read junior).
- Education + ITI certificate.
- Resume PDF: replace `public/Khaled Fouad Resume -FS-.pdf` with the new one
  (`/khaled-fouad-resume.pdf`, no spaces in the path).
- Links: keep the live GitHub (`Khaled-Fouad-DEV`) and LinkedIn URLs from the current site
  (the resume's short handles differ — to confirm with Khaled).

## Page structure (single page)

1. Nav: name mark, section links, theme toggle, "Résumé" button. Mobile: sheet menu.
2. Hero: name, role, one-sentence positioning, 3 facts (2 orgs led, web + mobile, EN/AR RTL),
   CTAs (View work / Download résumé), photo.
3. Selected work: case-study cards (cover, org, role, stack, 2–3 outcome lines, metrics
   like "268 views migrated", "93 test files").
4. Experience: timeline list.
5. Skills: grouped text.
6. About + education / certificate.
7. Contact: email, LinkedIn, GitHub, location. No fake form (current form posts nowhere).
8. Footer.

## Edge cases / checks

- Theme: no flash of wrong theme (inline script sets `data-theme` before paint).
- Contrast WCAG AA in both themes, incl. text over generated covers.
- 320 / 375 / 768 / 1280 px: no horizontal scroll, touch targets ≥ 40 px, nav sheet scrolls.
- Images: `next/image`, sizes set, covers optimised (SVGO for SVG).
- Reduced motion: no animation.
- Metadata / OG updated to Senior Frontend Engineer; OG image generated.
- `npm run build` and `npm run lint` pass.

## Status (2026-11-18)

Done: brand kit, illustration style (isometric wireframe, `docs/design/illustration-style.md`),
Claude Design mockup with review comments applied, site rebuilt (tokens, light/dark, fonts via
`next/font`, case studies, Daily stack + monochrome tech logos from Simple Icons), new resume
PDF, OG image, favicon, `npm run art` pipeline. framer-motion and react-intersection-observer
removed (first-load JS 147 → 110 kB).

Checked: lint, `tsc`, build; production screenshots at 1280 / 375 / 320 in light and dark,
no horizontal scroll, theme toggle persists, resume PDF serves.

GitHub (`Khaled-Fouad-DEV`) and LinkedIn links confirmed by Khaled.

Open: step 6 design/a11y review; Arabic not in scope.

## Steps

1. Brand kit in Magnific (approval).
2. Illustration style samples (approval) → style prompt.
3. Claude Design mockup of the home page (approval).
4. Implement tokens + components + content.
5. Generate covers + OG image, SVGO.
6. Verify (build, lint, screenshots at all widths, both themes), design + a11y review.
