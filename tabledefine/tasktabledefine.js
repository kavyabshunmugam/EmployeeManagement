//Task table

module.exports=(db,Sequelize)=>{
    let employeetask = db.define('task',{
        taskid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        task :Sequelize.STRING(20),
        empid :{
            type:Sequelize.INTEGER
        },
        taskstatusid :Sequelize.INTEGER,
        comments :Sequelize.STRING(100),
        assignon :Sequelize.DATE,
        finishedAt: Sequelize.DATE
        
    },{
        timestamps : false
    });
    employeetask.association = () => {
        employeetask.hasMany(employee,{ foreignkey: 'empid'});
        employeetask.belongsTo(taskstatus,{ foreignkey: 'taskstatusid'});
    }
    return employeetask;
};