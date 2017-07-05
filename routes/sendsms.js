var express = require('express');
var router = express.Router();
// var twilio = require('twilio');


var env = process.env.NODE_ENV || "development";
if (env === 'development'){
  var env = require('node-env-file');
  env(__dirname + '/../.env');
}


var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log('req.body', req.body)
  console.log("message=", req.body.message)
  if (req.body.message){
    client.messages.create({
        body: req.body.message,
        to: req.body.to || process.env.TWILIO_TO,  // Text this number
        from: process.env.TWILIO_FROM, // From a valid Twilio number
    }, function(err, message) {
        console.log(err, message);
    });
    res.render('index', { title: 'Express', message: "Message sent" });

  }

});

module.exports = router;
