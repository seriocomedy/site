/* Directory Listing */
requirejs.config({
    shim: {
        "bootstrap": {
          "deps": ['jquery']
        }
    },
    paths: {
        "jquery": "/bower_components/jquery/dist/jquery.min",
        "bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min",
        "angular": "/bower_components/angular/angular.min"
    }
});

requirejs(['jquery', 'bootstrap', 'angular']);
