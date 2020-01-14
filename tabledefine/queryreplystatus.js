//Query status table

module.exports=(db,Sequelize)=>{
    let querystatus = db.define('querystatus',{
        replyid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        status :Sequelize.STRING(20),
        reply :Sequelize.STRING(20),
        queryid :{
            type:Sequelize.INTEGER
        }
       
    },{
        timestamps : false
    });
    querystatus.association = () => {
        querystatus.hasMany(query,{ foreignkey: 'replyid'});
    }
    return querystatus;
};