//const { where } =require('sequelize/types');
const {sequelize, Sequelize} = require (".");

module.exports = (sequelize,Sequelize)=>{

    /*en linea 6 estudiante- mi nombre */
    const estudiantes =sequelize.define("estudiantes",{
        std_id :{
            type:Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowfull :false,
            comment:'esta es la clave primaria de la tabla',
        },
        std_nombre: {
            type:Sequelize.STRING(100),
        },
        std_edad : {
            type:Sequelize.INTEGER,
        },
    
    }, {
        freezeTableName: true, 
        createdAt:"std_created",
        updatedAt:"std_update",
        
    });
    return estudiantes;
};
/*create({std_nombre:"pedro", std_edad:20}) 
finByPk()
findAll({where:{std_id:1}})
update //actualizar un registro
destroy*/