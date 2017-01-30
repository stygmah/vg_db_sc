const http = require('http');
const unirest = require('unirest');
const fs = require('fs');
const docs = require('./../private/doc');

const mashapeKey = docs.mashapeKey;
const imageTemp = "https://res.cloudinary.com/igdb/image/upload/t_cover_small_2x/";

/**********/
/*REQUESTS*/
/**********/


/*Request Search - Returns a search for games
Parameters: 	searchName (string) = The input 
value of search  && numberOfResults = the number
of results returned in the array of game objects
*/
var requestSearch = (searchName, numberOfResults,callback)=>{
	unirest.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit="+numberOfResults+"&offset=0&order=release_dates.date%3Adesc&search="+searchName)
	.header("X-Mashape-Key", mashapeKey)
	.header("Accept", "application/json")
	.end(function (result) {
  		callback (JSON.parse(result.body));
	})
};

/*Request Game - Returns sepcific game 
Parameters: 	gameID (int) = Game ID
**************************************
Game is returned in an array with only
one object (the igame itself)
*/
var requestGame = (gameID, callback)=>{
	unirest.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/"+gameID+"?fields=id,name,summary,storyline,regions,franchise,rating,developers,publishers,release_dates,status,keywords,themes,genres,screenshots,videos,cover,pegi")
	.header("X-Mashape-Key", mashapeKey)
	.header("Accept", "application/json")
	.end(function (result) {
  		callback (JSON.parse(result.body)|| 0);
	})
};

//**************//
//MODULE EXPORTS//
//**************//

module.exports = {
	requestSearch,
	requestGame,
	imageTemp
}
