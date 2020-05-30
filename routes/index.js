var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/postbirthday', function(req,res){
  var bdate = moment(req.body.dob).format('DD-MM');
  console.log(bdate);
  var Date = moment().format('DD-MM');
  if(req.body.uname&&req.body.fname&&req.body.email&&req.body.message&&req.body.dob)
  {
  if(bdate==Date){
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Your mail ID here',
      pass: 'Your password here'
    }
    });

    var mailOptions = {
      from: req.body.uname,
      to: req.body.email,
      subject: 'Birthday Wishes!!!',
      text: 'Hi ' + req.body.fname + ',\n' + req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
        res.send(info);
      }
    });
  }
}
});


module.exports = router;
