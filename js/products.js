// Product Data
const products = [
    // Dog Food
    {
        id: 'dog-food-1',
        name: 'Premium Dry Dog Food',
        price: 24.99,
        image: 'dog-food-1.svg',
        category: 'dog-food',
        description: 'High-quality dry food for adult dogs with balanced nutrition.',
        rating: 4.8,
        stock: 30
    },
    {
        id: 'dog-food-2',
        name: 'Organic Puppy Food',
        price: 29.99,
        image: 'dog-food-2.svg',
        category: 'dog-food',
        description: 'Organic food specially formulated for growing puppies.',
        rating: 4.7,
        stock: 25
    },
    {
        id: 'dog-food-3',
        name: 'Senior Dog Nutrition',
        price: 27.99,
        image: 'dog-food-3.svg',
        category: 'dog-food',
        description: 'Specially formulated for older dogs with joint support.',
        rating: 4.6,
        stock: 20
    },
    
    // Cat Food
    {
        id: 'cat-food-1',
        name: 'Premium Cat Kibble',
        price: 22.99,
        image: 'cat-food-1.svg',
        category: 'cat-food',
        description: 'Premium dry cat food with high protein content.',
        rating: 4.7,
        stock: 28
    },
    {
        id: 'cat-food-2',
        name: 'Wet Cat Food - Seafood Mix',
        price: 18.99,
        image: 'cat-food-2.svg',
        category: 'cat-food',
        description: 'Gourmet wet food with real seafood pieces.',
        rating: 4.9,
        stock: 22
    },
    {
        id: 'cat-food-3',
        name: 'Kitten Growth Formula',
        price: 26.99,
        image: 'cat-food-3.svg',
        category: 'cat-food',
        description: 'Nutrient-rich food for growing kittens.',
        rating: 4.8,
        stock: 18
    },
    
    // Dog Toys
    {
        id: 'dog-toy-1',
        name: 'Durable Chew Toy',
        price: 12.99,
        image: 'dog-toy-1.svg',
        category: 'dog-toys',
        description: 'Long-lasting rubber toy for aggressive chewers.',
        rating: 4.5,
        stock: 35
    },
    {
        id: 'dog-toy-2',
        name: 'Interactive Treat Puzzle',
        price: 16.99,
        image: 'dog-toy-2.svg',
        category: 'dog-toys',
        description: 'Mental stimulation toy that dispenses treats.',
        rating: 4.6,
        stock: 20
    },
    {
        id: 'dog-toy-3',
        name: 'Plush Squeaky Toy Set',
        price: 14.99,
        image: 'dog-toy-3.svg',
        category: 'dog-toys',
        description: 'Set of 3 plush toys with squeakers inside.',
        rating: 4.4,
        stock: 24
    },
    
    // Cat Toys
    {
        id: 'cat-toy-1',
        name: 'Interactive Laser Toy',
        price: 19.99,
        image: 'cat-toy-1.svg',
        category: 'cat-toys',
        description: 'Automatic laser toy to keep your cat active.',
        rating: 4.7,
        stock: 15
    },
    {
        id: 'cat-toy-2',
        name: 'Cat Teaser Wand',
        price: 9.99,
        image: 'cat-toy-2.svg',
        category: 'cat-toys',
        description: 'Feather wand toy for interactive play with your cat.',
        rating: 4.8,
        stock: 30
    },
    {
        id: 'cat-toy-3',
        name: 'Catnip Mouse Toys',
        price: 7.99,
        image: 'cat-toy-3.svg',
        category: 'cat-toys',
        description: 'Set of 5 catnip-filled mouse toys.',
        rating: 4.6,
        stock: 40
    },
    
    // Pet Beds
    {
        id: 'pet-bed-1',
        name: 'Orthopedic Dog Bed',
        price: 49.99,
        image: 'pet-bed-1.svg',
        category: 'pet-beds',
        description: 'Memory foam bed for dogs with joint issues.',
        rating: 4.9,
        stock: 12
    },
    {
        id: 'pet-bed-2',
        name: 'Cat Cave Bed',
        price: 34.99,
        image: 'pet-bed-2.svg',
        category: 'pet-beds',
        description: 'Cozy cave-style bed that cats love to hide in.',
        rating: 4.8,
        stock: 18
    },
    {
        id: 'pet-bed-3',
        name: 'Washable Pet Sofa',
        price: 39.99,
        image: 'pet-bed-3.svg',
        category: 'pet-beds',
        description: 'Stylish and comfortable sofa with washable cover.',
        rating: 4.7,
        stock: 14
    },
    
    // Grooming Supplies
    {
        id: 'grooming-1',
        name: 'Professional Pet Brush',
        price: 15.99,
        image: 'grooming-1.svg',
        category: 'grooming',
        description: 'Self-cleaning brush for removing loose fur.',
        rating: 4.8,
        stock: 25
    },
    {
        id: 'grooming-2',
        name: 'Pet Nail Clippers',
        price: 11.99,
        image: 'grooming-2.svg',
        category: 'grooming',
        description: 'Safety nail clippers with guard to prevent over-cutting.',
        rating: 4.6,
        stock: 30
    },
    {
        id: 'grooming-3',
        name: 'Pet Shampoo - Sensitive Skin',
        price: 13.99,
        image: 'grooming-3.svg',
        category: 'grooming',
        description: 'Gentle formula shampoo for pets with sensitive skin.',
        rating: 4.7,
        stock: 22
    },
    
    // Accessories
    {
        id: 'accessory-1',
        name: 'Reflective Dog Collar',
        price: 14.99,
        image: 'accessory-1.svg',
        category: 'accessories',
        description: 'Adjustable reflective collar for night safety.',
        rating: 4.7,
        stock: 35
    },
    {
        id: 'accessory-2',
        name: 'Retractable Dog Leash',
        price: 19.99,
        image: 'accessory-2.svg',
        category: 'accessories',
        description: '16ft retractable leash with comfortable grip.',
        rating: 4.5,
        stock: 20
    },
    {
        id: 'accessory-3',
        name: 'Cat Collar with Bell',
        price: 8.99,
        image: 'accessory-3.svg',
        category: 'accessories',
        description: 'Breakaway safety collar with bell.',
        rating: 4.6,
        stock: 28
    }
];

