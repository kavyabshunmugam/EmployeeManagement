function insertRole(userInfo){
    return new Promise((resolve,reject) =>{
        return role.create(userInfo)
            .then((response) => {
                console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}


function updateRole(userInfo,id){
    return new Promise((resolve,reject) =>{
        return role.update(userInfo, {
            where: {
                roleid:id
            }
        })
        .then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchRole(userInfo){
    return new Promise((resolve,reject) =>{
        return role.findOne({
            where: {
                employeerole : userInfo
            }
        })
        .then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertRole : insertRole,
    updateRole : updateRole,
    searchRole : searchRole
};
    