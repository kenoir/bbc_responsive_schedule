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
			var element = _.template( 
				$("#schedule_template").html(), 
				{ 
					channel_id: this.model.attributes.channel.id,			
					channel_display_name: this.model.attributes.channel.get('name') 
				});

			$('#content').append(element);
		}			
	});				

	return ChannelScheduleView;
});
