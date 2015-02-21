$(document).ready(function(){

	/*---Click Start button---*/
	$('.start').on('click', function(){
		$('.intro').fadeOut(500);
		$('.play-area').delay(500).fadeIn(500);
	})



var question1 = {
	question: "In the 2003/04 season, which team won the Premier League?",
	pic: ["images/arsenal.png", "images/man-u.png", "images/swansea.png", "images/chelsea.png"],
	answers: ["Arsenal", "Manchester United", "Swansea City", "Chelsea"],
	correctAnswer: "Arsenal"
};
var question2 = 0
var question3 = 0
var question4 = 0
var question5 = 0

var questionList = [question1, question2, question3, question4, question5];

var currentNum = 0;
var currentQuestion = questionList[currentNum];
var questionPic = currentQuestion.pic;
var questionAnswers = currentQuestion.answers;
var currentAnswer = currentQuestion.correctAnswer;

$('.content').find('.cur-quest-num').text(currentNum +1);
$('.question').text(currentQuestion.question);
$('#answer1').find('img').attr("src", questionPic[0]);
$('#answer2').find('img').attr("src", questionPic[1]);
$('#answer3').find('img').attr("src", questionPic[2]);
$('#answer4').find('img').attr("src", questionPic[3]);
$('#answer1 .answer-text').text(questionAnswers[0]);
$('#answer2 .answer-text').text(questionAnswers[1]);
$('#answer3 .answer-text').text(questionAnswers[2]);
$('#answer4 .answer-text').text(questionAnswers[3]);

$('.unselected').click(function() {
	$('.selected').removeClass('selected').addClass('unselected');
	$(this).removeClass('unselected').addClass('selected');
	
})
});