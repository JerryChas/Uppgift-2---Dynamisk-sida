//hämta element
const cardContainer = document.querySelector('.card-container')

//Hämtar JSON
async function getRepos() {

    const repoResponse = await fetch('https://api.github.com/users/jerrychas/repos');

    //Kontrollera att responsen är OK
    if (repoResponse.ok) {
        const jsonData = await repoResponse.json();
        console.log(typeof jsonData)
        console.log(jsonData)

    } else {
        console.log(`repoResponse = ${repoResponse.status}`)
        //skriver ut felmeddelande
        cardContainer.innerHTML = `<h2>${repoResponse.status} Kunde inte ladda projekt</h2>`;
    }

}

getRepos()