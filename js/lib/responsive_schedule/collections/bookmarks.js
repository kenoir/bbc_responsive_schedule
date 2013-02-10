define(
	[
		'backbone',
		'underscore',
		'responsive_schedule/models/bookmark',
		'responsive_schedule/models/broadcast',
		'responsive_schedule/views/bookmarks'
	], function(
		Backbone,
		_,
		Bookmark,	
		Broadcast,
		BookmarksView
	){

	var Bookmarks = Backbone.Collection.extend({
		url: 'http://rd-broadcast-bookmarks.herokuapp.com/bookmarks/', 			
		model: Bookmark,
		initialize: function(){
   		var collection = this;
			console.log("bookmark collection initialised");
			collection.bookmarks_view = new BookmarksView({model: this});
		},	
		fetch: function(options){
   		var collection = this;

			if(options == undefined) { var options = {}; }	
			collection.fetch_options = options;

	   	$.ajax({
				type : 'GET',
      	url : collection.url + Config.user_id + "/", 
      	dataType : 'json',
      	success : function(bookmarks_data) {
					_.each(bookmarks_data,function(bookmark_data){
						var bookmark = new Bookmark(bookmark_data);
						collection.add(new Bookmark(bookmark_data));
					});

					if (!(typeof collection.fetch_options.success === 'undefined')){
						collection.fetch_options.success(collection);
					}
      	}
    	});

			if (!(typeof collection.fetch_options.success === 'undefined')){
				collection.fetch_options.success(collection);
			}
		}
	});

	return Bookmarks;
});	
