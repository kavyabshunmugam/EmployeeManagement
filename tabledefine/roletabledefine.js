//Role table
module.exports=(db,Sequelize)=>{
    let roledata = db.define('role',{
        roleid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allownull:false
        },
        employeerole :Sequelize.STRING(20)
    },{
        timestamps : false
    });

    roledata.association = () => {
        roledata.hasMany(employee,{ foreignkey: 'roleid'});
    }
return roledata;
};