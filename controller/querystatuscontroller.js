var querystatusservice = require('F:/Project/express/service/querystatus.js');

//Reply to the query - Inserting query reply into querystatus table
async function querystatusreply(userInfo) {
    try{
            let response = await querystatusservice.insertReply(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}
//Viewing the query reply
async function querystatusdisplay(id) {
    try{
            let response = await querystatusservice.searchReply(id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}
module.exports = {
    querystatusreply : querystatusreply,
    querystatusdisplay : querystatusdisplay
}