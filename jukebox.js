var songs = ['CastleOnTheHill.mp3', 
			 'Missile.mp3',
			 'RunBoyRun.mp3', 
			 'Thunderstruck.mp3',
			 'xraydog.mp3'];

var song = new Audio();
var i = 0;


var jukebox = function jukebox(){
		//creates jukebox constructor
	};

jukebox.prototype.loadSong = function() {
	song.src= 'songs/' + songs[i];
}

jukebox.prototype.play = function() {
	if (song.paused) {
		song.play();
	}
	else {
		song.pause();
	}
	
	//create play and pause function 
};


jukebox.prototype.stop = function() {
	audio[i].pause();
	audio[i].currentTime = 0; 
}

jukebox.prototype.next = function() {
	i++; 
	if(i == songs.length){
		i = 0; 
	}
	song.src= 'songs/' + songs[i]; 
	song.play();
};
	
jukebox.prototype.prev = function() {
	var j = 0;
	i--; 
	if(i < 0){
		i = songs.length-1 
	}
	song.src = 'songs/' + songs[i];
	song.play(); 
}

var Jukebox = new jukebox(); 
var loadSong = Jukebox.loadSong;

window.onload = loadSong(); 
