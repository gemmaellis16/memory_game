/* sourced from https://stackoverflow.com/questions/65225693/memory-game-why-flipping-card-doesnt-work-in-my-code-in-css */

$(".memory-card").click(function() {
  $(".memory-card").removeClass('flipped');
  $(this).toggleClass('flipped');
});