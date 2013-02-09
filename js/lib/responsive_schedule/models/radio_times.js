define(
	[
		'backbone',
		'responsive_schedule/collections/channels',
		'responsive_schedule/collections/broadcasts',
		'responsive_schedule/models/channel_schedule'
	], function(
		Backbone,
		Channels,
		Broadcasts,
		ChannelSchedule
	){	
		
	var RadioTimes = Backbone.Model.extend({
		initialize: function(){
			this.channels = new Channels();
			this.channels.fetch({
				success: function(channels) { RadioTimes.updateChannelSchedules(channels); }
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
