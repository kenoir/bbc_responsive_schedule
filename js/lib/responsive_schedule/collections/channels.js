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
    	$.ajax({
				type : 'GET',
      	url : this.url,
      	dataType : 'json',
      	success : function(channels_data) {
					collection.add(_.map(channels_data, function(channel_data){
						return new Channel(channel_data)			
					}));
					if (!(typeof options.success === 'undefined')){
						options.success(collection);
					}
      	}
    	});
		}

	});

	return Channels;
});	
