define(
	[
		'jquery',
		'backbone',
		'underscore'
	], function(
		$,			
		Backbone,
		_
	){

	var BookmarksView = Backbone.View.extend({
		className: "bookmarks",
		initialize: function(){

		},
		render: function(){
			var bookmarks = this.model.map(function(bookmark){ return bookmark.attributes; });			
			var element = _.template(
				$("#bookmarks_template").html(),
				{ 
					bookmarks: bookmarks,
				});

			$("#content").html(element);
		}
					
	});

	return BookmarksView;
});	
