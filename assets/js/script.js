
//const gameGrid = document.querySelector("#game-grid");
//const scoreDisplay = document.querySelector("#score");
//const modal = document.querySelector("#infoModal");
//const timer = document.querySelector("#timer");
//const buttons = Array.from(document.querySelector("button"));
// const changeDifficulty = Array.from(document.querySelector("selection-button"));

//card array
const deckOfCards = [
  {
    name: "horse",
    img: 'assets/images/horse.png'
  },
  {
    name: "horse",
    img: 'assets/images/horse.png'
  },
  {
    name: "chicken",
    img: 'assets/images/chicken.png'
  },
  {
    name: "chicken",
    img: 'assets/images/chicken.png'
  },
  {
    name: "cow",
    img: 'assets/images/cow.png'
  },
  {
    name: "cow",
    img: 'assets/images/cow.png'
  },
  {
    name: "dog",
    img: 'assets/images/dog.png'
  },
  {
    name: "dog",
    img: 'assets/images/dog.png',
  },
  {
    name:  "goat",
    img: 'assets/images/goat.png',
  },
  {
    name: "goat",
    img: 'assets/images/goat.png'
  },
  {
   name: "goose",
    img: 'assets/images/goose.png'
  },

  {
    name: "goose",
    img: 'assets/images/goose.png'
  },

  {
    name: "pig",
    img: 'assets/images/pig.png'
  },

  {
    name: "pig",
    img: 'assets/images/pig.png'
  },

  {
    name: "sheep",
    img: 'assets/images/sheep.png'
  },

 { 
    name: "sheep",
    img: 'assets/images/sheep.png',
},

]

//flipping the card
function flipCard() 
let cards = document.getElementsByClassName("flip-card-inner")
console.log(cards);

for (let card of cards) {
  console.log(card)
  card.addEventListener("click", function() {
    this.classList.add("flip");
  })
}

///logic
//if(selectedCards.length === 2){
  //if(selectedCards[0].getAttribute('name') === 
  //selectedCards[1].getAttribute('name')
  //){
    //console.log("match");
  //} else {
    //console.log("incorrect");
  //}
//}
  //matching cards
  //function matchCards()

  //shuffle cards
  //level selection
  //reset button
  //scoreboard
  //flip counter
  //score counter
  //timer
  //mute audio
  //audio for cards
  //pop up modals

// FLIPS COUNT
//let flips = 0;
//let counter = document.querySelector("#flips");
//function flipCounter(){    
  //flips++;    
  //counter.innerHTML = flips;

  //if(flips === 1){
    //  second = 0;
      //minute = 0;
      //hour = 0;
//startTimer();
      
  //}
//}






  //level options sourced from https://stackoverflow.com/questions/64712803/change-game-difficulty-javascript//

  //let count = 0;
  //let randomCards = [];
  //let easyButton = ['cow', 'chicken', 'dog', 'goat'];
  //let mediumButton = ['cow', 'chicken', 'dog', 'goat', 'goose', 'horse'];
  //let hardButton = ['cow', 'chicken', 'dog', 'goat', 'goose', 'horse', 'pig', 'sheep'];

  //const selectionButton = document.getElementById("selection-button");
  //selectionButton.addEventListener("click", selectionButton);

  //function difficulty() {
    //document.getElementById("easy").innerHTML = difficulty;
    //randomCards = easyButton.slice(8) 
  //};

  //function difficulty() {
    //document.getElementById("medium").innerHTML = difficulty;
    //randomCards = mediumButton.slice(12)
  //};

  //function difficulty() {
    //document.getElementById("hard").innerHTML = difficulty;
    //randomCards = hardButton.slice(16)
  //}




  //function changeDifficulty(difficulty) {

    //if (difficulty === undefined) {
      //randomCards = mediumButton.slice()
    //} else if (difficulty === 1) {
      //randomCards = easyButton.slice() 
      //console.log('clicked easyButton')
    //} else if (difficulty === 2) {
      //console.log(Clicked, easyButton) 
      //randomCards = mediumButton.slice()
      //console.log('clicked mediumButton')
    //} else if (difficulty === 3) {
      //randomCards = hardButton.slice()
      //console.log('clicked hardButton')
    
  //}
     
   //console.log(randomCards);
//}
//function getCard() {
  //answer = randomCards[Math.floor(Math.random()*randomCards.length)]
//}
//changeDifficulty(difficulty);
//getCard();






    
//game-grid

 

//Popovers with username /level of difficulty
/*Clicking level buttons*/

  //$(".selctionButton").click(function () {
  //$(".menu-page").removeClass("d-block");
  //$(".menu-page").addClass("d-none");
  //$(".game-window").removeClass("d-none");
  //$(".game-window").addClass("d-block");
  //$("#playWindow").modal("hide");
  //amount = $(this).attr("data-difficulty");
  //showCards(amount);
  //amountFlips = 0;
  //openedCardCount = 0;
  //flips.innerHTML = " Flips: " + amountFlips;
  //level.innerHTML = " Level: " + $(this).text();
//});

//$(".btn-restart").click(function () {
  //clearTimeout(wrongGuessTimeout);
  //clearTimeout(timerTimeout);
  //$(".menu-page").removeClass("d-none");
  //$(".menu-page").addClass("d-block");
  //$(".game-window").removeClass("d-block");
  //$(".game-window").addClass("d-none");
  //$("#gameEnd").modal("hide");
  //$("#playWindow").modal("show");
  //timer.innerHTML = "Time: 00:00";
  //stopTimer();
