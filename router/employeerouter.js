//Admin Router

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const employee = require('../controller/employeecontroller');

//Insert employee
router.post('/insert', async (req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        console.log(salt);
        const hashedPassword = await bcrypt.hash(req.body.passwords, salt);
        console.log(hashedPassword);
        const userInfo = {
            empid: req.body.empid,
            ename: req.body.ename,
            rolename: req.body.rolename,
            userId : req.body.userId,
            passwords : hashedPassword,
            gender : req.body.gender,
            mobno : req.body.mobno,
            mailid: req.body.mailid,
            dob: req.body.dob,
            address: req.body.address, 
            qualification: req.body.qualification,
            qualmajor: req.body.qualmajor,
            experience: req.body.experience,
            employeestatus: req.body.employeestatus
        }
        
        let response = await employee.employeeinsert(userInfo);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//Update employee
router.post('/update', async (req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        console.log(salt);
        const hashedPassword = await bcrypt.hash(req.body.passwords, salt);
        console.log(hashedPassword);
        const userInfo = {
            empid: req.body.empid,
            ename: req.body.ename,
            rolename: req.body.rolename,
            userId : req.body.userId,
            passwords : hashedPassword,
            gender : req.body.gender,
            mobno : req.body.mobno,
            mailid: req.body.mailid,
            dob: req.body.dob,
            address: req.body.address, 
            qualification: req.body.qualification,
            qualmajor: req.body.qualmajor,
            experience: req.body.experience,
            employeestatus: req.body.employeestatus
            }
        
        let response = await employee.employeeupdate(userInfo,req.body.userId);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

//Delete Employee
router.post('/delete', async (req,res) => {
    try{
        const userInfo = {
            employeestatus: req.body.employeestatus
        }
        let response = await employee.employeedelete(userInfo,req.body.empid);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});
router.post('/search', async (req,res) => {
    try{
        let response = await employee.employeesearch(req.body.empid);
        res.send(response);
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

router.post('/validate',async (req,res) => {
    try{
        const userInfo ={
            userId:req.body.userId,
            passwords:req.body.passwords
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(userInfo.passwords, salt);
        console.log(hashedPassword);
        const userList = await employee.employeevalidate(req.body.userId);
        console.log(userList);
    try {
        if(!userList){
            return res.status(400).send({reponse:'cannot find user'});
        }
        if(await bcrypt.compare(userInfo.passwords,userList.passwords) && (userInfo.userId === userList.userId)) {
            const passwords={passwords: userInfo.passwords};
            console.log(passwords);
            const access=jwt.sign(passwords,'shhh');
            console.log(access);
            const returnrole = {
                access : access,
                rolename : userList.rolename,
                employeestatus : userList.employeestatus
            };
            return res.send({response : returnrole});
        }
        else{
            return res.status(400).send({message: 'This is an error!'});
        }
    }
        catch(errorMessage){
            throw new Error(errorMessage);
        }
    }
    catch(errorMessage) {
        res.send(errorMessage);
    }
});

module.exports = router;