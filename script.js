// ===========================================================
// Rotating role text
// ===========================================================
const roles = [
  "Offensive Security",
  "Quality Assurance",
  "Networking"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const roleEl = document.getElementById("roleText");

function typeRole() {
  if (!roleEl) return;
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeRole, 1400);
      return;
    }
  } else {
    charIndex--;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeRole, deleting ? 40 : 70);
}

typeRole();

// ===========================================================
// Mobile nav toggle
// ===========================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
    });
  });
}

// ===========================================================
// Scroll reveal for sections
// ===========================================================
const revealTargets = document.querySelectorAll(
  ".section, .stat-item, .exp-card, .work-card, .lab-card, .skill-card"
);

revealTargets.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach(el => observer.observe(el));

// ===========================================================
// Footer year
// ===========================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();