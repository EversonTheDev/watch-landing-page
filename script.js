// Mobile Menu Toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-main a").forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("active");
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(26, 26, 26, 1)";
  } else {
    nav.style.background = "rgba(26, 26, 26, 0.95)";
  }
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".watch-card, .feature-box, .testimonial, .step")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Track order button clicks (for analytics)
document.querySelectorAll(".order-btn, .btn-whatsapp").forEach((button) => {
  button.addEventListener("click", function () {
    console.log("Order button clicked:", this.textContent);
    // Add your analytics tracking code here
    // Example: gtag('event', 'click', { 'event_category': 'Order Button' });
  });
});

// Console greeting
console.log(
  "%c⌚ LuxTime Watches",
  "color: #c9a962; font-size: 20px; font-weight: bold;"
);
console.log("%cWebsite by EversonTheDev", "color: #8b7355; font-size: 14px;");
console.log(
  "%cNeed a website? Visit: eversonthedev.vercel.app",
  "color: #1a1a1a; font-size: 12px;"
);
