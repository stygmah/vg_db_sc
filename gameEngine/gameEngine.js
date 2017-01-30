


/****-Resolve Genre-******
Takes an int as an arg returns a callback with
associated genre as an argument. Returns null if 
genre doesn't match any.
*************************/
var resolveGenre = (tag, callback)=>{
	switch(tag){
		case 2:
			callback("point-and-click");
		case 4:
			callback("fighting");
		case 5:
			callback("shooter");
		case 7:
			callback("music");
		case 8:
			callback("platform");
		case 9:
			callback("puzzle");
		case 10:
			callback("racing");
		case 11:
			callback("Real Time Strategy (RTS)");
		case 12:
			callback("RPG");
		case 13:
			callback("Simulator");
		case 14:
			callback("Sport");
		case 15:
			callback("Strategy");
		case 16:
			callback("Turn-Based Strategy");
		case 24:
			callback("Tactical");
		case 25:
			callback("Beat 'em up");
		case 26:
			callback("Quiz/Trivia");
		case 30:
			callback("Pinball");
		case 31:
			callback("Adventure");
		case 32:
			callback("Indie");
		case 33:
			callback("Arcade");
		default:
			callback(null);
	}
}





/*Module exports*/
module.exports = {
	resolveGenre
}
