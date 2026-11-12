# Task 1: Kohva Coffee Co. Landing Page

**OIBSIP Level 1, Web Development & Designing**

A landing page for a coffee brand I made up, called Kohva Coffee Co. I built it with
HTML and CSS only, no JavaScript, because the task asked for a static page.

## How to view it

Open `index.html` in any browser. The only external thing it loads is Google Fonts
from a CDN. Everything else is local.

## What the task asked for

| Requirement | Where it is in the code |
|---|---|
| Sticky navbar with at least 3 links | `.site-header` uses `position: sticky`. Links: Home, Features, Our Story, Contact |
| Hero with heading, subheading and a call to action | `section.hero` with `h1`, `.hero-sub` and two buttons |
| At least 2 content sections | Features, Our Story and Testimonials |
| Footer with contact and social links | `footer#contact` with email, phone, address and social links |
| Same colour palette everywhere | All colours are CSS variables in `:root` |
| Responsive with Flexbox or Grid | Grid and Flexbox, plus media queries at 960px, 780px and 620px |
| Nothing overlapping, spacing done on purpose | `box-sizing: border-box` on everything, `scroll-margin-top` under the sticky header |
| Readable text, more than 2 font sizes | Playfair Display for headings, Inter for body, sizes with `clamp()` |

## Files

```
WebDevelopment-L1-Task1-LandingPage/
├── index.html
├── css/style.css
├── assets/
│   ├── logo.svg        logo and favicon
│   └── hero-cup.svg    the cup illustration in the hero
├── screenshots/
└── README.md
```

## A few design choices

- Colours: espresso `#2B1B12`, cream `#FAF3E7`, caramel `#C08A4E`.
- Font sizes use `clamp()` so headings stay readable from 320px up to 1440px without
  writing a media query for every size.
- The mobile menu is a hidden checkbox with a label. When the checkbox is checked,
  CSS shows the menu. That way the page stays JavaScript free.
- Decorative SVGs have `alt=""` so screen readers skip them. Buttons and links have
  visible focus styles.

## What was difficult

The mobile menu without JavaScript took the most time. I had to place the checkbox
before the nav in the HTML so the `:checked ~ .site-nav` selector could reach it,
then animate `max-height` from 0 to 320px. My first attempt animated `height`, which
does not work when the height is `auto`.

The other thing was the sticky header covering section headings when you click a nav
link. `scroll-margin-top` on the sections fixed it.

One thing still does not work: on mobile, clicking a link does not close the menu
again. Doing that cleanly needs JavaScript, and the brief asked for HTML and CSS
only, so I left it. See the next section for how I would fix it.

## If I had more time

- Close the mobile menu when a link is clicked. I would switch from the checkbox to
  the `:target` pattern, where each nav link changes the URL fragment and the menu
  only stays open while `#menu` is the target.
- Replace the placeholder social links in the footer with real ones.
- Add a real contact form instead of just an email link.

## Screenshots

1. `screenshots/desktop-full.png`, full page at 1440px
2. `screenshots/mobile-full.png`, full page at 390px
3. `screenshots/mobile-menu-open.png`, mobile menu open

## Note

Kohva Coffee Co. is not a real brand. The phone number, address and social links are
placeholders for this task.
