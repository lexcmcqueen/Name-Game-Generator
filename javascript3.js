var hints = [
	"presents",
	"cookies",
	"hot chocolate",
	"reindeer",
	"Santa's sleigh",
	"eggnog",
	"Frosty the Snowman",
	"candy cane",
	"elves",
	"Santa",
	"HO HO HO!",
	"stockings",
	"Buddy the Elf",
	"chestnuts",
	"snowman",
	"snow",
	"angel",
	"snowflake",
	"chimney",
	"star",
	"Rudolph",
	"ice skating",
	"Christmas Eve",
	"Drummer Boy",
	"Grinch",
	"Cindy Lou Who",
	"Little Drummer Boy",
	"North Pole",
	"mistletoe"
]

function newHint(){
	var randomHints = Math.floor(Math.random() * (hints.length));
	document.getElementById('hintDisplay').innerHTML = hints[randomHints];
}
