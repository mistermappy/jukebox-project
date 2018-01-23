SC.initialize({
	client_id: 'fd4e76fc67798bfa742089ed619084a6',
	redirect_uri: 'http://localhost:3000/'
});

SC.resolve("http://soundcloud.com/forss/voca-nomen-tuum").then(function(response) {
		console.log(response);
	})

function Jukebox(){
		let songs = [ { title: 'CastleOnTheHill', artist: 'Ed Sheeran', fileName: 'CastleOnTheHill.mp3', image: 'ed.jpg'},
					  { title: 'Missile', artist: 'Dorothy', fileName: 'Missile.mp3', image: 'missile.jpg'},
					  { title: 'RunBoyRun', artist: 'WoodKid', fileName: 'RunBoyRun.mp3', image: 'runboyrun.jpg'}
					]

		let song = new Audio();
		let i = 0; 

	this.loadSong = function() {
		//points to the first song to be played, paused, etc..
		song.src= 'songs/' + songs[i].fileName;
		songs[i].title
		songs[i].artist
	}


	this.playNpause = function() {
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


	this.stop = function() {
		song.pause();
		song.currentTime = 0;
		//adds stop function to jukebox constructor
	}

	this.next = function() {
		i++; 
		if(i == songs.length){
			i = 0; 
		}
		song.src= 'songs/' + songs[i].fileName; 
		song.play();
		$('#songCover')[0].src = 'images/' + songs[i].image 
		$('#songTitle')[0].innerHTML = songs[i].title
		$('#artist')[0].innerHTML = songs[i].artist
		//loads next song 
	};
	
	this.prev = function() {
		i--; 
		if(i < 0){
			i = songs.length-1;
		}
		song.src = 'songs/' + songs[i].fileName;
		song.play(); 
		$('#songCover')[0].src = 'images/' + songs[i].image;
		$('#songTitle')[0].innerHTML = songs[i].title;
		$('#artist')[0].innerHTML = songs[i].artist;
		//loads previous song
	}

	this.randomize = function() {
		min = Math.ceil(0);
		max = Math.floor(songs.length);
		j = Math.floor(Math.random() * (max-min)) + min ; 
		song.src = 'songs/' + songs[j].fileName;
		song.play();
		$('#songCover')[0].src = 'images/' + songs[j].image;
		$('#songTitle')[0].innerHTML = songs[j].title;
		$('#artist')[0].innerHTML = songs[j].artist;
	};

	this.addSCtrack = function() {
       		path = $("#trackID").val();
     		trackid = "tracks/" + path;
     		SC.get(trackid).then(function(tracks){
				played.src = tracks.stream_url + "?client_id=fd4e76fc67798bfa742089ed619084a6";
				name.innerText = tracks.title;
				artist.innerText = tracks.user.username;
				scTrackLink.href = tracks.permalink_url;
				scTrackLink.innerText = "Check out the track page";
				scUserLink.href = tracks.user.permalink_url;
				scUserLink.innerText = "Check out the artist's page";
				descrAndGenre.innerText = "Description: " + tracks.description + " Genre: " + tracks.genre; 
				artwork.src = tracks.artwork_url + "?client_id=fd4e76fc67798bfa742089ed619084a6";
			});
		};
}
var jukebox1 = new Jukebox(); 
//creates Jukebox object inheriting from jukebox constructor
var loadSong = jukebox1.loadSong;
//creates variable with the value of Jukebox loadSong() function
window.onload = loadSong(); 
//when the page is loaded, immediately run the variable loadSong which has a function value
