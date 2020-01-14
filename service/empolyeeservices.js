function insertEmployee(userInfo){
    return new Promise((resolve,reject) =>{
        return employee.create(userInfo) 
        .then((response) => {
            console.log(response);
            return resolve({response:'Inserted'});
        }).catch((error) => {
            console.log(error.message);
            return reject({response:'Insertion failed'});
        })
    })
}

function deleteEmployee(userInfo,id){
    return new Promise((resolve,reject) =>{
        return employee.update(userInfo, {
            where: {
                empid:id
            }
        })
        .then((response) => {
            console.log(response);
            return resolve({response:'Deleted'});
        }).catch((error) => {
            console.log(error.message);
            return reject({response:'Deletion failed'});
        })
    })
}

function updateEmployee(userInfo,id){
    return new Promise((resolve,reject) =>{
        return employee.update(userInfo, {
            where: {
                userId:id
            }
        })
        .then((response) => {
            console.log(response);
            return resolve({response:'Updated'});
        }).catch((error) => {
            console.log(error.message);
            return reject({response:'Updation failed'});
        })
    })
}

function searchEmployee(id){
    return new Promise((resolve,reject) =>{
        return employee.findOne({
            include:[{
                require : false,
                model : employeetask,
                attribute: ['task']
            },{
                require : false,
                model : role,
                attribute: ['employeerole']
            },{
                require : false,
                model : project,
                attribute: ['projectid','projectname']
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

function validateEmployee(userId){
    return new Promise((resolve,reject) =>{
        return employee.findOne({
            include:[{
                model:role
                }],
            where: {
                userId:userId,
            }
        })
        .then((response) => {
            console.log(response);
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
   }

module.exports = {
    insertEmployee : insertEmployee,
    deleteEmployee : deleteEmployee,
    updateEmployee : updateEmployee,
    searchEmployee : searchEmployee,
    validateEmployee : validateEmployee

};
    