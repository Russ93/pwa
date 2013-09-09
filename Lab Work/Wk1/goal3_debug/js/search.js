// 14 total errors
(function () {
    var db = [
	"JavaScript Version History|http://http://wddbs.com/javascript/sfw/online#p=videos&s=3&file=01.html",
	"JavaScript in the Browser|http://wddbs.com/javascript/sfw/online/#p=videos&s=3&file=01.html",
	"Script Tag|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"JavaScript Syntax|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Data Type Literals|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Strings & HTML Strings|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Numbers|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Arrays|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Objects|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Functions|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Scope|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Loops|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Conditionals|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Typeof|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Timers|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Native Objects|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=02.html",
	"Debugging Tools|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=03.html",
	"Firebug|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=03.html",
	"Error Types|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=03.html",
	"Closures|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=04.html",
	"Context|http://wddbs.com/javascript/sfw/online/#p=videos&s=1&file=04.html"];
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = '';
	
	// Validates search query
	var validqte = function(query){
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) == " "){
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.");
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		
		searchSomething(query);
	};
	
	// Finds search matches
	var searchSomething = function(query){
		
			// split the user's search query string into an array
		var queryArray = query.split(" ");
			
			// array to store matched results from database.js
		var results = [];
	
			// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
			
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii];
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			};
		};
			
			results.sort();
			
			// Check that matches were found, and run output functions
			if(results.length === 0){
				noMatch();
			}else{
				showMatches(results);
			};//else
	};//function
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i];
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
})();