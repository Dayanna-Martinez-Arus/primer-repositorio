//importa paquete 
const axios = require('axios');
let urlApi ="https://jsonplaceholder.typicode.com/posts";


//response y data da igual
axios.get(urlApi)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);

});
/*
let nombre ='Dayanna Martínez';
let apellido ='Martínez Morelo';

let fullName = nombre + apellido + 'grado'+ 'edad'+'sexo';
let fullName2 = nombre + apellido + 'grado'+ 'edad'+'sexo';

console.log(${nombre}${nombre});*/

//tambien se puede de esta manera 
const getUsuarios = async() =>{
    const {data}=await axios.get (urlApi);
    console.log(data);
};
getUsuarios();