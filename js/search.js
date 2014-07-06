$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data/movies.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data.movies, function(key, val) {
			if (val.title.search(myExp) != -1) {
				output += '<li>';
				output += '<h2>'+ val.title +'</h2>';
				output += '<img src="movie_posters/'+ val.image_url +'" alt="'+ val.title +'" />';
				output += '<p>'+ val.description +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});


