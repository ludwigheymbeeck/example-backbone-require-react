require.config({
  "baseUrl" : ".",
  "paths"   : {
    'jquery'                : 'assets/lib/jquery',
    'underscore'            : 'assets/lib/underscore',         // load lodash instead of underscore (faster + bugfixes)
    'backbone'              : 'assets/lib/backbone',
    'text'                  : 'assets/lib/text',
    'x-tag'                 : 'react_components/lib/x-tag-core/dist/x-tag-core',
    'react'                 : 'react_components/lib/react/react',
    'reactive-elements'     : 'react_components/lib/reactive-elements',
    'my-component'          : 'react_components//dist/my-component'
  },
  "shim" : {
    "backbone" : {
      "deps" : [
        "jquery",
        "underscore"
      ],
      "exports" : "Backbone"
    },
    "jquery" : {
      "exports" : "$"
    },
    "underscore" : {
      "exports" : "_"
    },
    "react" : {
      "exports" : "React"
    },
    "reactive-elements" : {
      "deps" : [
        "react"
      ]
    },
    "my-component" : {
      "deps" : [
        "react"
      ]
    },
  }
});

require(["backbone", "router"], function(Backbone, Router) {
  new Router();
  Backbone.history.start();
});
