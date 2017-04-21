var require = {
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "vis": {}
    },
    paths: {
        "jquery" : "/shared/bower_components/jquery/dist/jquery.min",
        "bootstrap" :  "/shared/bower_components/bootstrap/dist/js/bootstrap.min",
        "vis": "/shared/bower_components/vis/dist/vis"
    }
};

requirejs.config(require);

requirejs(['jquery', 'bootstrap']);

requirejs(['vis'], function (vis) {
    var container = document.getElementById('timeline');
    console.log(container)
    var data = new vis.DataSet([
      {id: 1, content: 'Pleistocene', start: '0002'},
      {id: 2, content: 'Pliocene', start: '0005'},
      {id: 3, content: 'Miocene', start: '0025'},
      {id: 4, content: 'Oligocene', start: '0038'},
      {id: 5, content: 'Eocene', start: '0055'},
      {id: 6, content: 'Palaeocene', start: '0065'},
      {id: 7, content: 'Cretaceous', start: '0144'},
      {id: 8, content: 'Jurassic', start: '0213'},
      {id: 9, content: 'Triassic', start: '0248'},
      {id: 10, content: 'Permian', start: '0286'},
      {id: 11, content: 'Carboniferous', start: '0354'},
      {id: 12, content: 'Devonian', start: '0412'},
      {id: 13, content: 'Silurian', start: '0436'},
      {id: 14, content: 'Ordovician', start: '0352'},
      {id: 15, content: 'Cambrian', start: '0570'},
      {id: 16, content: 'Precambrian', start: '0571'},
    ]);
    var options = {
      format: {
        minorLabels: {
          year: 'YYYY'
        },
        majorLabels: {
          year: 'YYYY'
        }
      }
    };
    var timeline = new vis.Timeline(container, data, options);
});
