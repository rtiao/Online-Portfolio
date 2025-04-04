// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                hamburger.classList.remove('active');
            }
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Section Highlight on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const observerOptions = {
    threshold: 0.2,  // Reduced threshold to trigger earlier
    rootMargin: '-20% 0px -80% 0px'  // Adjusted margins to better track current section
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all nav items
            navItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to corresponding nav item
            const id = entry.target.getAttribute('id');
            const navItem = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (navItem) {
                navItem.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // For example, using fetch to send to a backend API
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Project Cards Animation on Scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserverOptions = {
    threshold: 0.1
};

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, projectObserverOptions);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    projectObserver.observe(card);
});

// Skills Progress Animation
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.1
});

skillCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateX(-20px)';
    category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    skillObserver.observe(category);
});

// Rocket movement on scroll
const rocket = document.querySelector('.rocket');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    
    if (scrollDirection === 'down') {
        rocket.classList.remove('scrolled');
        rocket.classList.add('scrolled-up');
    } else {
        rocket.classList.remove('scrolled-up');
        rocket.classList.add('scrolled');
    }
    
    lastScrollTop = scrollTop;
}); 