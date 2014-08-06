/** @jsx React.DOM */
define(['react'], function(React) { // this is needed for inclusion into backbone / underscore / requirejs environment

	window.MYCOMPONENT = {};

	window.MYCOMPONENT = React.createClass({displayName: 'mymessage',

	    render: function() {
	        var mymessage = this.props.mymessage;

	        return React.DOM.div(null, "Hello ", mymessage)
	    }
	});

})
