//*FUNKTIONER
function createAndAppendElement(
  parentElement,
  HTMLelement,
  property,
  content,
  className
) {
  const element = document.createElement(HTMLelement);
  element.classList.add(className);
  element[property] = content;
  parentElement.appendChild(element);
}

// Visa laddningsmeddelande
cardContainer.innerHTML = '<h2>Laddar projekt...</h2>';

//Hämtar JSON
async function getRepos() {
  const repoResponse = await fetch(
    'https://api.github.com/users/jerrychas/repos'
  );

  //Kontrollera att responsen är OK
  if (repoResponse.ok) {
    const jsonData = await repoResponse.json();

    // Ta bort laddningsmeddelandet
    cardContainer.innerHTML = '';

    //loopar datan från json
    jsonData.forEach(function (obj) {
      //* GENERERAR KORT

      //Tar endast utvalda repository som i detta fall har topic: "show"
      if (obj.topics == 'show') {
        //skapar kort
        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);

        //Lägger till en rubrik i kortet
        createAndAppendElement(
          card,
          'h2',
          'textContent',
          obj.name,
          'card-headline'
        );

        //lägger till en info-text i kortet
        createAndAppendElement(
          card,
          'p',
          'textContent',
          obj.description,
          'card-text-info'
        );

        //lägger till länk till repo
        createAndAppendElement(
          card,
          'a',
          'href',
          obj.html_url,
          'card-repo_link'
        );

        //lägger till länk till webbsidan
        createAndAppendElement(
          card,
          'a',
          'href',
          obj.homepage,
          'card-page_link'
        );

        //Lägger till backgrundsbild taget från github repo
        card.style.backgroundImage = `url('https://raw.githubusercontent.com/${obj.owner.login}/${obj.name}/main/screen.png')`;
      }
    });
  } else {
    console.log(`repoResponse = ${repoResponse.status}`);
    //skriver ut felmeddelande
    cardContainer.innerHTML = `<h2>${repoResponse.status} Kunde inte ladda projekt</h2>`;
  }
}

getRepos();
