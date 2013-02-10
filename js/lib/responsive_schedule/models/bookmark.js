define([
	'backbone',
	'responsive_schedule/views/bookmark'
	], function(
	Backbone,
	BookmarkView
	){

	var Bookmark = Backbone.Model.extend({
		url: function(){
			return 'http://rd-broadcast-bookmarks.herokuapp.com/bookmarks' + 
					"/" + this.attributes.user_id + 
					"/" + this.attributes.pid;
		},			
		defaults: {
			user_id:'',
			pid:'',
			create_date:'',		
			broadcast: undefined		
		},
		initialize: function(){
			this.bookmark_view = new BookmarkView({ model: this });
		},
		sync: function(method, model, options) { 
			var model = this;

			$.ajax({
				type: "POST",
				url: model.url(),
				success: function(){
					console.log('bookmark posted');
				}
			});			

		}
	});

	return Bookmark;
});
