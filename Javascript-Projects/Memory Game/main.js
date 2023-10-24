const cardArray = [

    {
        name: 'Tokoyami',
        img: 'images/FumikageTokoyami.jpg',
    },
    {
        name: 'Asui',
        img: 'images/TsuyuAsui.jpg',
    },
    {
        name: 'Kirishima',
        img: 'images/EijirouKirishima.jpg'
    },
    {
        name: 'Ashido',
        img: 'images/MinaAshido.jpg'
    },
    {
        name: 'Midoriya',
        img: 'images/IzukuMidoriya.jpg'
    },
    {
        name: 'Iida',
        img: 'images/TenyaIida.jpg',
    },
    {
        name: 'Uraraka',
        img: 'images/OchacoUraraka.jpg',
    },
    {
        name: 'Kouda',
        img: 'images/KoujiKouda.jpg',
    },
    {
        name: 'Shoji',
        img: 'images/MezoShoji.jpg',
    },
    {
        name: 'Todoroki',
        img: 'images/ShotoTodoroki.jpg',
    },
    {
        name: 'Tokoyami',
        img: 'images/FumikageTokoyami.jpg',
    },
    {
        name: 'Asui',
        img: 'images/TsuyuAsui.jpg'
    },
    {
        name: 'Kirishima',
        img: 'images/EijirouKirishima.jpg'
    },
    {
        name: 'Ashido',
        img: 'images/MinaAshido.jpg'
    },
    {
        name: 'Midoriya',
        img: 'images/IzukuMidoriya.jpg'
    },
    {
        name: 'Iida',
        img: 'images/TenyaIida.jpg',
    },
    {
        name: 'Uraraka',
        img: 'images/OchacoUraraka.jpg',
    },
    {
        name: 'Kouda',
        img: 'images/KoujiKouda.jpg',
    },
    {
        name: 'Shoji',
        img: 'images/MezoShoji.jpg',
    },
    {
        name: 'Todoroki',
        img: 'images/ShotoTodoroki.jpg',
    },
]

cardArray.sort(() => 0.5 - Math.random()) 

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/ua-logo.png')
        card.setAttribute('data-id', i)
        console.log(card, i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)//the cards will appear on the webpage.
    }
 
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        alert('You have chosen the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/ua-logo.png')
        cards[optionTwoId].setAttribute('src', 'images/ua-logo.png')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length
        cardsChosen = []
    cardsChosenIds = []

   

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations! You found them all!'
    }
}

function flipCard() {
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}