'use strict';

$(document).ready(init);

function init() {
	$('.postMess').click(postMessage);

}

function postMessage() {
	var post = $('#myMessage').val();
	$('#myMessage').val("");
	var img = $('#image').val();
	$('#image').val("");
	var image =$('<img>').addClass('profile').attr('src', img);
	var postIt = $('<div>').addClass('newestPost animated tada').insertAfter('.newPost');
	$(postIt).append(post).addClass('post glyphicon glyphicon-heart').append(image);
	$('.newestPost').prepend(postIt);

}