// Pet listings for buy/sell page
const petListings = [
    {
        id: 'pet-1',
        name: 'Max',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: '2 years',
        gender: 'Male',
        price: 800,
        location: 'New York, NY',
        description: 'Max is a friendly and energetic Golden Retriever. He is well-trained, good with children, and loves to play fetch. He needs a home with a yard where he can run and play.',
        seller: 'John D.',
        sellerRating: 4.9,
        vaccinated: true,
        neutered: true,
        microchipped: true,
        image: 'golden-retriever.svg'
    },
    {
        id: 'pet-2',
        name: 'Luna',
        species: 'Cat',
        breed: 'Siamese',
        age: '1 year',
        gender: 'Female',
        price: 600,
        location: 'Los Angeles, CA',
        description: 'Luna is a beautiful Siamese cat with striking blue eyes. She is playful, affectionate, and gets along well with other cats. She is litter trained and prefers a quiet home.',
        seller: 'Maria R.',
        sellerRating: 4.8,
        vaccinated: true,
        neutered: true,
        microchipped: true,
        image: 'siamese-cat.svg'
    },
    {
        id: 'pet-3',
        name: 'Charlie',
        species: 'Dog',
        breed: 'Beagle',
        age: '3 years',
        gender: 'Male',
        price: 650,
        location: 'Chicago, IL',
        description: 'Charlie is a loving Beagle with a great sense of smell. He enjoys walks and exploring new scents. He is well-behaved and trained, but may occasionally howl as Beagles do.',
        seller: 'David M.',
        sellerRating: 4.7,
        vaccinated: true,
        neutered: true,
        microchipped: false,
        image: 'beagle.svg'
    },
    {
        id: 'pet-4',
        name: 'Bella',
        species: 'Cat',
        breed: 'Maine Coon',
        age: '2 years',
        gender: 'Female',
        price: 750,
        location: 'Seattle, WA',
        description: 'Bella is a magnificent Maine Coon with a fluffy coat. She is gentle, calm, and loves to be brushed. She is good with children and other pets, and enjoys playing with string toys.',
        seller: 'Emma T.',
        sellerRating: 4.9,
        vaccinated: true,
        neutered: true,
        microchipped: true,
        image: 'maine-coon.svg'
    },
    {
        id: 'pet-5',
        name: 'Rocky',
        species: 'Dog',
        breed: 'German Shepherd',
        age: '1.5 years',
        gender: 'Male',
        price: 900,
        location: 'Denver, CO',
        description: 'Rocky is an intelligent and loyal German Shepherd. He has basic training and is very protective. He needs an experienced owner who can provide further training and regular exercise.',
        seller: 'Michael B.',
        sellerRating: 4.6,
        vaccinated: true,
        neutered: false,
        microchipped: true,
        image: 'german-shepherd.svg'
    },
    {
        id: 'pet-6',
        name: 'Coco',
        species: 'Cat',
        breed: 'Persian',
        age: '3 years',
        gender: 'Female',
        price: 700,
        location: 'Miami, FL',
        description: 'Coco is a beautiful Persian cat with a luxurious coat. She is calm and enjoys lounging around the house. She requires regular grooming but rewards you with purrs and affection.',
        seller: 'Sophie L.',
        sellerRating: 4.8,
        vaccinated: true,
        neutered: true,
        microchipped: false,
        image: 'persian-cat.svg'
    },
    {
        id: 'pet-7',
        name: 'Buddy',
        species: 'Dog',
        breed: 'Labrador Retriever',
        age: '4 years',
        gender: 'Male',
        price: 750,
        location: 'Austin, TX',
        description: 'Buddy is a friendly Labrador who loves swimming and playing fetch. He is well-trained, great with kids, and has a gentle temperament. He needs a home where he can get regular exercise.',
        seller: 'James K.',
        sellerRating: 4.9,
        vaccinated: true,
        neutered: true,
        microchipped: true,
        image: 'labrador.svg'
    },
    {
        id: 'pet-8',
        name: 'Milo',
        species: 'Cat',
        breed: 'Bengal',
        age: '2 years',
        gender: 'Male',
        price: 950,
        location: 'Boston, MA',
        description: 'Milo is an active Bengal cat with beautiful spotted markings. He is energetic, playful, and needs interactive toys. He is good with other cats and enjoys climbing and exploring.',
        seller: 'Olivia P.',
        sellerRating: 4.7,
        vaccinated: true,
        neutered: true,
        microchipped: true,
        image: 'bengal-cat.svg'
    }
];

// Medical services data
const medicalServices = [
    {
        id: 'service-1',
        name: 'Routine Check-up',
        price: 50,
        description: 'Comprehensive physical examination of your pet by our experienced veterinarians.',
        duration: '30 minutes',
        category: 'preventive',
        image: 'checkup.svg'
    },
    {
        id: 'service-2',
        name: 'Vaccination',
        price: 35,
        description: 'Essential vaccines to protect your pet against common diseases.',
        duration: '15 minutes',
        category: 'preventive',
        image: 'vaccination.svg'
    },
    {
        id: 'service-3',
        name: 'Dental Cleaning',
        price: 120,
        description: 'Professional dental cleaning to maintain your pet\'s oral health.',
        duration: '60 minutes',
        category: 'dental',
        image: 'dental.svg'
    },
    {
        id: 'service-4',
        name: 'Spay/Neuter Surgery',
        price: 200,
        description: 'Surgical procedure to prevent reproduction and reduce health risks.',
        duration: '60-90 minutes',
        category: 'surgery',
        image: 'surgery.svg'
    },
    {
        id: 'service-5',
        name: 'Microchipping',
        price: 45,
        description: 'Permanent ID implant to help locate your pet if they get lost.',
        duration: '10 minutes',
        category: 'preventive',
        image: 'microchip.svg'
    },
    {
        id: 'service-6',
        name: 'X-Ray Imaging',
        price: 150,
        description: 'Diagnostic imaging to identify internal health issues.',
        duration: '30 minutes',
        category: 'diagnostic',
        image: 'xray.svg'
    },
    {
        id: 'service-7',
        name: 'Laboratory Tests',
        price: 80,
        description: 'Blood tests and other lab work to assess your pet\'s health.',
        duration: '30 minutes (results may take 1-2 days)',
        category: 'diagnostic',
        image: 'lab.svg'
    },
    {
        id: 'service-8',
        name: 'Emergency Care',
        price: 'Varies',
        description: 'Immediate medical attention for urgent health concerns.',
        duration: 'Varies based on condition',
        category: 'emergency',
        image: 'emergency.svg'
    }
];

