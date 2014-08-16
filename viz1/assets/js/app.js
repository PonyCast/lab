var app = {
	self: this,

	photostream: function() {
		var randomColor = ['yellow', 'pink', 'red', 'blue', 'white', 'green'];

		$.getJSON('assets/etc/photos.json', function(data) {
			$.each(data, function(index, item) {
				setTimeout(function() {
					$('#layer1 img').attr('src', item.photo);
					$('.username').html(item.username);
					$('.username').css('color', randomColor[Math.floor(Math.random()*randomColor.length)]);
				}, 2000 * index);
			});
		});
	},

	gifs: function() {
		$.getJSON('assets/etc/gifs.json', function(data) {
			$.each(data, function(index, item) {
				setTimeout(function() {
					$('#layer2 img').attr('src', 'assets/img/' + item);
					console.log('assets/img/' + item);
				}, 1500 * index);
			});
		});
	}
}

function kickphoto() {
	$('#layer1 img').stop().animate({
			width: '110%',
			opacity: 0.5
		}, 50, function() {
			$('#layer1 img').delay(90).stop().animate({
				width: '100%',
				opacity: 1
			}, 50);
		});

	$('.username').show();
}


$(document).ready(function() {
	app.photostream();
	app.gifs();
})