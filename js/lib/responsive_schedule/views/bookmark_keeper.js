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

	var BookmarkKeeperView = Backbone.View.extend({
		className: "bookmarkkeeper",			
		initialize: function(){
			this.render();
		},				
		render: function(){
			var template = _.template( 
				$("#bookmarkkeeper_template").html(),{}); 

			this.$el.html( template );
			this.$el.hide();

			$('#content').append(this.$el);

			this.trigger('bookmarkkeeper:appended');
		}			
	});				

	BookmarkKeeperView.prototype.hide = function(){ this.$el.hide(); }
	BookmarkKeeperView.prototype.show = function(){ this.$el.show(); } 

	return BookmarkKeeperView;
});
