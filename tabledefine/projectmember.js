//Team table

module.exports=(db,Sequelize)=>{
    let projectmember = db.define('team',{
        id :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        projectid :{
            type:Sequelize.INTEGER
        },
        empid :{
            type:Sequelize.INTEGER
        },
    },{
        timestamps : false
    });
    projectmember.association = () => {
        projectmember.hasMany(employee,{ foreignkey: 'empid'});
        projectmember.hasMany(project,{ foreignkey: 'projectid'});

    }
    return projectmember;
};