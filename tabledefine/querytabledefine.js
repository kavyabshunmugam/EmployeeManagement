//query table

module.exports=(db,Sequelize)=>{
    let query = db.define('query',{
        queryid :{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        querymsg :Sequelize.STRING(20),
        empid :{
            type:Sequelize.INTEGER
        },
        replyid :{
            type:Sequelize.INTEGER
        }
    },{
        timestamps : false
    });
    query.association = () => {
        query.belongsTo(employee,{ foreignkey: 'empid'});
        query.belongsTo(querystatus,{ foreignkey: 'replyid'});
    }
    return query;
};