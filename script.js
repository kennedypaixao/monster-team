// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove background based on scroll position
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    }
    
    // Hide navbar on scroll down, show on scroll up (optional)
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Add staggered animation for feature cards
            if (entry.target.classList.contains('feature-card')) {
                const cards = document.querySelectorAll('.feature-card');
                cards.forEach((card, index) => {
                    if (card === entry.target) {
                        card.style.animationDelay = `${index * 0.1}s`;
                    }
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .package-card, .testimonial-card, .section-header, .cta-content');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Terminal Typing Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-animation');
    
    if (typingElement) {
        // Reset and restart animation when scrolled into view
        const terminalObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typingElement.style.animation = 'none';
                    typingElement.offsetHeight; // Trigger reflow
                    typingElement.style.animation = 'typing 2s steps(20, end), blink 1s step-end infinite';
                }
            });
        }, { threshold: 0.5 });
        
        terminalObserver.observe(typingElement.closest('.terminal-window'));
    }
});

// Form Handling (if you add forms later)
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    
    if (email) {
        // Show success message
        showNotification('Thanks for subscribing! We\'ll be in touch soon.', 'success');
        form.reset();
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    // Set background color based on type
    const colors = {
        success: '#28ca42',
        error: '#ff5f57',
        warning: '#ffbd2e',
        info: '#667eea'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Copy to Clipboard Functionality (for code snippets)
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy. Please copy manually.', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Statistics Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current).toLocaleString();
        
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        }
    }, 16);
}

// Animate counters when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));
                
                if (number) {
                    animateCounter(entry.target, number);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Package Selection Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const packageCards = document.querySelectorAll('.package-card');
    
    packageCards.forEach(card => {
        const button = card.querySelector('.btn');
        const packageTitle = card.querySelector('.package-title').textContent;
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--secondary-blue)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.borderColor = 'var(--border-light)';
            }
        });
        
        // Track package selection
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                trackEvent('Package_Selection', {
                    package_name: packageTitle,
                    package_type: card.classList.contains('featured') ? 'featured' : 'standard'
                });
                
                // Show contact modal or redirect to contact
                showContactModal(packageTitle);
            });
        }
    });
});

// Contact Modal functionality
function showContactModal(selectedPackage = '') {
    const modal = createContactModal(selectedPackage);
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
    
    // Close modal functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Handle form submission
    const form = modal.querySelector('#contact-form');
    form.addEventListener('submit', handleContactFormSubmit);
}

function createContactModal(selectedPackage) {
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background: white;
            padding: 2rem;
            border-radius: 16px;
            width: 90%;
            max-width: 500px;
            position: relative;
            transform: translate(-50%, -50%) scale(0.9);
            transition: transform 0.3s ease;
            top: 50%;
            left: 50%;
        ">
            <button class="modal-close" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-secondary);
                padding: 0.5rem;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">&times;</button>
            
            <h3 style="color: var(--text-primary); margin-bottom: 1rem;">
                Solicitar Informações ${selectedPackage ? `- ${selectedPackage}` : ''}
            </h3>
            
            <form id="contact-form">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500;">
                        Nome da Empresa *
                    </label>
                    <input type="text" name="company" required style="
                        width: 100%;
                        padding: 0.75rem;
                        border: 1px solid var(--border-light);
                        border-radius: 8px;
                        font-size: 1rem;
                    ">
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500;">
                        Nome do Contato *
                    </label>
                    <input type="text" name="name" required style="
                        width: 100%;
                        padding: 0.75rem;
                        border: 1px solid var(--border-light);
                        border-radius: 8px;
                        font-size: 1rem;
                    ">
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500;">
                        Email *
                    </label>
                    <input type="email" name="email" required style="
                        width: 100%;
                        padding: 0.75rem;
                        border: 1px solid var(--border-light);
                        border-radius: 8px;
                        font-size: 1rem;
                    ">
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500;">
                        Telefone
                    </label>
                    <input type="tel" name="phone" style="
                        width: 100%;
                        padding: 0.75rem;
                        border: 1px solid var(--border-light);
                        border-radius: 8px;
                        font-size: 1rem;
                    ">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500;">
                        Mensagem
                    </label>
                    <textarea name="message" rows="4" style="
                        width: 100%;
                        padding: 0.75rem;
                        border: 1px solid var(--border-light);
                        border-radius: 8px;
                        font-size: 1rem;
                        resize: vertical;
                    " placeholder="Conte-nos mais sobre seus objetivos de parceria..."></textarea>
                </div>
                
                <input type="hidden" name="package" value="${selectedPackage}">
                
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">
                    Enviar Solicitação
                </button>
            </form>
        </div>
    `;
    
    return modal;
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        showNotification('Obrigado pelo interesse! Entraremos em contato em breve.', 'success');
        form.closest('.contact-modal').querySelector('.modal-close').click();
        
        // Track form submission
        trackEvent('Contact_Form_Submit', {
            package: data.package,
            company: data.company,
            source: 'modal'
        });
    }, 1000);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Parallax Effect for Hero Section (subtle)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Preloader (if you want to add one)
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
}

// Performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images (if you add any)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', function(event) {
    // Escape key closes mobile menu
    if (event.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Touch gestures for mobile (optional enhancement)
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', function(e) {
    if (!touchStartX || !touchStartY) {
        return;
    }
    
    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Swipe detection (can be used for mobile navigation)
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) {
            // Swipe left
        } else if (diffX < -50) {
            // Swipe right
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
});

// Console welcome message (fun touch)
console.log('%c🤝 Bem-vindo ao TCB - The Coaching Business!', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
console.log('%cInteressado em uma parceria estratégica? Entre em contato conosco!', 'color: #6b7280; font-size: 14px;');

// Analytics event tracking (placeholder for future integration)
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example for Google Analytics:
    // gtag('event', eventName, eventData);
    
    // Example for other analytics:
    // analytics.track(eventName, eventData);
}

// Track button clicks
document.addEventListener('click', function(event) {
    if (event.target.matches('.btn-primary')) {
        trackEvent('CTA_Click', {
            button_text: event.target.textContent.trim(),
            page_section: getPageSection(event.target)
        });
    }
});

function getPageSection(element) {
    const sections = ['hero', 'features', 'cta', 'footer'];
    let currentSection = 'unknown';
    
    sections.forEach(section => {
        const sectionElement = document.querySelector(`.${section}`);
        if (sectionElement && sectionElement.contains(element)) {
            currentSection = section;
        }
    });
    
    return currentSection;
}