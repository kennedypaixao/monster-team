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

// Highlights Section Accordion Functionality
function toggleAccordion(categoryId) {
    const content = document.getElementById(categoryId + '-content');
    const card = content.closest('.category-card');
    const arrow = card.querySelector('.accordion-arrow');
    
    // Close all other accordions
    document.querySelectorAll('.accordion-content').forEach(otherContent => {
        if (otherContent !== content && otherContent.classList.contains('active')) {
            otherContent.classList.remove('active');
            otherContent.closest('.category-card').classList.remove('active');
        }
    });
    
    // Toggle current accordion
    content.classList.toggle('active');
    card.classList.toggle('active');
    
    // Track accordion interaction
    trackEvent('Accordion_Toggle', {
        category: categoryId,
        action: content.classList.contains('active') ? 'open' : 'close'
    });
}

// Media Modal for viewing images and videos in fullscreen
function openMediaModal(mediaSrc, mediaType = 'image') {
    const modal = document.createElement('div');
    modal.className = 'media-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
    `;
    
    const mediaElement = mediaType === 'video' 
        ? `<video controls style="max-width: 90%; max-height: 90%; border-radius: 8px;" autoplay>
             <source src="${mediaSrc}" type="video/mp4">
           </video>`
        : `<img src="${mediaSrc}" style="max-width: 90%; max-height: 90%; border-radius: 8px; object-fit: contain;">`;
    
    modal.innerHTML = `
        <button class="modal-close" style="
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10002;
        ">&times;</button>
        ${mediaElement}
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.style.opacity = '1', 10);
    
    // Close modal functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });
    
    modal.addEventListener('click', closeModal);
    
    // Prevent closing when clicking on media
    modal.querySelector(mediaType === 'video' ? 'video' : 'img').addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Initialize media modal functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to media items for modal viewing
    document.addEventListener('click', function(event) {
        const mediaItem = event.target.closest('.media-item');
        if (mediaItem) {
            const img = mediaItem.querySelector('img');
            const video = mediaItem.querySelector('video');
            
            if (img) {
                openMediaModal(img.src, 'image');
            } else if (video) {
                openMediaModal(video.querySelector('source').src, 'video');
            }
        }
    });
});

// YouTube Iframe handling (Highlights Section)
document.addEventListener('DOMContentLoaded', function() {
    const highlightsIframe = document.getElementById('highlights-video');
    
    if (highlightsIframe) {
        // Create intersection observer to detect when iframe enters viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('YouTube video iframe is in viewport');
                    // YouTube iframe with autoplay=1 will automatically start playing
                } else {
                    console.log('YouTube video iframe is out of viewport');
                    // YouTube iframe will continue playing unless user manually pauses
                }
            });
        }, {
            threshold: 0.3 // Trigger when 30% of the iframe is visible
        });
        
        // Start observing the iframe element
        observer.observe(highlightsIframe);
        
        // Log when iframe loads
        highlightsIframe.addEventListener('load', function() {
            console.log('YouTube iframe loaded successfully');
        });
    }
});

// Image Gallery Functions
let currentImageIndex = 0;
let galleryImages = [];

