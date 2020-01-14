var taskstatusservice = require('F:/Project/express/service/taskstatus.js');

//Display the task status from taskstatus table
async function taskstatusdisplay(id) {
    try{
            let response = await taskstatusservice.searchTaskstatus(id);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}

//Update the task status
async function taskstatusupdate(userInfo) {
    try{
            let response = await taskststatusservice.updateTaskstatus(userInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}
//Insert the task status
async function taskstatusinsert(userInfo) {
    try{
            let response = await taskstatusservice.insertTaskstatus(userInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}

module.exports = {
    taskstatusdisplay : taskstatusdisplay,
    taskstatusinsert : taskstatusinsert,
    taskstatusupdate : taskstatusupdate
}