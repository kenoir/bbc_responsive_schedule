// http://rd-broadcast-bookmarks.herokuapp.com/api
// http://liquidmedia.ca/blog/2011/01/backbone-js-part-1/
// http://liquidmedia.org/blog/2011/01/an-intro-to-backbone-js-part-2-controllers-and-views/

define(
	[
		'jquery',
		'backbone',
		'underscore',
		'responsive_schedule/router',
		'responsive_schedule/models/radio_times'
	], function(
		$, 
		Backbone,
		_,
		Router,
		RadioTimes
	){

	var start = function() {
		$(document).ready(function() {
			var app_router = new Router;

			app_router.on('route:defaultRoute', function(actions) {
				$schedule_container = $("#content");	
				radio_times = new RadioTimes();
			});				

			Backbone.history.start();
		});
	}		

	return {"start":start};
});
