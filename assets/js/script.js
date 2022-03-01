
const gameGrid = document.querySelector("#game-grid");
const scoreDisplay = document.querySelector("#score");
const modal = document.querySelector("#infoModal");
const span = document.querySelector(".close")[0];
const timer = document.querySelector("#timer");
const flipCounterRef = document.querySelector("#flipCounter")
const buttons = Array.from(document.querySelector("button"));
const resetButtonRef = document.querySelector("#resetButton")
// const changeDifficulty = Array.from(document.querySelector("selection-button"));
let selectedPairs = []
let count = 0
//flipping the card
let cards = document.getElementsByClassName("flip-card-inner")
console.log(cards)
resetButtonRef.addEventListener("click", resetGame)
for (let card of cards) {
  card.addEventListener("click", function() {
    this.classList.add("flip")
    checkMatch(this)
  })}

  //matching cards
  function checkMatch(card) {
    console.log(card)
    selectedPairs.push(card);
    const len = selectedPairs.length;

    if (len === 2) {
      moveCounter();
      if (selectedPairs[0].type === selectedPairs[1].type) {
        matched();
      } else {
          unmatched();
        }
      }
    };
    function moveCounter() {
      count++
      flipCounterRef.innerHTML = count
    }
    function resetGame() {
      count = 0
      flipCounterRef.innerHTML = count
      //Must reset timer to 0 
    }
    
    function matched() {
      console.log(selectedPairs)
      selectedPairs[0].classList.add("match");
      selectedPairs[1].classList.add("match");
      selectedPairs[0].classList.remove("show", "open");
      selectedPairs[1].classList.remove("show", "open");
      selectedPairs = [];
    }
  //when they don't match

  function unmatched() {
    selectedPairs[0].classList.add("unmatched");
    selectedPairs[1].classList.add("unmatched");
    disable();

    setTimeout(function() {
      selectedPairs[0].classList.remove("show", "open", "unmatched");
      selectedPairs[1].classList.remove("show", "open", "unmatched");
      
      enable();
      selectedPairs = [];
    }, 1100);
  }
// disable cards temporarily
function disable() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.add('disabled');
  });
}
//enable cards and disable matched cards
function enable() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.remove('disabled');
    for (let i = 0; i < matchedCard.length; i++) {
      matchedCard[i].classList.add("disabled");
    }
  });

  }











