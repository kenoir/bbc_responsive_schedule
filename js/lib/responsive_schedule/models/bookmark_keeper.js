define(
	[
		'backbone',
		'moment',
		'responsive_schedule/views/bookmark_keeper',
		'responsive_schedule/collections/bookmarks',
		'responsive_schedule/models/bookmark'
	], function(
		Backbone,
		moment,
		BookmarkKeeperView,
		Bookmarks,
		Bookmark
	){	
		
	var BookmarkKeeper = Backbone.Model.extend({
		initialize: function(){
			this.bookmarkkeeper_view = new BookmarkKeeperView();			
			this.bookmarks = new Bookmarks();

			this.bookmarks.fetch({
				success: function(bookmarks) { BookmarkKeeper.updateBookmarks(bookmarks); }
			});
		}
	});	

	BookmarkKeeper.updateBookmarks = function(bookmarks){
		bookmarks.bookmarks_view.render();
	};

	BookmarkKeeper.prototype.add_bookmark_for = function(broadcast){
			bookmark = new Bookmark({
				user_id: Config.user_id,				
				pid: broadcast.attributes.pid
			});		

			bookmark.save();
	};

	return BookmarkKeeper;

});
