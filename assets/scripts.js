document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const yearSpan = document.getElementById("year");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", opened);
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
