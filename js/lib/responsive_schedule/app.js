define(['jquery','responsive_schedule/router','backbone'], function($, Router, Backbone){

	var start = function() {
		$(document).ready(function() {
			var app_router = new Router;

			app_router.on('route:defaultRoute', function(actions) {
				console.log("default route");
				// http://liquidmedia.ca/blog/2011/01/backbone-js-part-1/
			});				

			Backbone.history.start();
		});
	}		

	return {"start":start};
});
