define(['backbone'], function (Backbone) {
	 return Backbone.Router.extend({
		routes: {
			"bookmarks": "getBookmarks",			
			"*actions": "defaultRoute"
		}
	});
});
