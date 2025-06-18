const submitBtn = document.getElementById("submit-btn");
const ratingButtons = document.querySelectorAll("#rating-container button");
const card = document.querySelector(".card");
const thanksPopup = document.querySelector(".thanks-popup");
let userRating = null;

function togglePopup() {
    thanksPopup.classList.toggle("show");
    thanksPopup.style.display = "flex"
    card.style.display = thanksPopup.classList.contains("show") ? "none" : "flex";
}

ratingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        userRating = btn.textContent; //gets the text of the btn and assigns it to userRating
    });
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (userRating) {
        thanksPopup.innerHTML = `
        <img src="illustration-thank-you.svg" alt="mobile phone icon">
        <p class="show-rating">You selected ${userRating} out of 5<p>
        <h1>Thank you!</h1>
        <p class="thanks-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`
        togglePopup()
    } else {
        alert("No rating selected.");
    }
});
