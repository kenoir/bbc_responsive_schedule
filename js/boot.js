requirejs.config({
	baseUrl: "./js/lib",
	paths: {
		underscore: "ext/underscore/underscore",
		backbone: "ext/backbone/backbone",
		jquery: "ext/jquery/jquery",
		moment: "ext/moment/moment",
		responsive_schedule: "responsive_schedule",
		app: "responsive_schedule/app"
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

require(['app'], function(app){
	app.start();
});
