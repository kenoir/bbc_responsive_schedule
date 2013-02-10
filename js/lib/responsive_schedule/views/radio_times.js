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
			var template = _.template( 
				$("#radiotimes_template").html(),{}); 

			this.$el.html( template );

			$('#content').html(this.el);
		}			
	});				

	return RadioTimesView;
});
