$(document).ready(function(){

	// global variables
	var numCorrect = 0; // track correct answers
	var qCount = 0; // track question number

	// questions and answers array
	var allQuestions = [{
		question : "what year was the first star wars movie released?",
		choices : ["1972", "1977", "1980", "1983"],
		correct : 1 // 1977
	}, {
		question : "what type of species is Chewbacca?",
		choices : ["ewok", "gungan", "neti", "wookiee"],
		correct : 3 // wookiee
	}, {
		question : "on what planet does jabba the hutt live on?",
		choices : ["alderaan", "hoth", "tatooine", "yavin"],
		correct : 2 // tatooine
	}, {
		question : "what is the name of boba fett's ship",
		choices : ["slave 1", "slave 2", "tantive iv", "death star"],
		correct : 0 // slave 1
	}, {
		question : "who is luke skywalker's father?",
		choices : ["obi-wan kenobi", "yoda", "darth vader", "han solo"],
		correct : 2 // darth vader
	}];

	// Click start button and show question
	$(".start-button").click(function(){
		$('#introduction').hide();
		$('#final').hide();
		$('#questions-box').show()
		$('#track').show();
		$('#nextquest').show();
		showQuestion();
		trackQuestion();
		qCount++;
	});

	// show question
	function showQuestion() {

		var newQuestion = "<p id='question'>" + allQuestions[qCount].question + "</p><div class='answers'><input type='radio' class='radio' name='choice' id ='0' value='0'><label for='0'>" + allQuestions[qCount].choices[0] + "</label><input type='radio' class='radio' name='choice' id='1' value='1'><label for='1'>" + allQuestions[qCount].choices[1] + "</label><input type='radio' class='radio' name='choice' id='2' value='2'><label for='2'>" + allQuestions[qCount].choices[2] + "</label><input type='radio' class='radio' name='choice' id='3' value='3'><label for='3'>" + allQuestions[qCount].choices[3] + "</label></div>";
	
	// loop through choices and keep adding
	// showQuestion method

		$('#questions-box').html(newQuestion);	
	};

	// submit next button
	// update numCorrect
	$('.next-button').click(function() {
		/* alert("next question?"); */
		nextQuestion();
		trackQuestion();
		qCount++;
	})

	// final score - numCorrect is not showing
	// next question function
	function nextQuestion() {
		if (qCount < allQuestions.length) {
			updateCorrect();
			showQuestion();
		}
		else {
			updateCorrect();
			$('#questions-box').hide();
			$('#track').hide();
			$('#nextquest').hide();
			$('.final').show();
			$('#completed').html('<h3>congratulations!<p>you completed the quiz!</p><p>you got ' + numCorrect + ' out of ' + allQuestions.length + ' correct.</p></h3>');
			qCount = 0; // reset qCount
		}
		console.log("numCorrect: " + numCorrect);
	};

	// track questions
	function trackQuestion() {
		var completeCircle = '<i class="fa fa-circle"></i>';
		var openCircle = '<i class="fa fa-circle-o"></i>';

		function addCircle(circles) {
			$('#track').html(circles);
		};

		if (qCount == 0) {
			addCircle(openCircle + completeCircle + completeCircle + completeCircle + completeCircle);
		} else if (qCount == 1) {
			addCircle(completeCircle + openCircle + completeCircle + completeCircle + completeCircle);
		} else if (qCount == 2) {
			addCircle(completeCircle + completeCircle + openCircle + completeCircle + completeCircle);
		} else if (qCount == 3) {
			addCircle(completeCircle + completeCircle + completeCircle + openCircle + completeCircle);
		} else {
			addCircle(completeCircle + completeCircle + completeCircle + completeCircle + openCircle);
		}
	};

	// compare answers
	// update number of correct answers
	// this is not working - how to fix?
	function updateCorrect() {
		var userAnswer = $("input:radio[name='choice']:checked").val();
		var correctAnswer = allQuestions[qCount-1].correct;
		console.log("user answer: " + userAnswer);
		
		if (userAnswer == correctAnswer) {
			numCorrect++;
		}
	};

	// try again button
	$(".restart-button").click(function(){
		$('.final').hide();
		$('#introduction').show();
		qCount = 0;
		numCorrect = 0;
	});

});
