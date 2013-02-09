define(
	[
		'backbone',
		'responsive_schedule/views/current_broadcast'
	], function(
		Backbone,
		CurrentBroadcastView
	){
	
	var Broadcast = Backbone.Model.extend({
		urlRoot: 'http://rd-broadcast-bookmarks.herokuapp.com/broadcasts',
		defaults: {
			pid: '', 
			start_date: '',
			end_date: '',
			duration: '',
			title: '',
			episode_pid: '',
			image: ''
		},	
		initialize: function(){
			this.current_broadcast_view = new CurrentBroadcastView({ model: this });
		}
	});			

	Broadcast.format_date = function(){

	}

	Broadcast.prototype.start_date = function(){

	}

	Broadcast.prototype.start_date = function(){

	}

	return Broadcast;
});
