import './style.css'

// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// Check local storage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
} else {
    htmlElement.classList.remove('dark');
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
}

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');

    if (htmlElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        localStorage.theme = 'light';
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});


// Typewriter Effect
const typewriterText = ["Frontend Developer", "UI/UX Designer", "Creative Coder"];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const pauseTime = 2000;
const typeTarget = document.getElementById('typewriter-text');

function type() {
    const currentText = typewriterText[typeIndex];
    if (isDeleting) {
        typeTarget.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeTarget.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % typewriterText.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
}

// Start typewriter if element exists
if (typeTarget) {
    type();
}


// Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    el.classList.add('opacity-0'); // Initial state
    observer.observe(el);
});

// Timeline Animation (Draw line)
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('h-full');
            entry.target.classList.remove('h-0');
        }
    });
}, { threshold: 0.2 });

const verticalLines = document.querySelectorAll('.draw-line');
verticalLines.forEach(line => timelineObserver.observe(line));
