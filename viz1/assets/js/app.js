var app = {
	self: this,

	photostream: function() {
		$.getJSON('assets/etc/photos.json', function(data) {
			everyTime(3)
			$.each(data, function(index, item) {
				$('#layer1 img').attr('src', item.photo);
			});
		});
	},

	lala: function() {
		
	}
}