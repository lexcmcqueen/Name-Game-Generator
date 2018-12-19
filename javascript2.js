var songs = [
	"Rudolph the Red-Nosed Reindeer",
	"All I Want For Christmas is You",
	"Blue Christmas",
	"12 Days of Christmas",
	"Carol of the Bells",
	"We Wish You A Merry Christmas",
	"Feliz Navidad",
	"The Little Drummer Boy",
	"Christmas Time Is Here",
	"Grandma Got Ran Over By A Reindeer",
	"Frosty the Snowman",
	"Sleigh Ride"
]

function newSong(){
	var randomSongs = Math.floor(Math.random() * (songs.length));
	document.getElementById('songDisplay').innerHTML = songs[randomSongs];
}

