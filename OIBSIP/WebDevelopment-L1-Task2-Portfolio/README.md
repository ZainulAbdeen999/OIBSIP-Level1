# Personal Portfolio — Zain ul Abdeen

**OIBSIP Level 1 · Task 2 · Web Development & Designing**

A dark, minimal personal portfolio that works like a digital résumé: name and role,
a short About Me, a skills grid, project cards and contact details in one scrolling
page.

**Tech:** HTML5 + CSS3 only — no JavaScript, no frameworks, no build step.

---

## What is already personalised

| Item | Value used |
|---|---|
| Name | **Zain ul Abdeen** |
| Brand mark / favicon | **ZA** |
| Email | **zainulabdeenz786@gmail.com** (`mailto:` links) |
| Photo | `assets/IMG-20260407-WA0001.jpg` (768 × 1279 portrait) |
| Role | Front-end developer from Lahore |
| Location | Lahore, Pakistan |

---

## Links used

| Item | Link |
|---|---|
| GitHub profile | https://github.com/ZainulAbdeen999 |
| Kohva landing page source | `OIBSIP/WebDevelopment-L1-Task1-LandingPage` in this repo |
| Temperature Converter source | `OIBSIP/WebDevelopment-L1-Task3-TemperatureConverter` in this repo |
| Task Board source | `OIBSIP/WebDevelopment-L2-Task2-TodoApp` in the main `OIBSIP` repo |

The LinkedIn and résumé buttons were removed because those URLs were still
placeholders. Add them back in `index.html` (`.social-row`) once you have the real
links.

If you change the name or initials, also update the `<title>`, the
`<meta name="description">`, the hero `h1`, the About Me copy, the contact name and
the footer.

---

## Required features checklist (from the brief)

| Requirement | Where it is implemented |
|---|---|
| Hero with your name, role and avatar | `section.hero#home` — status pill, `h1` "Hi, I'm Zain —", role line, portrait photo |
| About Me, 2–3 sentences | `section#about` — three sentences in two short paragraphs |
| Skills shown as a visual grid | `.skills-grid` — 6 cards, responsive 3 → 2 → 1 columns |
| At least 2 project cards with title, description, GitHub link | `.project-grid` — 3 cards (Kohva landing page, Temperature Converter, Task Board), each with tags and a "View source on GitHub →" link |
| Contact section with name and email | `section#contact` — name, email, location + GitHub button |
| Smooth-scrolling navigation | `html { scroll-behavior: smooth }` + `scroll-margin-top` on each section |
| Consistent colour scheme and fonts | Design tokens in `:root` — green accent on dark surfaces |
| Fully responsive (desktop + mobile) | Breakpoints at 980px, 780px and 640px; CSS-only checkbox mobile menu |

---

## Structure

```
WebDevelopment-L1-Task2-Portfolio/
├── index.html
├── css/style.css
├── assets/
│   ├── IMG-20260407-WA0001.jpg   # portrait photo
│   └── favicon.svg               # ZA monogram
├── screenshots/
└── README.md
```

---

## Design notes

- **Palette:** background `#0E1116`, surface `#171D27`, text `#E8EAED`, accent `#4ADE80`.
- **Fonts:** Space Grotesk for headings, Inter for body.
- **Nav:** sticky, blurred header; `scroll-margin-top` stops the header from covering
  section headings when a nav link is clicked.
- **Mobile menu:** CSS-only checkbox toggle (same pattern as the landing page), so the
  page stays JavaScript-free.
- **Mobile hero:** the copy comes first and the portrait stacks below it, so the name
  and role are visible without scrolling.
- **Accessibility:** visible focus rings, `aria-label`s on icon-only links, decorative
  SVG marked `aria-hidden`, `prefers-reduced-motion` respected.

---

## How to view

Open `index.html` directly in a browser — no server needed. Test at 1440px and 390px
wide (or use the DevTools device toolbar).

---

## Screenshots to capture

1. `screenshots/desktop-full.png` — 1440px wide
2. `screenshots/mobile-full.png` — 390px wide
3. `screenshots/contact-section.png` — close-up of the contact area
