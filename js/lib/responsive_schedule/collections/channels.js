define(
	[
		'backbone',
		'underscore',
		'responsive_schedule/models/channel'
	], function(
		Backbone,
		_,
		Channel
	){

	var Channels = Backbone.Collection.extend({
		model: Channel,
    url: 'http://rd-broadcast-bookmarks.herokuapp.com/channels',
		initialize: function(){
			console.log("channel collection initialised");
		},	
		fetch : function(options) {
    	var collection = this;
		
			if(options == undefined) { var options = {}; }	
			collection.fetch_options = options;

    	$.ajax({
				type : 'GET',
      	url : collection.url,
      	dataType : 'json',
      	success : function(channels_data) {
					collection.add(_.map(channels_data, function(channel_data){
						return new Channel(channel_data)			
					}));
					if (!(typeof collection.fetch_options.success === 'undefined')){
						collection.fetch_options.success(collection);
					}
      	}
    	});
		}

	});

	return Channels;
});	
