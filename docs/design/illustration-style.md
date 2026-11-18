# Illustration style — isometric wireframe

Chosen 2026-11-18 from three samples (`style-samples/C-isometric-wireframe.svg`).
Every illustration on the portfolio uses this prompt. Change only the **subject** line.

## Style prompt (fixed)

```
Clean isometric wireframe illustration of <SUBJECT>.
Hairline ink #111412 outlines of uniform weight, flat light teal #E3F0EE fills on some
surfaces, exactly one teal #0F6E68 highlighted element, transparent or off-white #FAFAF7
background, precise technical-drawing feel, generous negative space, centred composition
with margin on all sides. No shadows, no gradients, no texture, no text, no letters,
no logos, no people, no 3D render, no glow.
```

- Tool: Magnific `images_generate_svg` (Recraft v4 Pro Vector), aspect 3:2 for covers,
  1.91:1 (use 16:9 then crop) for OG.
- Brand kit: "Khaled Fouad Portfolio".

## Palette (only these)

| Role | Hex |
| --- | --- |
| Stroke | `#111412` |
| Soft fill | `#E3F0EE` |
| Highlight (one element) | `#0F6E68` |
| Background | `#FAFAF7` / transparent |

In the site, SVGs are recoloured to CSS variables (`--ink`, `--accent-soft`, `--accent`)
so they follow dark mode.

## Avoid

People, faces, hands, text, logos, gradients, drop shadows, neon, perspective other than
isometric, more than one highlighted element, busy backgrounds.

## Subjects used

| Asset | Subject |
| --- | --- |
| EPNU Attendance & HR | a dashboard sheet with a calendar grid and small chart modules, a fingerprint-reader block beside it |
| UNIHUB + Harbour DS | many small page tiles collapsing into a neat stack of component layers, a token swatch strip |
| EPNU Admission | a stepped form flow of stacked sheets with document cards and a check module |
| TameenNow Portal | two phone frames with layered cards, a chat bubble module and a document card |
| Locally | a storefront grid of product cards on a stacked sheet with a shopping-bag module |
| OG image | exploded view of a design system: stacked interface sheets and a module grid |
