# Kohva Coffee Co. — Landing Page

**OIBSIP Level 1 · Task 1 · Web Development & Designing**

A polished, fully responsive static landing page for a fictional small-batch coffee
roastery. Built with **HTML5 + CSS3 only** (no JavaScript), as required by the task brief.

---

## Live preview

Open `index.html` directly in any modern browser — no build step, no dependencies
except Google Fonts (loaded via CDN).

---

## Required features checklist

| Requirement | Where it is implemented |
|---|---|
| Sticky navbar with 3+ nav links | `.site-header` (`position: sticky`) + 4 links: Home, Features, Our Story, Contact |
| Hero with headline, subheadline, CTA | `section.hero` — `h1`, `.hero-sub`, `.btn-primary` |
| At least 2 content sections | Features (`.features`), Our Story (`.story`), Testimonials (`.testimonials`) |
| Footer with contact + social links | `footer#contact` — email, phone, address, Instagram/LinkedIn/GitHub |
| Consistent colour palette | All colours come from CSS variables in `:root` |
| Responsive on mobile (Flexbox/Grid) | `display: grid` / `flex` + media queries at 960px, 780px, 620px |
| No overlapping elements, intentional spacing | Global `box-sizing: border-box`, `scroll-margin-top` under the sticky header |
| Readable typography, 2+ font sizes | Playfair Display (display) + Inter (body), sizes via `clamp()` |

---

## Structure

```
WebDevelopment-L1-Task1-LandingPage/
├── index.html          # Semantic markup: header, main, sections, footer
├── css/
│   └── style.css       # Design tokens, layout, components, media queries
├── assets/
│   ├── logo.svg        # Brand mark + favicon
│   └── hero-cup.svg    # Hero illustration
├── screenshots/        # Add desktop + mobile screenshots here
└── README.md
```

---

## Design notes

- **Palette:** espresso `#2B1B12`, cream `#FAF3E7`, caramel `#C08A4E`.
- **Typography scale:** `clamp()` keeps headings readable from 320px to 1440px.
- **Mobile menu:** CSS-only toggle using a hidden checkbox + `:checked` sibling
  selector — keeps the page JavaScript-free.
- **Accessibility:** skip-free landmarks (`header`, `nav`, `main`, `footer`), focus
  rings on every interactive element, decorative SVGs marked `alt=""`, and a
  `prefers-reduced-motion` block.

---

## Screenshots to capture

1. `screenshots/desktop-full.png` — full page at 1440px wide
2. `screenshots/mobile-full.png` — full page at 390px wide
3. `screenshots/mobile-menu-open.png` — mobile nav expanded

---

## Notes

Kohva Coffee Co. is a fictional brand created for this internship task. All contact
details, addresses and social links are placeholders.
