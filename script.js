document.addEventListener("DOMContentLoaded", function () {
    let content = document.getElementById("content");
    let isTransitioning = false; // Prevent multiple clicks

    // Apply fade-in effect to content
    content.classList.add("fade-in");

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            // Ignore links that open in a new tab or execute JavaScript
            if (this.target === "_blank" || this.href.startsWith("javascript:")) return;

            e.preventDefault(); // Prevent instant navigation
            if (isTransitioning) return; // Ignore if already transitioning
                isTransitioning = true; // Set flag to prevent further clicks

            let href = this.href; // Store destination

            // Apply fade-out effect to content
            content.classList.add("fade-out");

            // Wait for fade-out before navigating
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match CSS transition duration
        });
    });
});
