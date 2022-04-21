const db = require ('../models');
const estudiantesdaya =db.estudiantesdaya;

exports.findAll = async (req, res)=>{

    const respuesta = await estudiantesdaya.findAll({

    where: {std_sexo: req.query.sexo},

    raw:true,

    });  res.send(respuesta);
};
exports.create =(req,res)=>{
const lista = {
    //req.query;
std_nombre:req.query.nombre,
std_edad:req.query.edad,
std_sexo:req.query.sexo,
};

estudiantesdaya.findAll ().then((data)=>{
    res.send(data);
}).catch( (err)=>{
    res.status(500).send({
        mensaje:err.message || "se presentó error insertando",
 });

});
estudiantesdaya.create(lista).then(data =>{
    res.status(500)
    .send({mensaje:err.message ||"se presentó error insertando"});
});
}
exports.findAll = async (req, res)=>{
const respuesta = await estudiantesdaya.findAll({ raw:true});
res.send(respuesta);
};

//where: {std_sexo: req}   
/*console.log(respuesta);
    res.send(respuesta);

    estudiantesdaya.findAll().then((data)=>{
        
    }).catch( (err)=>{
        res.status(500).send({
            mensaje:err.message || "se presentó error consultando la tabla",
     });

    });
    };
*/