// Boarding services data
const boardingServices = [
    {
        id: 'boarding-1',
        name: 'Standard Dog Boarding',
        price: 35,
        priceUnit: 'per night',
        description: 'Comfortable kennel space with daily walks, feeding, and basic care.',
        features: [
            'Indoor climate-controlled kennel',
            'Two 20-minute walks per day',
            'Regular feeding as per owner instructions',
            'Fresh water available 24/7',
            'Basic monitoring of health and behavior'
        ],
        petType: 'dog',
        image: 'dog-boarding.svg'
    },
    {
        id: 'boarding-2',
        name: 'Luxury Dog Suite',
        price: 55,
        priceUnit: 'per night',
        description: 'Spacious private room with premium bedding, extra play time, and special attention.',
        features: [
            'Private room with luxury bedding',
            'Three 30-minute walks or play sessions',
            'Premium food options available',
            'Daily brushing and care',
            'Regular photo updates sent to owner',
            'Extra one-on-one attention from staff'
        ],
        petType: 'dog',
        image: 'luxury-dog.svg'
    },
    {
        id: 'boarding-3',
        name: 'Cat Boarding',
        price: 25,
        priceUnit: 'per night',
        description: 'Quiet, comfortable cat condos with climbing spaces and regular attention.',
        features: [
            'Multi-level cat condo',
            'Daily play and attention time',
            'Regular feeding as per owner instructions',
            'Fresh litter changed daily',
            'Quiet environment away from dogs'
        ],
        petType: 'cat',
        image: 'cat-boarding.svg'
    },
    {
        id: 'boarding-4',
        name: 'Luxury Cat Suite',
        price: 40,
        priceUnit: 'per night',
        description: 'Spacious cat room with window views, premium bedding, and extra playtime.',
        features: [
            'Private cat room with window perch',
            'Premium bedding and multiple climbing structures',
            'Extra play and cuddle sessions',
            'Premium food options',
            'Daily photo updates for owners'
        ],
        petType: 'cat',
        image: 'luxury-cat.svg'
    },
    {
        id: 'boarding-5',
        name: 'Day Care - Dogs',
        price: 25,
        priceUnit: 'per day',
        description: 'Supervised play and socialization for your dog while you\'re at work or busy.',
        features: [
            'Supervised group play with compatible dogs',
            'Indoor and outdoor play areas',
            'Rest periods and feeding as needed',
            'Basic training reinforcement available',
            'Half-day options available'
        ],
        petType: 'dog',
        image: 'dog-daycare.svg'
    },
    {
        id: 'boarding-6',
        name: 'Extended Stay Package',
        price: 30,
        priceUnit: 'per night (7+ nights)',
        description: 'Discounted rate for longer stays with additional services included.',
        features: [
            'All features of standard boarding',
            'Discounted nightly rate',
            'One bath/grooming session per week',
            'Extra play sessions',
            'Weekly health check by staff'
        ],
        petType: 'both',
        image: 'extended-stay.svg'
    }
];

// Display products on the shop page
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const categoryFilters = document.getElementById('category-filters');
    
    if (productsContainer) {
        // Initialize with all products
        displayProducts(products);
        
        // Setup category filters if filter element exists
        if (categoryFilters) {
            setupCategoryFilters();
        }
        
        // Setup search functionality
        const searchInput = document.getElementById('product-search');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.trim().toLowerCase();
                filterProducts(searchTerm);
            });
        }
    }
    
    // Display pet listings on buy/sell page
    const petListingsContainer = document.getElementById('pet-listings-container');
    
    if (petListingsContainer) {
        displayPetListings(petListings);
        
        // Setup pet filters
        setupPetFilters();
    }
    
    // Display medical services
    const medicalServicesContainer = document.getElementById('medical-services-container');
    
    if (medicalServicesContainer) {
        displayMedicalServices(medicalServices);
    }
    
    // Display boarding services
    const boardingServicesContainer = document.getElementById('boarding-services-container');
    
    if (boardingServicesContainer) {
        displayBoardingServices(boardingServices);
    }
});

// Display products in the container
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('products-container');
    
    if (!productsContainer) return;
    
    // Clear current products
    productsContainer.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--light-gray); margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try a different search term or filter</p>
            </div>
        `;
        return;
    }
    
    // Create product cards
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = product.id;
        productCard.dataset.name = product.name;
        productCard.dataset.price = product.price;
        productCard.dataset.image = product.image;
        productCard.dataset.category = product.category;
        
        // Create product SVG image dynamically based on category
        let svgContent = '';
        
        if (product.category.includes('food')) {
            // Food product SVG
            const color = product.category.includes('dog') ? '#FFD166' : '#A1E8E4';
            svgContent = `
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="150" rx="10" fill="#F8F8F8"/>
                    <circle cx="100" cy="75" r="40" fill="${color}"/>
                    <path d="M80 75C80 65 90 50 100 50C110 50 120 65 120 75C120 85 110 100 100 100C90 100 80 85 80 75Z" fill="#FFFFFF" fill-opacity="0.3"/>
                    <circle cx="100" cy="40" r="5" fill="#FFFFFF"/>
                    <circle cx="100" cy="110" r="5" fill="#FFFFFF"/>
                    <circle cx="135" cy="75" r="5" fill="#FFFFFF"/>
                    <circle cx="65" cy="75" r="5" fill="#FFFFFF"/>
                </svg>
            `;
        } else if (product.category.includes('toy')) {
            // Toy product SVG
            const color = product.category.includes('dog') ? '#FFD166' : '#A1E8E4';
            svgContent = `
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="150" rx="10" fill="#F8F8F8"/>
                    <circle cx="100" cy="75" r="30" fill="${color}"/>
                    <circle cx="100" cy="75" r="20" fill="#FFFFFF" fill-opacity="0.3"/>
                    <path d="M70 60L80 50M120 100L130 110M70 90L60 100M130 50L120 60" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
        } else if (product.category === 'pet-beds') {
            // Bed product SVG
            svgContent = `
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="150" rx="10" fill="#F8F8F8"/>
                    <ellipse cx="100" cy="90" rx="50" ry="30" fill="#FFC1B6"/>
                    <ellipse cx="100" cy="90" rx="40" ry="20" fill="#FFFFFF" fill-opacity="0.3"/>
                    <path d="M70 60C70 60 85 40 100 40C115 40 130 60 130 60" stroke="#FFC1B6" stroke-width="4" stroke-linecap="round"/>
                </svg>
            `;
        } else if (product.category === 'grooming') {
            // Grooming product SVG
            svgContent = `
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="150" rx="10" fill="#F8F8F8"/>
                    <rect x="70" y="50" width="60" height="10" rx="5" fill="#A1E8E4"/>
                    <rect x="60" y="60" width="80" height="30" rx="5" fill="#A1E8E4"/>
                    <path d="M70 90L70 110M90 90L90 110M110 90L110 110M130 90L130 110" stroke="#A1E8E4" stroke-width="4" stroke-linecap="round"/>
                </svg>
            `;
        } else {
            // Default/accessories SVG
            svgContent = `
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="150" rx="10" fill="#F8F8F8"/>
                    <circle cx="100" cy="75" r="40" fill="#5EADF0"/>
                    <circle cx="100" cy="75" r="30" fill="#FFFFFF" fill-opacity="0.3"/>
                    <path d="M80 75H120" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
                    <path d="M100 55V95" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
                </svg>
            `;
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                ${svgContent}
            </div>
            <h3>${product.name}</h3>
            <div class="product-rating">
                ${generateStarRating(product.rating)}
                <span class="rating-number">(${product.rating})</span>
            </div>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-actions">
                <button class="btn primary-btn small add-to-cart-btn">Add to Cart</button>
                <button class="btn secondary-btn small view-details-btn" data-id="${product.id}">Details</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners for "View Details" buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            const product = products.find(p => p.id === productId);
            
            if (product) {
                showProductModal(product);
            }
        });
    });
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Filter products based on search term
function filterProducts(searchTerm = '', category = 'all') {
    let filteredProducts = products;
    
    // Filter by category if not 'all'
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Filter by search term if provided
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Display filtered products
    displayProducts(filteredProducts);
}

