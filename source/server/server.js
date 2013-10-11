var express = require('express'),
    routes = require('./routes'),
    engines = require('consolidate'),
    partials = require('express-partials');

exports.startServer = function(config, callback) {

  var port = process.env.PORT || config.server.port;

  var app = express();

  var server = app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
  });

  app.configure(function() {
    app.use(partials());
    app.set('port', port);
    app.set('views', config.server.views.path);
    app.engine(config.server.views.extension, engines[config.server.views.compileWith]);
    app.set('view engine', config.server.views.extension);
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.compress());
    app.use(config.server.base, app.router);
    app.use(express.static(config.watch.compiledDir));
    app.use(express.static( __dirname + '/static' ));
  });

  app.configure('development', function() {
    app.use(express.errorHandler());
  });

  app.get('/', routes.index(config));
  //app.get('/read', routes.reader(config));
  app.get('/read', function(req,res,next){
    res.render('read.ejs',{layout:false})    
  });

  callback(server);
};