// List of available images in the highlights folder
const highlightImages = [
    './files/highlights/Image/highlights_0.jpg',
    './files/highlights/Image/highlights_1.JPG',
    './files/highlights/Image/highlights_2.jpeg',
    './files/highlights/Image/highlights_3.jpeg',
    './files/highlights/Image/highlights_4.jpeg',
    './files/highlights/Image/highlights_5.jpg',
    './files/highlights/Image/highlights_6.jpg',
    './files/highlights/Image/highlights_7.jpg',
    './files/highlights/Image/highlights_8.jpg',
    './files/highlights/Image/highlights_9.jpg',
    './files/highlights/Image/highlights_10.jpg',
    './files/highlights/Image/highlights_11.jpg',
    './files/highlights/Image/highlights_12.jpg',
    './files/highlights/Image/highlights_13.jpg',
    './files/highlights/Image/highlights_14.jpg',
    './files/highlights/Image/highlights_15.jpg',
    './files/highlights/Image/highlights_16.jpg',
    './files/highlights/Image/highlights_17.jpg',
    './files/highlights/Image/highlights_18.jpg',
    './files/highlights/Image/highlights_19.jpg',
    './files/highlights/Image/highlights_20.jpg',
    './files/highlights/Image/highlights_21.jpg',
    './files/highlights/Image/highlights_22.jpg',
    './files/highlights/Image/highlights_23.jpg',
    './files/highlights/Image/highlights_24.jpg',
    './files/highlights/Image/highlights_25.jpg',
    './files/highlights/Image/highlights_26.jpg',
    './files/highlights/Image/highlights_27.jpg',
    './files/highlights/Image/highlights_28.jpg',
    './files/highlights/Image/highlights_29.jpg',
    './files/highlights/Image/highlights_30.jpg',
    './files/highlights/Image/highlights_31.jpg',
    './files/highlights/Image/highlights_32.jpg',
    './files/highlights/Image/highlights_33.jpg'
];

