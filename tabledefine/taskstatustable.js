//TaskStatus table

module.exports=(db,Sequelize)=>{
    let taskstatus = db.define('taskstatus',{
        taskstatusid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        taskstatus :Sequelize.STRING(20),
        taskid :Sequelize.INTEGER
        
    },{
        timestamps : false
    });
    taskstatus.association = () => {
        taskstatus.hasMany(employeetask,{ foreignkey: 'taskstatusid'});
    }
    return taskstatus;
};