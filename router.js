// define(["backbone","text!templates/mycomponent.html",'react','reactive-elements','my-component'], function(Backbone, Tpl, React) {
define(["backbone","text!templates/mycomponent.html",'reactive-elements','my-component'], function(Backbone, Tpl) {

	return Backbone.Router.extend({
		routes : {
			"" : "index"
		},
		index : function() {
			var mymessage = "this is my first component...";

			this.template = _.template(Tpl); 
			$('#content').html(this.template({ 
				mymessage: mymessage
			}));
			document.registerReact('my-component', window.MYCOMPONENT);
		}
	});
});