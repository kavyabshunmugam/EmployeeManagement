const express = require('express');
const router = express.Router();


const taskstatus = require('../controller/taskstatuscontroller');

//Display the task status
router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            taskid: req.body.taskid
                }
        let response = await taskstatus.taskstatusdisplay(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//Reply to the task - Taskstatus
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            taskstatusid: req.body.taskstatusid,
            taskstatus: req.body.taskstatus,
            taskid: req.body.taskid
                }
        let response = await taskstatus.taskstatusinsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});


//Update Task status
router.post('/update', async (req,res) => {
    try{
        const userInfo = {
            taskstatusid: req.body.taskstatusid,
            taskstatus: req.body.taskstatus,
            taskid: req.body.taskid,
                }
        let response = await taskstatus.taskstatusupdate(userInfo,req.body.taskid);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

module.exports = router;