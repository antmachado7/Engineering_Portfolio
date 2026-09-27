const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  const closeNavigation = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeNavigation();
      navToggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) closeNavigation();
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Content stays visible if JavaScript or IntersectionObserver is unavailable.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        entry.target.classList.remove("is-pending");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  element.classList.add("is-pending");
  observer.observe(element);
});
}
