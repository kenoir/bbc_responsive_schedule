requirejs.config({
	baseUrl: "./js/lib",
	paths: {
		underscore: "ext/underscore/underscore",
		backbone: "ext/backbone/backbone",
		jquery: "ext/jquery/jquery",
		moment: "ext/moment/moment",
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
require(['app'], function(App){
	window.App = new App();
});
