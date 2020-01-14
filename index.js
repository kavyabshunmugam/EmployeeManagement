Sequelize = require('sequelize');
db = require('./dbConnection');
const cors = require('cors');
require('dotenv').config();
const schemas = require('./imports.js');

const express = require('express');
var app = express();
const port = 7002;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ 
    extended: false 
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


//User Router
// var userrouter = require('./router/userrouter.js')
// app.use('/user',userrouter);

//Employee Router
var employee = require('./router/employeerouter.js');
app.use('/employee',employee);

//Task Router
var task = require('./router/taskrouter.js');
app.use('/task',task);

//Task status Router
var taskstatus = require('./router/taskstatusrouter.js');
app.use('/taskstatus',taskstatus);

//Query Router
var query = require('./router/queryrouter.js');
app.use('/query',query);

//Query status Router
var querystatus = require('./router/querystatusrouter.js');
app.use('/query',querystatus);

//Project Router
var project = require('./router/projectrouter.js');
app.use('/project',project);

//Role Router
var role = require('./router/rolerouter.js');
app.use('/role',role);

//Team Router
var team = require('./router/teamrouter.js');
app.use('/team',team);

//Authenticating connection
db.authenticate().then(async() => { 
    console.log("Connection established successfully...!");
    db.sync().then(async() => {
    });
});

//Verifying the application
app.get('/ping', (req, res) => {
    res.send('Application running successfully...!');
})


//Verifying the Application
app.listen(port , () => {
    console.log(`Application running successfully in ${port}`);
});