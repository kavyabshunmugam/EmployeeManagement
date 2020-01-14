function insertUser(userInfo){
    return new Promise((resolve,reject) => {
        return user.create(userInfo)
        .then((response) => {
            console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateUser(userInfo,username){
    return new Promise((resolve,reject) =>{
        return user.update(userInfo,{
            where: {
                username:username
            }
        })
        .then((response) => {
            console.log(response);
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}


function validateUser(name){
    return new Promise((resolve,reject) =>{
        return user.findOne({
            include:[{
                model:role
                }],
            where: {
                name:name,
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
    insertUser : insertUser,
    updateUser : updateUser,
    validateUser : validateUser
};