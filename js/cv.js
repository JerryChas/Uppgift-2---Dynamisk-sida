//hämta element
const cvContent = document.querySelector('.cv-content')


async function getCV() {
    console.log('inside getCV')
    const cvResponse = await fetch('./data/cv.json')
}

getCV()

