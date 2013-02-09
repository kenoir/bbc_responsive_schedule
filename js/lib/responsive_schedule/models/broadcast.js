define(
	[
		'backbone',
		'moment',
		'responsive_schedule/views/current_broadcast'
	], function(
		Backbone,
		moment,
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
			image: '',
			display_start_date: function(format){
				return moment(this.start_date).format(format);
			},		
			moment_start_date: function(){
				return moment(this.start_date);
			}
		},	
		initialize: function(){
			this.current_broadcast_view = new CurrentBroadcastView({ model: this });
		}
	});			

	return Broadcast;
});
