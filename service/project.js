function insertProject(userInfo){
    return new Promise((resolve,reject) =>{
        return project.create(userInfo) 
            .then((response) => {
                console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}


function updateProject(userInfo,id){
    return new Promise((resolve,reject) =>{
        return project.update(userInfo,{
            where: {
                projectid:id
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

function searchProject(id){
    return new Promise((resolve,reject) =>{
        return project.findAll({
            include:[{
                require : false,
                model : projectmember,
                attribute :['empid']
            }],
            where: {
                projectid:id
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
    insertProject : insertProject,
    updateProject : updateProject,
    searchProject : searchProject
};