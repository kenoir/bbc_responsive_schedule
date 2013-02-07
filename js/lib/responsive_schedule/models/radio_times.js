define(
	[
		'backbone',
		'responsive_schedule/collections/channels'
	], function(
		Backbone,
		Channels
	){	
		
	var RadioTimes = Backbone.Model.extend({
		defaults: {
			name: 'Untitled'
		},
		initialize: function(){
			this.channels = new Channels();
		}
	});	

	return RadioTimes;

});
