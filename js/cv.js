//hämta element
const cvContent = document.querySelector('.cv-content')


//*FUNKTIONER



//Hämta json
async function getCV() {
    
    const cvResponse = await fetch('./data/cv.json')
    
    //Kontrollera att responsen är OK
    if (cvResponse.ok) {
        const jsonData = await cvResponse.json();
        console.log(typeof jsonData)
        console.log(jsonData)
        
        jsonData.forEach(function(object){

        //skapa container som ska hålla informationen
        const experienceDiv = document.createElement('div')
        experienceDiv.classList.add('experience_div');

        //Hämtar data om speakers och skickar in i Diven per key
        const experienceTitle = document.createElement('p');
        experienceTitle.classList.add('experience-title');
        experienceTitle.textContent = object.experience.title;
        experienceDiv.appendChild(experienceTitle);
        
        })
         
    } else {
        console.log(`cvResponse = ${cvResponse.status}`)
    }
    
}


//anropar funktion
getCV()

