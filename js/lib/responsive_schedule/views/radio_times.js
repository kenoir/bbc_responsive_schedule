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

	var RadioTimesView = Backbone.View.extend({
		className: "radiotimes",			
		initialize: function(){

		},				
		render: function(){
			this.$el = _.template( 
				$("#radiotimes_template").html(),{}); 

			$('#content').html(this.$el);
		}			
	});				

	return RadioTimesView;
});