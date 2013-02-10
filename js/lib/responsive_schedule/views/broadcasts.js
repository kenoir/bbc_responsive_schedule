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
			this.$el = _.template(
				$("#broadcasts_template").html(),{});
			$("#" + channel_id + "_schedule .broadcast-list").replaceWith(this.$el);


			this.model.each(function(broadcast){
				broadcast.broadcast_view.render(channel_id);	
			});

		}
	});

	return BroadcastsView;
});	
