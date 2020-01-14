const express = require('express');
const router = express.Router();

//Reply to the query - Insert Query status
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            replyid: req.body.replyid,
            reply: req.body.reply,
            status : req.body.status ,
            queryid : req.body. queryid 
                }
        let response = await viewtaskstatus.querystatusreply(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//View the query status
router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            queryid: req.body.queryid
                }
        let response = await queryask.querystatus(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});


module.exports = router;
