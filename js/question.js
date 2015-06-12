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