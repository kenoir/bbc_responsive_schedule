define([
	'backbone',
	'responsive_schedule/models/broadcast',
	'responsive_schedule/views/bookmark'
	], function(
	Backbone,
	Broadcast,
	BookmarkView
	){

	var Bookmark = Backbone.Model.extend({
		url: function(){
			return 'http://rd-broadcast-bookmarks.herokuapp.com/bookmarks' + 
					"/" + this.attributes.user_id + 
					"/" + this.attributes.pid;
		},			
		defaults: {
			user_id:'',
			pid:'',
			create_date:'',		
			broadcast: undefined		
		},
		initialize: function(){
			this.bookmark_view = new BookmarkView({ model: this });
			this._meta = {};
		},
 		meta: function(prop, value) {
			if (value === undefined) {
				return this._meta[prop]
			} else {
				this._meta[prop] = value;
			}
		},
		save: function(options) { 
			var model = this;

			$.ajax({
				type: "POST",
				url: model.url(),
				success: function(){
					console.log('bookmark posted');
					if (!(typeof options.success === 'undefined')){
							options.success(model);
					}
				}
			});			
		}
	});

	Bookmark.prototype.fetch_broadcast = function(options){
		var model = this;			
		var broadcast = model.meta("broadcast");
		if (!(typeof broadcast === 'undefined') &&
				!(typeof options.success === 'undefined')){

			options.success(model);						
			return;
		}

		var broadcast = new Broadcast({ id: model.attributes.pid });
		broadcast.fetch({success: function(broadcast){
			if (!(typeof options.success === 'undefined')){
				model.meta("broadcast",broadcast);			
				options.success(model);
			};
		}});
	}

	return Bookmark;
});
