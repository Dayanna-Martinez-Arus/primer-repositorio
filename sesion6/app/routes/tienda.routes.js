module.exports= (app) =>{
    const tienda = require("../controllers/tienda.controller");
    const router =require ("express").Router();
    router.get ("/consultar", tienda.findAll);
    router.get('/create', tienda.create);
    app.use("/api",router);

};