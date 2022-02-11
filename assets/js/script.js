document.addEventListener('DOMContentLoaded', () => {

  //card options

  const deckOfCards = [
    {
      name: 'chicken',
      img: 'assets/images/chicken.png'
  
  }
  {
    name: 'chicken',
    img: 'assets/images/chicken.png'

}
{
  name: 'cow',
  img: 'assets/images/cow.png'

}
{
  name: 'cow',
  img: 'assets/images/cow.png'

}
{
  name: 'dog',
  img: 'assets/images/dog.png'

}
{
  name: 'dog',
  img: 'assets/images/dog.png'

}
{
  name: 'goat',
  img: 'assets/images/goat.png'

}
{
  name: 'goat',
  img: 'assets/images/goat.png'

}
{
  name: 'goose',
  img: 'assets/images/goose.png'

}
{
  name: 'goose',
  img: 'assets/images/goose.png'

}
{
  name: 'horse',
  img: 'assets/images/horse.png'

}
{
  name: 'horse',
  img: 'assets/images/horse.png'

}
{
  name: 'pig',
  img: 'assets/images/pig.png'

}
{
  name: 'pig',
  img: 'assets/images/pig.png'

}
{
  name: 'sheep',
  img: 'assets/images/sheep.png'

}
{
  name: 'sheep',
  img: 'assets/images/sheep.png'

}
]
deckOfCards.sort(() => 0.5 - Math.random())

const gameGrid = document.querySelector('.game-grid')
const scoreDisplay = document.querySelector('#score')
const cardsChosen = []
const cardsChosenId = []

//game-grid
 for (let card of deckOfCards) {
   const nameRef = document.createElement("img");
   gridRef.insertAdjacentHTML("beforeend", `${card.name}':${index}`)  
 }

 //flip cards
 function flipCard() {
   const cardId = this.getAttribute('card.name')
   cardsChosen.push(deckOfCards[cardId].name)
   cardsChosenId.push(cardId)
   this.setAttribute('src', deckOfCards[cardId].img)
   if (cardsChosen.length === 2) [
     setTimeout(checkForMatch, 500)
   ]
 }

//Popovers with username /level of difficulty

//Start Game


//Timer starts
let minutesTag = document.getElementById("minutes");
let secondsTag = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++ totalSeconds;
  secondsTag.innerHTML = label(totalSeconds % 60);
  minutesTag.innerHTML = label(totalSeconds / 60);
}

function label(val) {
  let valTime = val + "";
  if (valTime.length < 2) {
    return "0" + valTime;
  } else {
    return valTime;
  }
}


//Shuffle


    


//Function to check the cards
Function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const firstCardId = cardsChosenId[0]
  const secondCardId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1])
} else {
  cards[firstCardId].setAttribute('src', assets/images/logo.png)
  cards[secondCardId].setAttribute('src', assets/images/logo.png)
}
cardsChosen = []
cardsChosenId = []
scoreDisplay.textContent = cardsWon.length
if (cardsWon.length === deckOfCards.length/2)
scoreDisplay.textContent = 'You are a winner!' 
}






//Loop - correct/incorrect

//All matches - audio 

//Popover - well done you're a winner or well done new high score

//Scoreboard

//mute button

//Information button



//Reset button


  //reset timer
  

//Audio for cards

//Button easy/med/hard


})