define(
	[
		'jquery',
		'backbone',
		'underscore',
		'responsive_schedule/router',
		'responsive_schedule/models/radio_times',
		'responsive_schedule/models/bookmark_keeper'
	], function(
		$, 
		Backbone,
		_,
		Router,
		RadioTimes,
		BookmarkKeeper
	){

	var App = Backbone.Model.extend({
		initialize: function(){
			model = this;

			model.app_router = new Router;

			model.radio_times = new RadioTimes();
			model.bookmark_keeper = new BookmarkKeeper();			
		
			model.setup_events();
		}
	});

	App.prototype.setup_events = function(){
			model.radio_times.radiotimes_view.on('radiotimes:appended',function(msg){
				model.setup_routes();
			});
	}

	App.prototype.setup_routes = function(){
		app = this;			

		this.app_router.on('route:defaultRoute', function(actions) {
			app.focus(app.radio_times.radiotimes_view);
		});				

		this.app_router.on('route:getBookmarks', function(actions) {
			app.focus(app.bookmark_keeper.bookmarkkeeper_view);
		});

		Backbone.history.start();
	}

	App.prototype.focus = function(page){
		this.radio_times.radiotimes_view.hide();
		this.bookmark_keeper.bookmarkkeeper_view.hide();

		page.show();
	};

	return App;
});
