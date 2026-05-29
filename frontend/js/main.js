// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Load projects on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadProjects();
    setupContactForm();
});

// Load and display projects
async function loadProjects() {
    const projects = await fetchProjects();
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="loading">
                <p>No projects available yet. Check back soon!</p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <i class="${project.icon || 'fas fa-code'}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link live">Live Demo</a>` : ''}
                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link code">View Code</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Setup contact form
function setupContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
            };

            try {
                const button = contactForm.querySelector('.submit-button');
                button.disabled = true;
                button.textContent = 'Sending...';

                const response = await submitContact(formData);
                
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Message sent successfully! Thank you for reaching out.';
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000);
            } catch (error) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Failed to send message. Please try again.';
                console.error('Form submission error:', error);
            } finally {
                const button = contactForm.querySelector('.submit-button');
                button.disabled = false;
                button.textContent = 'Send Message';
            }
        });
    }
}

// Smooth scroll for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.skill-card, .project-card');
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
});