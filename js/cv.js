//hämta element
const cvContent = document.querySelector('.cv-content')

//anropar funktion
getCV()

//Hämta json
async function getCV() {
    console.log('inside getCV')
    const cvResponse = await fetch('./data/cv.json')

    //Kontrollera att responsen är OK
    if (cvResponse.ok) {
        const json = await cvResponse.json();
        console.log(json)


    }





}



