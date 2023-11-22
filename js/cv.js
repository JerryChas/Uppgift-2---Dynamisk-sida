//hämta element
const cvContent = document.querySelector('.cv-content')


//*FUNKTIONER

function createAndAppendElement(parentElement, HTMLelement, content, className) {
    const element = document.createElement(HTMLelement);
    element.classList.add(className);
    element.textContent = content;
    parentElement.appendChild(element);
}


//Hämta json
async function getCV() {
    
    const cvResponse = await fetch('./data/cv.json')
    
    //Kontrollera att responsen är OK
    if (cvResponse.ok) {
        const jsonData = await cvResponse.json();
        console.log(typeof jsonData)
        console.log(jsonData)
        
        //Hämtar container som ska fyllas med kommande information
        const experienceDiv = document.querySelector('.experience_div')
        const educationDiv = document.querySelector('.education_div')
        const additionalMeritsDiv = document.querySelector('.additionalMerits_div')
        
        jsonData.experience.forEach(function(obj){
        //skapar element 
        createAndAppendElement(experienceDiv, 'h3', obj.title, 'experience-title')
        createAndAppendElement(experienceDiv, 'h4', obj.company, 'experience-company')
        createAndAppendElement(experienceDiv, 'p', obj.period, 'experience-period')
        createAndAppendElement(experienceDiv, 'p', obj.description, 'experience-description')
        // const description = document.createElement('p');
        // description.classList.add('experience-description');
        // description.textContent = obj.description;
        // experienceDiv.appendChild(description);
        })
        jsonData.education.forEach(function(obj){
            //skapar element 
            createAndAppendElement(educationDiv, 'h3', obj.degreeName, 'education-degreeName')
            createAndAppendElement(educationDiv, 'h4', obj.school, 'education-school')
            createAndAppendElement(educationDiv, 'h5', obj.location, 'education-location')
            createAndAppendElement(educationDiv, 'p', obj.period, 'education-period')
            createAndAppendElement(educationDiv, 'p', obj.description, 'education-description')
            
        })
        jsonData.additionalMerits.forEach(function(obj){
            //skapar element 
            createAndAppendElement(additionalMeritsDiv, 'h3', obj.activity, 'additionalMerits-activity')
            createAndAppendElement(additionalMeritsDiv, 'h4', obj.location, 'additionalMerits-location')
            createAndAppendElement(additionalMeritsDiv, 'h5', obj.period, 'additionalMerits-period')
            createAndAppendElement(additionalMeritsDiv, 'p', obj.description, 'additionalMerits-description')
            createAndAppendElement(additionalMeritsDiv, 'p', obj.language, 'additionalMerits-language')
        })
            
        
         
    } else {
        console.log(`cvResponse = ${cvResponse.status}`)
        //tömmer cv-content
        cvContent.innerHTML = '';
    }
    
}


//anropar funktion
getCV()

