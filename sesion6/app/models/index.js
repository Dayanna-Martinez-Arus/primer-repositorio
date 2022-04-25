const dbConfig =require('../config/db.config.js');

const Sequelize =require ('sequelize');
const sequelize= new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWD,{
  
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle,
    },
});
const db ={};
db.Sequelize =Sequelize;
db.sequelize =sequelize;
//db.estudiantes =require ("./estudiantes.model.js")(sequelize, Sequelize);
//db.dayannaMartínez =require ("./estudiantesdaya.model.js")(sequelize, Sequelize);
db.tienda=require("./tienda.model.js")(sequelize, Sequelize);
module.exports =db;  
