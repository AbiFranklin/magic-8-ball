$(document).ready(function() {
 var listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt",
    "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely",
    "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
    "Ask again later", "Better not tell you now", "Cannot predict now",
    "Concentrate and ask again", "Don't count on it", "My reply is no",
    "My sources say no", "Outlook not so good", "Very doubtful"];
$( "#shake" ).click(function() {
  var randomNumber = Math.random();
  var randomNumberforListOfAnswers = randomNumber * listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberforListOfAnswers);
  var answerText = listOfAnswers[randomIndex];
  $( "#circle" ).effect( "shake", {times:3}, 500);
  $( "#answer").animate({'opacity': 0}, 500, function () {
    $(" #answer").text(answerText)
  }).animate({'opacity': 1}, 800);
});
});
