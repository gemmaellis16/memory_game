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

const gameGrid = document.querySelector('.game-grid')

//game-grid
 for (let card of deckOfCards) {
   const nameRef = document.createElement("img");
   gridRef.insertAdjacentHTML("beforehand", '${card.name}' )
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

//let cardArray = makeCardArray(cardData, level);

    


//Function to check the cards







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