(function() {
  // this view is auto-generated, forget it
  require({
    urlArgs: "b=" + ((new Date()).getTime()),
    paths: {
      jquery: 'vendor/jquery/jquery'
    }
  }, ['app/users/example-view'], function(ExampleView) {
    var view = new ExampleView();
    view.render('body');
  });

}).call(this);
