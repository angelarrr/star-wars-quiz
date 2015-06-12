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
		this.trackQuestion();
		this.showQuestion();
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

	// show question method
	this.showQuestion = function() {
		$('#questions-box').html(this.question[this.qCount].showQuestion());
	};

	// next question method
	this.nextQuestion = function() {
		if (this.qCount < this.question.length) {
			this.checkAnswer();
			this.showQuestion();
			this.qCount++;
		} else {
			this.checkAnswer();
			$('#questions-box').hide();
			$('#track').hide();
			$('#nextquest').hide();
			$('.final').show();
			$('#completed').html('<h3>congratulations!<p>you completed the quiz!</p><p>you got ' + this.numCorrect + ' out of ' + this.question.length + ' correct.</p></h3>');
				this.qCount = 0; // reset qCount
		}

		console.log("numCorrect: " + this.numCorrect);
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