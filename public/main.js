'use strict';

$(document).ready(init);

function init() {
	getMessages();
	$('.postMess').click(postMessage);
}

function getMessages () {
	// $('/messages').append(data);

 //    console.log('data:', data);
	$.get("/msgs", function(data) {
		$('.newestPost').append(data);

	for(var i = 0; i < data.length; i++) {
		var newPost = $('.newPost').clone().removeClass('show');
		var post = data[i].post;
		var img = data[i].img;
		var id= data[i].id;
		var image =$('<img>').addClass('profile').attr('src', img);

		var postIt = $('<div>').addClass('newestPost animated tada well').insertAfter('.newPost');	
		$(postIt).append(image).append(id).append(post).addClass('post glyphicon glyphicon-heart');
		$('.newestPost').prepend(postIt);
	}
})

}
	


function postMessage() {

	var newPost = $('.newPost').clone().removeClass('show');

	var post = $('#myMessage').val();
	$('#myMessage').val("");
	var img = $('#image').val();
	$('#image').val("");

	var image =$('<img>').addClass('profile').attr('src', img);
	var postIt = $('<div>').addClass('newestPost animated tada well').insertAfter('.newPost');
	
	$(postIt).append(image).append(post).addClass('post glyphicon glyphicon-heart');

	$('.newestPost').prepend(postIt);

	$.ajax({
  		type: "POST",
  		url: '/msgs',
  		data: {
  			post: post,
  			image: img
  		},
  		success: function(data){
  			console.log(data)
    	},
    	error: function(error){
    		console.error(error)
    	}
	});
}

