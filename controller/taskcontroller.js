var taskservice = require('../service/taskservices.js');


//Insert the Task assigned by TL into Task table
async function taskinsert(userInfo) {
    try{
            let response = await taskservice.insertTask(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}

//Update the Task assigned by TL into Task table
async function taskupdate(userInfo,id) {
    try{
            let response = await taskservice.updateTask(userInfo,id);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}

//Delete the Task assigned by TL into Task table
async function tasksearch(id) {
    try{
            let response = await taskservice.searchTask(id);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}

//Viewing the taskdisplay
async function taskdisplay(id) {
    try{
            let response = await taskservice.searchTask(id);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}
module.exports = {
    taskinsert : taskinsert,
    taskupdate : taskupdate,
    tasksearch : tasksearch,
    taskdisplay : taskdisplay
}