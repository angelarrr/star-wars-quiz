$(function(){

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

	// when next button is clicked
	// track question and check next question
	$('.next-button').click(function() {
		swQuiz.trackQuestion();
		swQuiz.nextQuestion();
	});

	// try again button
	$(".restart-button").click(function(){
		swQuiz.restartQuiz();
	});

});