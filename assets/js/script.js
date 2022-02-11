document.addEventListener('DOMContentLoaded', () => {



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
  let timer = document.querySelector(".timer");
  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
}

//Audio for cards

//Button easy/med/hard


})