// src/utils/scrollReveal.js
export function initScrollReveal({
  selector = ".fade-up-scroll",
  threshold = 0,
  rootMargin = "0px 0px -10% 0px", // slight buffer
} = {}) {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    document.querySelectorAll(selector).forEach((el) =>
      el.classList.add("visible")
    );
    return;
  }

  document.documentElement.classList.remove("no-js");

  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate once, then stop observing
      }
    });
  };

  const observer = new IntersectionObserver(onIntersect, {
    threshold,
    rootMargin,
  });

  els.forEach((el) => observer.observe(el));
}