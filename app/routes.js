// app/routes.js

// Grab any models created

module.exports = function(app) {
  // server routes
  // handle api calls
  // authentication routes

  // **Any api routes here**

  // frontend routes
  // route to handle all angular requests

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

}
