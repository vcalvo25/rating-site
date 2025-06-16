const submitBtn = document.getElementById("submit-btn");
const btn = document.getElementById("btn");
const ratingButtons = document.querySelectorAll("rating-container button");
const popup = document.querySelector("popup");
const overlay = document.getElementById("overlay");
const card = document.querySelector(".card");
let userRating = null;

/* -----------------------------------------maybe not needed??????
function togglePopup() {
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
    if(popup.classList.toggle === "show"){
        card.style.display = "none";
    } else {
        card.style.display = "flex";
    }
}
*/

ratingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        userRating = btn.textContent; //gets the text of the btn and assigns it to userRating
    });
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (selectedRating) {
        //show popup and update text "you selected X out of 5"
    } else {
        return;
    }
});
