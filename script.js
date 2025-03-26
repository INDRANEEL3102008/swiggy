let cart = [];
let totalPrice = 0;

// Function to handle login
function login() {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
}

// Function to handle logout
function logout() {
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("main-content").classList.add("hidden");
}

// Function to update the live clock
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    cartItems.innerHTML = "";
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalElement.innerText = totalPrice;
}

// Function to add item to cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const foodItem = event.target.closest(".food-item");
        const itemName = foodItem.getAttribute("data-name");
        const itemPrice = parseInt(foodItem.getAttribute("data-price"));

        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});
