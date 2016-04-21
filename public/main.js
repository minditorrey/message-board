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
	var postIt = $('<div>').addClass('newestPost animated tada well').insertAfter('.newPost');
	$(postIt).append(image).append(post).addClass('post glyphicon glyphicon-heart');
	$('.newestPost').prepend(postIt);

}