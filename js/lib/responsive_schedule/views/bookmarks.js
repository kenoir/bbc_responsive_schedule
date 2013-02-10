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
			var template = _.template(
				$("#bookmarks_template").html(),
				{ 
					bookmarks: bookmarks,
				});

			this.$el.html( template );
			this.$el.hide();

			$("#content").append(this.$el);
		}
					
	});

	return BookmarksView;
});	
