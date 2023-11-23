//KÄLLA: https://codepen.io/codejockie/pen/NBwjyd

//Hämtar element
const modalHeadline = document.querySelector('.modal-headline')
const modalTextInfo = document.querySelector('.modal-text-info')

//ändrar variablerna till const istället för var
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

//ändrar så att trigger är självaste korten i portfolion
const triggers = document.querySelectorAll(".card");

// Loopar igenom varje trigger (kort) och lägger till en click-event lyssnare
triggers.forEach(function(trigger) {
    trigger.addEventListener("click", function(){
        //Hämtar element för det specifika klickade kortet
        const cardHeadline = trigger.querySelector('.card-headline')
        const cardTextInfo = trigger.querySelector('.card-text-info')
        
        // Byter innehåll i modalen med innehållet från det klickade kortet
        modalHeadline.textContent = `${cardHeadline.textContent}`;
        modalTextInfo.textContent = `${cardTextInfo.textContent}`;

        // Visar eller döljer modalen
        toggleModal()
    });
});

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);