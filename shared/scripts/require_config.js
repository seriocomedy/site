requirejs.config({
  shim: {
    bootstrap: {
      deps: [
        "jquery",
        "tether"
      ]
    }
  },
  paths: {
    "jquery": "/shared/bower_components/jquery/dist/jquery.min",
    "bootstrap": "/shared/bower_components/bootstrap/dist/js/bootstrap.min",
    "angular": "/shared/bower_components/angular/angular.min",
    "tether": "/shared/bower_components/tether/dist/js/tether.min",
    "mustache.js": "/shared/bower_components/mustache.js/mustache.min",
    "vis": "/shared/bower_components/vis/dist/vis.min",
    "moment": "/shared/bower_components/moment/moment"
  }
});
