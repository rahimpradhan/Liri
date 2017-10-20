//***Twitter***

var config = require("./keys.js");
var Twitter = require('twitter');
var T = new Twitter(config); 
var params = {screen_name: "iamdigitalbot", count: 20};

if(process.argv[2] === "my-tweets"){
T.get('statuses/user_timeline', params, searchedData);
function searchedData(error, data, response) {
  if (error) {
        console.log('Error occurred: ' + error);
        return;
    }
	else if(!error && response.statusCode === 200) {
	
		console.log("Tweet: " + data[0].text);

		for(var i = 0; i < data.length; i++){
			console.log(data[i].text);
		
		}
	}

}
}

//***OMDB*** 

var request = require("request");
var nodeArgs = process.argv;
var movieName = "";
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}



if(process.argv[2] === "movie-this"){
  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", 
  	function(error, response, body) {
       if (error) {
          console.log('Error occurred: ' + error);
          return;
      }

   
    if (!error && response.statusCode === 200) {
    	 console.log("Title: " + JSON.parse(body).Title);
    	 console.log("Release year: " + JSON.parse(body).Year);
       console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
  	   console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    	 console.log("Country: " + JSON.parse(body).Country);
    	 console.log("Language: " + JSON.parse(body).Language);
    	 console.log("Cast: " + JSON.parse(body).Actors);
    	 console.log("Plot: " + JSON.parse(body).Plot);
     

    }else{
      request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=40e9cece", 
        function(error, response, body) {
          console.log("Title: " + JSON.parse(body).Title);
          console.log("Release year: " + JSON.parse(body).Year);
          console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
          console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
          console.log("Country: " + JSON.parse(body).Country);
          console.log("Language: " + JSON.parse(body).Language);
          console.log("Cast: " + JSON.parse(body).Actors);
          console.log("Plot: " + JSON.parse(body).Plot);
  })
  };
  })
  }
  


//***Spotify***

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "a273611b0a2e4f42a97d8a49e4f423c3",
  secret: "018a8cc8efb44be994ab334a59e2d102"
});

var nodeArgs = process.argv;
var title = "";
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    title = title + "+" + nodeArgs[i];

  }

  else {

    title += nodeArgs[i];

  }
}

if(process.argv[2] === "spotify-this-song"){
function spotifyIt() {
  spotify.search({ type: 'track', query: title }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    
    else{
    var songInfo = data.tracks.items[0];
    var songResult = console.log("Artist name: "+ songInfo.artists[0].name)
                     console.log("Song name: " + songInfo.name)
                     console.log("Album name: " + songInfo.album.name)
                     console.log("Preview URL: " + songInfo.preview_url)
    console.log(songResult);
    }
  });
}
spotifyIt();
}else{
spotify.search({ type: 'track', query: 'the sign' }, function(err, data) {
  var songInfo = data.tracks.items[0];
    var songResult = console.log("Artist name: "+ songInfo.artists[0].name)
                     console.log("Song name: " + songInfo.name)
                     console.log("Album name: " + songInfo.album.name)
                     console.log("Preview URL: " + songInfo.preview_url)
    console.log(songResult);
})
}


//***do what it says***
var fs = require('file-system');
if(process.argv[2] === "do-what-it-says"){
function doThing(){
  fs.readFile('random.txt', "utf8", function(error, data){
    var txt = data.split(',');

    spotifyIt(txt[1]);
  })
}
}






 

  

