// https://github.com/timrwood/moment/

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

	var CurrentBroadcastView = Backbone.View.extend({
		className: "broadcast",			
		initialize: function(){
			
		},				
		render: function(channel_id){
			this.$el = _.template( 
				$("#current_broadcast_template").html(), 
				{ 
					title: this.model.attributes.title,
					time: this.model.attributes.display_start_date("H:mma")
				});

			$("#" + channel_id + "_schedule .broadcast-focussed").replaceWith(this.$el);
			$("#" + channel_id + "_schedule .broadcast-focussed .broadcast-ident")
					.css('background-image',"url("+this.model.attributes.image+")");
		}			
	});				

	return CurrentBroadcastView;
});
