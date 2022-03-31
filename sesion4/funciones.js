//1 funciones
/*function getNombre(){
    console.log('Leon');
}
//2
const getNombre =(nombre) =>{
    console.log(nombre);
}

//3.función anónimma
(function(){
    console.log("Karen");
})();

//3 .colocar diversas cariables
(function(nombre, apellido){
    console.log(nombre , apellido);
})("Jesus","de Nazareth");

//getNombre("");
*/

//exportar valores
const getNombre =(nombre) =>{
    console.log(nombre);
}
const getApellido =(valor) =>{
    console.log(valor);
}
const getCargo =(valor) =>{
    console.log(valor);
}
modules.exports ={getNombre, getApellido, getCargo};

