$(function() {
	$.getJSON('www.omdbapi.com/?s=Star%20Wars&r=json', function(){
		console.log(data);
	});
});