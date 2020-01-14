
//Inserting the task by TL
function insertTask(userInfo){
    return new Promise((resolve,reject) =>{
        return employeetask.create(userInfo) 
            .then((response) => {
                console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}


//Update the task by TL
function updateTask(userInfo,id){
    return new Promise((resolve,reject) =>{
        return employeetask.update(userInfo,{
            where: {
                taskid:id
            }
        },).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}


//View the task by employee
function searchTask(id){
    return new Promise((resolve,reject) =>{
        return employeetask.findAll({
            include:[{
                require : false,
                model : taskstatus,
                attribute :['taskstatus']
            }],
            where: {
                empid:id
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
    insertTask : insertTask,
    updateTask : updateTask,
    searchTask : searchTask
};