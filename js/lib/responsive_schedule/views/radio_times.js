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
			var element = _.template( 
				$("#radiotimes_template").html(),{}); 

			$('#content').html(element);
		}			
	});				

	return RadioTimesView;
});
