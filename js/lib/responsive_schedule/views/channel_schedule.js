define(
	[
		'jquery',
		'backbone',
		'underscore'
	], function(
		$,			
		Backbone,
		_
	){

	var ChannelScheduleView = Backbone.View.extend({
		className: "channelschedule",			
		initialize: function(){
			_.bindAll(this, 'render');
		},				
		render: function(){
			this.el = _.template( 
				$("#schedule_template").html(), 
				{ 
					channel_id: this.model.attributes.channel.id,			
					channel_display_name: this.model.attributes.channel.get('name') 
				});

			$('#radiotimes .schedule-container').append(this.el);
		}			
	});				

	return ChannelScheduleView;
});
