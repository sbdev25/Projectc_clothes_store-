// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("atc");

// Check if button state is saved in localStorage
if (localStorage.getItem("cartAdded") === "true") {
    button.classList.add("added-to-cart"); // Keep the button white
    button.innerHTML="remove the product "
}



  // Function to check cart and update button
  function updateCartButton() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productName = document.getElementById("productName").innerText;
    
    let productIndex = cart.findIndex(product => product.name === productName);
    
    if (productIndex !== -1) {
        button.classList.add("added-to-cart");
        button.innerHTML = "Remove the product";
    } else {
        button.classList.remove("added-to-cart");
        button.innerHTML = "Add to cart";
    }
}

window.addEventListener("load", updateCartButton);

window.addEventListener("load", updateCartButton);

button.addEventListener("click", function () {
    const productName = document.getElementById("productName").innerText;
    const productImage = document.getElementById("mainimage").src;
    const productPrice = parseFloat(document.getElementById("productPrice").innerText);
    const quantity = parseInt(document.getElementById("quantity").value) || 1; // Ensure quantity is a number

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productIndex = cart.findIndex(product => product.name === productName);

    if (productIndex !== -1) {
        // Remove product from cart
        cart.splice(productIndex, 1);
        button.classList.remove("added-to-cart");
        button.innerHTML = "Add to cart";
        alert("Product removed from cart!");
    } else {
        // Add product with quantity
        cart.push({ name: productName, image: productImage, price: productPrice, quantity: quantity });
        button.classList.add("added-to-cart");
        button.innerHTML = "Remove the product";
        alert("Product added to cart!");
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartButton(); // Ensure the button updates correctly
});

        
  
            
            
        
    
  

});
window.addEventListener("load", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productName = document.getElementById("productName").innerText;

    let productIndex = cart.findIndex(product => product.name === productName);
    
    if (productIndex !== -1) {
        button.classList.add("added-to-cart");
        button.innerHTML = "Remove the product";
    } else {
        button.classList.remove("added-to-cart");
        button.innerHTML = "Add to cart";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartContainer = document.querySelector(".products_price");
    
        cartContainer.innerHTML = ""; // Clear previous content
    
        let subtotal = 0;
        let taxRate = 0.1; // 10% tax
    
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            document.getElementById("subtotal-price").innerText = "0 DA";
            document.getElementById("tax-price").innerText = "0 DA";
            document.getElementById("total-price").innerText = "0 DA";
            return;
        }
    
        cart.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("title_option_second");
            
            let productTotal = product.price * product.quantity;
            subtotal += productTotal;
    
            productDiv.innerHTML = `
                <div class="product_info">
                    <img src="${product.image}" alt="${product.name}" width="100px" height="100px">
                    <div class="text_prod">
                        <h2>${product.name}</h2>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>
                </div>
                <div class="quantity-controls">
                    <button class="decrease-btn" data-index="${index}">-</button>
                    <input type="number" value="${product.quantity}" min="1" class="quantity-input" data-index="${index}">
                    <button class="increase-btn" data-index="${index}">+</button>
                </div>
                <h2 class="product-price">${productTotal.toFixed(2)} DA</h2>
            `;
    
            cartContainer.appendChild(productDiv);
        });

        updateCartTotals(cart, taxRate);
        attachEventListeners();
    }

    function updateCartTotals(cart, taxRate) {
        let subtotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
        let tax = subtotal * taxRate;
        let total = subtotal + tax;

        document.getElementById("subtotal-price").innerText = `${subtotal.toFixed(2)} DA`;
        document.getElementById("tax-price").innerText = `${tax.toFixed(2)} DA`;
        document.getElementById("total-price").innerText = `${total.toFixed(2)} DA`;
    }

    function attachEventListeners() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        document.querySelectorAll(".increase-btn").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.dataset.index;
                cart[index].quantity++;
                localStorage.setItem("cart", JSON.stringify(cart));
                loadCart();
            });
        });

        document.querySelectorAll(".decrease-btn").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.dataset.index;
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1); // Remove if quantity reaches 0
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                loadCart();
            });
        });

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.dataset.index;
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                loadCart();
            });
        });

        document.querySelectorAll(".quantity-input").forEach(input => {
            input.addEventListener("change", function () {
                let index = this.dataset.index;
                let newQuantity = parseInt(this.value);

                if (newQuantity > 0) {
                    cart[index].quantity = newQuantity;
                } else {
                    cart.splice(index, 1);
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                loadCart();
            });
        });
    }

    window.addEventListener("load", loadCart);
});
        
        

        
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item
    localStorage.setItem("cart", JSON.stringify(cart)); // Update storage
    location.reload(); // Refresh page to update UI
}
























// Header phone click 

const menu_head =document.getElementById("menico");
const list_head=document.getElementById("listhead");
const exitmenu=document.getElementById("exitmenu");


function dispadd(){

list_head.classList.add("show");

}

function disprv(){

    list_head.classList.remove("show");
    
}




// filtering products 

const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const products = document.querySelectorAll(".product-one-by-one");

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

products.forEach(product => {
    const productCategory = product.getAttribute("data_category");
    const productPrice = parseInt(product.getAttribute("data_price"));

    // Check if product matches the selected category
    const categoryMatch = (selectedCategory === "ALL" || selectedCategory === productCategory);

    // Check if product matches the selected price range
    let priceMatch = false;
    if (selectedPriceRange === "ALL") {
        priceMatch = true; // Show all prices if "All" is selected
    } else {
        const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
        priceMatch = (productPrice >= minPrice && productPrice <= maxPrice);
    }

    // Show or hide product based on both conditions
    if (categoryMatch && priceMatch) {
        product.style.display = "block";
    } else {
        product.style.display = "none";
    }
});


}
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

// Call filterProducts initially to display the correct products
filterProducts();


// product 

// click on product 




document.querySelectorAll(".clickable").forEach(div => {
    div.addEventListener("click", function() {
        const url = this.getAttribute("data-url"); // Get the link from data-url
        window.location.href = url; // Redirect to the link
    });
});


// images product  clicking
                var mainimage = document.getElementById("mainimage");
                var smallimage =document.getElementsByClassName("smallimage");

                smallimage[0].onclick = function () {
                    mainimage.src= smallimage[0].src
                }
                smallimage[1].onclick = function () {
                    mainimage.src= smallimage[1].src
                }
                smallimage[2].onclick = function () {
                    mainimage.src= smallimage[2].src
                }
                smallimage[3].onclick = function () {
                    mainimage.src= smallimage[3].src
                }


 


// clikc on addtocart

 // Select the button








 function redirectToCheckout(event) {
    event.preventDefault(); // Prevents form submission
    window.location.href = "checkout.html"; // Change this to your desired URL
}


