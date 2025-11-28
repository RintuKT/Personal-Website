// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Create mailto link with form data
        const mailtoLink = `mailto:rintuiri@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Show success message
        alert('Opening your email client. If it doesn\'t open automatically, please email directly to rintuiri@gmail.com');

        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Animate stat numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');

    stats.forEach(stat => {
        const target = stat.textContent;
        const isNumber = /^\d+/.test(target);

        if (isNumber) {
            const number = parseInt(target);
            const duration = 2000;
            const increment = number / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + target.replace(/^\d+/, '');
                }
            }, 16);
        }
    });
}

// Trigger stat animation when visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize on page load
window.addEventListener('load', () => {
    // Add any initialization code here
    console.log('Personal website loaded successfully!');

    // Haptic Feedback Implementation
    const triggerHaptic = () => {
        // Check if vibration API is supported
        if (navigator.vibrate) {
            // Vibrate for 5ms (very subtle)
            navigator.vibrate(5);
        }
    };

    // Add haptic feedback to interactive elements
    const interactiveElements = document.querySelectorAll(
        'a, button, .project-card, .skill-item, .education-card, .social-link, .stat, .timeline-content, .skill-category'
    );

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', triggerHaptic);
    });

    // Enhanced 3D Parallax Background Effect
    const body = document.body;
    const sections = document.querySelectorAll('section');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5);
        mouseY = (e.clientY / window.innerHeight - 0.5);
    });

    // Touch move handler for mobile
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = (e.touches[0].clientX / window.innerWidth - 0.5);
            mouseY = (e.touches[0].clientY / window.innerHeight - 0.5);
        }
    });

    // Smooth animation loop
    function animate() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        // Apply 3D transform to body for background movement
        const moveX = currentX * 30;
        const moveY = currentY * 30;
        body.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Apply parallax to sections with different depths
        sections.forEach((section, index) => {
            const depth = (index % 3 + 1) * 0.5;
            const sectionMoveX = currentX * 15 * depth;
            const sectionMoveY = currentY * 15 * depth;
            section.style.transform = `translate(${sectionMoveX}px, ${sectionMoveY}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
});