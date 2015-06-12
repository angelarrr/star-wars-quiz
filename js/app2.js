$(function(){
	// create quiz object
	var quiz = function(questions) {
		this.numCorrect = 0; // track # of answers correct
		this.qCount = 0; // track question number

		this.question = questions;

		// start the quiz
		this.startQuiz = function() {
			$('#introduction').hide();
			$('#final').hide();
			$('#questions-box').show()
			$('#track').show();
			$('#nextquest').show();
			swTrackQuestion();
			swShowQuestion();
			this.qCount++;
		};

		// track the questions method
		this.trackQuestion = function() {
			var completeCircle = '<i class="fa fa-circle"></i>';
			var openCircle = '<i class="fa fa-circle-o"></i>';

			function addCircle(circles) {
				$('#track').html(circles);
			};

			if (this.qCount == 0) {
				addCircle(openCircle + completeCircle + completeCircle + completeCircle + completeCircle);
			} else if (this.qCount == 1) {
				addCircle(completeCircle + openCircle + completeCircle + completeCircle + completeCircle);
			} else if (this.qCount == 2) {
				addCircle(completeCircle + completeCircle + openCircle + completeCircle + completeCircle);
			} else if (this.qCount == 3) {
			addCircle(completeCircle + completeCircle + completeCircle + openCircle + completeCircle);
			} else {
			addCircle(completeCircle + completeCircle + completeCircle + completeCircle + openCircle);
			}
		};

		// check value method
		this.checkAnswer = function() {
			var userAnswer = $("input:radio[name='choice']:checked").val();
			var correctAnswer = this.question[this.qCount-1].answer;
		
			if (userAnswer == correctAnswer) {
				this.numCorrect++;
			}
		};

		// restart the quiz method
		this.restartQuiz = function() {
			$('.final').hide();
			$('#introduction').show();
			this.qCount = 0;
			this.numCorrect = 0;
		};
	};

	// create question object
	var question = function(question, choices, answer) {
		// default question properties
		this.question = question;
		this.choices = choices;
		this.answer = answer;

		// show question method
		this.showQuestion = function() {
			var html = "<p id='question'>" + this.question + "</p><div class='answers'>";

			for (var i = 0; i < this.choices.length; i++) {
        		html += "<input type='radio' class='radio' name='choice' id ='"+i+"' value='"+i+"'><label for='"+i+"'>" + this.choices[i] + "</label>";
        	};

			html += "</div>";
			return html;
		};
	};

	// question, choices, answer
	var q1 = new question("what year was the first star wars movie released?", ["1972", "1977", "1980", "1983"], 1);
	var q2 = new question("what type of species is Chewbacca?", ["ewok", "gungan", "neti", "wookiee"], 3);
	var q3 = new question("on what planet does jabba the hutt live on?", ["alderaan", "hoth", "tatooine", "yavin"], 2);
	var q4 = new question("what is the name of boba fett's ship", ["slave 1", "slave 2", "tantive iv", "death star"], 0);
	var q5 = new question("who is luke skywalker's father?", ["obi-wan kenobi", "yoda", "darth vader", "han solo"], 2);

	// create a new quiz - star wars!
	var swQuiz = new quiz([q1, q2, q3, q4, q5]);

	// Click start button and show question
	$(".start-button").click(function(){
		swQuiz.startQuiz();
	});

	// show question function
	function swShowQuestion() {
		var currentQuestion = swQuiz.question[swQuiz.qCount];
		var newQuestion = currentQuestion.showQuestion();

		$('#questions-box').html(newQuestion);
	};

	// track question function
	function swTrackQuestion() {
		swQuiz.trackQuestion();
	};

	// when next button is clicked
	// track question and check next question
	$('.next-button').click(function() {
		swQuiz.trackQuestion();
		swQuiz.nextQuestion();
		swQuiz.qCount++;
	});

	// next question - check answer, show question
	// or show final score
	swQuiz.nextQuestion = function() {
		if (swQuiz.qCount < swQuiz.question.length) {
			swQuiz.checkAnswer();
			swShowQuestion();
		} else {
			swQuiz.checkAnswer();
			$('#questions-box').hide();
			$('#track').hide();
			$('#nextquest').hide();
			$('.final').show();
			$('#completed').html('<h3>congratulations!<p>you completed the quiz!</p><p>you got ' + swQuiz.numCorrect + ' out of ' + swQuiz.question.length + ' correct.</p></h3>');
			swQuiz.qCount = 0; // reset qCount
			}

		console.log("numCorrect: " + swQuiz.numCorrect);
		};

	// try again button
	$(".restart-button").click(function(){
		swQuiz.restartQuiz();
	});

});