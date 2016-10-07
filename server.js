//Send Email from Node
//https://codeforgeek.com/2014/07/send-e-mail-node-js/

// server.js
// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sendgrid = require("sendgrid")("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");


// configuration

// config files
//var db = require('./config/db');

// set ports
var port = process.env.PORT || 3030;

// connect to mongoDB database
// mongoose.connect(db.url);

// get all data of the body (POST) params
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}) );

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes
// Route for database set up
//require('./app/routes')(app);

//Send Email api
app.get('/sendgrid/sendemail', function (req, res) {

  var helper = require("sendgrid").mail;
  var from_email = new helper.Email("info@jkbiopharma.com");
  var to_email = new helper.Email(req.query.to);
  var subject = req.query.subject;
  var content = new helper.Content("text/plain", req.query.text);

  var mail = new helper.Mail(from_email, subject, to_email, content);

  var requestBody = mail.toJSON();

  // Send Email
  var emptyRequest = require('sendgrid-rest').request;
  var requestPost = JSON.parse(JSON.stringify(emptyRequest));
  requestPost.method = 'POST';
  requestPost.path = '/v3/mail/send';
  requestPost.body = requestBody;
  sendgrid.API(requestPost, function (error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    return response.statusCode;
  });
});


// start app
app.listen(port);
// User message
console.log('Application is open on port ' + port);
