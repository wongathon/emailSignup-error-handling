var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var validateUser = require('./validate-user');

var DBInstance = require('./fake-db');

// Server setup:
var app = express();
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));

// Render the Create Account page:
app.get('/', function (req, res) {
  DBInstance.print();
  res.sendFile(path.resolve('client/create-account.html'));
});

// Handle form submissions from the Create Account page:
app.post('/create-account', function (req, res) {
  console.log(req.body);
  var user = req.body;
  var errors = validateUser(req.body);

  if (errors) {
    res.status(400).send({
      success: false,
      errors: errors
    });
  } else {

    try {
       DBInstance.insert(user);
       res.status(200).send({ success: true });
    }
    catch (e) {
      res.status(400).send({
        success: false,
        error: "Email already exists in database!! Sign in with your password."
      });
    }


  }
});//

// Run the server:
app.listen(3000, function () {
  console.log('Server is running! Visit localhost:3000 in your browser.');
});
