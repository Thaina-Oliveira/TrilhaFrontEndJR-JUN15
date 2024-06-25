"use strict";

// reveal elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".fade-in");

  reveals.forEach((reveal) => {
    let windowheight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowheight - revealPoint) {
      reveal.classList.add("active-fade-in");
    } else {
      reveal.classList.remove("active-fade-in");
    }
  });
}

// panels
const panels = document.querySelectorAll(".panel");

// adding the class active
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses;
    panels.forEach((p) => {
      if (p !== panel) {
        p.classList.remove("active");
      }
    });
    panel.classList.toggle("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// mobibe menu
const hamburger = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// changing dark mode to light mode

const modeIndicators = document.querySelectorAll(".mode-indicator");

// Change css when any button is clicked
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

modeIndicators.forEach((modeIndicator) => {
  modeIndicator.addEventListener("click", function () {
    body.classList.toggle("change-mode");
    header.classList.toggle("change-mode");
    footer.classList.toggle("change-mode");
    offScreenMenu.classList.toggle("change-mode");

    // Use ternary operator to switch button text
    modeIndicator.textContent =
      modeIndicator.textContent === "Light Mode" ? "Dark Mode" : "Light Mode";
  });
});