// Setup category filters
function setupCategoryFilters() {
    const categoryFilters = document.getElementById('category-filters');
    
    if (!categoryFilters) return;
    
    // Get unique categories
    const categories = Array.from(new Set(products.map(product => product.category)));
    
    // Create filter buttons
    categoryFilters.innerHTML = `
        <button class="filter-btn active" data-category="all">All Products</button>
        ${categories.map(category => `
            <button class="filter-btn" data-category="${category}">
                ${formatCategoryName(category)}
            </button>
        `).join('')}
    `;
    
    // Add event listeners to filter buttons
    const filterButtons = categoryFilters.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const category = this.dataset.category;
            
            // Get current search term
            const searchTerm = document.getElementById('product-search')?.value.trim().toLowerCase() || '';
            
            // Filter products
            filterProducts(searchTerm, category);
        });
    });
}

// Format category name for display
function formatCategoryName(category) {
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Show product details modal
function showProductModal(product) {
    // Create modal element if it doesn't exist
    let modal = document.querySelector('.product-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'product-modal';
        document.body.appendChild(modal);
        
        // Style the modal
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';
    }
    
    // Create SVG image based on product category
    let svgContent = '';
    
    if (product.category.includes('food')) {
        const color = product.category.includes('dog') ? '#FFD166' : '#A1E8E4';
        svgContent = `
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#F8F8F8"/>
                <circle cx="100" cy="100" r="60" fill="${color}"/>
                <path d="M70 100C70 80 85 60 100 60C115 60 130 80 130 100C130 120 115 140 100 140C85 140 70 120 70 100Z" fill="#FFFFFF" fill-opacity="0.3"/>
                <circle cx="100" cy="50" r="5" fill="#FFFFFF"/>
                <circle cx="100" cy="150" r="5" fill="#FFFFFF"/>
                <circle cx="150" cy="100" r="5" fill="#FFFFFF"/>
                <circle cx="50" cy="100" r="5" fill="#FFFFFF"/>
            </svg>
        `;
    } else if (product.category.includes('toy')) {
        const color = product.category.includes('dog') ? '#FFD166' : '#A1E8E4';
        svgContent = `
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#F8F8F8"/>
                <circle cx="100" cy="100" r="50" fill="${color}"/>
                <circle cx="100" cy="100" r="35" fill="#FFFFFF" fill-opacity="0.3"/>
                <path d="M60 80L75 65M125 135L140 150M60 120L45 135M140 65L125 80" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
            </svg>
        `;
    } else {
        svgContent = `
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#F8F8F8"/>
                <circle cx="100" cy="100" r="60" fill="#5EADF0"/>
                <circle cx="100" cy="100" r="45" fill="#FFFFFF" fill-opacity="0.3"/>
                <path d="M70 100H130" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
                <path d="M100 70V130" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="modal-body">
                <div class="product-modal-image">
                    ${svgContent}
                </div>
                <div class="product-modal-info">
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                        <span class="rating-number">(${product.rating})</span>
                    </div>
                    <p class="product-modal-price">$${product.price.toFixed(2)}</p>
                    <p class="product-modal-description">${product.description}</p>
                    <p class="product-modal-stock">In Stock: ${product.stock} units</p>
                    <div class="product-modal-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease">-</button>
                            <input type="number" class="quantity-input" value="1" min="1" max="${product.stock}">
                            <button class="quantity-btn increase">+</button>
                        </div>
                        <button class="btn primary-btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Style the modal content
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.backgroundColor = '#FFFFFF';
    modalContent.style.borderRadius = '8px';
    modalContent.style.maxWidth = '800px';
    modalContent.style.width = '90%';
    modalContent.style.padding = '20px';
    modalContent.style.position = 'relative';
    modalContent.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    
    // Style close button
    const closeButton = modal.querySelector('.close-modal');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '15px';
    closeButton.style.fontSize = '24px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    closeButton.style.border = 'none';
    closeButton.style.background = 'none';
    
    // Style modal body
    const modalBody = modal.querySelector('.modal-body');
    modalBody.style.display = 'flex';
    modalBody.style.flexWrap = 'wrap';
    modalBody.style.gap = '20px';
    
    // Style product image container
    const imageContainer = modal.querySelector('.product-modal-image');
    imageContainer.style.flex = '1';
    imageContainer.style.minWidth = '200px';
    imageContainer.style.display = 'flex';
    imageContainer.style.justifyContent = 'center';
    imageContainer.style.alignItems = 'center';
    
    // Style product info container
    const infoContainer = modal.querySelector('.product-modal-info');
    infoContainer.style.flex = '1';
    infoContainer.style.minWidth = '300px';
    
    // Style product price
    const price = modal.querySelector('.product-modal-price');
    price.style.fontSize = '24px';
    price.style.fontWeight = 'bold';
    price.style.color = 'var(--primary-color)';
    price.style.margin = '10px 0';
    
    // Style product description
    const description = modal.querySelector('.product-modal-description');
    description.style.marginBottom = '20px';
    
    // Style stock info
    const stock = modal.querySelector('.product-modal-stock');
    stock.style.marginBottom = '20px';
    stock.style.color = product.stock > 10 ? 'green' : product.stock > 5 ? 'orange' : 'red';
    
    // Style quantity control
    const quantityControl = modal.querySelector('.quantity-control');
    quantityControl.style.display = 'flex';
    quantityControl.style.alignItems = 'center';
    quantityControl.style.marginBottom = '20px';
    
    const quantityInput = modal.querySelector('.quantity-input');
    quantityInput.style.width = '50px';
    quantityInput.style.textAlign = 'center';
    quantityInput.style.margin = '0 10px';
    quantityInput.style.padding = '5px';
    quantityInput.style.border = '1px solid #ccc';
    quantityInput.style.borderRadius = '4px';
    
    const quantityBtns = modal.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
        btn.style.width = '30px';
        btn.style.height = '30px';
        btn.style.backgroundColor = '#f0f0f0';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.style.cursor = 'pointer';
    });
    
    // Add event listeners
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
    
    // Quantity decrease button
    const decreaseBtn = modal.querySelector('.quantity-btn.decrease');
    decreaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });
    
    // Quantity increase button
    const increaseBtn = modal.querySelector('.quantity-btn.increase');
    increaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity < product.stock) {
            quantityInput.value = quantity + 1;
        }
    });
    
    // Add to cart button
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }, quantity);
        
        // Close modal
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
}

// Display pet listings on buy/sell page
function displayPetListings(listings) {
    const petListingsContainer = document.getElementById('pet-listings-container');
    
    if (!petListingsContainer) return;
    
    // Clear current listings
    petListingsContainer.innerHTML = '';
    
    if (listings.length === 0) {
        petListingsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--light-gray); margin-bottom: 1rem;"></i>
                <h3>No pets found</h3>
                <p>Try different filter options</p>
            </div>
        `;
        return;
    }
    
    // Create pet listing cards
    listings.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        
        // Create SVG for pet
        let svgContent = '';
        
        if (pet.species === 'Dog') {
            const color = '#FFD166';
            svgContent = `
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" rx="10" fill="#F8F8F8"/>
                    <ellipse cx="100" cy="150" rx="60" ry="20" fill="#E2E8F0"/>
                    <path d="M160 100C160 128.719 133.137 150 100 150C66.8629 150 40 128.719 40 100C40 71.2812 66.8629 50 100 50C133.137 50 160 71.2812 160 100Z" fill="${color}"/>
                    <circle cx="80" cy="90" r="8" fill="#FFFFFF"/>
                    <circle cx="80" cy="90" r="4" fill="#333333"/>
                    <circle cx="120" cy="90" r="8" fill="#FFFFFF"/>
                    <circle cx="120" cy="90" r="4" fill="#333333"/>
                    <path d="M90 110C90 110 95 115 100 115C105 115 110 110 110 110" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
                    <path d="M60 70C60 70 40 60 40 80" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
                    <path d="M140 70C140 70 160 60 160 80" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
                    <ellipse cx="100" cy="130" rx="15" ry="10" fill="#FFFFFF" fill-opacity="0.6"/>
                </svg>
            `;
        } else {
            // Cat SVG
            const color = '#A1E8E4';
            svgContent = `
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" rx="10" fill="#F8F8F8"/>
                    <ellipse cx="100" cy="150" rx="50" ry="15" fill="#E2E8F0"/>
                    <path d="M65 60L50 40M135 60L150 40" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
                    <path d="M150 100C150 128.719 127.614 150 100 150C72.3858 150 50 128.719 50 100C50 71.2812 72.3858 50 100 50C127.614 50 150 71.2812 150 100Z" fill="${color}"/>
                    <path d="M85 90L75 85M115 90L125 85" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="85" cy="90" r="5" fill="#333333"/>
                    <circle cx="115" cy="90" r="5" fill="#333333"/>
                    <path d="M95 100C95 100 98 105 100 105C102 105 105 100 105 100" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
                    <ellipse cx="100" cy="115" rx="8" ry="5" fill="#FFFFFF" fill-opacity="0.6"/>
                </svg>
            `;
        }
        
        petCard.innerHTML = `
            <div class="pet-image">
                ${svgContent}
            </div>
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <div class="pet-badges">
                    <span class="badge species-badge">${pet.species}</span>
                    <span class="badge breed-badge">${pet.breed}</span>
                </div>
                <p class="pet-meta">
                    <span><i class="fas fa-birthday-cake"></i> ${pet.age}</span>
                    <span><i class="fas fa-${pet.gender === 'Male' ? 'mars' : 'venus'}"></i> ${pet.gender}</span>
                </p>
                <p class="pet-price">$${pet.price}</p>
                <p class="pet-location"><i class="fas fa-map-marker-alt"></i> ${pet.location}</p>
                <div class="pet-health-info">
                    ${pet.vaccinated ? '<span class="health-badge"><i class="fas fa-syringe"></i> Vaccinated</span>' : ''}
                    ${pet.neutered ? '<span class="health-badge"><i class="fas fa-cut"></i> Neutered/Spayed</span>' : ''}
                    ${pet.microchipped ? '<span class="health-badge"><i class="fas fa-microchip"></i> Microchipped</span>' : ''}
                </div>
                <div class="pet-seller">
                    <p>Seller: ${pet.seller} <span class="seller-rating">${generateStarRating(pet.sellerRating)}</span></p>
                </div>
                <button class="btn primary-btn view-pet-btn" data-id="${pet.id}">View Details</button>
            </div>
        `;
        
        petListingsContainer.appendChild(petCard);
    });
    
    // Add event listeners for View Details buttons
    const viewPetButtons = document.querySelectorAll('.view-pet-btn');
    viewPetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const petId = this.dataset.id;
            const pet = petListings.find(p => p.id === petId);
            
            if (pet) {
                showPetModal(pet);
            }
        });
    });
}

