// ===== Mobile nav toggle =====
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Before / After restoration slider =====
const sliderRange = document.getElementById('sliderRange');
const beforePane = document.getElementById('beforePane');
const sliderHandle = document.getElementById('sliderHandle');

function updateSlider(value) {
  beforePane.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  sliderHandle.style.left = `${value}%`;
}

if (sliderRange) {
  updateSlider(sliderRange.value);
  sliderRange.addEventListener('input', (e) => updateSlider(e.target.value));
}

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
