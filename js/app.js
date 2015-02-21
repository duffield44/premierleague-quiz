$(document).ready(function(){

	/*---Click Start button---*/
	$('.start').on('click', function(){
		$('.intro').fadeOut(500);
		qManager.showQuestion();
		$('.play-area').delay(500).fadeIn(500);
	})

	/*---Functionality when user clicks answer---*/
	$('.unselected').click(function() {
		/*---Give user feedback of his selected answer---*/
		var answerVal = $(this).siblings('p').text();
		$('#answer').text(answerVal);
		/*---Change appearance of selected answer---*/
		$('.selected').removeClass('selected').addClass('unselected');
		$(this).removeClass('unselected').addClass('selected');
	})

	/*---When user submits his answer---*/
	$('.submit').on('click', function(){
		$('.play-area').fadeOut(500);
		$('.answer-area').delay(500).fadeIn(500);
	})

	/*---Questions---*/
	var question1 = {
		question: "In the 2003/04 season, which team won the Premier League?",
		pic: ["images/arsenal.png", "images/man-u.png", "images/swansea.png", "images/chelsea.png"],
		answers: ["Arsenal", "Manchester United", "Swansea City", "Chelsea"],
		correctAnswer: "Arsenal"
	};
	var question2 = 0;
	var question3 = 0;
	var question4 = 0;
	var question5 = 0;

	var list = [question1, question2, question3, question4, question5];


	/*---Question Manager--*/
	var qManager = {

		currentNum: 0,
		showQuestion : function(){

			var currentQuestion = list[this.currentNum];
			var questionPic = currentQuestion.pic;
			var questionAnswers = currentQuestion.answers;

			/*---Add content to question from current question in list array---*/	
			$('.content').find('.cur-quest-num').text(this.currentNum +1);
			$('.question').text(currentQuestion.question);
			$('#answer1').find('img').attr("src", questionPic[0]);
			$('#answer2').find('img').attr("src", questionPic[1]);
			$('#answer3').find('img').attr("src", questionPic[2]);
			$('#answer4').find('img').attr("src", questionPic[3]);
			$('#answer1 .answer-text').text(questionAnswers[0]);
			$('#answer2 .answer-text').text(questionAnswers[1]);
			$('#answer3 .answer-text').text(questionAnswers[2]);
			$('#answer4 .answer-text').text(questionAnswers[3]);
		}
	}
});