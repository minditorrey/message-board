'use strict';

$(document).ready(init);

function init() {
	getMessages();
	$('.postMess').click(postMessage);
}

function getMessages () {
	$.get("/posts", function(data) {
		$('.newestPost').append(data);
  
	for(var i = 0; i < data.length; i++) {
		var newPost = $('.newestPost').clone().removeClass('show');
		
		var post = data[i].id;
		var img = data[i].model;
		var name = data[i].make;
		var image = $('<img>').addClass('profile').attr('src', img);
		
		
		$(postIt).append($('<button/>').addClass('btn btn-danger remove').text('Remove'));
		$(postIt).append($('<button/>').addClass('btn btn-success edit').text('Edit'));
		
		$(document).on('click', '.remove', function() {
			$(this).parent().remove();
		});
		
		var postIt = $('<div>').addClass('postIt animated tada well').insertAfter(newPost);	
		$(postIt).append(image).append(post).append(name).addClass('post glyphicon glyphicon-heart');
		$('.newestPost').prepend(postIt);

		console.log('gm-img:', img);
		console.log('gm-post:', post);
		console.log('gm-data:', data);
		console.log('gm-name:', name);

		}
	})

}


function postMessage(e) {
	e.preventDefault();
	var newPost = $('.newestPost').clone().removeClass('show');

	var post = $('#myMessage').val();

	$('#myMessage').val("");
	var img = $('#image').val();
	$('#image').val("");
	var name = $('#name').val();
	$('#name').val("");
	var image = $('<img>').addClass('profile').attr('src', img);
	var postIt = $('<div>').addClass('postIt animated tada well').insertAfter(newPost);
	
	$(postIt).append(image).append(post).append(name).addClass('post glyphicon glyphicon-heart');

	$('.newestPost').prepend(postIt);
	
		console.log('pm-img:', img);
		console.log('pm-name:', name);
		console.log('pm-post:', post);
	
	$.ajax({
  		type: "POST",
  		url: '/posts',
  		data: {
  			post: post,
  			image: img,
  			name: name
  		},
  		success: function(data){
  			console.log(data)
    	},
    	error: function(error){
    		console.error(error)
    	}
	});
}

