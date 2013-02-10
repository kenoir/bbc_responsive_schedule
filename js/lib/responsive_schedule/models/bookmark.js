define(['backbone'], function(Backbone){

	var Bookmark = Backbone.Model.extend({
		url: function(){
			return 'http://rd-broadcast-bookmarks.herokuapp.com/bookmarks' + 
					"/" + this.attributes.user_id + 
					"/" + this.attributes.pid;
		},			
		defaults: {
			user_id:'',
			pid:'',
			create_date:''		
		},
		initialize: function(){

		},
		sync: function(method, model, options) { 
			var model = this;

			$.ajax({
				type: "POST",
				url: model.url(),
				success: function(){
					console.log('bookmark posted');
				}
			});			

		}
	});

	return Bookmark;
});
