
const express = require('express');
const router = express.Router();

const employeerole = require('../controller/rolecontroller');

//Insert employee role
router.post('/insert', async (req,res) => {
    try{
        const userInfo = {
            roleid: req.body.roleid,
            employeerole: req.body.employeerole
                }
        let response = await employeerole.roleinsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//Update employee role
router.post('/update', async (req,res) => {
    try{
        const userInfo = {
            roleid: req.body.roleid,
            employeerole: req.body.employeerole
        }
        let response = await employeerole.roleupdate(userInfo,req.body.roleid);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});



//Search employee role
router.post('/search', async (req,res) => {
    try{
        const userInfo = {
            // roleid: req.body.roleid,
            employeerole: req.body.employeerole
            }
        let response = await employeerole.rolesearch(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});


module.exports = router;