// Setup pet filters for the buy/sell page
function setupPetFilters() {
    const petFiltersContainer = document.getElementById('pet-filters');
    
    if (!petFiltersContainer) return;
    
    // Create filter form
    petFiltersContainer.innerHTML = `
        <div class="filter-group">
            <label>Pet Type</label>
            <div class="filter-options">
                <button class="filter-option active" data-filter="species" data-value="all">All</button>
                <button class="filter-option" data-filter="species" data-value="Dog">Dogs</button>
                <button class="filter-option" data-filter="species" data-value="Cat">Cats</button>
            </div>
        </div>
        
        <div class="filter-group">
            <label>Gender</label>
            <div class="filter-options">
                <button class="filter-option active" data-filter="gender" data-value="all">All</button>
                <button class="filter-option" data-filter="gender" data-value="Male">Male</button>
                <button class="filter-option" data-filter="gender" data-value="Female">Female</button>
            </div>
        </div>
        
        <div class="filter-group">
            <label>Price Range</label>
            <div class="price-range">
                <input type="range" id="price-range" min="500" max="1000" step="50" value="1000">
                <span id="price-display">Up to $1000</span>
            </div>
        </div>
        
        <div class="filter-group">
            <label>Health</label>
            <div class="filter-options checkboxes">
                <label class="checkbox-label">
                    <input type="checkbox" id="vaccinated-filter"> Vaccinated
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" id="neutered-filter"> Neutered/Spayed
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" id="microchipped-filter"> Microchipped
                </label>
            </div>
        </div>
        
        <button id="reset-filters" class="btn secondary-btn">Reset Filters</button>
    `;
    
    // Current filter state
    const filterState = {
        species: 'all',
        gender: 'all',
        maxPrice: 1000,
        vaccinated: false,
        neutered: false,
        microchipped: false
    };
    
    // Add event listeners to filter buttons
    const filterButtons = petFiltersContainer.querySelectorAll('.filter-option');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.dataset.filter;
            const filterValue = this.dataset.value;
            
            // Update active class for this filter group
            const groupButtons = petFiltersContainer.querySelectorAll(`.filter-option[data-filter="${filterType}"]`);
            groupButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter state
            filterState[filterType] = filterValue;
            
            // Apply filters
            applyPetFilters();
        });
    });
    
    // Price range filter
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    
    if (priceRange && priceDisplay) {
        priceRange.addEventListener('input', function() {
            const value = this.value;
            priceDisplay.textContent = `Up to $${value}`;
            filterState.maxPrice = parseInt(value);
            applyPetFilters();
        });
    }
    
    // Health checkbox filters
    const vaccinatedFilter = document.getElementById('vaccinated-filter');
    const neuteredFilter = document.getElementById('neutered-filter');
    const microchippedFilter = document.getElementById('microchipped-filter');
    
    if (vaccinatedFilter) {
        vaccinatedFilter.addEventListener('change', function() {
            filterState.vaccinated = this.checked;
            applyPetFilters();
        });
    }
    
    if (neuteredFilter) {
        neuteredFilter.addEventListener('change', function() {
            filterState.neutered = this.checked;
            applyPetFilters();
        });
    }
    
    if (microchippedFilter) {
        microchippedFilter.addEventListener('change', function() {
            filterState.microchipped = this.checked;
            applyPetFilters();
        });
    }
    
    // Reset filters button
    const resetButton = document.getElementById('reset-filters');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Reset filter state
            filterState.species = 'all';
            filterState.gender = 'all';
            filterState.maxPrice = 1000;
            filterState.vaccinated = false;
            filterState.neutered = false;
            filterState.microchipped = false;
            
            // Reset UI
            filterButtons.forEach(btn => {
                if (btn.dataset.value === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            priceRange.value = 1000;
            priceDisplay.textContent = 'Up to $1000';
            
            vaccinatedFilter.checked = false;
            neuteredFilter.checked = false;
            microchippedFilter.checked = false;
            
            // Apply reset filters
            applyPetFilters();
        });
    }
    
    // Apply filters function
    function applyPetFilters() {
        let filteredPets = petListings;
        
        // Filter by species
        if (filterState.species !== 'all') {
            filteredPets = filteredPets.filter(pet => pet.species === filterState.species);
        }
        
        // Filter by gender
        if (filterState.gender !== 'all') {
            filteredPets = filteredPets.filter(pet => pet.gender === filterState.gender);
        }
        
        // Filter by price
        filteredPets = filteredPets.filter(pet => pet.price <= filterState.maxPrice);
        
        // Filter by health options
        if (filterState.vaccinated) {
            filteredPets = filteredPets.filter(pet => pet.vaccinated);
        }
        
        if (filterState.neutered) {
            filteredPets = filteredPets.filter(pet => pet.neutered);
        }
        
        if (filterState.microchipped) {
            filteredPets = filteredPets.filter(pet => pet.microchipped);
        }
        
        // Display filtered pets
        displayPetListings(filteredPets);
    }
}

