const bcrypt = require('bcrypt');
let service=require('F:/Project/express/service/userservice.js');
const jwt = require('jsonwebtoken');

async function getUser(req,res) {
    try {
        const salt = await bcrypt.genSalt();
        console.log(salt);
        const hashedPassword = await bcrypt.hash(req.body.passwords, salt);
        console.log(hashedPassword);
        const userInfo ={
            name:req.body.name,
            passwords:hashedPassword,
            // roleid: req.body.roleid
        }
    
    const response = await service.insertUser(userInfo);
    return (res.json(response));
}
catch(errorMessage){
    res.send(errorMessage);
}
}

async function updateUser(req,res){
    const userInfo ={
        username:req.body.username,
        password:req.body.password
    }
    const response=await service.updateService(userInfo,req.body.username);
    return (res.json(response));
}


async function validateUser(req,res) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.passwords, salt);
    console.log(hashedPassword);
    const userInfo ={
        name:req.body.name,
        passwords:req.body.passwords
    }
    console.log(userInfo);
    const userList = await service.validateUser(req.body.name);
    console.log(userList);
    try {
        if(!userList){
            return res.status(400).send({reponse:'cannot find user'});
        }
        if(await bcrypt.compare(req.body.passwords,userList.passwords) && (req.body.name === userList.name)) {
            const passwords={passwords: req.body.passwords};
            console.log(passwords);
            const access=jwt.sign(passwords,'shhh');
            console.log(access);
            res.send({reponse: access});
            // res.send({response :'you are valid user '+ userList.username})
        }
        else{
            return res.status(400).send({message: 'This is an error!'});
        }
    }
        catch(errorMessage){
            res.send(errorMessage);
        }
}
module.exports = {
    getUser : getUser,
    validateUser : validateUser,
    updateUser : updateUser

};