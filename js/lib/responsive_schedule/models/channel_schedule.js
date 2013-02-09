define(
	[
		'backbone',
		'responsive_schedule/views/channel_schedule'
	], function(
		Backbone,
		ChannelScheduleView
	){
	
	var ChannelSchedule = Backbone.Model.extend({
		defaults: {
			channel: undefined,
			broadcasts: undefined
		},
		initialize: function(){
			this.channel_schedule_view = new ChannelScheduleView({ model: this });
			this.channel_schedule_view.render();	
		},
	});

	return ChannelSchedule;

});