// Show pet details modal
function showPetModal(pet) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'pet-modal';
    
    // Style the modal
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.3s ease';
    
    //// Pet Shop Products Data
const shopProducts = [
    {
        id: "prod-1",
        name: "Premium Dog Food",
        price: 24.99,
        category: "food",
        petType: "dog",
        image: "dog-food",
        rating: 4.8,
        inStock: true,
        description: "High-quality nutritionally balanced dog food made with real chicken and vegetables. Supports digestive health and provides essential nutrients for your canine companion.",
        features: [
            "Made with real chicken",
            "No artificial preservatives",
            "Rich in essential vitamins and minerals",
            "Supports healthy coat and skin",
            "Promotes digestive health"
        ]
    },
    {
        id: "prod-2",
        name: "Cat Scratching Post",
        price: 34.99,
        category: "furniture",
        petType: "cat",
        image: "cat-post",
        rating: 4.6,
        inStock: true,
        description: "Durable cat scratching post with a plush perch. Helps save your furniture while providing your feline friend with a designated scratching area and comfortable resting spot.",
        features: [
            "Sisal rope scratch surface",
            "Plush perch on top",
            "Stable base prevents tipping",
            "Easy to assemble",
            "Suitable for cats of all sizes"
        ]
    },
    {
        id: "prod-3",
        name: "Interactive Pet Toy",
        price: 19.99,
        category: "toys",
        petType: "both",
        image: "pet-toy",
        rating: 4.7,
        inStock: true,
        description: "Engaging interactive toy that keeps your pets entertained and mentally stimulated. Features unpredictable movements and sounds that trigger your pet's natural hunting instincts.",
        features: [
            "Unpredictable movement patterns",
            "Battery-operated (batteries included)",
            "Durable design",
            "Automatic shut-off to save battery",
            "Suitable for cats and small dogs"
        ]
    },
    {
        id: "prod-4",
        name: "Premium Cat Food",
        price: 21.99,
        category: "food",
        petType: "cat",
        image: "cat-food",
        rating: 4.9,
        inStock: true,
        description: "Grain-free premium cat food with real salmon. Specially formulated to meet the nutritional needs of adult cats while supporting urinary tract health.",
        features: [
            "Real salmon as first ingredient",
            "Grain-free formula",
            "Added taurine for heart health",
            "Supports urinary tract health",
            "No artificial colors or flavors"
        ]
    },
    {
        id: "prod-5",
        name: "Dog Leash and Collar Set",
        price: 29.99,
        category: "accessories",
        petType: "dog",
        image: "dog-leash",
        rating: 4.5,
        inStock: true,
        description: "Durable nylon leash and collar set with reflective stitching for visibility during evening walks. Comfortable padded handle provides extra comfort during walks.",
        features: [
            "Reflective stitching for night safety",
            "Padded handle for comfort",
            "Durable metal hardware",
            "Adjustable collar",
            "Available in multiple sizes"
        ]
    },
    {
        id: "prod-6",
        name: "Cat Litter Box Enclosure",
        price: 59.99,
        category: "furniture",
        petType: "cat",
        image: "litter-box",
        rating: 4.3,
        inStock: true,
        description: "Stylish furniture piece that discreetly houses your cat's litter box. Provides privacy for your cat while keeping litter contained and out of sight.",
        features: [
            "Stylish design blends with home decor",
            "Side entry for easy cat access",
            "Built-in litter scatter control",
            "Easy to clean",
            "Fits standard-sized litter boxes"
        ]
    },
    {
        id: "prod-7",
        name: "Dog Bed",
        price: 49.99,
        category: "furniture",
        petType: "dog",
        image: "dog-bed",
        rating: 4.7,
        inStock: true,
        description: "Orthopedic dog bed with memory foam for superior comfort and joint support. Ideal for older dogs or those with arthritis. Removable, machine-washable cover.",
        features: [
            "Memory foam for joint support",
            "Water-resistant liner",
            "Non-slip bottom",
            "Machine-washable cover",
            "Available in multiple sizes"
        ]
    },
    {
        id: "prod-8",
        name: "Bird Cage",
        price: 89.99,
        category: "housing",
        petType: "bird",
        image: "bird-cage",
        rating: 4.4,
        inStock: true,
        description: "Spacious bird cage with multiple perches and feeding stations. Easy-access doors and removable bottom tray make cleaning simple and stress-free.",
        features: [
            "Multiple perches at different heights",
            "Several feeding stations",
            "Easy-access doors",
            "Removable bottom tray for cleaning",
            "Suitable for small to medium-sized birds"
        ]
    },
    {
        id: "prod-9",
        name: "Aquarium Starter Kit",
        price: 79.99,
        category: "housing",
        petType: "fish",
        image: "aquarium",
        rating: 4.2,
        inStock: true,
        description: "Complete 20-gallon aquarium starter kit including tank, filter, LED lighting, and basic accessories. Perfect for beginners looking to set up their first aquarium.",
        features: [
            "20-gallon glass tank",
            "Energy-efficient LED lighting",
            "Quiet filtration system",
            "Includes basic accessories to start",
            "Setup guide included"
        ]
    },
    {
        id: "prod-10",
        name: "Small Animal Cage",
        price: 69.99,
        category: "housing",
        petType: "small-pet",
        image: "small-cage",
        rating: 4.5,
        inStock: true,
        description: "Multi-level cage for small pets like hamsters, guinea pigs, or gerbils. Features ramps, platforms, and an exercise wheel to keep your small pet active and engaged.",
        features: [
            "Multiple levels with ramps",
            "Built-in exercise wheel",
            "Deep base to prevent bedding scatter",
            "Easy-access doors",
            "Secure latching system"
        ]
    },
    {
        id: "prod-11",
        name: "Pet Grooming Kit",
        price: 39.99,
        category: "grooming",
        petType: "both",
        image: "grooming-kit",
        rating: 4.6,
        inStock: true,
        description: "Complete pet grooming kit with stainless steel scissors, nail clippers, brush, and comb. Keep your pet looking their best with professional-quality grooming tools.",
        features: [
            "Stainless steel scissors and clippers",
            "Ergonomic handles for comfortable grip",
            "De-shedding brush",
            "Detangling comb",
            "Comes in a convenient storage case"
        ]
    },
    {
        id: "prod-12",
        name: "Dog Training Treats",
        price: 12.99,
        category: "treats",
        petType: "dog",
        image: "dog-treats",
        rating: 4.8,
        inStock: true,
        description: "Small, soft training treats perfect for positive reinforcement during training sessions. Made with real chicken and limited ingredients for dogs with sensitive stomachs.",
        features: [
            "Made with real chicken",
            "Small size ideal for training",
            "Limited ingredients",
            "No artificial colors or flavors",
            "Resealable bag to maintain freshness"
        ]
    }
];

