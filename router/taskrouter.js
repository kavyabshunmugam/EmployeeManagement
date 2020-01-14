//Router for TL
const express = require('express');
const router = express.Router();

const leadassigntask = require('../controller/taskcontroller');

//Insert the Task assigned by TL
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            taskid: req.body.taskid,
            task: req.body.task,
            empid: req.body.empid,
            taskstatusid: req.body.taskstatusid,
            comments: req.body.comments,
            assignon: req.body.assignon,
            finishedAt: req.body.finishedAt
                }
        let response = await leadassigntask.taskinsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//Update the Task assigned by TL 
router.post('/update', async (req,res) => {
    try{
        const userInfo = {
            taskid: req.body.taskid,
            task: req.body.task,
            comments: req.body.comments,
            assignon: req.body.assignon,
            empid: req.body.empid,
            projectid: req.body.projectid
                }
        let response = await leadassigntask.taskupdate(userInfo,req.body.taskid);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});
//Display task from task table
router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            empid: req.body.empid
                }
        let response = await queryask.taskdisplay(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

module.exports = router;
