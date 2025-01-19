document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Product 1", price: 50, image: "https://images4.alphacoders.com/260/260758.jpg" },
        { id: 2, name: "Product 2", price: 75, image: "https://images4.alphacoders.com/260/260758.jpg" },
        { id: 3, name: "Product 3", price: 100, image: "https://images4.alphacoders.com/260/260758.jpg" },
        { id: 4, name: "Product 4", price: 40, image: "https://images4.alphacoders.com/260/260758.jpg" },
        { id: 5, name: "Product 5", price: 60, image: "https://images4.alphacoders.com/260/260758.jpg" },
        { id: 6, name: "Product 6", price: 90, image: "https://images4.alphacoders.com/260/260758.jpg" },
        { id: 7, name: "Product 7", price: 54, image: "https://images4.alphacoders.com/260/260758.jpg" },
    ];

    const productsContainer = document.getElementById("products-container");

    // Function to render products dynamically
    function renderProducts(products) {
        productsContainer.innerHTML = products
            .map(
                (product) => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button data-id="${product.id}">Add to Cart</button>
                </div>
            `
            )
            .join("");
    }

    // Call the function to display products
    renderProducts(products);

    productsContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            const productId = e.target.getAttribute("data-id");
            const product = products.find((p) => p.id == productId);
    
            // Retrieve cart from localStorage or initialize
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
            // Add product to cart
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
    
            alert(`${product.name} has been added to your cart!`);
        }
    });
});    