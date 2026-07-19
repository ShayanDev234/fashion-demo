// AÉTHER STUDIO - Core Application Logic

// 1. Product Database (16 Premium Luxury Items)
const PRODUCTS = [
    {
        id: 1,
        name: "Oversized Cashmere Hoodie",
        brand: "Noir Studio",
        price: 245,
        category: "women",
        colors: ["Charcoal", "Ivory", "Sand"],
        sizes: ["XS", "S", "M", "L"],
        images: [
            "https://picsum.photos/seed/lux1/600/800",
            "https://picsum.photos/seed/lux1_alt/600/800"
        ],
        description: "An elevated everyday essential. Knit from exceptionally soft Mongolian cashmere with a clean, fluid silhouette, drop shoulders, and a substantial double-layered hood. Finished with clean ribbed cuffs and hem.",
        features: ["100% Mongolian Cashmere", "Double-layered structural hood", "Drop shoulder relaxed fit", "Dry clean only"],
        rating: 4.8,
        reviews: 42,
        isNew: true
    },
    {
        id: 2,
        name: "Relaxed Heavyweight Tee",
        brand: "Aether",
        price: 85,
        category: "men",
        colors: ["Ivory", "Charcoal", "Sage"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://picsum.photos/seed/lux2/600/800",
            "https://picsum.photos/seed/lux2_alt/600/800"
        ],
        description: "Crafted from a custom-developed 280gsm long-staple organic cotton. This tee offers a structured drape, a tight ribbed collar, and a slightly oversized cut that maintains its form throughout the day.",
        features: ["100% Organic Cotton (280gsm)", "Preshrunk vintage wash", "Reinforced neck ribbing", "Made in Portugal"],
        rating: 4.7,
        reviews: 89,
        isNew: false
    },
    {
        id: 3,
        name: "Classic Straight-Leg Denim",
        brand: "Velour",
        price: 180,
        category: "women",
        colors: ["Midnight Blue", "Charcoal"],
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://picsum.photos/seed/lux3/600/800",
            "https://picsum.photos/seed/lux3_alt/600/800"
        ],
        description: "Inspired by classic vintage fits. Cut from a 14oz Japanese selvedge denim that starts structured and molds to your body over time. Standard high rise with a clean, straight-leg finish from hip to ankle.",
        features: ["14oz Japanese Selvedge Denim", "Genuine leather brand patch", "Branded silver-tone rivets", "Button fly closure"],
        rating: 4.9,
        reviews: 31,
        isNew: true
    },
    {
        id: 4,
        name: "Suede Biker Jacket",
        brand: "Atelier",
        price: 650,
        category: "men",
        colors: ["Sand", "Midnight Black"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://picsum.photos/seed/lux4/600/800",
            "https://picsum.photos/seed/lux4_alt/600/800"
        ],
        description: "A timeless masterpiece. Handmade in Tuscany from ultra-soft goat suede leather. Features custom brushed metal hardware, diagonal zip closure, and a silky cupro lining for smooth layering.",
        features: ["100% Italian Goatskin Suede", "Cupro lining (highly breathable)", "YKK Excella zippers", "Inner pocket with zip closure"],
        rating: 5.0,
        reviews: 18,
        isNew: true
    },
    {
        id: 5,
        name: "Minimal Court Sneakers",
        brand: "Luxe Form",
        price: 290,
        category: "footwear",
        colors: ["Off-White", "Midnight Black"],
        sizes: ["40", "41", "42", "43", "44", "45"],
        images: [
            "https://picsum.photos/seed/lux5/600/800",
            "https://picsum.photos/seed/lux5_alt/600/800"
        ],
        description: "The ultimate clean court sneaker. Constructed with full-grain Italian Nappa leather, hand-stitched margom rubber cupsoles, and a cushioned calfskin footbed for cloud-like comfort.",
        features: ["Premium Italian Nappa Leather", "Italian Margom rubber soles", "Waxed cotton laces", "Gold-foiled serial code on heel"],
        rating: 4.6,
        reviews: 56,
        isNew: false
    },
    {
        id: 6,
        name: "Premium Knit Polo",
        brand: "Urban Thread",
        price: 135,
        category: "men",
        colors: ["Sage", "Ivory", "Charcoal"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://picsum.photos/seed/lux6/600/800",
            "https://picsum.photos/seed/lux6_alt/600/800"
        ],
        description: "A elegant summer statement knit. Woven from a lightweight organic cotton and silk blend. Features a retro collar design, seamless placket, and ribbed cuffs for a tailored profile.",
        features: ["70% Organic Cotton, 30% Mulberry Silk", "Seamless buttonless collar placket", "Fine 18-gauge knit", "Breathable, open-weave structure"],
        rating: 4.7,
        reviews: 24,
        isNew: false
    },
    {
        id: 7,
        name: "Structured Cargo Trousers",
        brand: "Nord Apparel",
        price: 195,
        category: "men",
        colors: ["Sage", "Sand", "Midnight Black"],
        sizes: ["30", "32", "34", "36"],
        images: [
            "https://picsum.photos/seed/lux7/600/800",
            "https://picsum.photos/seed/lux7_alt/600/800"
        ],
        description: "A refined take on utilitarian design. Made with heavy cotton twill, detailed with clean origami cargo pockets that sit flat against the leg, and adjustable ankle tabs to modify the drape from straight to tapered.",
        features: ["100% Double-weave Cotton Twill", "Origami-style flat cargo pockets", "Corozo nut buttons", "Adjustable hem buttons"],
        rating: 4.5,
        reviews: 37,
        isNew: false
    },
    {
        id: 8,
        name: "Satin Bomber Jacket",
        brand: "Luma",
        price: 320,
        category: "women",
        colors: ["Midnight Black", "Sage"],
        sizes: ["XS", "S", "M", "L"],
        images: [
            "https://picsum.photos/seed/lux8/600/800",
            "https://picsum.photos/seed/lux8_alt/600/800"
        ],
        description: "An elegant outer layer. Cut from dense satin nylon that repels wind and light rain while presenting a gorgeous, subtle luster. Styled with a gathered sleeve detail and chunky luxury metal hardware.",
        features: ["Water-resistant heavy satin nylon", "Gathered elastic seam sleeves", "Ribbed knit collar and cuffs", "Heavy-gauge dual directional front zipper"],
        rating: 4.8,
        reviews: 29,
        isNew: true
    },
    {
        id: 9,
        name: "Tailored Wool Trenchcoat",
        brand: "Atelier",
        price: 495,
        category: "women",
        colors: ["Sand", "Charcoal"],
        sizes: ["XS", "S", "M", "L"],
        images: [
            "https://picsum.photos/seed/lux9/600/800",
            "https://picsum.photos/seed/lux9_alt/600/800"
        ],
        description: "Double-breasted trenchcoat designed with structured shoulders and an elegant elongated drape. Crafted from a thick double-faced virgin wool blend that offers exceptional warmth and luxury styling.",
        features: ["80% Virgin Wool, 20% Cashmere", "Fully lined in luxury Bemberg lining", "Detachable self-tie waist belt", "Deep storm flap details"],
        rating: 4.9,
        reviews: 15,
        isNew: true
    },
    {
        id: 10,
        name: "Linen Resort Shirt",
        brand: "Aether",
        price: 110,
        category: "men",
        colors: ["Ivory", "Sand", "Sage"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://picsum.photos/seed/lux10/600/800",
            "https://picsum.photos/seed/lux10_alt/600/800"
        ],
        description: "Cut from the finest Irish linen, pre-washed for extra softness. A relaxed camp collar design and a loose, airy drape make this shirt perfect for warm-weather coastal escapes.",
        features: ["100% Pre-washed Irish Linen", "Breathable open camp collar", "Clean French seams", "Sustainably sourced mother-of-pearl buttons"],
        rating: 4.4,
        reviews: 62,
        isNew: false
    },
    {
        id: 11,
        name: "Ribbed Mockneck Sweater",
        brand: "Noir Studio",
        price: 165,
        category: "women",
        colors: ["Ivory", "Charcoal", "Sand"],
        sizes: ["XS", "S", "M", "L"],
        images: [
            "https://picsum.photos/seed/lux11/600/800",
            "https://picsum.photos/seed/lux11_alt/600/800"
        ],
        description: "Designed with a high ribbed collar and vertical ribbed design. Woven from soft extrafine Merino wool that wraps the body snugly and acts as an optimal layering foundation.",
        features: ["100% Extrafine Merino Wool", "Seamless 3D knit design", "Comfortable mock neck structure", "Extended ribbed sleeves"],
        rating: 4.7,
        reviews: 48,
        isNew: false
    },
    {
        id: 12,
        name: "Technical Windbreaker",
        brand: "Nord Apparel",
        price: 260,
        category: "men",
        colors: ["Midnight Black", "Sage"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://picsum.photos/seed/lux12/600/800",
            "https://picsum.photos/seed/lux12_alt/600/800"
        ],
        description: "A high-performance shell optimized for urban exploration. Constructed using lightweight 3-layer laminated waterproof nylon fabric. Sealed seams, waterproof aquaguard zippers, and adjustable hood toggle.",
        features: ["Waterproof 3-layer ripstop shell", "Heat-sealed waterproof seams", "YKK AquaGuard zippers", "Drawcord adjustable waist and hood"],
        rating: 4.6,
        reviews: 19,
        isNew: true
    },
    {
        id: 13,
        name: "Chelsea Leather Boots",
        brand: "Luxe Form",
        price: 340,
        category: "footwear",
        colors: ["Midnight Black", "Sand"],
        sizes: ["40", "41", "42", "43", "44", "45"],
        images: [
            "https://picsum.photos/seed/lux13/600/800",
            "https://picsum.photos/seed/lux13_alt/600/800"
        ],
        description: "Classic Chelsea boots updated with a clean modern sole profile. Made with full-grain calfskin leather that develops a beautiful patina. Premium elastic panels and tabs for easy pull-on action.",
        features: ["100% Calfskin Upper", "Premium leather outsole with rubber insert", "Durable elastic side panels", "Handcrafted in Spain"],
        rating: 4.8,
        reviews: 33,
        isNew: false
    },
    {
        id: 14,
        name: "Minimalist Canvas Tote",
        brand: "Aether",
        price: 95,
        category: "accessories",
        colors: ["Sand", "Charcoal"],
        sizes: ["One Size"],
        images: [
            "https://picsum.photos/seed/lux14/600/800",
            "https://picsum.photos/seed/lux14_alt/600/800"
        ],
        description: "A structural daily tote built from 24oz heavy organic cotton duck canvas. Features handles reinforced with full-grain vachetta leather and a spacious interior compartment with dedicated pockets.",
        features: ["24oz Organic Cotton Duck Canvas", "Vachetta leather handles", "Magnetic top closure", "Internal zippered organizer pocket"],
        rating: 4.5,
        reviews: 74,
        isNew: false
    },
    {
        id: 15,
        name: "Structured Shoulder Bag",
        brand: "Noir Studio",
        price: 380,
        category: "accessories",
        colors: ["Midnight Black", "Ivory", "Gold"],
        sizes: ["One Size"],
        images: [
            "https://picsum.photos/seed/lux15/600/800",
            "https://picsum.photos/seed/lux15_alt/600/800"
        ],
        description: "A sculptural daily companion. Handcrafted with fine pebble grain leather. Highlighted by our signature geometric gold clasp and modular adjustable leather strap for shoulder or crossbody style.",
        features: ["100% Pebble-grain Cowhide Leather", "Premium brass-finish hardware clasp", "Adjustable modular shoulder strap", "Soft suede lining interior"],
        rating: 4.9,
        reviews: 22,
        isNew: true
    },
    {
        id: 16,
        name: "Ribbed Cashmere Beanie",
        brand: "Luma",
        price: 70,
        category: "accessories",
        colors: ["Charcoal", "Ivory", "Sand"],
        sizes: ["One Size"],
        images: [
            "https://picsum.photos/seed/lux16/600/800",
            "https://picsum.photos/seed/lux16_alt/600/800"
        ],
        description: "Knitted from double-ply extra soft cashmere. This ribbed beanie offers substantial warmth and cozy structure with a wide fold-over brim. The perfect luxury accessory for cooler climates.",
        features: ["100% Extrafine cashmere knit", "Heavy 7-gauge ribbed knit", "Adjustable cuff fold", "Made in Scotland"],
        rating: 4.7,
        reviews: 55,
        isNew: false
    }
];

