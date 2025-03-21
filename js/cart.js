// Cart Management

// Initialize cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem('petpals-cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('petpals-cart', JSON.stringify(cart));
    // Update cart count in the header
    updateCartCount();
}

// Add item to cart
function addToCart(product, quantity = 1) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        // Update quantity if product already exists
        existingItem.quantity += quantity;
    } else {
        // Add new product to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Save updated cart
    saveCart();
    
    // Show notification
    showCartNotification(product.name, quantity);
}

// Remove item from cart
function removeFromCart(productId) {
    // Find product index
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        const removedItem = cart[itemIndex];
        // Remove product from array
        cart.splice(itemIndex, 1);
        // Save updated cart
        saveCart();
        
        return removedItem;
    }
    
    return null;
}

// Update item quantity in cart
function updateCartItemQuantity(productId, quantity) {
    // Find product
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity > 0) {
            // Update quantity
            item.quantity = quantity;
        } else {
            // Remove item if quantity is 0 or negative
            removeFromCart(productId);
        }
        
        // Save updated cart
        saveCart();
        return true;
    }
    
    return false;
}

// Calculate cart total
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Clear the entire cart
function clearCart() {
    cart = [];
    saveCart();
}

// Show notification when item is added to cart
function showCartNotification(productName, quantity) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.cart-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'cart-notification';
        document.body.appendChild(notification);
        
        // Style the notification
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'var(--primary-color)';
        notification.style.color = 'white';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = 'var(--radius-md)';
        notification.style.boxShadow = 'var(--shadow-md)';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'all 0.3s ease';
    }
    
    // Set notification content
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-shopping-cart" style="font-size: 1.2rem;"></i>
            <div>
                <p style="margin: 0; font-weight: 600;">${productName}</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9rem;">
                    ${quantity > 1 ? `${quantity} items` : '1 item'} added to cart
                </p>
            </div>
        </div>
        <button id="view-cart-btn" style="margin-top: 10px; padding: 5px 10px; background-color: white; color: var(--primary-color); border: none; border-radius: var(--radius-sm); font-weight: 600; cursor: pointer;">
            View Cart
        </button>
    `;
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Add event listener to View Cart button
    const viewCartBtn = document.getElementById('view-cart-btn');
    if (viewCartBtn) {
        viewCartBtn.addEventListener('click', function() {
            window.location.href = 'pages/shop.html#cart';
        });
    }
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        // Remove from DOM after fade out
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle "Add to Cart" button clicks
document.addEventListener('DOMContentLoaded', function() {
    // Find all add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Add click event listeners
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get product data from data attributes
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productId = productCard.dataset.id;
                const productName = productCard.dataset.name;
                const productPrice = parseFloat(productCard.dataset.price);
                const productImage = productCard.dataset.image;
                
                // Get quantity if it exists
                const quantityInput = productCard.querySelector('.quantity-input');
                const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
                
                // Add to cart
                addToCart({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage
                }, quantity);
            }
        });
    });
    
    // Render cart if we're on the shop page and cart section exists
    const cartSection = document.getElementById('cart-items');
    if (cartSection) {
        renderCart();
    }
});

// Render cart items on the shop page
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (!cartItemsContainer) return;
    
    // Clear current cart display
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        // Display empty cart message
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--light-gray); margin-bottom: 1rem;"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn secondary-btn">Start Shopping</a>
            </div>
        `;
        
        if (cartTotalElement) {
            cartTotalElement.textContent = '$0.00';
        }
    } else {
        // Create cart items
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <svg width="80" height="80" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="150" rx="10" fill="#F8F8F8"/>
                        <path d="M100 30C80 30 60 70 60 100C60 130 80 135 100 135C120 135 140 130 140 100C140 70 120 30 100 30Z" fill="${getRandomColor()}"/>
                        <circle cx="85" cy="90" r="5" fill="#FFFFFF"/>
                        <circle cx="115" cy="90" r="5" fill="#FFFFFF"/>
                    </svg>
                </div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-item-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        // Add checkout button
        const checkoutElement = document.createElement('div');
        checkoutElement.className = 'cart-actions';
        checkoutElement.innerHTML = `
            <button id="clear-cart-btn" class="btn secondary-btn">Clear Cart</button>
            <button id="checkout-btn" class="btn primary-btn">Proceed to Checkout</button>
        `;
        
        cartItemsContainer.appendChild(checkoutElement);
        
        // Update cart total
        if (cartTotalElement) {
            cartTotalElement.textContent = `$${calculateCartTotal().toFixed(2)}`;
        }
        
        // Add event listeners for cart actions
        
        // Quantity decrease buttons
        const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.id;
                const item = cart.find(item => item.id === productId);
                
                if (item && item.quantity > 1) {
                    updateCartItemQuantity(productId, item.quantity - 1);
                    renderCart();
                }
            });
        });
        
        // Quantity increase buttons
        const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.id;
                const item = cart.find(item => item.id === productId);
                
                if (item) {
                    updateCartItemQuantity(productId, item.quantity + 1);
                    renderCart();
                }
            });
        });
        
        // Remove item buttons
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.id;
                removeFromCart(productId);
                renderCart();
            });
        });
        
        // Clear cart button
        const clearCartBtn = document.getElementById('clear-cart-btn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                    renderCart();
                }
            });
        }
        
        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function() {
                alert('Checkout functionality would be implemented here in a real application. Your total is $' + calculateCartTotal().toFixed(2));
            });
        }
    }
}

// Helper function to generate random pastel colors for product images
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
}