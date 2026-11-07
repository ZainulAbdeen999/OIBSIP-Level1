/* ==========================================================================
   Temperature Converter — Task 3 · OIBSIP Level 1
   Vanilla JavaScript: input handling, validation, conversion, DOM updates.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- DOM references ---------- */
  var form = document.getElementById("converter-form");
  var input = document.getElementById("temperature");
  var unitSelect = document.getElementById("unit");
  var message = document.getElementById("form-message");
  var results = document.getElementById("results");
  var resultCards = results.querySelectorAll(".result");

  /* ---------- Constants ---------- */
  // Absolute zero expressed in each supported unit.
  var ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
  };

  var UNIT_LABEL = {
    celsius: "°C",
    fahrenheit: "°F",
    kelvin: "K"
  };

  // Digits with an optional sign and an optional decimal part. Commas are
  // normalised to dots before testing, so "36,6" is accepted.
  var NUMBER_PATTERN = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;

  /* ---------- Helpers ---------- */

  /**
   * Show a message in the status area.
   * @param {string} text
   * @param {"error"|"warning"|"success"|""} type
   */
  function setMessage(text, type) {
    message.textContent = text;
    message.className = "message" + (type ? " is-" + type : "");
  }

  function clearMessage() {
    setMessage("", "");
  }

  function markInvalid(isInvalid) {
    input.classList.toggle("is-invalid", isInvalid);
    input.setAttribute("aria-invalid", isInvalid ? "true" : "false");
  }

  /**
   * Format a number for display: max 2 decimals, no trailing zeros,
   * no thousands separators, and never "-0".
   */
  function formatNumber(value) {
    if (!Number.isFinite(value)) return "—";

    var rounded = Math.round(value * 100) / 100;
    if (Object.is(rounded, -0)) rounded = 0;

    return rounded.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      useGrouping: false
    });
  }

  /** Convert any supported unit to Celsius (the base for all maths). */
  function toCelsius(value, unit) {
    switch (unit) {
      case "fahrenheit":
        return (value - 32) * 5 / 9;
      case "kelvin":
        return value - 273.15;
      case "celsius":
      default:
        return value;
    }
  }

  /** Reset the three result cards to their empty state. */
  function resetResults() {
    for (var i = 0; i < resultCards.length; i++) {
      var card = resultCards[i];
      card.classList.remove("is-source");
      card.querySelector(".number").textContent = "—";
    }
  }

  /** Highlight the card that matches the selected input unit. */
  function highlightSource(unit) {
    for (var i = 0; i < resultCards.length; i++) {
      resultCards[i].classList.toggle(
        "is-source",
        resultCards[i].getAttribute("data-unit") === unit
      );
    }
  }

  /** Write the converted values into the three result cards. */
  function renderResults(celsius) {
    var values = {
      celsius: celsius,
      fahrenheit: celsius * 9 / 5 + 32,
      kelvin: celsius + 273.15
    };

    Object.keys(values).forEach(function (unit) {
      var node = results.querySelector('[data-out="' + unit + '"]');
      if (node) node.textContent = formatNumber(values[unit]);
    });
  }

  /* ---------- Main action ---------- */
  function convert() {
    var raw = input.value.trim();

    // 1. Empty input
    if (raw === "") {
      markInvalid(true);
      resetResults();
      setMessage("Please enter a temperature before converting.", "error");
      input.focus();
      return;
    }

    // 2. Non-numeric input (letters, symbols, multiple dots, etc.)
    var normalised = raw.replace(/,/g, ".");
    if (!NUMBER_PATTERN.test(normalised)) {
      markInvalid(true);
      resetResults();
      setMessage(
        'That doesn\'t look like a number. Use digits only — for example "36.6" or "-5".',
        "error"
      );
      input.focus();
      return;
    }

    var value = parseFloat(normalised);
    var unit = unitSelect.value;

    // 3. Absolute-zero boundary
    if (value < ABSOLUTE_ZERO[unit]) {
      markInvalid(true);
      resetResults();
      setMessage(
        "That's below absolute zero (" +
          ABSOLUTE_ZERO.celsius + " °C / " +
          ABSOLUTE_ZERO.fahrenheit + " °F / 0 K). " +
          "Temperature can't go any lower — please try a warmer value.",
        "warning"
      );
      input.focus();
      return;
    }

    // 4. Valid input → convert and render
    markInvalid(false);
    var celsius = toCelsius(value, unit);
    renderResults(celsius);
    highlightSource(unit);

    setMessage(
      "Converted " + formatNumber(value) + " " + UNIT_LABEL[unit] + " into all three units.",
      "success"
    );
  }

  /* ---------- Events ---------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    convert();
  });

  // Typing clears the previous error state so the field feels responsive.
  input.addEventListener("input", function () {
    markInvalid(false);
    if (message.classList.contains("is-error") || message.classList.contains("is-warning")) {
      clearMessage();
    }
  });

  // Switching the unit re-runs the conversion when a valid number is present.
  unitSelect.addEventListener("change", function () {
    var raw = input.value.trim().replace(/,/g, ".");
    if (raw !== "" && NUMBER_PATTERN.test(raw)) {
      convert();
    }
  });

  /* ---------- Initial state ---------- */
  resetResults();
})();
