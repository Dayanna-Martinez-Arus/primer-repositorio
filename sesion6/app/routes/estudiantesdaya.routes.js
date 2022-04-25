module.exports= (app) =>{
    const estudiantesdaya = require("../controllers/estudiantesdaya.controller");
    const router =require ("express").Router();
    router.get ("/estudiantes", estudiantesdaya.findAll);
    app.use("/api",router);

};
//estudiantes