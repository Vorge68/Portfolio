document.addEventListener("DOMContentLoaded", function () {
    let content = document.getElementById("content");

    // Apply fade-in effect to content only
    content.classList.add("fade-in");

    // Add fade-out effect when clicking navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            // Ignore links that open in a new tab or execute JavaScript
            if (this.target === "_blank" || this.href.startsWith("javascript:")) return;

            e.preventDefault(); // Prevent instant navigation
            let href = this.href; // Store destination

            // Apply fade-out effect to content only
            content.classList.add("fade-out");

            // Wait for fade-out before changing page
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match CSS transition duration
        });
    });
});
