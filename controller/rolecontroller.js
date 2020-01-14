var roleservice = require('F:/Project/express/service/roleservice.js');

//Insert employee information into employee role table
async function roleinsert(userInfo) {
    try{
            let response = await roleservice.insertRole(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}


//Update employee information into employee role table
async function roleupdate(userInfo,id) {
    try{
            let response = await roleservice.updateRole(userInfo,id);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}


async function rolesearch(userInfo) {
    try{
            let response = await roleservice.searchRole(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}
module.exports = {
    roleinsert : roleinsert,
    roleupdate : roleupdate,
    rolesearch : rolesearch
}