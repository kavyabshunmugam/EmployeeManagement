const express = require('express');
const router = express.Router();

const team = require('../controller/teamcontroller');

//Insert Team information
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            projectid: req.body.projectid,
            empid: req.body.empid
        }
        let response = await team.teaminsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//Update Team information
router.post('/update', async (req,res) => {
    try{
        const userInfo = {
            projectid: req.body.projectid,
            empid: req.body.empid
            }
        let response = await team.teamupdate(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});
//Search Team information
router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            projectid: req.body.projectid,
            }
        let response = await team.teamsearch(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

module.exports = router;