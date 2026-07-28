document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle Mobile Navigation Menu
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuIcon.classList.toggle("fa-xmark");
        });
    }

    // Close Mobile Menu on Click and Handle Active Links
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                }
            }

            navItems.forEach((link) => link.classList.remove("active"));
            item.classList.add("active");
        });
    });

    // Form Submission Handler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! Your message has been submitted successfully.");
            contactForm.reset();
        });
    }
});