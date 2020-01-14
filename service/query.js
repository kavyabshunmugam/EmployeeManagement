//Inserting query
function insertQuery(userInfo){
    return new Promise((resolve,reject) =>{
        return query.create(userInfo) 
            .then((response) => {
                console.log(response);
                return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}
function searchQuery(msg){
    return new Promise((resolve,reject) =>{
        return query.findAll({
            include:[{
                require : false,
                model : querystatus,
                attribute :['status','reply']
            }],
            where: {
                querymsg:msg
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
    insertQuery : insertQuery,
    searchQuery : searchQuery
};
