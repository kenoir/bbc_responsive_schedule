define(
	[
		'backbone',
		'responsive_schedule/collections/channels',
		'responsive_schedule/collections/broadcasts',
		'responsive_schedule/models/channel_schedule',
		'responsive_schedule/views/radio_times'
	], function(
		Backbone,
		Channels,
		Broadcasts,
		ChannelSchedule,
		RadioTimesView
	){	
		
	var RadioTimes = Backbone.Model.extend({
		initialize: function(){
			var model = this;

			model.radiotimes_view = new RadioTimesView();			
			model.channels = new Channels();
			
			model.channels.fetch({
				success: function(channels) { 
					model.radiotimes_view.render();			
					RadioTimes.updateChannelSchedules(channels); 
				}
			});
		}
	});	

	RadioTimes.updateChannelSchedules = function(channels){

		channels.each(function(channel){
			var broadcasts = new Broadcasts({
				channel_id: channel.id	
			});			
			var schedule = new ChannelSchedule({
				channel: channel,
				broadcasts: broadcasts
			});
		});	
	};

	return RadioTimes;

});
