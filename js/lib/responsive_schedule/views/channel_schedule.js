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
		className: "channel",			
		initialize: function(){

		},				
		render: function($container){
			var name = this.model.get('name');			

			var element = _.template( 
				$("#schedule_template").html(), 
				{ channel_display_name: this.model.get('name') }); 

			$container.append(element);
		}			
	});				

	return ChannelScheduleView;
});
