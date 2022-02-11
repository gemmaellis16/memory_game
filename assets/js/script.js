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


//Shuffle - sourced by https://www.better.dev/build-a-memory-matching-game-in-javascript
//// Fisher-Yates (aka Knuth) Shuffle
Function shuffle(cards) {
const currentIndex = cards.length, temporaryValue, randomIndex;

while (currentIndex) !== 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = cards[currentIndex];
  cards[currentIndex] = cards[randomIndex];
  cards[randomIndex] = temporaryValue;
}
return cards;
}    
//deck of cards in the game
const deck = document.querySelector('.deck');

function startGame() {
  const shuffledCards = shuffle(cards);

  for (let i= 0; i < shuffledCards.length; i++{
    [].forEach.call(shuffledCards, function(item){
      deck.appendChild(item);
    }); 
  }
}
window.onload = startGame();

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
//re-shuffle deck
startGame() {
  cards = shuffle(cards);
  for (let i = 0, i = < cards.length; i++) {
    deck.innerHTML = "";
    [].forEach.call(cards, function(item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove("show", "open", "match", "disabled");

  }
  //reset flips
  flips = 0
  counter.innerHTML = flips;

  //reset star rating
  for (let i = i < stars.length; i++) {
    stars[i].style.color = "#FFD700";
    stars[i].style.visibility = "visible";
  }
  //reset timer
  let timer = document.querySelector(".timer");
  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
}

  

//Audio for cards

//Button easy/med/hard


})