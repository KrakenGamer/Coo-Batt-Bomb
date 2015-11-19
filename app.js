var Uscore = 0;

var highscore = 100; 

var press = function() {
		Uscore++;
		document.getElementById('score').innerHTML = "Your lame Score: " + Uscore; 

		if (Uscore > highscore) {
				Uscore++;
				document.getElementById('score').innerHTML = "Great... A new highscore," + Uscore;

		}
};
