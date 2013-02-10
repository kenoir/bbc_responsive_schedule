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
			var template = _.template(
				$("#broadcast_template").html(),
				{ 
					title: this.model.attributes.title,
					time: this.model.attributes.display_start_date("H:mma")
				});

			this.$el.html( template );

			$("#" + channel_id + "_schedule ol.broadcast-list").append(this.$el);
		},
		events: {
			"click a.bookmark": "addBookmark"
		},
		addBookmark: function(e){
			this.$el.css('background-color','skyblue');			
			App.bookmark_keeper.add_bookmark_for(this.model);
			e.preventDefault();			
		}			
	});

	return BroadcastView;
});	
