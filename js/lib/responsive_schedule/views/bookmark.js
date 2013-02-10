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
			var view = this;			
			this.model.fetch_broadcast({success:function(model){
				var template = _.template(
					$("#bookmark_template").html(),
					{ 
						pid: model.attributes.pid,
						title: model.meta("broadcast").attributes.title,		
						time: model.meta("broadcast").attributes.display_start_date("LLLL")			
				 	});

				view.$el.html( template );
				view.$el.find('li').css('background-image',"url("+model.meta("broadcast").attributes.image+")");

				$(".bookmarks-list").append(view.$el);
			}});
		},
		events: {

		}
	});

	return BookmarkView;
});	
