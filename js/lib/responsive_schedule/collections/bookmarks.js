define(
	[
		'backbone',
		'underscore',
		'responsive_schedule/models/bookmark',
		'responsive_schedule/views/bookmarks'
	], function(
		Backbone,
		_,
		Bookmark,	
		BookmarksView
	){

	var Bookmarks = Backbone.Collection.extend({
		model: Bookmark,
    url: 'http://rd-broadcast-bookmarks.herokuapp.com/bookmarks/113003',
		initialize: function(){
			console.log("bookmark collection initialised");
			this.fetch({
				success: function(bookmarks){
					bookmarks.bookmarks_view.render();
				}
			});				 
		},	
		fetch: function(options){
   		var collection = this;
		
			collection.bookmarks_view = new BookmarksView({model: this});

			if(options == undefined) { var options = {}; }	
			collection.fetch_options = options;
			
			collection.add([new Bookmark()]);

			if (!(typeof collection.fetch_options.success === 'undefined')){
				collection.fetch_options.success(collection);
			}
		}
	});

	return Bookmarks;
});	
