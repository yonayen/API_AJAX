$(function() {
	$.getJSON('www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
		console.log(data);
		// "data" is variable name used for response data from get request 
	});
});