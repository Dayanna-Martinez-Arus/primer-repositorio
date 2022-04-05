/*XPathExpressionsequelize
mysqfa-li
SELECT *
estudiante
2
INNER JOIN
grupo 5columnas
3
INNER JOIN
materia 30 columnas
1*/
const express = require ('express');
const cors = require('cors');
const app =express();

let corsOptins=
   /* {origin:"http://localhost:8081",}*/
   ["http://localhost:8081", "http://localhost:8082"]
app.use(

  cors({
   origin: (origin, callback) => {

      if (!origin) return callback(null, true);

      if (corsOptions.indexOf(origin) === -1) {

        return callback(

          new Error(`La politica de CORS para esta url no permite el acceso`),

          false

        );

      }

      return callback(null, true);

    },

    credentials: true,

  })

); 

app.use(cors(corsOptins));
app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.get("/",(req,res)=> { 
 res.json({mensaje:"Bienvenidos a mi primera api con express"});
});

app.post("/insertar",(req,res)=> { 
  res.json({mensaje:"Bienvenidos a mi primera api con express"});
 });
 

const PORT =8081;
/*app.listen(PORT,( )=>{
    console.log(`server corriendo por el puerto: ${PORT}`);
});
*/
const server =app.listen(PORT, function(){
let host = server.address().address;
console.log("SERVIDOR BACKEND EN http://%s:%s",host, PORT);
});
