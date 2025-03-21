// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a menu item
    const mobileMenuItems = document.querySelectorAll('.mobile-menu a');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollTopBtn) {
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (isValidEmail(email)) {
                // In a real application, this would send the email to a server
                showNotification('Thank you for subscribing!', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // Check if email is valid
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show notification
    function showNotification(message, type) {
        // Check if notification container exists, create if not
        let notificationContainer = document.querySelector('.notification-container');
        
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
            
            // Style the notification container
            notificationContainer.style.position = 'fixed';
            notificationContainer.style.top = '20px';
            notificationContainer.style.right = '20px';
            notificationContainer.style.zIndex = '1000';
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerText = message;
        
        // Style the notification
        notification.style.backgroundColor = type === 'success' ? '#7AE582' : '#FF6B6B';
        notification.style.color = '#FFFFFF';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.marginBottom = '10px';
        notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        notification.style.transition = 'all 0.3s ease';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        
        // Add notification to container
        notificationContainer.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            
            // Remove from DOM after fade out
            setTimeout(() => {
                notificationContainer.removeChild(notification);
                
                // Remove container if empty
                if (notificationContainer.children.length === 0) {
                    document.body.removeChild(notificationContainer);
                }
            }, 300);
        }, 3000);
    }
    
    // Initialize cart count from localStorage
    updateCartCount();
    
    // Animation for service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length > 0) {
        window.addEventListener('scroll', function() {
            serviceCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Set initial styles for animation
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Trigger scroll event to check initial view
        window.dispatchEvent(new Event('scroll'));
    }
});

// Function to update cart count display
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem('petpals-cart')) || [];
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = itemCount;
    }
}

// Listen for storage events to update cart count across tabs
window.addEventListener('storage', function(e) {
    if (e.key === 'petpals-cart') {
        updateCartCount();
    }
});