// http://rd-broadcast-bookmarks.herokuapp.com/api
// http://liquidmedia.ca/blog/2011/01/backbone-js-part-1/
// http://liquidmedia.org/blog/2011/01/an-intro-to-backbone-js-part-2-controllers-and-views/

define(
	[
		'jquery',
		'backbone',
		'underscore',
		'responsive_schedule/router',
		'responsive_schedule/models/channel',
		'responsive_schedule/collections/channels',
		'responsive_schedule/models/radio_times',
		'responsive_schedule/views/channel_schedule'
	], function(
		$, 
		Backbone,
		_,
		Router,
		Channel,
		Channels,
		RadioTimes,
		ChannelScheduleView
	){

	var start = function() {
		$(document).ready(function() {
			var app_router = new Router;

			app_router.on('route:defaultRoute', function(actions) {

				$schedule_container = $("#content");	

				radio_times = new RadioTimes();
				radio_times.channels.bind("add",function(channel){
					console.log("Adding",channel.get("name"));
				});
				radio_times.channels.fetch({
					success:function(channels){
						channels.each(
							function(channel){
								var channel_schedule = new ChannelScheduleView({ model: channel });
								channel_schedule.render($schedule_container );
							});
					}
				});
			});				

			Backbone.history.start();
		});
	}		

	return {"start":start};
});
