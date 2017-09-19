var songs = ['CastleOnTheHill.mp3', 
			 'Missile.mp3',
			 'RunBoyRun.mp3', 
			 'Thunderstruck.mp3',
			 'xraydog.mp3'];

var images = ['ed.jpg',
			  'missile.jpg',
			  'runboyrun.jpg',
			  'thunderstruck.jpg',
			  'xraydog.jpg'];

var songTitle = ['Castle on the Hill',
				 'Missile',
				 'Run Boy Run',
				 'Thunderstruck',
				 'Here Comes the King'];

var artist = ['Ed Sheeran',
			  'Dorothy',
			  'Woodkid',
			  'ACDC',
			  'Xray Dog'];


var song = new Audio();
var image = $('#songCover')


var i = 0; //counter 

var jukebox = function jukebox(){
		//creates jukebox constructor
	};

jukebox.prototype.loadSong = function() {
	//points to the first song to be played, paused, etc..
	song.src= 'songs/' + songs[i];
	songTitle[i]
	artist[i]
};

jukebox.prototype.playNpause = function() {
	if (song.paused) {
		song.play();
		$('#toggler')[0].innerHTML = 'Pause';
		//changes play button to pause
	}
	else {
		song.pause();
		$('#toggler')[0].innerHTML = 'Play';
		//changes pause button to play 
	}
	//adds play and pause function to jukebox constructor
};


jukebox.prototype.stop = function() {
	song.pause();
	song.currentTime = 0;
	//adds stop function to jukebox constructor
}

jukebox.prototype.next = function() {
	i++; 
	if(i == songs.length){
		i = 0; 
	}
	song.src= 'songs/' + songs[i]; 
	song.play();
	$('#songCover')[0].src = 'images/' + images[i]
	$('#songTitle')[0].innerHTML = songTitle[i]
	$('#artist')[0].innerHTML = artist[i];
	//loads next song 
};
	
jukebox.prototype.prev = function() {
	i--; 
	if(i < 0){
		i = songs.length-1;
	}
	song.src = 'songs/' + songs[i];
	song.play(); 
	$('#songCover')[0].src = 'images/' + images[i];
	$('#songTitle')[0].innerHTML = songTitle[i]
	$('#artist')[0].innerHTML = artist[i];
	//loads previous song
}

jukebox.prototype.randomize = function() {
	min = Math.ceil(0);
	max = Math.floor(songs.length);
	j = Math.floor(Math.random() * (max-min)) + min ; 
	song.src = 'songs/' + songs[j];
	song.play();
	$('#songCover')[0].src = 'images/' + images[j];
	$('#songTitle')[0].innerHTML = songTitle[j]
	$('#artist')[0].innerHTML = artist[j];
	}

var Jukebox = new jukebox(); 
//creates Jukebox object inheriting from jukebox constructor
var loadSong = Jukebox.loadSong;
//creates variable with the value of Jukebox loadSong() function
window.onload = loadSong(); 
//when the page is loaded, immediately run the variable loadSong which has a function value
