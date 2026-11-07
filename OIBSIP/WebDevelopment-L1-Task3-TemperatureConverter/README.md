# Temperature Converter

**OIBSIP Level 1 · Task 3 · Web Development & Designing**

An interactive converter between **Celsius, Fahrenheit and Kelvin**. All three results
are shown at once, with input validation and an absolute-zero warning.

**Tech:** HTML5 + CSS3 + Vanilla JavaScript (no libraries, no build step).

---

## Try it

Open `index.html` in a browser.

| Input | Unit | Expected |
|---|---|---|
| `100` | Celsius | 100 °C · 212 °F · 373.15 K |
| `32` | Fahrenheit | 0 °C · 32 °F · 273.15 K |
| `0` | Kelvin | −273.15 °C · −459.67 °F · 0 K |
| `abc` | any | Error: "That doesn't look like a number…" |
| *(empty)* | any | Error: "Please enter a temperature…" |
| `-300` | Celsius | Warning: below absolute zero |

---

## Required features checklist

| Requirement | Where it is implemented |
|---|---|
| Numeric input; non-numeric rejected with an error | `input[type=text][inputmode=decimal]` + `NUMBER_PATTERN` regex in `script.js` |
| Unit selector: Celsius / Fahrenheit / Kelvin | `<select id="unit">` with three options |
| All output units shown at once | `.results` grid renders °C, °F and K simultaneously |
| Convert on button click | `form` `submit` listener → `convert()` |
| Results with correct unit labels | Each card has a fixed unit label (`°C`, `°F`, `K`) |
| Absolute-zero warning | `ABSOLUTE_ZERO` map — C < −273.15, F < −459.67, K < 0 |
| Clean, centred UI with clear labels | Centred card layout, labelled fields, uppercase result labels |

**Extras:** Enter key submits the form, changing the unit re-converts instantly,
the active input unit is highlighted, messages use `aria-live` for screen readers,
and commas (`36,6`) are accepted as decimals.

---

## Conversion formulas

```
°F = (°C × 9/5) + 32
°C = (°F − 32) × 5/9
K  = °C + 273.15
°C = K − 273.15
```

Every value is converted to Celsius first, then out to the other two units — one
code path, fewer places for a formula bug to hide.

---

## Structure

```
WebDevelopment-L1-Task3-TemperatureConverter/
├── index.html
├── css/style.css
├── js/script.js
├── assets/favicon.svg
├── screenshots/
└── README.md
```

---

## Screenshots to capture

1. `screenshots/desktop-result.png` — 100 °C converted, desktop width
2. `screenshots/mobile-result.png` — same state at 390px wide
3. `screenshots/error-state.png` — non-numeric input showing the error
4. `screenshots/absolute-zero-warning.png` — warning message visible
