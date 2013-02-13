requirejs.config({
	baseUrl: "./js/lib",
	paths: {
		underscore: "ext/underscore/underscore",
		backbone: "ext/backbone/backbone",
		jquery: "ext/jquery/jquery",
		moment: "ext/moment/moment",
		store: "ext/store/store",
		responsive_schedule: "responsive_schedule",
		app: "responsive_schedule/models/app"
	},	
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
    },
		'underscore': {
			exports: '_'
    },
  }
});

// Start application and attach to window
require(['app','store','moment'], function(App,store,moment){

	// Hack to get and persist user id without asking			
	var user_id = function(){
		var id = store.get('user_id');

		if(id == undefined){
			id = moment().format('X'); 
			store.set('user_id',id);
		}

		return id; 
	}

	window.Config = {
		globalTimeOffsetInDays: 15,
		user_id: user_id() 
	};			
	window.App = new App();
});
