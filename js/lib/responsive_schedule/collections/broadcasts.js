define(
	[
		'backbone',
		'underscore',
		'moment',
		'responsive_schedule/models/broadcast',
		'responsive_schedule/views/broadcasts'
	], function(
		Backbone,
		_,
		moment,
		Broadcast,
		BroadcastView	
	){

	var Broadcasts = Backbone.Collection.extend({
		model: Broadcast,
		url: 'http://rd-broadcast-bookmarks.herokuapp.com/schedule',
		meta: function(prop, value) {
			if (value === undefined) {
				return this._meta[prop]
      } else {
				this._meta[prop] = value;
			}					
		},
		initialize: function(values){
    	var collection = this;

			collection.broadcasts_view = new BroadcastView({ model: this });
			// Deliberately offsetting the current date in order to get old info from the API 
			this._meta = {			
				channel_id: 'bbc_one',	
				start_date: moment().subtract('days', Config.globalTimeOffsetInDays).format('YYYY-MM-DD'),
				end_date: undefined
			};
			_.each(_.pairs(values),function(pair){
				collection.meta(pair[0],pair[1]);			
			});
								
			console.log("broadcast collection initialised");

			this.fetch({
				success: function(broadcasts){
					collection.broadcasts_view.render(collection.meta("channel_id"));				
					collection.on_now().current_broadcast_view.render(collection.meta("channel_id"));
				}				
			});
		},
		fetch: function(options) {
    	var collection = this;
			
			if(options == undefined) { var options = {}; }	
			collection.fetch_options = options;

    	$.ajax({
				type : 'GET',
      	url : (function(){ 
					// Assemble URL path			
					var date_range = collection.meta("start_date");
					if(!(typeof	collection.meta("end_date") === 'undefined')){
						date_range = "/" + collection.meta("end_date")
					}		
					var url = collection.url + "/" + collection.meta("channel_id") + "/" + date_range
					return url; 
				})(),
      	dataType : 'json',
      	success : function(broadcasts_data) {
					var broadcasts = _.flatten(_.map(_.values(broadcasts_data), 
						function(broadcast_data){

						return _.map(broadcast_data,function(broadcast){
							return new Broadcast(broadcast)			
						});			
					}));
					collection.reset(broadcasts);

					if (!(typeof collection.fetch_options.success === 'undefined')){
						collection.fetch_options.success(collection);
					}
      	}
    	});
		}

	});

	Broadcasts.prototype.on_now = function(){
		this.sortBy(function(broadcast){
			return moment(broadcast.attributes.start_date).format("X");
		});			

		var time_now = moment().subtract('days', Config.globalTimeOffsetInDays);
		var on_now = undefined;
		var last_on = undefined;

		// TODO: This is time inefficient, needs fixing
		this.each(function(broadcast){
			if(on_now == undefined && broadcast.attributes.moment_start_date().isAfter(time_now)){			
				on_now = last_on;			
			}
			last_on = broadcast;
		});

		return on_now;
	}

	return Broadcasts;	
});
