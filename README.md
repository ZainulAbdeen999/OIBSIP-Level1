# OIBSIP — Level 1 Submission

**Track:** Web Development & Designing
**Level:** 1 (Basic) — three projects
**Name:** Zain ul Abdeen

Three hand-built, fully responsive projects using **HTML5, CSS3 and vanilla
JavaScript**. No frameworks, no build tools — every project runs by opening its
`index.html` in a browser.

---

## Projects

| # | Task | Project | Tech | Folder |
|---|---|---|---|---|
| 1 | Landing Page | **Kohva Coffee Co.** — a fictional small-batch coffee roastery | HTML5 + CSS3 | [`WebDevelopment-L1-Task1-LandingPage`](./OIBSIP/WebDevelopment-L1-Task1-LandingPage) |
| 2 | Personal Portfolio | **Zain ul Abdeen** — digital résumé portfolio | HTML5 + CSS3 | [`WebDevelopment-L1-Task2-Portfolio`](./OIBSIP/WebDevelopment-L1-Task2-Portfolio) |
| 3 | Temperature Converter | **°C / °F / K** converter with validation | HTML5 + CSS3 + JS | [`WebDevelopment-L1-Task3-TemperatureConverter`](./OIBSIP/WebDevelopment-L1-Task3-TemperatureConverter) |

Each folder contains its own `README.md` with a feature checklist, test steps and
screenshots.

---

## Run locally

No installation required — open any `index.html` directly:

```bash
# Windows
start OIBSIP/WebDevelopment-L1-Task1-LandingPage/index.html

# or serve the whole repo
python -m http.server 5500
# then visit http://localhost:5500/OIBSIP/
```

---

## What each project demonstrates

**1. Landing Page — Kohva Coffee Co.**
Sticky navbar with four working anchors and a CSS-only mobile menu, hero with two
CTAs, Features / Story / Testimonials sections and a contact footer. Design tokens in
`:root`, `clamp()` typography, Grid + Flexbox, breakpoints at 960 / 780 / 620 px.

**2. Personal Portfolio**
Dark theme with hero, status pill, About, six-card skills grid, three project cards,
contact section and social buttons. Smooth scrolling with `scroll-margin-top` so the
sticky header never covers a heading. The hero stacks copy first on mobile so the
name and role are visible without scrolling.

**3. Temperature Converter**
Celsius / Fahrenheit / Kelvin input, all three outputs shown at once, empty and
non-numeric input rejected, absolute-zero warning, Enter-key support and live
re-conversion when the unit changes.

---

## Quality checklist

- [x] Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`)
- [x] Consistent colour palette driven by CSS custom properties
- [x] Responsive layouts tested down to 320 px
- [x] No overlapping elements; intentional padding, margin and `box-sizing`
- [x] Visible focus states for keyboard users
- [x] `prefers-reduced-motion` respected
- [x] No horizontal scrolling at any width
- [x] No console errors; JS passes `node --check`
- [x] Screenshots included for desktop and mobile

---

## Folder structure

```
OIBSIP-Level1/
├── README.md                     ← this file
├── SUBMISSION.md                 ← demo script, LinkedIn caption, form checklist
├── .gitignore
└── OIBSIP/
    ├── WebDevelopment-L1-Task1-LandingPage/
    ├── WebDevelopment-L1-Task2-Portfolio/
    └── WebDevelopment-L1-Task3-TemperatureConverter/
```

Every task folder follows the same shape:

```
<task folder>/
├── index.html          # entry point
├── css/style.css
├── js/                 # only where JavaScript is used
├── assets/             # images, SVG icons
├── screenshots/
└── README.md
```

---

## Notes

Kohva Coffee Co. is a **fictional brand** created for the internship task. The
portfolio is personalised for **Zain ul Abdeen**; the LinkedIn and résumé buttons
were removed because those URLs were placeholders — add them back once the real
links are available.
