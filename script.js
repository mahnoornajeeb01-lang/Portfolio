// Toggle Mobile Dropdown Navigation Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

function closeMenu() {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
}

function openMenu() {
    navLinks.classList.add('active');
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
}

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Close mobile dropdown menu when clicking any nav link
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});

// Close mobile menu on window resize back to desktop width
window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

// Highlight Active Header Link on Scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// Portfolio "Show More" Toggle
const portfolioToggleBtn = document.getElementById('portfolioToggleBtn');
const portfolioGrid = document.getElementById('portfolioGrid');

if (portfolioToggleBtn && portfolioGrid) {
    const hiddenCards = portfolioGrid.querySelectorAll('.hidden-portfolio');
    let expanded = false;

    portfolioToggleBtn.addEventListener('click', () => {
        expanded = !expanded;

        hiddenCards.forEach(card => {
            card.classList.toggle('hidden-portfolio', !expanded);
        });

        portfolioToggleBtn.innerHTML = expanded
            ? 'Show Less <i class="fa-solid fa-chevron-up"></i>'
            : 'Show More Designs <i class="fa-solid fa-chevron-down"></i>';

        if (!expanded) {
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch('https://formsubmit.co/ajax/mahnoornajeeb01@gmail.com', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            alert('Thank you for reaching out, Mahnoor Najeeb will get back to you shortly!');
            contactForm.reset();
        } catch (err) {
            alert("Sorry, your message couldn't be sent right now. Please email mahnoornajeeb01@gmail.com directly.");
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}