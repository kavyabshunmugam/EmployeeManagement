//Project table

module.exports=(db,Sequelize)=>{
    let project = db.define('project',{
        projectid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        projectname :Sequelize.STRING(20),
        description :Sequelize.STRING(100),
        projectstatus :Sequelize.STRING(100)

    },{
        timestamps : false
    });
    project.association = () => {
        project.hasMany(employee,{ foreignkey: 'projectid'});
        project.belongsTo(projectmember,{ foreignkey: 'projectid'});
    }
    return project;
};