var Uscore = 0;

var highscore = 9001;

var audio = new Audio('mk7_home_menu_icon.wav');

var press = function() {
	Uscore=Uscore+9999;
	audio.play();
	document.getElementById('score').innerHTML = "Your Score " +Uscore;
	if (Uscore > highscore) {
	document.getElementById('hiscore').innerHTML = "New Highscore" +Uscore;
	return;

	}
};