//});



//Start Game sourced by https://www.youtube.com/watch?v=28VfzEiJgy4&t=0s
//if (document.readyState == 'loading') {
  //document.addEventListener('DOMContentLoaded', ready);
//} else {
  //ready();
//}

//function ready() {
  
  //let game = new FarmyardFlip(16, cards);

  //overlay.forEach(overlay => {
    //overlay.addEventListener('click', () => {
     //overlay.classList.remove('visible');
     //game.startGame();
    //});
  //});

  //card forEach(card => {
    //card.addEventListener('click', () {
      //game.flipCard(card);
    //});
  //}); 
//}


//Timer starts
//let minutesTag = document.getElementById("minutes");
//let secondsTag = document.getElementById("seconds");
//let totalSeconds = 0;
//setInterval(setTime, 1000);

//function setTime() {
  //++ totalSeconds;
  //secondsTag.innerHTML = label(totalSeconds % 60);
  //minutesTag.innerHTML = label(totalSeconds / 60);
//}

//function label(val) {
  //let valTime = val + "";
  //if (valTime.length < 2) {
    //return "0" + valTime;
  //} else {
    //return valTime;
  //}
//}


//Shuffle - sourced by https://www.better.dev/build-a-memory-matching-game-in-javascript
//// Fisher-Yates (aka Knuth) Shuffle
//function shuffle(cards) {
//const deckOfCards = cards.length, temporaryValue, randomIndex;

//while ((Deck) !== 0) {
  //randomIndex = Math.floor(Math.random() * currentIndex);
  //currentIndex -= 1;
  //temporaryValue = cards[currentIndex];
  //cards[currentIndex] = cards[randomIndex];
  //cards[randomIndex] = temporaryValue;
//}
//return cards;
//}    


//function startGame() {
  //const shuffledCards = shuffle(".flip-cards");

  //for (let shuffle of shuffledCards) {
    //[].forEach.call(shuffledCards, function(item){
      //deck.appendChild(item);
    //}); 
  //}
//}
//window.onload = startGame();

//Function to check the cards
//function checkForMatch() {
  //const cards = document.querySelectorAll(".flip-cards");
  //const firstCardId = cardsChosenId[0]
  //const secondCardId = cardsChosenId[1]
  //if (cardsChosen[0] === cardsChosen[1])
//} else {
  //cards[firstCardId].setAttribute('src', assets/images/logo.png)
  //cards[secondCardId].setAttribute('src', assets/images/logo.png)
//}
//cardsChosen = []
//cardsChosenId = []
//scoreDisplay.textContent = cardsWon.length
//if (cardsWon.length === deckOfCards.length/2)
//scoreDisplay.textContent = 'You are a winner!' 
//}









//Scoreboard sourced from https://stackoverflow.com/questions/40993396/add-a-score-counter-to-a-game-using-html-and-javascript/47168970
//const scoreBoard = document.getElementbyId("#score");
   // scoreBoard.innerHTML= score;
//const score = 0;
//if (mult == x*y) 
       // {
         //   score=score+1;
    //}
    //else 
    //{
      //      score=score-1;
    //}
  



//mute button
//function muteButton() {
  //let audio = documenent.getElementById(".audioPlayer");
  //if (audio.mute == false){
    //document.getElementById(".audioPlayer").muted = true;
  //} else {
    //audio.mute = true
    //document.getElementById(".audioPlayer").muted = false
  //}
//}




//Reset button
////startGame() {
  //cards = shuffle(cards);
  //for (let i = 0, i = < cards.length, i++ ) {
    //deck.innerHTML = "";
    //[].forEach.call(cards, function(item) {
    //  deck.appendChild(item);
    //});
    //cards[i].classList.remove("show", "open", "match", "disabled");

  //}
  //reset flips
  //flips = 0
  //counter.innerHTML = flips;

  //reset star rating
  //for (let i = i < stars.length; i++) {
    //stars[i].style.color = "#FFD700";
    //stars[i].style.visibility = "visible";
  //}
  //reset timer
  
  //timer.innerHTML = "0 mins 0 secs";
  //clearInterval(interval);
//}

 //Loop - correct/incorrect

//All matches - audio 

 

//Audio for cards sourced from https://www.youtube.com/watch?v=3uuQ3g92oPQ
//class audioPlayer {
  //constructor() {
    //this.bgsound = new Audio('assets/audio/oldMcdonald.mp3');
    //this.flipsound = new Audio('assets/audio/flip.wav');
    //this.matchsound = new Audio('assets/audio/bing.wav');
    //this.winnersound = new Audio('assets/audio/clapping.wav');
    //this.clicksound = new Audio('assets/audio/click.wav');
    //this.bgsound.volume = 0.5;
    //this.bgsound.loop = true;
  //}
//startMusic() {
  //this.bgsound.play();
//}
//stopMusic() {
  //this.bgsound.pause();
  //this.bgsound.currentTime = 0;
//}
//flip() {
  //this.flipsound.play();
//}
//match() {
  //this.matchsound.play();
//}
//winner() {
  //this.stopMusic();
  //this.winnersound.play();
//}
//click() {
  //this.clicksound.play();
//}
//} 




