document.addEventListener("DOMContentLoaded", function () {


    console.log("ok")
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        
    console.log("ok")
        event.preventDefault(); // Prevent form submission

        let isValid = true; // Track form validity

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(msg => msg.remove());

        // Function to show error message
        function showError(input, message) {
            const error = document.createElement("p");
            error.classList.add("error-message");
            error.style.color = "red";
            error.style.fontSize = "12px";
            error.innerText = message;
            input.parentNode.appendChild(error);
            isValid = false;
        }

        // Validate Full Name (Not Empty)
        const fullName = document.getElementById("fn");
        if (fullName.value.trim() === "") {
            showError(fullName, "Full Name is required.");
        }

        // Validate Email (Correct Format)
        const email = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value.trim() === "") {
            showError(email, "Email is required.");
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, "Invalid email format.");
        }

        // Validate Address (Not Empty)
        const address = document.getElementById("address");
        if (address.value.trim() === "") {
            showError(address, "Address is required.");
        }

        // Validate City (Not Empty)
        const city = document.getElementById("city");
        if (city.value.trim() === "") {
            showError(city, "City is required.");
        }

        // Validate State (Only letters)
        const state = document.getElementById("state");
        const lettersOnlyPattern = /^[A-Za-z\s]+$/;
        if (state.value.trim() === "") {
            showError(state, "State is required.");
        } else if (!lettersOnlyPattern.test(state.value.trim())) {
            showError(state, "State should only contain letters.");
        }

        // Validate Zip Code (Only numbers)
        const zipCode = document.getElementById("zipcode");
        if (zipCode.value.trim() === "") {
            showError(zipCode, "Zip Code is required.");
        } else if (isNaN(zipCode.value.trim())) {
            showError(zipCode, "Zip Code must be a number.");
        }

        // Validate Name on Card (Not Empty)
        const nameOnCard = document.getElementById("namcard");
        if (nameOnCard.value.trim() === "") {
            showError(nameOnCard, "Name on Card is required.");
        }

        // Validate Credit Card Number (Only numbers, 16 digits)
        const creditCard = document.getElementById("crednum");
        if (creditCard.value.trim() === "") {
            showError(creditCard, "Credit Card Number is required.");
        } else if (!/^\d{16}$/.test(creditCard.value.trim())) {
            showError(creditCard, "Credit Card Number must be 16 digits.");
        }

        // Validate Exp. Month (Not Empty)
        const expMonth = document.getElementById("expmonth");
        if (expMonth.value.trim() === "") {
            showError(expMonth, "Expiration Month is required.");
        } else if (!lettersOnlyPattern.test(expMonth.value.trim())) {
            showError(expMonth, "Expiration Month should only contain letters.");
        }

        // Validate Exp. Year (Only numbers, 4 digits)
        const expYear = document.getElementById("exp-year");
        if (expYear.value.trim() === "") {
            showError(expYear, "Expiration Year is required.");
        } else if (!/^\d{4}$/.test(expYear.value.trim())) {
            showError(expYear, "Expiration Year must be 4 digits.");
        }

        // Validate CVV (Only numbers, 3 digits)
        const cvv = document.getElementById("cvv");
        if (cvv.value.trim() === "") {
            showError(cvv, "CVV is required.");
        } else if (!/^\d{3}$/.test(cvv.value.trim())) {
            showError(cvv, "CVV must be 3 digits.");
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});


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