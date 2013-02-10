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

			if(this.model.length == 0){
				$("#bookmarks-container .bookmarks")
					.html("<div class='notice'>No bookmarks yet!</div>");
			} else {
				$("#bookmarks-container .bookmarks .notice").hide();
			}

			this.model.each(function(bookmark){
				bookmark.bookmark_view.render();			
			});
		}
					
	});

	return BookmarksView;
});	
