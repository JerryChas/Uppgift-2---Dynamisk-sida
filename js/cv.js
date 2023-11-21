//hämta element
const cvContent = document.querySelector('.cv-content')


//*FUNKTIONER

function createElementFromJSON(jsonSource, classNameDiv, classNameP ){
     //skapa container som ska hålla informationen
     const divContainer = document.createElement('div')
     divContainer.classList.add(classNameDiv);

     //Hämtar data om speakers och skickar in i Diven per key
     const pContainer = document.createElement('p');
     pContainer.classList.add(classNameP);
     // experienceTitle.textContent = object.experience.title;
     
     console.log(jsonSource)
    //  container.appendChild();
}


//Hämta json
async function getCV() {
    
    const cvResponse = await fetch('./data/cv.json')
    
    //Kontrollera att responsen är OK
    if (cvResponse.ok) {
        const jsonData = await cvResponse.json();
        console.log(typeof jsonData)
        console.log(jsonData)
        

        
        jsonData.experience.forEach(function(exp){

   
        const experienceDiv = document.querySelector('.experience_div')
        

        //Hämtar data om speakers och skickar in i Diven per key
        const experienceTitle = document.createElement('h3');
        experienceTitle.classList.add('experience-title');
        experienceTitle.textContent = exp.title;
        experienceDiv.appendChild(experienceTitle);

        const description = document.createElement('p');
        description.classList.add('description-title');
        description.textContent = exp.description;
        experienceDiv.appendChild(description);

        
        
        
        
        
        
        })
         
    } else {
        console.log(`cvResponse = ${cvResponse.status}`)
        cvContent.innerHTML = '';
    }
    
}


//anropar funktion
getCV()

