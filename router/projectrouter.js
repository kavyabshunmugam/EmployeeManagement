const express = require('express');
const router = express.Router();

const employeerole = require('../controller/projectcontroller');

//Inserting project detail
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            projectid: req.body.projectid,
            projectname: req.body.projectname,
            description: req.body.description,
            projectstatus: req.body.projectstatus
                }
        let response = await employeerole.projectinsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});


router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            projectid: req.body.projectid
            }
        let response = await employeerole.projectsearch(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

router.post('/update', async (req,res) => {
    try{
        const userInfo = {
            projectid: req.body.projectid,
            projectname: req.body.projectname,
            description: req.body.description,
            projectstatus: req.body.projectstatus
                }
        let response = await employeerole.projectupdate(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

module.exports = router;