function openImageGallery() {
    const modal = document.getElementById('imageGalleryModal');
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    // Create gallery items
    highlightImages.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = () => openFullImage(index);
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `TCB 2025 Highlight ${index + 1}`;
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
    
    galleryImages = highlightImages;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeImageGallery() {
    const modal = document.getElementById('imageGalleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function openFullImage(index) {
    currentImageIndex = index;
    const fullImageModal = document.getElementById('fullImageModal');
    const fullImage = document.getElementById('fullImage');
    
    fullImage.src = galleryImages[currentImageIndex];
    fullImage.alt = `TCB 2025 Highlight ${currentImageIndex + 1}`;
    
    fullImageModal.style.display = 'flex';
}

function closeFullImage() {
    const fullImageModal = document.getElementById('fullImageModal');
    fullImageModal.style.display = 'none';
}

function previousImage() {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
    const fullImage = document.getElementById('fullImage');
    fullImage.src = galleryImages[currentImageIndex];
    fullImage.alt = `TCB 2025 Highlight ${currentImageIndex + 1}`;
}

function nextImage() {
    currentImageIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
    const fullImage = document.getElementById('fullImage');
    fullImage.src = galleryImages[currentImageIndex];
    fullImage.alt = `TCB 2025 Highlight ${currentImageIndex + 1}`;
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('imageGalleryModal');
    const fullImageModal = document.getElementById('fullImageModal');
    
    if (event.target === galleryModal) {
        closeImageGallery();
    }
    
    if (event.target === fullImageModal) {
        closeFullImage();
    }
});

// Video Gallery Functions
let currentVideoIndex = 0;
let galleryVideos = [];

// List of available videos with YouTube links
const highlightVideos = [
    {
        id: 'BtervzUxBVA',
        title: 'Monster Team TCB 2025 - Highlights',
        thumbnail: './files/mayckon.jpeg', // placeholder thumbnail
        type: 'youtube'
    }
    // Add more videos here as needed
];

// Function to convert YouTube link to embed format
function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`;
}

// Function to get YouTube thumbnail
function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function openVideoGallery() {
    const modal = document.getElementById('videoGalleryModal');
    const videoGrid = document.getElementById('videoGalleryGrid');
    
    // Clear existing content
    videoGrid.innerHTML = '';
    
    // Create video items
    highlightVideos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.onclick = () => openFullVideo(index);
        
        // Create thumbnail image
        const thumbnail = document.createElement('img');
        thumbnail.src = video.type === 'youtube' ? getYouTubeThumbnail(video.id) : video.thumbnail;
        thumbnail.alt = video.title;
        thumbnail.className = 'video-thumbnail';
        thumbnail.loading = 'lazy';
        
        // Create play button
        const playButton = document.createElement('div');
        playButton.className = 'video-play-button';
        playButton.innerHTML = '▶';
        
        // Create title overlay
        const title = document.createElement('div');
        title.className = 'video-title';
        title.textContent = video.title;
        
        videoItem.appendChild(thumbnail);
        videoItem.appendChild(playButton);
        videoItem.appendChild(title);
        videoGrid.appendChild(videoItem);
    });
    
    galleryVideos = highlightVideos;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoGallery() {
    const modal = document.getElementById('videoGalleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function openFullVideo(index) {
    currentVideoIndex = index;
    const fullVideoModal = document.getElementById('fullVideoModal');
    const fullVideoFrame = document.getElementById('fullVideoFrame');
    
    const video = galleryVideos[currentVideoIndex];
    const embedUrl = video.type === 'youtube' ? getYouTubeEmbedUrl(video.id) : video.url;
    fullVideoFrame.src = embedUrl;
    
    fullVideoModal.style.display = 'flex';
}

function closeFullVideo() {
    const fullVideoModal = document.getElementById('fullVideoModal');
    const fullVideoFrame = document.getElementById('fullVideoFrame');
    
    fullVideoFrame.src = ''; // Stop video playback
    fullVideoModal.style.display = 'none';
}

function previousVideo() {
    currentVideoIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : galleryVideos.length - 1;
    const fullVideoFrame = document.getElementById('fullVideoFrame');
    const video = galleryVideos[currentVideoIndex];
    const embedUrl = video.type === 'youtube' ? getYouTubeEmbedUrl(video.id) : video.url;
    fullVideoFrame.src = embedUrl;
}

function nextVideo() {
    currentVideoIndex = currentVideoIndex < galleryVideos.length - 1 ? currentVideoIndex + 1 : 0;
    const fullVideoFrame = document.getElementById('fullVideoFrame');
    const video = galleryVideos[currentVideoIndex];
    const embedUrl = video.type === 'youtube' ? getYouTubeEmbedUrl(video.id) : video.url;
    fullVideoFrame.src = embedUrl;
}

// Update existing modal close listeners to include video modals
document.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('imageGalleryModal');
    const fullImageModal = document.getElementById('fullImageModal');
    const videoGalleryModal = document.getElementById('videoGalleryModal');
    const fullVideoModal = document.getElementById('fullVideoModal');
    
    if (event.target === galleryModal) {
        closeImageGallery();
    }
    
    if (event.target === fullImageModal) {
        closeFullImage();
    }
    
    if (event.target === videoGalleryModal) {
        closeVideoGallery();
    }
    
    if (event.target === fullVideoModal) {
        closeFullVideo();
    }
});

// Update keyboard navigation to include video controls
document.addEventListener('keydown', function(event) {
    const fullImageModal = document.getElementById('fullImageModal');
    const fullVideoModal = document.getElementById('fullVideoModal');
    
    // Image gallery keyboard controls
    if (fullImageModal.style.display === 'flex') {
        switch(event.key) {
            case 'Escape':
                closeFullImage();
                break;
            case 'ArrowLeft':
                previousImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    }
    
    // Video gallery keyboard controls
    if (fullVideoModal.style.display === 'flex') {
        switch(event.key) {
            case 'Escape':
                closeFullVideo();
                break;
            case 'ArrowLeft':
                previousVideo();
                break;
            case 'ArrowRight':
                nextVideo();
                break;
        }
    }
    
    // Close gallery modals with Escape
    const galleryModal = document.getElementById('imageGalleryModal');
    const videoGalleryModal = document.getElementById('videoGalleryModal');
    
    if (galleryModal.style.display === 'flex' && event.key === 'Escape') {
        closeImageGallery();
    }
    
    if (videoGalleryModal.style.display === 'flex' && event.key === 'Escape') {
        closeVideoGallery();
    }
});