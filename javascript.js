var names = [
"Dr. Seuss",
"Bugs Bunny",
"Sirius Black",
"Shakespeare",
"Barbie",
"E.T.",
"C-3PO",
"Hannah Montana",
"Frankenstein",
"Ebenezer Scrooge",
"Dumbledore",
"Dracula",
"Buzz Lightyear",
"Buddy Holly",
"Elvis Presley",
"Robin Hood",
"Pocahontas",
"Ariel",
"Woody",
"Spider-Man",
"Han Solo",
"Mario",
"Helen Keller",
"Rapunzel",
"Santa Claus",
"Batman",
"Oprah Winfrey",
"Garfield",
"Walt Disney",
"Marty McFly",
"Clark Kent",
"Peter Pan",
"George of the Jungle",
"Winnie the Pooh",
"Mr. Rogers"
]

function newName(){
	var randomNames = Math.floor(Math.random() * (names.length));
	document.getElementById('nameDisplay').innerHTML = names[randomNames];
}

