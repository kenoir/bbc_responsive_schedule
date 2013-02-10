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

	var BroadcastView = Backbone.View.extend({
		className: "broadcast",
		initialize: function(){

		},
		render: function(channel_id){
			this.$el = _.template(
				$("#broadcast_template").html(),
				{ 
					title: this.model.attributes.title,
					time: this.model.attributes.display_start_date("H:mma")
				});

			$("#" + channel_id + "_schedule ol.broadcast-list").append(this.$el);
		}
					
	});

	return BroadcastView;
});	
