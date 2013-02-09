// http://rd-broadcast-bookmarks.herokuapp.com/api
// http://liquidmedia.ca/blog/2011/01/backbone-js-part-1/
// http://liquidmedia.org/blog/2011/01/an-intro-to-backbone-js-part-2-controllers-and-views/

globalTimeOffsetInDays = 14;

define(
	[
		'jquery',
		'backbone',
		'underscore',
		'responsive_schedule/router',
		'responsive_schedule/models/radio_times',
		'responsive_schedule/models/bookmark_keeper'
	], function(
		$, 
		Backbone,
		_,
		Router,
		RadioTimes,
		BookmarkKeeper
	){

	var start = function() {
		$(document).ready(function() {
			var app_router = new Router;

			app_router.on('route:defaultRoute', function(actions) {
				radio_times = new RadioTimes();
			});				

			app_router.on('route:getBookmarks', function(actions) {
				bookmark_keeper = new BookmarkKeeper();			
			});

			Backbone.history.start();
		});
	}		

	return {"start":start};
});
