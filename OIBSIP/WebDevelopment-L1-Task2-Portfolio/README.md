# Task 2: Personal Portfolio

**OIBSIP Level 1, Web Development & Designing**

This is my portfolio page. It is a single scrolling page with my name, a short about
section, my skills, my projects and my contact details. I kept it dark and simple so
the text is easy to read.

**Tech:** HTML and CSS only. No JavaScript, no framework.

## How to view it

Open `index.html` in a browser. Test it at 1440px and 390px wide, or use the device
toolbar in DevTools.

## What is on the page

| Section | Content |
|---|---|
| Hero | Status pill, "Hi, I'm Zain", role line and my photo |
| About | Three sentences about me and what I work with |
| Skills | Six cards in a responsive grid (3 columns, then 2, then 1) |
| Projects | Three cards: Kohva landing page, Temperature Converter and this portfolio, each with a GitHub link |
| Contact | My name, email, location and a GitHub button |
| Footer | Back to top link |

## What the task asked for

| Requirement | Where it is in the code |
|---|---|
| Hero with name, role and photo | `section.hero#home` |
| About Me, 2 to 3 sentences | `section#about` |
| Skills as a visual grid | `.skills-grid` |
| At least 2 project cards with title, description and GitHub link | `.project-grid`, three cards |
| Contact section with name and email | `section#contact` |
| Smooth scrolling navigation | `scroll-behavior: smooth` and `scroll-margin-top` |
| One colour scheme and font pair | Variables in `:root`, Space Grotesk and Inter |
| Responsive on desktop and mobile | Breakpoints at 980px, 780px and 640px, CSS only mobile menu |

## Files

```
WebDevelopment-L1-Task2-Portfolio/
├── index.html
├── css/style.css
├── assets/
│   ├── IMG-20260407-WA0001.jpg   my photo
│   └── favicon.svg               ZA monogram
├── screenshots/
└── README.md
```

## Links used

| Item | Link |
|---|---|
| GitHub profile | https://github.com/ZainulAbdeen999 |
| Task 1 source | `OIBSIP/WebDevelopment-L1-Task1-LandingPage` |
| Task 2 source | `OIBSIP/WebDevelopment-L1-Task2-Portfolio` |
| Task 3 source | `OIBSIP/WebDevelopment-L1-Task3-TemperatureConverter` |

All three project cards link to folders inside this same repository.

## A few design choices

- Colours: background `#0E1116`, cards `#171D27`, text `#E8EAED`, green accent
  `#4ADE80`.
- The header is sticky and slightly blurred. `scroll-margin-top` on the sections
  stops it from covering a heading after you click a nav link.
- On mobile the hero text comes first and the photo goes below it, so my name is
  visible without scrolling.
- Icon only links have `aria-label`. Decorative SVG is marked `aria-hidden`.

## What was difficult

Getting the mobile hero order right. In my first version the photo came first and
you had to scroll to see the name, which looked wrong on a phone. I used `order` in
the media query to put the text above the photo.

The sticky header was the second problem. I fixed it with `scroll-margin-top` on
every section instead of adding JavaScript.

## If I had more time

- Add a real LinkedIn button and a downloadable resume.
- Add a fourth project card once I finish something new.
- Add a light theme switch. That would need JavaScript, so I left it out for now.

## Note

The LinkedIn and resume buttons are not in the page yet because I did not want them
to point to empty profiles. When I have the real links I will add them in the
`.social-row` block in `index.html`.
