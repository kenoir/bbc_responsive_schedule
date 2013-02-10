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
			var view = this;			
			this.model.bind('add',function(){
				view.render();			
			});
		},
		render: function(){
			var template = _.template($("#bookmarks_template").html(),{});
			this.$el.html( template );
			
			$("#bookmarks-container .bookmarks").append(this.$el);

			this.model.each(function(bookmark){
				bookmark.bookmark_view.render();			
			});
		}
					
	});

	return BookmarksView;
});	
