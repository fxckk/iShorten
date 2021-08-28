var express = require('express');
var router = express.Router();
const { get, post } = require('axios');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/storage');
const URI = require('../models/uri')

/* GET home page. */
router.get('/a/check', function(req, res, next) {
  res.status(200).json({
    status:"Run",
    code:200
  })
});

router.get("/_db/init/:qcode", (req, res) => {
  var code = req.params.qcode;
  URI.findOne({ 'code': code }, function (err, data) {
    if(err) return res.send(err)
    if(!data || data.length<1) return res.json({
      code:3821,
      status:"Not exist records"
    })
    var token = data.token;
    jwt.verify(token, data.hash, (err, d4) => { 
      if(err) return console.error(err)
      var toHash = new Buffer(d4._to, "base64").toString("ascii");
      var toHashC = crypto.createHash("sha256").update(data.pass).digest("hex")
      if(toHash===toHashC) return res.status(200).json({
        code:200,
        status:"OK",
        _cb:{
          code:code,
          to:data.pass
        }
      })
    })
  })
})

router.post("/_db/check", (req, res, next)=>{ 
  if(!req.body.uri) return res.json({
    status:"URI Missing",
    code:4005
  })
  next()
}, (req, res, next) => {   
  URI.findOne({ 'pass': req.body.uri }, function (err, d3) {
    if (err) return console.log(err);
    if(!d3||d3.length<1) return res.json({
      status:"Record not found",
      state:false,
      code:404
    })
    var token = d3.token;
    jwt.verify(token, d3.hash, (err, d4) => { 
      if(err) return console.error(err)
      var toHash = new Buffer(d4._to, "base64").toString("ascii");
      var toHashC = crypto.createHash("sha256").update(req.body.uri).digest("hex")
      if(toHash===toHashC) return res.json({status:"Already Registered", _cb: { code:d3.code } , state:true, code:20056})
    })
  });
})

router.post("/proxy/", (req, res, next) =>{
if(!req.body.target) return res.json({
  status:"Failed",
  code:4885,
  content:"Target Link missing on body"
})
next()
}, (req, res)=>{
  var uri = req.body.target
 var url = !/^https?:\/\//i.test(uri) ? `https://${uri}` : uri;
  get(url)
  .then(({ data }) => {
    res.json({
      status:"OK",
      code:2002,
      data
    })
  })
  .catch((err)=>res.json({
    status:"Failed",
    code:5883,
    err
  }))
})

router.post("/_db/new", (req, res, next)=>{ 
  if(!req.body.uri) return res.json({
    status:"URI Missing",
    code:4005
  })
  next()
} ,(req, res, next) => {   
  post("/_db/check", {uri:req.body.uri})
  .then((d55) => {
    if(d55.data.state===true) return  res.json(d55.data)
  var code = Math.random().toString(36).substr(2, 5); 
  var hash = crypto.createHash('sha256').update(code).digest("hex")
  var token = jwt.sign({
    _buff: Buffer.from(Buffer.from(hash).toString("base64")+".x76"+crypto.createHash('sha256').update(code).digest("hex")).toString("base64"),
    _to: Buffer.from(crypto.createHash("sha256").update(req.body.uri).digest("hex")).toString("base64") 
   }, hash)
   var vx = { token, code, pass: req.body.uri, hash }
  const data = new URI(vx);
  data.save().then(() => { console.log('New Data Created', vx); res.status(200).json({status:"OK", code:2952, _cb:{ code }})}).catch((err)=>{
    console.error(err);
    res.send(err)
  });
})
.catch(console.error)
})

module.exports = router 