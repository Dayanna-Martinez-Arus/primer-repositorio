//const { where } = require("sequelize/types");
const {sequelize, Sequelize, dayannaMartínez} = require (".");

module.exports = (sequelize, Sequelize)=>{

    /*en linea 6 estudiante- mi nombre */
    const dayannaMartínez =sequelize.define('dayannaMartínez',{
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
        std_edad : {
            type:Sequelize.INTEGER,
        },
        std_sexo : {
            type:Sequelize.STRING(1),
        },
    
    
    }, {
        freezeTableName: true, 
        createdAt:"std_created",
        updatedAt:"std_update",
        
    });
    return dayannaMartínez;
};
/*create({std_nombre:"pedro", std_edad:20}) 
finByPk()
findAll({where:{std_id:1}})
update //actualizar un registro
destroy*/