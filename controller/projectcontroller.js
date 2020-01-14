var project = require('F:/Project/express/service/project.js');

async function projectinsert(userInfo) {
    try{
            let response = await project.insertProject(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}
async function projectupdate(userInfo) {
    try{
            let response = await project.updateProject(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}
async function projectsearch(userInfo) {
    try{
            let response = await roleservice.searchProject(userInfo);
            return response;
        }
        catch(errorMessage){
            throw new Error(errorMessage);
         }
     
}



module.exports = {
    projectinsert : projectinsert,
    projectupdate : projectupdate,
    projectsearch : projectsearch
}


