const db = require ('../models');
const tienda =db.tienda;

exports.findAll = async (req, res)=>{

    const respuesta = await tienda.findAll({

    where: {std_proveedor: req.query.proveedor},

    raw:true,

    });  res.send(respuesta);
};
exports.create = async (req,res)=>{
    try{
    const    lista = {
    //req.query;
    std_nombre:req.query.nombre,
    std_marca:req.query.marca,
    std_precio:req.query.precio,
    std_proveedor:req.query.proveedor,
};

const respuesta = await tienda.create(lista);
res.send(respuesta);
} catch (error) {
res
  .status(500)
  .send({ mensaje: err.message || "Se presento error insertando" });
}}

/*estudiantesdaya.findAll ().then((data)=>{
    res.send(data);
}).catch( (err)=>{
    res.status(500).send({
        mensaje:err.message || "se presentó error insertando",
 });

});
tienda.create(lista).then(data =>{
    res.status(500)
    .send({mensaje:err.message ||"se presentó error insertando"});
});
}
exports.findAll = async (req, res)=>{
const respuesta = await tienda.findAll({ raw:true});
res.send(respuesta);
};

//where: {std_sexo: req}   
console.log(respuesta);
    res.send(respuesta);

    estudiantesdaya.findAll().then((data)=>{
        
    }).catch( (err)=>{
        res.status(500).send({
            mensaje:err.message || "se presentó error consultando la tabla",
     });

    });
    };
*/    