

//Inserting query reply into querystatus table
function insertReply(userInfo){
    return new Promise((resolve,reject) =>{
        return querystatus.create(userInfo) 
        .then((response) => {
            console.log(response);
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            t.rollback();
            return reject("FAILED!");
        })
    })
}

function updateReply(userInfo,id){
    return new Promise((resolve,reject) =>{
        return querystatus.update(userInfo,{
            where: {
                queryid:id
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

//View the querystatus by employee
function searchReply(id){
    return new Promise((resolve,reject) =>{
        return querystatus.findAll({
            where: {
                queryid:id
            }
        }).then((response) => {
            console.log(response);
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}


module.exports = {
    insertReply: insertReply,
    searchReply : searchReply,
    updateReply : updateReply
};
