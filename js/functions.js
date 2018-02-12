//
// Container protoype //
//
Array.prototype.contains = function(commands) {
  return this.indexOf(commands) > -1;
}

var reset = function() {
  location.reload();
}
var commands = function() {
  ("ul#commandsList").slideToggle();
}

//
// End of prototype //
//

//
// Stage one if statement //
//
var stage1 = function(input) {
  if (bedCommands.contains(input)) {
  $("h5").text(stageOne.bedDescript);
  $("ul#gameLog").append(stageOne.bedDescript);
  $("#userInputText").val("");
  } else if (help.contains(input)) {
  $("h5").text(stageOne.roomDescript);
  $("#userInputText").val("");
} else if (hitWindow.contains(input)) {
  wilhelmSound.play();
  ambientSound.pause();
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageOne.windowHit);
  $("ul#gameLog").append(stageOne.windowHit);
  $("#userInputText").hide();
  }
}
