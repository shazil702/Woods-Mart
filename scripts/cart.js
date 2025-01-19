document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-container");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart items
    function renderCartItems() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cartContainer.innerHTML = cart
            .map(
                (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                </div>
                <button data-id="${item.id}" class="remove-btn">Remove</button>
            </div>
        `
            )
            .join("");
    }

    // Remove item from cart
    cartContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-btn")) {
            const itemId = e.target.getAttribute("data-id");
            const itemIndex = cart.findIndex((item) => item.id == itemId);

            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCartItems();
            }
        }
    });

    // Initial render
    renderCartItems();
});
