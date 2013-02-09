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

	var BroadcastsView = Backbone.View.extend({
		className: "broadcasts",
		initialize: function(){

		},
		render: function(channel_id){
			var broadcasts = this.model.map(function(broadcast){ return broadcast.attributes; });
			var element = _.template(
				$("#broadcasts_template").html(),
				{ 
					channel_id: channel_id,
					broadcasts: broadcasts		
				});

			$("#" + channel_id + "_schedule .broadcast-list").replaceWith(element);
		}
					
	});

	return BroadcastsView;
});	