// Pets for Adoption/Sale Data
const petsData = [
    {
        id: "pet-1",
        name: "Max",
        type: "Dog",
        breed: "Golden Retriever",
        age: "2 years",
        gender: "Male",
        location: "New York, NY",
        description: "Max is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's good with children and other dogs.",
        image: "golden-retriever",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "House-trained",
            "Good with kids",
            "Good with other pets"
        ]
    },
    {
        id: "pet-2",
        name: "Luna",
        type: "Cat",
        breed: "Siamese",
        age: "1 year",
        gender: "Female",
        location: "Los Angeles, CA",
        description: "Luna is a curious and affectionate Siamese cat. She enjoys playing with toys and cuddling on the couch. She's litter trained and good with other cats.",
        image: "siamese-cat",
        status: "available",
        features: [
            "Vaccinated",
            "Spayed",
            "Litter-trained",
            "Indoor only",
            "Playful"
        ]
    },
    {
        id: "pet-3",
        name: "Charlie",
        type: "Dog",
        breed: "Beagle",
        age: "3 years",
        gender: "Male",
        location: "Chicago, IL",
        description: "Charlie is a friendly Beagle with a great nose for adventure. He's energetic and would do well in a home with a yard where he can explore.",
        image: "beagle",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "House-trained",
            "Needs active owner",
            "Loves outdoors"
        ]
    },
    {
        id: "pet-4",
        name: "Bella",
        type: "Cat",
        breed: "Maine Coon",
        age: "4 years",
        gender: "Female",
        location: "Seattle, WA",
        description: "Bella is a gentle giant with a luxurious coat. She's calm and enjoys being groomed. Would do well in a quiet home where she can relax.",
        image: "maine-coon",
        status: "available",
        features: [
            "Vaccinated",
            "Spayed",
            "Litter-trained",
            "Regular grooming needed",
            "Calm temperament"
        ]
    },
    {
        id: "pet-5",
        name: "Rocky",
        type: "Dog",
        breed: "German Shepherd",
        age: "2 years",
        gender: "Male",
        location: "Houston, TX",
        description: "Rocky is an intelligent and loyal German Shepherd. He's partially trained and would excel with an owner who continues his training and provides mental stimulation.",
        image: "german-shepherd",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "Partially trained",
            "Needs mental stimulation",
            "Protective"
        ]
    },
    {
        id: "pet-6",
        name: "Misty",
        type: "Cat",
        breed: "Persian",
        age: "5 years",
        gender: "Female",
        location: "Miami, FL",
        description: "Misty is a beautiful Persian cat with a sweet disposition. She enjoys being pampered and lounging in sunny spots. Her coat requires regular grooming.",
        image: "persian-cat",
        status: "available",
        features: [
            "Vaccinated",
            "Spayed",
            "Litter-trained",
            "Regular grooming required",
            "Indoor only"
        ]
    },
    {
        id: "pet-7",
        name: "Buddy",
        type: "Dog",
        breed: "Labrador Retriever",
        age: "1 year",
        gender: "Male",
        location: "Denver, CO",
        description: "Buddy is a playful young Lab who loves water and fetching balls. He's still learning manners but is eager to please and highly trainable.",
        image: "labrador",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "In training",
            "Energetic",
            "Loves water"
        ]
    },
    {
        id: "pet-8",
        name: "Oliver",
        type: "Cat",
        breed: "Scottish Fold",
        age: "2 years",
        gender: "Male",
        location: "Boston, MA",
        description: "Oliver is a charming Scottish Fold with distinctive folded ears. He's playful yet calm and gets along well with respectful children and other pets.",
        image: "scottish-fold",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "Litter-trained",
            "Good with kids",
            "Gets along with other pets"
        ]
    },
    {
        id: "pet-9",
        name: "Lucy",
        type: "Dog",
        breed: "Poodle",
        age: "3 years",
        gender: "Female",
        location: "San Francisco, CA",
        description: "Lucy is a hypoallergenic Poodle with a friendly, outgoing personality. She's well-trained and would do well in an active household.",
        image: "poodle",
        status: "available",
        features: [
            "Vaccinated",
            "Spayed",
            "Well-trained",
            "Hypoallergenic",
            "Loves walking"
        ]
    },
    {
        id: "pet-10",
        name: "Simba",
        type: "Cat",
        breed: "Orange Tabby",
        age: "2 years",
        gender: "Male",
        location: "Atlanta, GA",
        description: "Simba is an orange tabby with a big personality. He's adventurous and curious, enjoying high perches and interactive toys.",
        image: "tabby-cat",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "Litter-trained",
            "Adventurous",
            "Likes high perches"
        ]
    },
    {
        id: "pet-11",
        name: "Daisy",
        type: "Dog",
        breed: "Shih Tzu",
        age: "4 years",
        gender: "Female",
        location: "Phoenix, AZ",
        description: "Daisy is a sweet Shih Tzu who loves to be the center of attention. She enjoys short walks and cuddling on laps. Great for an apartment lifestyle.",
        image: "shih-tzu",
        status: "available",
        features: [
            "Vaccinated",
            "Spayed",
            "House-trained",
            "Low energy",
            "Good for apartments"
        ]
    },
    {
        id: "pet-12",
        name: "Leo",
        type: "Cat",
        breed: "Bengal",
        age: "1 year",
        gender: "Male",
        location: "Portland, OR",
        description: "Leo is an active Bengal with striking markings. He's intelligent and needs plenty of play and climbing opportunities to stay happy.",
        image: "bengal-cat",
        status: "available",
        features: [
            "Vaccinated",
            "Neutered",
            "Litter-trained",
            "Very active",
            "Needs enrichment"
        ]
    }
];

