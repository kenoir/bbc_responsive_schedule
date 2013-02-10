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
			this.$el.hide();

			$('#content').append(this.$el);

			this.trigger('radiotimes:appended');
		}			
	});				

	RadioTimesView.prototype.hide = function(){ this.$el.hide(); }
	RadioTimesView.prototype.show = function(){ this.$el.show(); } 

	return RadioTimesView;
});
