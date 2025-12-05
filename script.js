// Sample products data (in a real app, load from JSON or API)
let products = [
    { id: 1, title: 'Laptop', price: 999, image: 'https://via.placeholder.com/300x200?text=Laptop', description: 'High-performance laptop.', category: 'Electronics' },
    { id: 2, title: 'Book', price: 20, image: 'https://via.placeholder.com/300x200?text=Book', description: 'Bestselling novel.', category: 'Books' },
    { id: 3, title: 'Shoes', price: 50, image: 'https://via.placeholder.com/300x200?text=Shoes', description: 'Comfortable running shoes.', category: 'Fashion' },
    // Add more as needed
];

// Cart stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in nav
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Render functions for each page
function renderHome() {
    return `
        <section class="hero">
            <h1>Welcome to ShopEase</h1>
            <p>Discover amazing products at great prices.</p>
            <div class="cta-buttons">
                <button class="btn" onclick="window.location.hash='#products'">Shop Now</button>
                <button class="btn" onclick="window.location.hash='#admin'">Sell Products</button>
            </div>
        </section>
        <section class="categories">
            <div class="category"><h3>Electronics</h3></div>
            <div class="category"><h3>Books</h3></div>
            <div class="category"><h3>Fashion</h3></div>
        </section>
        <section class="featured-products">
            <h2>Featured Products</h2>
            <div class="product-grid">${renderProductGrid(products.slice(0, 3))}</div>
        </section>
        <section class="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <input type="email" placeholder="Enter your email">
            <button>Subscribe</button>
        </section>
    `;
}

function renderProductGrid(productList) {
    return productList.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <img src="${p.image}" alt="${p.title}">
            <div class="product-info">
                <h3>${p.title}</h3>
                <p>$${p.price}</p>
                <button class="btn" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    let filtered = products;
    // Simple filters (expand as needed)
    const category = document.getElementById('category-filter')?.value;
    const maxPrice = document.getElementById('price-filter')?.value;
    if (category) filtered = filtered.filter(p => p.category === category);
    if (maxPrice) filtered = filtered.filter(p => p.price <= maxPrice);
    return `
        <div class="filters">
            <select id="category-filter" onchange="renderPage()">
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Fashion">Fashion</option>
            </select>
            <input id="price-filter" type="number" placeholder="Max Price" onchange="renderPage()">
        </div>
        <div class="search-bar">
            <input type="text" id="search" placeholder="Search products..." oninput="renderPage()">
        </div>
        <div class="product-grid">${renderProductGrid(filtered.filter(p => p.title.toLowerCase().includes(document.getElementById('search')?.value.toLowerCase() || '')))}</div>
    `;
}

function renderProductDetails(id) {
    const product = products.find(p => p.id == id);
    const suggested = products.filter(p => p.id != id).slice(0, 3);
    return `
        <div class="product-details">
            <div class="product-image">
                <img src="${product.image.replace('300x200', '600x400')}" alt="${product.title}">
            </div>
            <div class="product-info-details">
                <h1>${product.title}</h1>
                <p class="price">$${product.price}</p>
                <p>${product.description}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
        <section class="suggested-products">
            <h2>Suggested Products</h2>
            <div class="carousel">${renderProductGrid(suggested)}</div>
        </section>
    `;
}

function renderCart() {
    if (cart.length === 0) return '<p>Your cart is empty.</p>';
    const total =
// Sample products data (in a real app, load from JSON or API)
let products = [
    { id: 1, title: 'Laptop', price: 999, image: 'https://via.placeholder.com/300x200?text=Laptop', description: 'High-performance laptop.', category: 'Electronics' },
    { id: 2, title: 'Book', price: 20, image: 'https://via.placeholder.com/300x200?text=Book', description: 'Bestselling novel.', category: 'Books' },
    { id: 3, title: 'Shoes', price: 50, image: 'https://via.placeholder.com/300x200?text=Shoes', description: 'Comfortable running shoes.', category: 'Fashion' },
    // Add more as needed
];

// Cart stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in nav
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Render functions for each page
function renderHome() {
    return `
        <section class="hero">
            <h1>Welcome to ShopEase</h1>
            <p>Discover amazing products at great prices.</p>
            <div class="cta-buttons">
                <button class="btn" onclick="window.location.hash='#products'">Shop Now</button>
                <button class="btn" onclick="window.location.hash='#admin'">Sell Products</button>
            </div>
        </section>
        <section class="categories">
            <div class="category"><h3>Electronics</h3></div>
            <div class="category"><h3>Books</h3></div>
            <div class="category"><h3>Fashion</h3></div>
        </section>
        <section class="featured-products">
            <h2>Featured Products</h2>
            <div class="product-grid">${renderProductGrid(products.slice(0, 3))}</div>
        </section>
        <section class="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <input type="email" placeholder="Enter your email">
            <button>Subscribe</button>
        </section>
    `;
}

function renderProductGrid(productList) {
    return productList.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <img src="${p.image}" alt="${p.title}">
            <div class="product-info">
                <h3>${p.title}</h3>
                <p>$${p.price}</p>
                <button class="btn" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    let filtered = products;
    // Simple filters (expand as needed)
    const category = document.getElementById('category-filter')?.value;
    const maxPrice = document.getElementById('price-filter')?.value;
    if (category) filtered = filtered.filter(p => p.category === category);
    if (maxPrice) filtered = filtered.filter(p => p.price <= maxPrice);
    return `
        <div class="filters">
            <select id="category-filter" onchange="renderPage()">
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Fashion">Fashion</option>
            </select>
            <input id="price-filter" type="number" placeholder="Max Price" onchange="renderPage()">
        </div>
        <div class="search-bar">
            <input type="text" id="search" placeholder="Search products..." oninput="renderPage()">
        </div>
        <div class="product-grid">${renderProductGrid(filtered.filter(p => p.title.toLowerCase().includes(document.getElementById('search')?.value.toLowerCase() || '')))}</div>
    `;
}

function renderProductDetails(id) {
    const product = products.find(p => p.id == id);
    const suggested = products.filter(p => p.id != id).slice(0, 3);
    return `
        <div class="product-details">
            <div class="product-image">
                <img src="${product.image.replace('300x200', '600x400')}" alt="${product.title}">
            </div>
            <div class="product-info-details">
                <h1>${product.title}</h1>
                <p class="price">$${product.price}</p>
                <p>${product.description}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
        <section class="suggested-products">
            <h2>Suggested Products</h2>
            <div class="carousel">${renderProductGrid(suggested)}</div>
        </section>
    `;
}

function renderCart() {
    if (cart.length === 0) return '<p>Your cart is empty.</p>';
    const total =
