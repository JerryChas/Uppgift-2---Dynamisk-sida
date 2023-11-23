//KÄLLA: https://codepen.io/codejockie/pen/NBwjyd

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");
//ändrar så att trigger är självaste korten i portfolion
var trigger = document.querySelector(".card");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);