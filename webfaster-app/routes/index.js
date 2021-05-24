var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
const loadAllData = require('../model/wftest')

/* GET home page. */

router.get('/', async(req, res, next) => {
  // res.render('index', { title: 'Express' });
  let data = await loadAllData;
  res.json(data);
});


module.exports = router;
