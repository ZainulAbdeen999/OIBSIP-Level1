# Practice questions

Short answers you can say out loud. Read them once, then close the file and try to
say each one in your own words. Do not memorise word for word. If you blank, it is
fine to say "let me think" and then explain.

## 30 second intro

> "I'm Zain ul Abdeen, a front-end developer from Lahore. For my Level 1 internship
> tasks I built three projects with plain HTML, CSS and JavaScript: a coffee landing
> page, my portfolio, and a temperature converter. All three are in one public
> repository, and I tested each one on desktop and on a 390px phone width."

## General questions

**Why no frameworks?**

> "The brief was about the basics, so I wanted to show I can do layout and responsive
> design without Bootstrap or Tailwind. It also means the page loads with no
> dependencies. The only external request is Google Fonts."

**How did you make it responsive?**

> "The CSS starts with the desktop layout, then `max-width` media queries at 960,
> 780 and 620 pixels bring it down to tablet and phone. I used Grid for page layout
> and Flexbox inside components like the navbar. I checked 1440, 390 and 320 pixels
> in the browser."

**What does `box-sizing: border-box` do?**

> "It makes width include padding and border. Without it, a 300px card with 20px
> padding is actually 340px wide, which breaks grid layouts. I set it on everything
> with the `*` selector."

**How did you handle accessibility?**

> "Semantic landmarks, so header, nav, main, section and footer. Alt text on images,
> and `alt=""` on decorative SVGs so screen readers skip them. Visible focus styles
> on links and buttons. The converter messages use `aria-live` so they are announced.
> I also respect `prefers-reduced-motion`."

**Why CSS variables?**

> "The colours and spacing are defined once in `:root`. If I want to change the
> accent colour I change one line instead of hunting through the file. It also keeps
> every page consistent."

**What would you do differently?**

> "I would design the mobile layout first. I wrote desktop first and then fixed the
> small screens, which meant rewriting some spacing. Also I would add a few automated
> tests for the converter instead of only testing by hand."

## Task 1, landing page

**How does the mobile menu work without JavaScript?**

> "There is a hidden checkbox before the nav. The hamburger is a `<label>` for that
> checkbox. When it is checked, the `:checked ~ .site-nav` selector sets
> `max-height` from 0 to 320px, and `overflow: hidden` hides the rest. The transition
> on `max-height` makes it slide open."

**Why animate `max-height` and not `height`?**

> "You cannot transition to `height: auto`. The browser does not know the end value.
> `max-height` with a fixed value does animate, as long as the content is shorter
> than that value. It is a small compromise but it keeps the page JavaScript free."

**What is `clamp()` doing in your font sizes?**

> "It sets a minimum, a preferred value and a maximum. For example the hero heading
> is `clamp(2.1rem, 5.2vw, 3.6rem)`. So it scales with the screen but never gets too
> small to read or too big and break the layout."

**Why is the header sticky?**

> "`position: sticky` with `top: 0` keeps the nav visible while scrolling. The
> problem is that anchor links then jump under the header, so I added
> `scroll-margin-top` equal to the header height plus a little space."

**Where did you use Grid and where Flexbox?**

> "Grid for the big two column sections and the card grids, because Grid handles rows
> and columns together. Flexbox for one dimensional things: the navbar links, button
> rows and the footer."

## Task 2, portfolio

**How is the layout built?**

> "A max width container, then CSS Grid. The hero is `1.1fr` and `0.9fr`, and at
> 980px it becomes one column. The skills grid goes 3 columns, then 2, then 1."

**Why does the photo come after the text on mobile?**

> "The text block is first in the HTML. When the grid becomes one column, the source
> order decides the stacking, so my name appears before the photo. On desktop the
> photo sits on the right."

**What does `scroll-margin-top` fix here?**

> "The header is sticky, so without it a section heading would land underneath the
> header when you click a nav link. `scroll-margin-top: calc(var(--header-h) + 16px)`
> leaves room for it."

**How is the blurred header done?**

> "`backdrop-filter: blur(14px)` plus a semi transparent background colour. If a
> browser does not support it, the background still works, it just is not blurred."

## Task 3, temperature converter

**Explain the conversion logic.**

> "Every input is converted to Celsius first. Then Fahrenheit is `celsius * 9 / 5 +
> 32` and Kelvin is `celsius + 273.15`. One code path means one place where a formula
> can be wrong."

**Why do you validate with a regex instead of `parseFloat`?**

> "`parseFloat("12abc")` returns 12 and ignores the rest. That is a wrong answer
> instead of an error. My regex checks the whole string first: optional sign, digits
> with an optional decimal part. Only if it passes do I call `parseFloat`."

**How does the absolute zero check work?**

> "Absolute zero is different in each unit: -273.15 Celsius, -459.67 Fahrenheit and
> 0 Kelvin. I keep those three limits in one object and compare the input against the
> one that matches the selected unit, before converting."

**What about `-0` or long decimals?**

> "I round to two decimals and format with `toLocaleString`, then the result is
> trimmed. I also check for `-0` and turn it into `0`, because users read `-0` as a
> bug."

**Why does changing the unit convert again?**

> "On the `change` event I check whether the field already has a valid number. If it
> does, I run the conversion again so the results never show an old unit. If the
> field is empty or invalid I do nothing."

**What is `aria-live` for?**

> "The message paragraph has `role="status"` and `aria-live="polite"`. When the text
> changes, a screen reader announces the new error or result without the user having
> to move focus."

## If you do not know an answer

Do not invent something. Say:

> "I have not used that yet. What I would try first is ... and then I would check the
> docs."

Then give the direction you would take. That sounds better than a confident wrong
answer, and it is true.

If someone asks which tools helped you build it, answer straight. Then offer to walk
through any part of the code. The code is in the room, so being able to explain a
selector or a function is worth more than a perfect sentence.

## Quick facts to remember

| Thing | Value |
|---|---|
| Task 1 breakpoints | 960px, 780px, 620px |
| Task 1 palette | `#2B1B12`, `#FAF3E7`, `#C08A4E` |
| Task 2 breakpoints | 980px, 780px, 640px |
| Task 2 hero grid | `1.1fr` and `0.9fr` |
| Task 3 absolute zero | -273.15 °C, -459.67 °F, 0 K |
| Task 3 test | 100 °C = 212 °F = 373.15 K |
| Header height variable | `--header-h` |
| Mobile menu | hidden checkbox plus `:checked ~` |