// Medical Services Data
const medicalServices = [
    {
        id: "med-1",
        name: "Routine Veterinary Check-up",
        price: 50.00,
        description: "Comprehensive physical examination to assess your pet's overall health. Includes weight check, temperature, heart and lung auscultation, and basic wellness assessment.",
        duration: "30 minutes",
        petTypes: ["Dogs", "Cats", "Small Pets"],
        image: "checkup"
    },
    {
        id: "med-2",
        name: "Vaccination Package",
        price: 85.00,
        description: "Essential vaccines to protect your pet against common diseases. Package includes core vaccines appropriate for your pet's species, age, and lifestyle.",
        duration: "20 minutes",
        petTypes: ["Dogs", "Cats"],
        image: "vaccine"
    },
    {
        id: "med-3",
        name: "Dental Cleaning",
        price: 199.99,
        description: "Professional dental cleaning to remove plaque and tartar buildup. Includes scaling, polishing, and fluoride treatment for optimal dental health.",
        duration: "45-60 minutes",
        petTypes: ["Dogs", "Cats"],
        image: "dental"
    },
    {
        id: "med-4",
        name: "Spay/Neuter Surgery",
        price: 250.00,
        description: "Safe and effective sterilization surgery. Price includes pre-surgery exam, anesthesia, procedure, and post-operative care instructions.",
        duration: "Day procedure",
        petTypes: ["Dogs", "Cats"],
        image: "surgery"
    },
    {
        id: "med-5",
        name: "Microchipping",
        price: 45.00,
        description: "Permanent identification for your pet. Includes microchip implantation and registration to a national pet recovery database.",
        duration: "10 minutes",
        petTypes: ["Dogs", "Cats", "Small Pets"],
        image: "microchip"
    },
    {
        id: "med-6",
        name: "Allergy Testing",
        price: 180.00,
        description: "Comprehensive testing to identify environmental or food allergies. Helps develop a management plan to reduce allergic reactions.",
        duration: "45 minutes + follow-up",
        petTypes: ["Dogs", "Cats"],
        image: "allergy"
    }
];

// Boarding Services Data
const boardingServices = [
    {
        id: "board-1",
        name: "Standard Dog Boarding",
        price: 35.00,
        priceType: "per night",
        description: "Comfortable indoor kennel with two daily walks, feeding according to your pet's schedule, and basic monitoring.",
        features: [
            "Indoor climate-controlled kennel",
            "Two 15-minute walks daily",
            "Regular feeding schedule",
            "Fresh water available at all times",
            "Basic monitoring"
        ],
        petType: "Dog",
        image: "dog-kennel"
    },
    {
        id: "board-2",
        name: "Luxury Dog Suite",
        price: 55.00,
        priceType: "per night",
        description: "Spacious private room with a raised bed, television, three daily walks, and extra playtime. Perfect for dogs who need more comfort and attention.",
        features: [
            "Private room with raised bed",
            "Television playing pet-friendly content",
            "Three 20-minute walks daily",
            "30 minutes of individual playtime",
            "Treat time and extra attention",
            "Photo updates sent to owner"
        ],
        petType: "Dog",
        image: "dog-suite"
    },
    {
        id: "board-3",
        name: "Cat Boarding",
        price: 25.00,
        priceType: "per night",
        description: "Quiet, comfortable cat condo with climbing shelves, toys, and regular attention from our cat-loving staff.",
        features: [
            "Multi-level cat condo",
            "Separate from dog boarding area",
            "Climbing shelves and hiding spots",
            "Toys and scratching posts",
            "Daily litter box cleaning",
            "Individual attention time"
        ],
        petType: "Cat",
        image: "cat-boarding"
    },
    {
        id: "board-4",
        name: "Luxury Cat Suite",
        price: 40.00,
        priceType: "per night",
        description: "Spacious private room with window views, multiple perches, premium bedding, and extra attention sessions.",
        features: [
            "Private room with window view",
            "Multiple perches and hiding places",
            "Premium bedding",
            "Two 15-minute individual attention sessions daily",
            "Treat time",
            "Photo updates sent to owner"
        ],
        petType: "Cat",
        image: "cat-suite"
    },
    {
        id: "board-5",
        name: "Small Pet Boarding",
        price: 20.00,
        priceType: "per night",
        description: "Safe, secure habitat for rabbits, guinea pigs, hamsters, and other small pets. Includes appropriate bedding, food, and daily check-ins.",
        features: [
            "Appropriate habitat for species",
            "Species-specific bedding",
            "Proper feeding schedule",
            "Daily habitat cleaning",
            "Regular monitoring",
            "Quiet area separate from dogs and cats"
        ],
        petType: "Small Pet",
        image: "small-pet"
    },
    {
        id: "board-6",
        name: "Bird Boarding",
        price: 22.00,
        priceType: "per night",
        description: "Safe, quiet environment for birds with appropriate perches, toys, and supervised out-of-cage time for larger species.",
        features: [
            "Appropriate cage setup",
            "Species-specific perches and toys",
            "Proper diet provided",
            "Daily cage cleaning",
            "Supervised out-of-cage time (for larger birds)",
            "Located in quiet area"
        ],
        petType: "Bird",
        image: "bird-boarding"
    },
    {
        id: "board-7",
        name: "Daycare Only - Dogs",
        price: 25.00,
        priceType: "per day",
        description: "Day boarding for dogs including supervised playtime, walks, and interaction with other compatible dogs. Perfect for pet parents who work long hours.",
        features: [
            "Supervised group play sessions",
            "Individual attention",
            "Lunch feeding if requested",
            "Two outdoor walks",
            "Rest periods",
            "Late pickup available"
        ],
        petType: "Dog",
        image: "dog-daycare"
    },
    {
        id: "board-8",
        name: "Extended Stay Package",
        price: 30.00,
        priceType: "per night (7+ nights)",
        description: "Discounted rate for longer stays (7+ nights) with all the amenities of standard boarding plus extra perks like grooming session and special treats.",
        features: [
            "All standard boarding amenities",
            "Discounted nightly rate",
            "One basic grooming session per week",
            "Special treat time",
            "Extra attention",
            "Regular photo updates"
        ],
        petType: "Both",
        image: "extended-stay"
    }
];}