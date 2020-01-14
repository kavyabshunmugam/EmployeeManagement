//Employee table

module.exports=(db,Sequelize)=>{
    let employee = db.define('employee',{
        empid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        ename :Sequelize.STRING(20),
        rolename :Sequelize.STRING(20),
        userId :Sequelize.STRING(20),
        passwords :Sequelize.STRING(300),
        gender :Sequelize.STRING(20),
        mobno :Sequelize.INTEGER,
        mailid :Sequelize.STRING(20),
        dob :Sequelize.DATE,
        address :Sequelize.STRING(200),
        qualification :Sequelize.STRING(20),
        qualmajor :Sequelize.STRING(20),
        experience :Sequelize.STRING(20), 
        employeestatus :Sequelize.STRING(20),   
        roleid :Sequelize.INTEGER,
        projectid :Sequelize.INTEGER
    },{
        timestamps : false
    });
    employee.association = () => {
        employee.belongsTo(employeetask, { foreignkey: 'empid'} );
        employee.hasMany(query,{ foreignkey: 'empid'});
        employee.belongsTo(projectmember,{ foreignkey: 'empid'});
        employee.belongsTo(role,{ foreignkey: 'roleid'});
        employee.belongsTo(project,{ foreignkey: 'projectid'});
    }
    return employee;
};