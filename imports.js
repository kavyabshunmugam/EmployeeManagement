//Tables used for the project
employee=require('./tabledefine/employeetabledefine.js')(db,Sequelize);
role=require('./tabledefine/roletabledefine.js')(db,Sequelize);
projectmember=require('./tabledefine/projectmember.js')(db,Sequelize);
employeetask=require('./tabledefine/tasktabledefine.js')(db,Sequelize);
taskstatus=require('./tabledefine/taskstatustable.js')(db,Sequelize);
project=require('./tabledefine/projecttabledefine.js')(db,Sequelize);
query=require('./tabledefine/querytabledefine.js')(db,Sequelize);
querystatus=require('./tabledefine/queryreplystatus.js')(db,Sequelize);
user = require('./tabledefine/usertable.js')(db,Sequelize);


const models = [
    employee,
    role,
    projectmember,
    employeetask,
    taskstatus,
    project,
    query,
    querystatus,
    user
];

models.forEach((value)=>{
    if(value.association){
        value.association();
    }
});
module.exports = {
    role : role,
    user : user,
    query : query,
    project : project,
    employee : employee,
    taskstatus : taskstatus,
    querystatus : querystatus,
    employeetask : employeetask,
    projectmember : projectmember,
    
}