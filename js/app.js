$(document).ready(function(){

	/*---Click Start button---*/
	$('.start').on('click', function(){
		$('.intro').fadeOut(500);
		qManager.showQuestion();
		$('.play-area').delay(500).fadeIn(500);
	})

	/*---Functionality when user selects answer---*/
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
		qManager.checkAnswer();
	})

	/*---CLick Next---*/
	$('.next-question').on('click', function(){
		qManager.currentNum++;
		qManager.showQuestion();
		console.log(qManager.currentNum);
		$('.answer-area').fadeOut(500);
		$('.play-area').delay(500).fadeIn(500);
	})

	/*---Questions---*/
	var question1 = {
		question: "In the 2003/04 season, which team won the Premier League?",
		pic: ["images/arsenal.png", "images/man-u.png", "images/swansea.png", "images/chelsea.png"],
		answers: ["Arsenal", "Manchester United", "Swansea City", "Chelsea"],
		correctAnswer: "Arsenal",
		answerPic: "images/arsenal.png",
		ansDescription: "The 2003–04 FA Premier League was the twelfth season of the Premier League. In the end, Arsenal went through the season without a single defeat – the first team ever to do so in a 38 game league season and the second team overall (the first was Preston North End in 1889, 115 years earlier, during a 22 game league season) and were crowned champions once more, at the expense of Chelsea, who had spent heavily throughout the season."
	};
	var question2 = {
		question: "In the 2008/09 season, who won the PFA PLayer of the Year?",
		pic: ["images/man-u.png", "images/arsenal.png", "images/chelsea.png", "images/arsenal.png"],
		answers: ["Arsenal", "Manchester United", "Swansea City", "Chelsea"],
		correctAnswer: "Arsenal",
		answerPic: "images/arsenal.png",
		ansDescription: "The 2003–04 FA Premier League was the twelfth season of the Premier League. In the end, Arsenal went through the season without a single defeat – the first team ever to do so in a 38 game league season and the second team overall (the first was Preston North End in 1889, 115 years earlier, during a 22 game league season) and were crowned champions once more, at the expense of Chelsea, who had spent heavily throughout the season."
	};
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
		},

		checkAnswer : function(){
			var currentQuestion = list[this.currentNum];
			var picture = currentQuestion.answerPic;
			var answer = currentQuestion.correctAnswer;
			var description = currentQuestion.ansDescription;

			/*---Show correct answer content---*/	
			$('.answer-pic').find('img').attr("src", picture);
			$('#correct-answer').text(answer);
			$('.description').append("<p>" + description +"</p>");

			/*---Tell user if he is Correct or Incorrect---*/	
			if ($('#answer').text() === answer) {
				$('#correct-incorrect').text("Correct");
			}
			else {
				$('#correct-incorrect').text("Incorrect");
			}
		}
	}
});