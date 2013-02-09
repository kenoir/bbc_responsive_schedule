define(
	[
		'backbone',
		'responsive_schedule/collections/bookmarks'
	], function(
		Backbone,
		Bookmarks
	){	
		
	var BookmarkKeeper = Backbone.Model.extend({
		initialize: function(){
			this.bookmarks = new Bookmarks();
			//this.bookmarks.fetch({
			//	success: function(bookmarks) { BookmarkKeeper.updateBookmarks(bookmarks); }
			//});
		}
	});	

	/*
	BookmarkKeeper.updateBookmarks = function(bookmarks){
		console.log(bookmarks);
	};
	*/

	return BookmarkKeeper;

});
