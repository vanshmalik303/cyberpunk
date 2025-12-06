console.log("Welcome to Night City!");

let buyButton = document.querySelector(".btnbuy");
let buyButton1 = document.querySelector(".btn1");

buyButton.addEventListener("click", function () {
    alert("Initiating purchase sequence...");
});

let navBuyButton = document.querySelector(".btn1");

navBuyButton.addEventListener("click", function () {
    alert("Initiating purchase sequence...");
});

buyButton1.addEventListener("click", function () {
    alert("Initiating purchase sequence...");
});

let emailInput = document.getElementById("email-input");
let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function () {
    let emailValue = emailInput.value;

    if (emailValue === "") {
        alert("Please enter your email address.");
    } else {
        alert("Thank you for subscribing, CYBERPUNK!");
        emailInput.value = "";
    }
});

let watchButton = document.querySelector(".btnwatch");
let trailerSection = document.getElementById("trailer-section");

watchButton.addEventListener("click", function () {
    trailerSection.scrollIntoView({ behavior: "smooth" });
});