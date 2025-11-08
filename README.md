# portfolio2.0
An interactive portfolio showcasing projects, skills, and experiments in AI, automation, and agentic systems. Built with smooth scroll-based animations, dynamic visuals, and a focus on storytelling through motion.
# Akshat Chaudhary — AI Automation Portfolio (v2.0)

Modern portfolio showcasing AI voice agents, workflow automation, and RPA systems. Focused on smooth motion, clean typography, and a cohesive green visual language.

## Highlights
- Directional “swoosh” entrances/exits using GPU‑friendly transforms
- Lightweight parallax driven by `requestAnimationFrame`
- Cut‑out motif with soft raised/inset surfaces
- Subtle green glow accents on text, hover states, and lines
- Moving green scanline that sweeps across key sections
- Respects `prefers-reduced-motion`

## Tech
- Static site: `HTML`, `CSS`, `JavaScript`
- No build step required

## Local Development
1. Open the folder in your editor.
2. Serve locally (Python):
   ```bash
   python -m http.server 5500
   ```
3. Visit `http://localhost:5500/`.

## Deploy (GitHub Pages)
1. Push to the `main` branch of `akshatbuilds/portfolio2.0`.
2. On GitHub: Settings → Pages → Build and deployment.
3. Source: `Deploy from branch` → Branch: `main` → Folder: `/root`.
4. Save. Your site will publish at:
   - `https://akshatbuilds.github.io/portfolio2.0/`
   - Optional: Add a custom domain and DNS (A/ALIAS + CNAME).

## Accessibility & Performance
- Uses only `translate3d` and opacity for animations
- Single RAF loop for parallax, passive scroll listeners
- Intersection Observer for reveal timing
- Global reduced motion fallback disables animations

## Structure
- `index.html` — markup and section structure
- `styles.css` — theme variables, layout, cutout/glow utilities, scanline
- `script.js` — reveal on scroll, parallax engine
- `assets/` — logos and placeholder images

## Badges
![Static Site](https://img.shields.io/badge/site-static-brightgreen?color=%23C4FF47)
![Built with](https://img.shields.io/badge/built%20with-HTML%20%E2%80%A2%20CSS%20%E2%80%A2%20JS-black)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-black)

## Contributing
Issues and PRs are welcome for tweaks (timing, intensity, layout) or new sections.

## License
Proprietary unless otherwise specified by the repository owner.
