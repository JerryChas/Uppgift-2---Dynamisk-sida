//KÄLLA: https://codepen.io/codejockie/pen/NBwjyd
console.log('modal.js');

// Hämtar element
const modalHeadline = document.querySelector('.modal-headline');
const modalTextInfo = document.querySelector('.modal-text-info');

// ändrar variablerna till const istället för var
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

// ändrar så att trigger är självaste korten i portfolion
const cardContainer = document.querySelector('.card-container');

// Lägger till en click-event lyssnare på cardContainer
// - Eftersom klassen 'card' skapas dynamiskt i githubRepo.js så skapar jag eventlyssnare på cardContainer som finns statiskt i html-koden...
cardContainer.addEventListener("click", function(event) {
    // ...hittar sedan det närmaste elementet med klassen "card" till det element som klickades på
    const clickedCard = event.target.closest('.card');
    
    //om det är ett kort som klickades på så:
    if (clickedCard) {
        // Hämtar element för det specifika klickade kortet
        const cardHeadline = clickedCard.querySelector('.card-headline');
        const cardTextInfo = clickedCard.querySelector('.card-text-info');

        // Byter innehåll i modalen med innehållet från det klickade kortet
        modalHeadline.textContent = `${cardHeadline.textContent}`;
        modalTextInfo.textContent = `${cardTextInfo.textContent}`;

        // Visar eller döljer modalen
        toggleModal();
    }
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
