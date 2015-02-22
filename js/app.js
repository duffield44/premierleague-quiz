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

		/*---If last question, then go to ending section---*/
		if (qManager.currentNum == list.length-1) {
			if (qManager.correctPoints > qManager.incorrectPoints) {
				$('#w-l').text('Win');
				$('#won-lost').text('won');
			}
			else {
				$('#w-l').text('Lose');
				$('#won-lost').text('lost');
			}
			/*---Display final score---*/
			$('#end-correct').text(qManager.correctPoints);
			$('#end-incorrect').text(qManager.incorrectPoints);
			/*---FadeIn ending section---*/
			$('.answer-area').fadeOut(500);
			$('.ending').delay(500).fadeIn(500);
		}

		/*---If not the last question, then move on to next question---*/
		else {
			qManager.currentNum++;
			qManager.showQuestion();
			/*---Display score---*/
			$('#correct-score').text(qManager.correctPoints);
			$('#incorrect-score').text(qManager.incorrectPoints);
			/*---Remove previous selected answer---*/			
			$('.selected').removeClass('selected').addClass('unselected');
			$('#answer').empty();
			/*---FadeIn next question---*/
			$('.answer-area').fadeOut(500);
			$('.play-area').delay(500).fadeIn(500);
		}
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
		pic: ["images/cristiano-ronaldo.png", "images/luke-chadwick.png", "images/ryan-giggs.png", "images/steven-gerrard.png"],
		answers: ["Cristiano Ronaldo", "Luke Chadwick", "Ryan Giggs", "Steven Gerrard"],
		correctAnswer: "Ryan Giggs",
		answerPic: "images/ryan-giggs.png",
		ansDescription: "Ryan Joseph Giggs is the most decorated player in Welsh and English football history. He was known for his tireless running, ball possession and ability to create goalscoring opportunities for those around him. He holds the Manchester United club record for competitive appearances. During his time at United, he won 13 Premier League winner's medals, four FA Cup winner's medals, three League Cup winner's medals and two Champions League winner's medals. He was the first player in history to win two consecutive PFA Young Player of the Year awards (1992 and 1993), though he did not win the PFA Player of the Year award until 2009."
	};
	var question3 = {
		question: "Which player leads the scoring charts with 260 premiership goals?",
		pic: ["images/teddy-sheringham.png", "images/robin-van-persie.png", "images/ryan-giggs.png", "images/alan-shearer.png"],
		answers: ["Teddy Sheringham", "Robin van Persie", "Ryan Giggs", "Alan Shearer"],
		correctAnswer: "Alan Shearer",
		answerPic: "images/alan-shearer.png",
		ansDescription: "Ryan Joseph Giggs is the most decorated player in Welsh and English football history. He was known for his tireless running, ball possession and ability to create goalscoring opportunities for those around him. He holds the Manchester United club record for competitive appearances. During his time at United, he won 13 Premier League winner's medals, four FA Cup winner's medals, three League Cup winner's medals and two Champions League winner's medals. He was the first player in history to win two consecutive PFA Young Player of the Year awards (1992 and 1993), though he did not win the PFA Player of the Year award until 2009."
	};
	var question4 = {
		question: "Who was the first ever African player in the premiership?",
		pic: ["images/tony-yeboah.png", "images/peter-ndlovu.png", "images/jj-okocha.png", "images/nwankwo-kanu.png"],
		answers: ["Tony Yeboah", "Peter Ndlovu", "Jay Jay Okocha", "Nwankwo Kanu"],
		correctAnswer: "Peter Ndlovu",
		answerPic: "images/peter-ndlovu.png",
		ansDescription: "Peter Ndlovu was a Zimbabwean professional footballer and is currently Manager at Mamelodi Sundowns F.C. (South Africa). He played as a striker from 1988 until 2011, and spent time playing in England, where he appeared in the Premier League for Coventry City and in the Football League for Birmingham City, Huddersfield Town and Sheffield United. A veteran of 100 international games over a 15-year period, Ndlovu is the all-time leading scorer for Zimbabwe with 38 goals."
	};
	var question5 = {
		question: "Who scored the Premiership's first hatrick?",
		pic: ["images/teddy-sheringham.png", "images/ian-rush.png", "images/les-ferdinand.png", "images/eric-cantona.png"],
		answers: ["Teddy Sheringham", "Ian Rush", "Les Ferdinand", "Eric Cantona"],
		correctAnswer: "Eric Cantona",
		answerPic: "images/eric-cantona.png",
		ansDescription: "Éric Daniel Pierre Cantona played for Auxerre, Martigues, Marseille, Bordeaux, Montpellier, Nîmes and Leeds United before ending his career at Manchester United where he won four Premier League titles in five years and two League and FA Cup Doubles. Cantona is often regarded as having played a key role in the revival of Manchester United as a footballing force in the 1990s and he enjoys iconic status at the club. An inaugural inductee into the English Football Hall of Fame in 2002, the museum states: 'The enigmatic Frenchman was one of the Premier League's most talented, controversial players'. He scored the Premiership's first ever hatrick for Leeds United with a 5–0 win over Tottenham Hotspur."
	};

	var list = [question1, question2, question3, question4, question5];


	/*---Question Manager--*/
	var qManager = {

		currentNum: 0,
		correctPoints: 0,
		incorrectPoints: 0,

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
			$('.description p').remove();
			$('.description').append("<p>" + description +"</p>");

			/*---Tell user if he is Correct or Incorrect---*/	
			if ($('#answer').text() === answer) {
				$('#correct-incorrect').text("Correct");
				qManager.correctPoints++;
			}
			else {
				$('#correct-incorrect').text("Incorrect");
				qManager.incorrectPoints++;
			}
		}
	}
});