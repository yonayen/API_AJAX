$(function() {
	$.getJSON('https://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
		var myData = data.search[0].Title;
		console.log(data);
		// "data" is variable name used for response data from get request 
	});
});