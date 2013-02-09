// https://github.com/timrwood/moment/
// http://stackoverflow.com/questions/4443070/given-an-associative-array-of-date-strings-find-the-next-closest-date

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
			var element = _.template( 
				$("#current_broadcast_template").html(), 
				{ 
					title: this.model.attributes.title,
					start_date: this.model.attributes.start_date
				});

			$("#" + channel_id + "_schedule .broadcast-focussed").replaceWith(element);
			$("#" + channel_id + "_schedule .broadcast-focussed .broadcast-ident")
					.css('background-image',"url("+this.model.attributes.image+")");
		}			
	});				

	return CurrentBroadcastView;
});
