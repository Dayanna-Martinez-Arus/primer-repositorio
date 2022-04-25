//const { where } = require("sequelize/types");
const {sequelize, Sequelize} = require (".");

module.exports = (sequelize, Sequelize)=>{

    /*en linea 6 estudiante- mi nombre */
    const tienda =sequelize.define('tienda',{
        std_id :{
            type:Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowfull :false,
            comment:'esta es la clave primaria de la tabla',
        },
        std_nombre: {
            type:Sequelize.STRING,
        },
        std_marca : {
            type:Sequelize.STRING(40),
        },
        std_precio : {
            type:Sequelize.INTEGER,
        },
        std_proveedor : {
            type:Sequelize.STRING,
        },
    
    
    }, {
        freezeTableName: true,
        underscored: true, 
        createdAt:"std_created",
        updatedAt:"std_update",
        
    });
    return tienda;
};