define(['backbone'], function(Backbone){

	// TODO: Hard coded user!			
	var Bookmark = Backbone.Model.extend({
		urlRoot: 'http://rd-broadcast-bookmarks.herokuapp.com/bookmarks/113003',			
		defaults: {
			user_id:'',
			pid:'',
			create_date:''		
		},
		initialize: function(){

		}
	});

	return Bookmark;
});
