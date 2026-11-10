# OIBSIP Level 1

**Name:** Zain ul Abdeen
**Track:** Web Development & Designing
**Level:** 1

This repository has my three Level 1 tasks. All of them are built with plain HTML,
CSS and JavaScript. There is no framework and no build step. You can open any
`index.html` file directly in a browser and it will work.

## The three tasks

| # | Task | What it is | Folder |
|---|---|---|---|
| 1 | Landing Page | Kohva Coffee Co., a landing page for a fictional coffee brand | [`OIBSIP/WebDevelopment-L1-Task1-LandingPage`](./OIBSIP/WebDevelopment-L1-Task1-LandingPage) |
| 2 | Personal Portfolio | My own one page portfolio | [`OIBSIP/WebDevelopment-L1-Task2-Portfolio`](./OIBSIP/WebDevelopment-L1-Task2-Portfolio) |
| 3 | Temperature Converter | Celsius, Fahrenheit and Kelvin converter with validation | [`OIBSIP/WebDevelopment-L1-Task3-TemperatureConverter`](./OIBSIP/WebDevelopment-L1-Task3-TemperatureConverter) |

Every task folder has its own README with the features, the files and some notes on
what was difficult and what I would change.

## How to open

Double click the `index.html` file inside any task folder. That is it.

If you want to run it from a local server instead:

```bash
python -m http.server 5500
```

Then go to `http://localhost:5500/OIBSIP/`.

## What is inside each task

**Task 1, Kohva Coffee Co.**
A coffee landing page. Sticky navbar with four links, a hero section with two
buttons, features, a story section, testimonials and a contact footer. The mobile
menu opens without any JavaScript, using a hidden checkbox. The layout has
breakpoints at 960px, 780px and 620px.

**Task 2, Portfolio**
My portfolio page. Dark background, a hero with my photo, an about section, six
skill cards, three project cards and a contact section. The header is sticky and
the links scroll smoothly to each section. I added `scroll-margin-top` so the
header does not cover the headings when you jump to a section.

**Task 3, Temperature Converter**
You type a temperature, pick the unit and press convert. All three units are shown
at the same time. Empty input and text input are rejected with a message. Values
below absolute zero show a warning. Pressing Enter works too, and changing the unit
re-converts the current number.

## Things I checked before submitting

- Semantic tags: `header`, `nav`, `main`, `section`, `footer`
- Colours are defined once in `:root` and reused
- Tested down to 320px wide, no horizontal scroll
- Focus rings are visible when using the keyboard
- `prefers-reduced-motion` is respected
- No console errors, and `node --check` passes on the JS
- Screenshots for desktop and mobile are inside each task folder

## Folder layout

```
OIBSIP-Level1/
├── README.md
├── SUBMISSION.md            submission steps and the LinkedIn caption
├── SUBMIT-NOW.md            the short version: links and form fields
├── video-script.md          what to show and say in the demo video
├── title-card.html          full screen title card for the video
├── linkedin-post.txt        caption ready to copy
└── OIBSIP/
    ├── WebDevelopment-L1-Task1-LandingPage/
    ├── WebDevelopment-L1-Task2-Portfolio/
    └── WebDevelopment-L1-Task3-TemperatureConverter/
```

Each task folder follows the same pattern:

```
<task folder>/
├── index.html
├── css/style.css
├── js/                 only in Task 3
├── assets/
├── screenshots/
└── README.md
```

## Note

Kohva Coffee Co. is a made up brand, only for this task. The phone number, address
and social links on that page are placeholders.

The portfolio is about me. I removed the LinkedIn and resume buttons from it
because I did not want to link to empty profiles. I can add them later.
