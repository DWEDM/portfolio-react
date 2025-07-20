// src/utils/scrollReveal.js
export function initScrollReveal({
  selector = ".fade-up-scroll",
  threshold = 0, // Trigger as soon as the element touches viewport
  rootMargin = "0px 0px -20% 0px", // Buffer to prevent edge flicker
} = {}) {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    // Fallback: show all elements if JS/IntersectionObserver not supported
    document.querySelectorAll(selector).forEach((el) =>
      el.classList.add("visible")
    );
    return;
  }

  // Remove no-js class for progressive enhancement
  document.documentElement.classList.remove("no-js");

  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Stop observing once visible to avoid flicker
        setTimeout(() => observer.unobserve(entry.target), 100);
      }
    });
  };

  const observer = new IntersectionObserver(onIntersect, { threshold, rootMargin });

  els.forEach((el) => observer.observe(el));
}