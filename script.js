
document.addEventListener("DOMContentLoaded", function() {
  gsap.from("#oever-logo h1", { opacity: 0, y: -200, duration: 2, ease: "bounce" });
  gsap.from("#oever-logo h2", { opacity: 0, delay: 1, duration: 1.5 });
  gsap.from("#oever-logo p", { opacity: 0, delay: 2, duration: 1 });

  // Add more animations as needed
});
