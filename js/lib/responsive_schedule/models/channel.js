define(['backbone'], function(Backbone){

	var Channel = Backbone.Model.extend({
		urlRoot: 'http://rd-broadcast-bookmarks.herokuapp.com/channels',			
		defaults: {
			name:'',
			sort_order:0,
			image:''		
		},
		initialize: function(){
			console.log("channel initialised");			
		}
	});

	return Channel;
});
