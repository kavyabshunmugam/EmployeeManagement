var queryservice = require('F:/Project/express/service/query.js');


//Insert the query to the query table
async function queryinsert(userInfo) {
    try{
            // console.log(userInfo+"controller");
            let response = await queryservice.insertQuery(userInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}
//Search the query to the query table
async function querysearch(userInfo) {
    try{
            // console.log(userInfo+"controller");
            let response = await queryservice.searchQuery(userInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
    
}


module.exports = {
    queryinsert : queryinsert,
    querysearch : querysearch
}