var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
const loadAllData = require('../model/wftest')

/* GET all API's with x */

const selectMatchItem = (list, keyword) => {
    let reg = new RegExp(keyword);
    let resArry = [];
    list.filter(item => {
        for(let i in item) {
            if(reg.test(item[i])) {
                resArry.push(item);
            }
        }
    })
    return resArry;
}

router.get('/', async(req, res, next) => {
    // let keyword = req.query.keyword;
    let keyword = 'x'
    let date = await loadAllData;
    // 
    let matchDate = selectMatchItem(date, keyword);
    res.json(matchDate);
});


module.exports = router;
