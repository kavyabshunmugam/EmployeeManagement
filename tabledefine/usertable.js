//USER table
module.exports=(db,Sequelize)=>{
    let user = db.define('user',{
        id :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name :Sequelize.STRING(20),
        passwords :Sequelize.STRING(200),  
        roleid :Sequelize.INTEGER,   
},{
    timestamps : false
})
user.association = () => {
    user.belongsTo(role);
    }
    return user;
};