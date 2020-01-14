var adminservice = require('F:/Project/express/service/empolyeeservices.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Insert employee information into employee table
async function employeeinsert(userInfo) {
    try{
            let response = await adminservice.insertEmployee(userInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

//Update employee information into employee table
async function employeeupdate(userInfo,id) {
    try{
            let response = await adminservice.updateEmployee(userInfo,id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

//Display employee information into employee table
async function employeesearch(id) {
    try{
            
            let response = await adminservice.searchEmployee(id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

//Delete employee information into employee table
async function employeedelete(id) {
    try{
            
            let response = await adminservice.deleteEmployee(id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

async function employeevalidate(id) {
    try{
            
        let response = await adminservice.validateEmployee(id);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}


module.exports = {
    employeeinsert : employeeinsert,
    employeeupdate : employeeupdate,
    employeedelete : employeedelete,
    employeesearch : employeesearch,
    employeevalidate : employeevalidate
}