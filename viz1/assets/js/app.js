var app = {
	self: this,

	photostream: function() {
		$.getJSON('assets/etc/photos.json', function(data) {
			$.each(data, function(index, item) {
				setTimeout(function() {
					$('#layer1 img').attr('src', item.photo);
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
	$('#layer1 img').animate({
			width: '120%'
		}, 50, function() {
			$('#layer1 img').animate({
				width: '100%'
			}, 50);
		});
}

$(document).ready(function() {
	app.photostream();
	app.gifs();
})