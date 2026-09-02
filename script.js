document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  let isNavigating = false;

  content.classList.add("fade-in");

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (isNavigating) return;

      e.preventDefault();
      isNavigating = true;

      const destination = this.href;

      content.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = destination;
      }, 150);
    });
  });
});
