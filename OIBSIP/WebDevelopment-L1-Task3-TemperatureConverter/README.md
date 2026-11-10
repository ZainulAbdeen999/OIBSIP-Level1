# Task 3: Temperature Converter

**OIBSIP Level 1, Web Development & Designing**

A converter for Celsius, Fahrenheit and Kelvin. You type a number, choose the unit
and press convert. All three results appear at the same time. Bad input gets a clear
message instead of a wrong answer.

**Tech:** HTML, CSS and plain JavaScript. No libraries.

## How to view it

Open `index.html` in a browser.

## Test cases

| Input | Unit | What should happen |
|---|---|---|
| `100` | Celsius | 100 °C, 212 °F, 373.15 K |
| `32` | Fahrenheit | 0 °C, 32 °F, 273.15 K |
| `0` | Kelvin | -273.15 °C, -459.67 °F, 0 K |
| `abc` | any | Error message, no results |
| empty | any | Error message, no results |
| `-300` | Celsius | Warning, value is below absolute zero |

## What the task asked for

| Requirement | Where it is in the code |
|---|---|
| Numeric input, reject text with an error | `input[type=text][inputmode=decimal]` and the `NUMBER_PATTERN` regex in `script.js` |
| Unit selector with the three units | `<select id="unit">` |
| Show all output units at once | Three cards in `.results` |
| Convert on button click | `submit` listener on the form calls `convert()` |
| Correct unit labels | Each result card has its own fixed label |
| Absolute zero warning | `ABSOLUTE_ZERO` object in `script.js` |
| Clean, centred layout | Centred card, labelled fields, clear result cards |

I also added a few small things: Enter submits the form, changing the unit
re-converts the current value, the selected unit is highlighted, messages use
`aria-live` so screen readers read them, and `36,6` is accepted as a decimal.

## Formulas

```
°F = (°C x 9/5) + 32
°C = (°F - 32) x 5/9
K  = °C + 273.15
°C = K - 273.15
```

Every input is converted to Celsius first and then out to the other two units. That
way there is only one place where a formula can be wrong.

## Files

```
WebDevelopment-L1-Task3-TemperatureConverter/
├── index.html
├── css/style.css
├── js/script.js
├── assets/favicon.svg
├── screenshots/
└── README.md
```

## What was difficult

The validation. `parseFloat` happily turns `12abc` into `12`, so I could not just
use it. I check the string against a regex first and only then call `parseFloat`.
The regex also has to allow a minus sign, a leading dot like `.5`, and one decimal
point, but not two.

Absolute zero is different for each unit, so I kept the three limits in one object
and compared the input against the matching one before converting.

## If I had more time

- Add a swap button so you can use the result as the next input.
- Add a small history list of the last few conversions.
- Add tests. Right now I only tested by hand with the cases in the table above.

## Screenshots

1. `screenshots/desktop-result.png`
2. `screenshots/mobile-result.png`
3. `screenshots/error-state.png`
4. `screenshots/absolute-zero-warning.png`
