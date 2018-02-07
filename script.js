$(document).ready(function () {
var listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt",
  "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely",
  "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
  "Ask again later", "Better not tell you now", "Cannot predict now",
  "Concentrate and ask again", "Don't count on it", "My reply is no",
  "My sources say no", "Outlook not so good", "Very doubtful"];
$("#shake").click(function(){
  var randomNumber = Math.random();
  var randomNumberForListOfAnswers = randomNumber * listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberForListOfAnswers);
  var answerText = listOfAnswers[randomIndex];
  $("#answer").text(answerText);
  });
});