// 2. Global State Management (Cart & Wishlist stored in LocalStorage)
let cart = JSON.parse(localStorage.getItem('aether_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('aether_wishlist')) || [];

// Save to LocalStorage
function saveCart() {
    localStorage.setItem('aether_cart', JSON.stringify(cart));
    updateCartUI();
}

function saveWishlist() {
    localStorage.setItem('aether_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

// 3. Cart Actions
function addToCart(productId, quantity = 1, color = '', size = '') {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Use default values if selectors are blank
    const selectedColor = color || product.colors[0];
    const selectedSize = size || product.sizes[0];

    // Unique key for distinct color/size configurations
    const cartItemId = `${productId}-${selectedColor.toLowerCase().replace(/\s/g, '')}-${selectedSize.toLowerCase()}`;
    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            cartItemId: cartItemId,
            productId: productId,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.images[0],
            color: selectedColor,
            size: selectedSize,
            quantity: quantity
        });
    }

    saveCart();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(cartItemId) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    const itemName = item ? item.name : 'Item';
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    saveCart();
    showToast(`${itemName} removed from cart`);
}

function updateCartQty(cartItemId, newQty) {
    newQty = parseInt(newQty);
    if (isNaN(newQty) || newQty <= 0) {
        removeFromCart(cartItemId);
        return;
    }
    const idx = cart.findIndex(i => i.cartItemId === cartItemId);
    if (idx > -1) {
        cart[idx].quantity = newQty;
        saveCart();
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function clearCart() {
    cart = [];
    saveCart();
}

// 4. Wishlist Actions
function toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(productId);
        showToast(`${product.name} added to wishlist`);
    }
    saveWishlist();
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

// 5. Header UI Syncing
function updateCartUI() {
    const cartCountBadges = document.querySelectorAll('.cart-count');
    const totalCount = getCartCount();
    cartCountBadges.forEach(badge => {
        badge.innerText = totalCount;
        badge.style.display = totalCount > 0 ? 'inline-block' : 'none';
    });

    // Populate the Slide-out Mini Cart if present
    const miniCartContainer = document.getElementById('mini-cart-items');
    const miniCartSubtotal = document.getElementById('mini-cart-subtotal');
    
    if (miniCartContainer) {
        if (cart.length === 0) {
            miniCartContainer.innerHTML = `
                <div class="text-center py-5">
                    <p class="text-muted mb-4 font-body">Your cart is empty.</p>
                    <a href="shop.html" class="btn btn-dark-luxury rounded-0 py-3 px-4 font-body">Shop Collections</a>
                </div>
            `;
            if (miniCartSubtotal) miniCartSubtotal.innerText = '$0.00';
        } else {
            let html = '';
            cart.forEach(item => {
                html += `
                    <div class="mini-cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid" style="width: 70px; height: 90px; object-fit: cover; border-radius: 4px;">
                        <div class="ms-3 flex-grow-1">
                            <span class="text-xs text-uppercase font-body tracking-widest text-muted">${item.brand}</span>
                            <h6 class="font-heading mb-1 text-sm"><a href="product.html?id=${item.productId}" class="text-dark text-decoration-none">${item.name}</a></h6>
                            <p class="text-xs font-body mb-1 text-muted">Size: ${item.size} | Color: ${item.color}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-xs font-body text-dark">${item.quantity} × $${item.price}</span>
                                <button onclick="removeFromCart('${item.cartItemId}')" class="text-xs border-0 bg-transparent text-danger p-0" title="Remove"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            });
            miniCartContainer.innerHTML = html;
            if (miniCartSubtotal) miniCartSubtotal.innerText = `$${getCartTotal().toLocaleString()}.00`;
        }
    }

    // Call checkout-specific update function if checkout page loads
    if (typeof updateCheckoutPageUI === 'function') {
        updateCheckoutPageUI();
    }
}

function updateWishlistUI() {
    const wishlistCountBadges = document.querySelectorAll('.wishlist-count');
    const totalCount = wishlist.length;
    wishlistCountBadges.forEach(badge => {
        badge.innerText = totalCount;
        badge.style.display = totalCount > 0 ? 'inline-block' : 'none';
    });

    // Update wishlist heart button icons across cards
    PRODUCTS.forEach(product => {
        const btn = document.querySelectorAll(`.wishlist-btn[data-id="${product.id}"]`);
        btn.forEach(b => {
            const icon = b.querySelector('i');
            if (icon) {
                if (isInWishlist(product.id)) {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid', 'text-gold');
                } else {
                    icon.classList.remove('fa-solid', 'text-gold');
                    icon.classList.add('fa-regular');
                }
            }
        });
    });
}

// 6. Premium Toast Notification Center
function showToast(message) {
    let toastContainer = document.getElementById('luxury-toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'luxury-toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '30px';
        toastContainer.style.right = '30px';
        toastContainer.style.zIndex = '9999';
        toastContainer.style.display = 'flex';
        toastContainer.style.flexDirection = 'column';
        toastContainer.style.gap = '10px';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'luxury-toast font-body';
    toast.style.background = '#111111';
    toast.style.color = '#ffffff';
    toast.style.padding = '15px 25px';
    toast.style.borderRadius = '0px';
    toast.style.borderLeft = '3px solid #B79A67';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
    toast.style.transform = 'translateY(50px)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    toast.style.fontSize = '13px';
    toast.style.letterSpacing = '1px';
    toast.style.textTransform = 'uppercase';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.justifyContent = 'space-between';
    toast.style.gap = '20px';

    toast.innerHTML = `
        <span><i class="fa-solid fa-check text-gold me-2"></i> ${message}</span>
        <span class="toast-close text-muted cursor-pointer" style="font-size:10px; cursor: pointer;"><i class="fa-solid fa-x"></i></span>
    `;

    toastContainer.appendChild(toast);

    // GSAP reveal if available, otherwise native CSS transition
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 50);

    const closeToast = () => {
        toast.style.transform = 'translateY(-20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    };

    toast.querySelector('.toast-close').addEventListener('click', closeToast);
    setTimeout(closeToast, 4000);
}

// 7. Quick View Modal Implementation
function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check if the quick view modal element exists, if not construct it
    let modalEl = document.getElementById('quickViewModal');
    if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = 'quickViewModal';
        modalEl.className = 'modal fade rounded-0';
        modalEl.setAttribute('tabindex', '-1');
        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-xl rounded-0">
                <div class="modal-content border-0 rounded-0 overflow-hidden bg-white">
                    <button type="button" class="btn-close position-absolute end-0 top-0 m-4 z-3 shadow-none text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-body p-0">
                        <div class="row g-0">
                            <!-- Left Gallery -->
                            <div class="col-md-6 bg-light">
                                <div class="quick-view-carousel-container position-relative" style="height: 100%;">
                                    <img id="qv-main-img" src="" alt="" class="img-fluid w-100" style="height: 600px; object-fit: cover;">
                                    <div class="qv-thumbs-wrapper d-flex gap-2 position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.6));">
                                        <!-- Thumbs here -->
                                    </div>
                                </div>
                            </div>
                            <!-- Right Details -->
                            <div class="col-md-6 p-5 d-flex flex-column justify-content-center">
                                <span id="qv-brand" class="text-xs text-uppercase tracking-widest text-gold font-body mb-2"></span>
                                <h2 id="qv-name" class="font-heading mb-3 h3 text-dark"></h2>
                                <h4 id="qv-price" class="font-body text-dark mb-4">$0.00</h4>
                                <p id="qv-desc" class="font-body text-muted text-sm mb-4" style="line-height: 1.6;"></p>
                                
                                <div class="mb-4">
                                    <label class="text-xs text-uppercase tracking-widest font-body text-dark mb-2 d-block">Select Color</label>
                                    <div id="qv-colors" class="d-flex gap-2"></div>
                                </div>
                                
                                <div class="mb-4">
                                    <label class="text-xs text-uppercase tracking-widest font-body text-dark mb-2 d-block">Select Size</label>
                                    <div id="qv-sizes" class="d-flex gap-2"></div>
                                </div>

                                <div class="mb-5 d-flex gap-3 align-items-center">
                                    <div class="quantity-selector d-flex align-items-center border">
                                        <button onclick="changeQVQty(-1)" class="btn p-2 border-0 shadow-none"><i class="fa-solid fa-minus text-xs"></i></button>
                                        <span id="qv-qty" class="px-3 font-body">1</span>
                                        <button onclick="changeQVQty(1)" class="btn p-2 border-0 shadow-none"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <button id="qv-add-cart-btn" class="btn btn-dark-luxury rounded-0 flex-grow-1 py-3 text-uppercase font-body tracking-wider text-sm">Add to Cart</button>
                                </div>
                                
                                <div class="border-top pt-3 d-flex gap-4">
                                    <button id="qv-wishlist-btn" class="bg-transparent border-0 text-sm text-dark font-body p-0"><i class="fa-regular fa-heart me-1"></i> Add to Wishlist</button>
                                    <a id="qv-detail-link" href="#" class="text-sm text-dark font-body text-decoration-underline ms-auto">View Full Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalEl);
    }

    // Set properties
    const mainImg = document.getElementById('qv-main-img');
    const brand = document.getElementById('qv-brand');
    const name = document.getElementById('qv-name');
    const price = document.getElementById('qv-price');
    const desc = document.getElementById('qv-desc');
    const colorsDiv = document.getElementById('qv-colors');
    const sizesDiv = document.getElementById('qv-sizes');
    const qvQty = document.getElementById('qv-qty');
    const addBtn = document.getElementById('qv-add-cart-btn');
    const wishlistBtn = document.getElementById('qv-wishlist-btn');
    const detailLink = document.getElementById('qv-detail-link');
    const thumbsWrapper = modalEl.querySelector('.qv-thumbs-wrapper');

    // Populate data
    mainImg.src = product.images[0];
    brand.innerText = product.brand;
    name.innerText = product.name;
    price.innerText = `$${product.price.toLocaleString()}.00`;
    desc.innerText = product.description;
    qvQty.innerText = '1';
    detailLink.href = `product.html?id=${product.id}`;

    // Thumbs
    thumbsWrapper.innerHTML = '';
    product.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = product.name;
        thumb.className = `img-fluid cursor-pointer ${index === 0 ? 'border border-dark' : 'opacity-70'}`;
        thumb.style = 'width: 50px; height: 65px; object-fit: cover; cursor: pointer;';
        thumb.addEventListener('click', () => {
            mainImg.src = img;
            thumbsWrapper.querySelectorAll('img').forEach((i, idx) => {
                if (idx === index) {
                    i.classList.add('border', 'border-dark');
                    i.classList.remove('opacity-70');
                } else {
                    i.classList.remove('border', 'border-dark');
                    i.classList.add('opacity-70');
                }
            });
        });
        thumbsWrapper.appendChild(thumb);
    });

    // Colors
    colorsDiv.innerHTML = '';
    product.colors.forEach((c, idx) => {
        const btn = document.createElement('button');
        btn.className = `color-chip border-0 rounded-circle position-relative ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute('data-color', c);
        btn.style.width = '24px';
        btn.style.height = '24px';
        btn.style.cursor = 'pointer';
        
        // Define color swatch mappings
        let hex = '#111111';
        if (c === 'Ivory') hex = '#F5F2EB';
        if (c === 'Sand') hex = '#D9CEBD';
        if (c === 'Sage') hex = '#8F9B8B';
        if (c === 'Charcoal') hex = '#4A4A4A';
        if (c === 'Midnight Black') hex = '#111111';
        if (c === 'Off-White') hex = '#FAF9F6';
        if (c === 'Midnight Blue') hex = '#192231';
        if (c === 'Gold') hex = '#B79A67';
        
        btn.style.backgroundColor = hex;
        btn.style.border = c === 'Off-White' || c === 'Ivory' ? '1px solid #ddd' : 'none';
        
        btn.addEventListener('click', () => {
            colorsDiv.querySelectorAll('.color-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
        colorsDiv.appendChild(btn);
    });

    // Sizes
    sizesDiv.innerHTML = '';
    product.sizes.forEach((s, idx) => {
        const btn = document.createElement('button');
        btn.className = `btn btn-sm rounded-0 border font-body py-1 px-3 size-chip ${idx === 0 ? 'active btn-dark' : 'btn-light'}`;
        btn.innerText = s;
        btn.addEventListener('click', () => {
            sizesDiv.querySelectorAll('.size-chip').forEach(b => {
                b.classList.remove('active', 'btn-dark');
                b.classList.add('btn-light');
            });
            btn.classList.add('active', 'btn-dark');
            btn.classList.remove('btn-light');
        });
        sizesDiv.appendChild(btn);
    });

    // Add to Cart binder
    addBtn.onclick = () => {
        const activeColor = colorsDiv.querySelector('.color-chip.active').getAttribute('data-color');
        const activeSize = sizesDiv.querySelector('.size-chip.active').innerText;
        const qty = parseInt(qvQty.innerText);
        addToCart(product.id, qty, activeColor, activeSize);
        bootstrap.Modal.getInstance(modalEl).hide();
    };

    // Wishlist binder
    const syncWishlistBtn = () => {
        const icon = wishlistBtn.querySelector('i');
        if (isInWishlist(product.id)) {
            icon.className = 'fa-solid fa-heart text-gold me-1';
            wishlistBtn.innerHTML = '<i class="fa-solid fa-heart text-gold me-1"></i> Added to Wishlist';
        } else {
            icon.className = 'fa-regular fa-heart me-1';
            wishlistBtn.innerHTML = '<i class="fa-regular fa-heart me-1"></i> Add to Wishlist';
        }
    };
    syncWishlistBtn();
    
    wishlistBtn.onclick = () => {
        toggleWishlist(product.id);
        syncWishlistBtn();
    };

    // Show modal
    const bootstrapModal = new bootstrap.Modal(modalEl);
    bootstrapModal.show();
}

function changeQVQty(delta) {
    const qvQty = document.getElementById('qv-qty');
    if (!qvQty) return;
    let qty = parseInt(qvQty.innerText) + delta;
    if (qty < 1) qty = 1;
    qvQty.innerText = qty;
}

// 8. Custom Global Mini Cart Drawer Toggler
function initMiniCartDrawer() {
    const cartToggles = document.querySelectorAll('.cart-toggle');
    let drawer = document.getElementById('miniCartDrawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'miniCartDrawer';
        drawer.className = 'mini-cart-drawer position-fixed top-0 end-0 h-100 bg-white shadow-lg';
        drawer.style.width = '420px';
        drawer.style.maxWidth = '100%';
        drawer.style.zIndex = '1050';
        drawer.style.transform = 'translateX(100%)';
        drawer.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        drawer.innerHTML = `
            <div class="d-flex flex-column h-100 p-4">
                <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                    <h5 class="font-heading mb-0 text-uppercase tracking-widest text-md">My Cart (<span class="cart-count">0</span>)</h5>
                    <button class="bg-transparent border-0 font-body text-dark close-cart-drawer" style="font-size: 1.25rem;"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div id="mini-cart-items" class="flex-grow-1 overflow-auto pe-2">
                    <!-- Dynamic Cart Items -->
                </div>
                <div class="border-top pt-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-body text-muted text-sm text-uppercase tracking-widest">Subtotal</span>
                        <span id="mini-cart-subtotal" class="font-body text-dark font-weight-bold">$0.00</span>
                    </div>
                    <p class="text-muted text-xs font-body mb-4">Taxes and shipping calculated at checkout.</p>
                    <div class="d-grid gap-2">
                        <a href="checkout.html" class="btn btn-dark-luxury rounded-0 py-3 text-uppercase font-body tracking-wider text-sm">Proceed to Checkout</a>
                        <a href="shop.html" class="btn btn-outline-dark rounded-0 py-3 text-uppercase font-body tracking-wider text-sm mt-1 close-cart-drawer">Continue Shopping</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(drawer);

        // Add Backdrop overlay
        const backdrop = document.createElement('div');
        backdrop.id = 'mini-cart-backdrop';
        backdrop.style.position = 'fixed';
        backdrop.style.top = '0';
        backdrop.style.left = '0';
        backdrop.style.width = '100vw';
        backdrop.style.height = '100vh';
        backdrop.style.background = 'rgba(0,0,0,0.4)';
        backdrop.style.backdropFilter = 'blur(3px)';
        backdrop.style.zIndex = '1049';
        backdrop.style.display = 'none';
        backdrop.style.opacity = '0';
        backdrop.style.transition = 'opacity 0.4s ease';
        document.body.appendChild(backdrop);
    }

    const backdrop = document.getElementById('mini-cart-backdrop');

    const openDrawer = (e) => {
        if(e) e.preventDefault();
        drawer.style.transform = 'translateX(0)';
        backdrop.style.display = 'block';
        setTimeout(() => backdrop.style.opacity = '1', 50);
        updateCartUI();
    };

    const closeDrawer = () => {
        drawer.style.transform = 'translateX(100%)';
        backdrop.style.opacity = '0';
        setTimeout(() => backdrop.style.display = 'none', 400);
    };

    cartToggles.forEach(toggle => {
        toggle.addEventListener('click', openDrawer);
    });

    drawer.querySelectorAll('.close-cart-drawer').forEach(btn => {
        btn.addEventListener('click', closeDrawer);
    });

    backdrop.addEventListener('click', closeDrawer);
}

// 9. Premium Global Search Overlay Modal
function initSearchOverlay() {
    const searchToggles = document.querySelectorAll('.search-toggle');
    let overlay = document.getElementById('searchOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'searchOverlay';
        overlay.className = 'search-overlay position-fixed top-0 start-0 w-100 h-100';
        overlay.style.zIndex = '1060';
        overlay.style.background = 'rgba(255, 255, 255, 0.98)';
        overlay.style.backdropFilter = 'blur(10px)';
        overlay.style.transform = 'translateY(-100%)';
        overlay.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';

        overlay.innerHTML = `
            <button class="bg-transparent border-0 font-body text-dark close-search-overlay position-absolute end-0 top-0 m-5" style="font-size: 1.5rem;"><i class="fa-solid fa-xmark"></i></button>
            <div class="container text-center" style="max-width: 700px;">
                <h3 class="font-heading mb-4 text-uppercase tracking-widest text-md text-gold">Search AÉTHER</h3>
                <div class="position-relative border-bottom border-dark py-2 mb-5">
                    <input type="text" id="global-search-input" placeholder="What are you looking for?" class="bg-transparent border-0 w-100 text-center font-heading h4 text-dark shadow-none" style="outline: none;">
                    <i class="fa-solid fa-magnifying-glass position-absolute end-0 top-50 translate-middle-y text-muted"></i>
                </div>
                <div id="search-suggestions" class="text-center font-body text-sm text-muted">
                    <span class="d-block mb-3 text-xs text-uppercase tracking-wider">Suggested Searches</span>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="shop.html?search=Cashmere" class="search-tag text-dark text-decoration-none px-3 py-1 border border-light-dark">Cashmere</a>
                        <a href="shop.html?search=Jacket" class="search-tag text-dark text-decoration-none px-3 py-1 border border-light-dark">Jacket</a>
                        <a href="shop.html?search=Sneakers" class="search-tag text-dark text-decoration-none px-3 py-1 border border-light-dark">Sneakers</a>
                        <a href="shop.html?search=Linen" class="search-tag text-dark text-decoration-none px-3 py-1 border border-light-dark">Linen</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const openOverlay = (e) => {
        if(e) e.preventDefault();
        overlay.style.transform = 'translateY(0)';
        setTimeout(() => document.getElementById('global-search-input').focus(), 300);
    };

    const closeOverlay = () => {
        overlay.style.transform = 'translateY(-100%)';
    };

    searchToggles.forEach(toggle => {
        toggle.addEventListener('click', openOverlay);
    });

    overlay.querySelector('.close-search-overlay').addEventListener('click', closeOverlay);

    // Bind Enter key in search box to redirect to shop.html
    const input = document.getElementById('global-search-input');
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const query = input.value.trim();
            if (query.length > 0) {
                window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
}

// 10. Bootstrap document ready trigger setup
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateWishlistUI();
    initMiniCartDrawer();
    initSearchOverlay();

    // Check query params for search trigger to prepopulate shop input
    const params = new URLSearchParams(window.location.search);
    const searchVal = params.get('search');
    if (searchVal) {
        const shopSearchInput = document.getElementById('shop-search');
        if (shopSearchInput) {
            shopSearchInput.value = searchVal;
        }
    }
});
