document.addEventListener('DOMContentLoaded', () => {

})

//Popovers with username /level of difficulty
$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });
//Start Game


//Timer starts

//Shuffle

//Function to flip
/* Select all Cards in the DOM */
const cards = document.querySelectorAll('.flip-card .flip-card-inner');

/*  For each card - when clicked - toggle the "flip"  css class  */
cards.forEach(card => card.onclick = () => card.classList.toggle('flip'))
//Function to check the cards

//If correct - its a match (audio "bing")

//If incorrect - cards flip back over

//Loop - correct/incorrect

//All matches - audio 

//Popover - well done you're a winner or well done new high score

//Scoreboard

//mute button

//Information button

//Reset button

//Audio for cards

//Button easy/med/hard


