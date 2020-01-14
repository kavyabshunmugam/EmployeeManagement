
//Employee router
const express = require('express');
const router = express.Router();



const queryask = require('../controller/querycontroller');

//Insert query to the query table
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            queryid: req.body.queryid,
            querymsg: req.body.querymsg,
            empid: req.body.empid,
            replyid: req.body.replyid,
            }
        let response = await queryask.queryinsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});
router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            querymsg: req.body.querymsg
            }
        let response = await queryask.querysearch(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

module.exports = router;
