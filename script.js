// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scroll for Navigation Links =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Counter Animation =====
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 10);
        } else {
            counter.innerText = target + '+';
        }
    });
};

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);

            // Trigger counter animation when stats section is visible
            if (entry.target.classList.contains('stat-item')) {
                const statSection = document.querySelector('.stats');
                if (statSection) {
                    animateCounters();
                }
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Show success message (in production, you would send this to a server)
    showFormSuccess();

    // Reset form
    contactForm.reset();

    // Log form data (replace with actual form submission)
    console.log('Form submitted:', formData);
});

function showFormSuccess() {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success show';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>¡Mensaje enviado con éxito!</strong>
        <br>Te contactaré lo antes posible.
    `;

    // Insert before form
    contactForm.parentNode.insertBefore(successDiv, contactForm);

    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ===== Add Active State to Navigation Based on Scroll Position =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// ===== Service Cards Hover Effect Enhancement =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Testimonial Cards Auto-Scroll (Optional Enhancement) =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

// Auto-rotate testimonials every 5 seconds (optional)
setInterval(() => {
    // Remove previous highlight
    testimonialCards.forEach(card => card.style.transform = '');

    // Add highlight to current
    testimonialCards[currentTestimonial].style.transform = 'scale(1.05)';
    testimonialCards[currentTestimonial].style.transition = 'transform 0.3s ease';

    // Move to next
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}, 5000);

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Lazy Loading for Images (if you add real images later) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Dynamic Year in Footer =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} David. Todos los derechos reservados.`;
}

// ===== Prevent Form Resubmission on Page Refresh =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== Console Welcome Message =====
console.log('%c¡Bienvenido a la Landing Page de David! 🎵🧘‍♂️',
    'color: #667eea; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cMúsico & Instructor de Pilates y Yoga',
    'color: #764ba2; font-size: 14px;');
