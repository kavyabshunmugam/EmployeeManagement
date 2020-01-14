
//Insert the taskstatus by employee
function insertTaskstatus(userInfo){
    return new Promise((resolve,reject) =>{
        return taskstatus.create(userInfo) 
            .then((response) => {
                console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

//Update the taskstatus by employee
function updateTaskstatus(userInfo,id){
    return new Promise((resolve,reject) =>{
        return taskstatus.update(userInfo,{
            where: {
                taskid:id
            }
        },).then((response) => {
            console.log(response);
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}
function searchTaskstatus(id){
    return new Promise((resolve,reject) =>{
        return querystatus.findAll({
            where: {
                taskid:id
            }
        },).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}





module.exports = {
    insertTaskstatus : insertTaskstatus,
    updateTaskstatus : updateTaskstatus,
    searchTaskstatus : searchTaskstatus

};