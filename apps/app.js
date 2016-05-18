$(function(){

  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    var myData = data.Search;
    $.each(myData, function(index, value){
      console.log(value.Title);
    });
  });
});

function showResults(results){
	$.each(results, function(index,value){
		console.log(value.Title);
	});
}