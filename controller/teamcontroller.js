var teamservice = require('F:/Project/express/service/projectmemberservice.js');

//Insert team information into team table
async function teaminsert(userInfo) {
    try{
            let response = await teamservice.insertService(userInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

//Update team information into team table
async function teamupdate(userInfo,id) {
    try{
            let response = await teamservice.updateService(userInfo,id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}
async function teamsearch(id) {
    try{
            let response = await teamservice.searchService(id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

module.exports = {
    teaminsert : teaminsert,
    teamupdate : teamupdate,
    teamsearch : teamsearch
}