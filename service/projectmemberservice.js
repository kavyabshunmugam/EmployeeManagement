function insertService(userInfo){
    return new Promise((resolve,reject) =>{
        return projectmember.create(userInfo) 
            .then((response) => {
                console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}



function updateService(userInfo,id){
    return new Promise((resolve,reject) =>{
        return projectmember.update(userInfo,{
            where: {
                empid:id
            }
        },).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchService(id){
    return new Promise((resolve,reject) =>{
        return projectmember.findAll({
            where: {
                projectid:id
            }
        },).then((response) => {
            console.log(response);
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertService : insertService,
    updateService : updateService,
    searchService : searchService
};
    