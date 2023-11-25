//hämta element (hämtas redan i modal.js)
// const cardContainer = document.querySelector('.card-container');

//Hämtar JSON
async function getRepos() {
  const repoResponse = await fetch(
    'https://api.github.com/users/jerrychas/repos'
  );

  //Kontrollera att responsen är OK
  if (repoResponse.ok) {
    const jsonData = await repoResponse.json();
    console.log(jsonData);

    //loopar datan från json
    jsonData.forEach(function (obj) {
      //* GENERERAR KORT
      if (obj.topics == 'show') {
        //skapar kort
        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);

        //Lägger till en rubrik i kortet
        const cardHeadline = document.createElement('h3');
        cardHeadline.classList.add('card-headline');
        cardHeadline.textContent = obj.name;
        card.appendChild(cardHeadline);

        //lägger till en info-text i kortet
        const cardTextInfo = document.createElement('p');
        cardTextInfo.classList.add('card-text-info');
        cardTextInfo.textContent = obj.description;
        card.appendChild(cardTextInfo);

        
        console.log(obj.name)
        console.log(obj.description)
        console.log(obj.homepage)
        console.log(obj.html_url)
      }
    });
  } else {
    console.log(`repoResponse = ${repoResponse.status}`);
    //skriver ut felmeddelande
    cardContainer.innerHTML = `<h2>${repoResponse.status} Kunde inte ladda projekt</h2>`;
  }
}

getRepos();
