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

	var BookmarkView = Backbone.View.extend({
		className: "bookmark",
		initialize: function(){

		},
		render: function(){

			var template = _.template(
				$("#bookmark_template").html(),{ pid: this.model.attributes.pid });

			this.$el.html( template );

			$(".bookmarks-list").append(this.$el);
		},
		events: {

		}
	});

	return BookmarkView;
});	
