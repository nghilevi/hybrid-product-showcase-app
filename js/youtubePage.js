function listVideos(data) {
	console.log(data);
	
	var output ='';
	for ( var i=0; i<data.feed.entry.length; i++) {

		var title = data.feed.entry[i].title.$t;
		var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
		var link=data.feed.entry[i].link[2].href;

		var blocktype = ((i % 2)===1) ? 'b': 'a';
		
		output += '<div class="ui-block-' + blocktype + '">';
		output += '<h3 class="movietitle">' + title + '</h3>';
		//output += '<div class="ui-bar"><a href="'+link+'" ><img src="' + thumbnail + '" alt="' + title + '" /></a></div>';
		output += '<a href="'+link+'" ><img src="' + thumbnail + '" alt="' + title + '" /></a>';
		output +="</div>";
	}
	
	$('#videolist').html(output);
}

/*function listPosts(data) {
	console.log(data.posts[0].title);
}*/