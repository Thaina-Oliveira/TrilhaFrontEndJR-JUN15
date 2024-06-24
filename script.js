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
