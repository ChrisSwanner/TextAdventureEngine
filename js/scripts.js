$(document).ready(function() {
  backgroundTwoSound.play();
  $('form:first *:input[type!=hidden]:first').focus();
  $("form#startGameForm").submit(function(event) {
  event.preventDefault();
    $("#userNamePanel").show();
    $("#titlePanel").hide();
    $("#textBox").text("")
});
$("form#user").submit(function(event) {
  event.preventDefault();
    var userName = $("#userName").val();
    console.log(userName);
    $("#userNamePanel").hide();
    $("#gameTextPanel").show();
    $(".logBox").hide();
    $("#nameDisplay").text("Hello " + userName + ", Welcome to Alienoid!");
    $("#textBox").text(stageOne.roomDescript);
    level++;
});
$("#logBtn").click(function() {
  if (level >= 1) {
  $(".logBox").toggle();
  $("ul#gameLog").slideToggle();
  $("#restartBtn").toggle();
  $("#commandsBtn").toggle();
  $("#creditsBtn").toggle();
  $("#mapBtn").toggle();
  $("#textBox").toggle();
  $("ul#credits").hide();
}
})
$("#restartBtn").click(function() {
  reset();
})
$("#creditsBtn").click(function() {
  $(".logBox").toggle();
  $("ul#credits").slideToggle();
  $("#restartBtn").toggle();
  $("#mapBtn").toggle();
  $("#logBtn").toggle();
  $("#textBox").toggle();
})
$("#mapBtn").click(function() {
  $(".logBox").toggle();
  $("#mapDiv").slideToggle();
  $("#restartBtn").toggle();
  $("#comandsBtn").toggle();
  $("#commandsBtn").toggle();
  $("#creditsBtn").toggle();
  $("#logBtn").toggle();
  $("#textBox").toggle();
  $("ul#gameLog").hide();

})

$("form#userInput").submit(function(event) {
  event.preventDefault();
  var input = ($("#userInputText").val()).toUpperCase();
  $("ul#gameLog").append("<li>" + input + "</li>");
    if (level === 1) {

      $("#nameDisplay").hide();
      stage1(input);
  }
});
});
