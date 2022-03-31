/*
//arreglos 
nombre1 ='juan';
nombre2 ='pedro';
nombre3 ='maria';
*/
//asi es el arreglo
let nombres=['Juan','pedro','maria']
let materia = new Array('Juan','pedro','maria');
let cuidades ='Medellin, Bogotá'.split('');
/*
//ciclos while , do while , for: in,of 

for(const i=0; i<nombres.length;i++){
    console.log(nombres[i]);
}
console.log('---------');

for(const key in materia ){
    console.log(materia[key]);
}
console.log(ciudades);

for (const ciudad of ciudades){
    console.log(ciudad);
    if(ciudad== "Medellin")brack;
}

try{
ciudades.forEach(ciudad) => {
    console.log(ciudad);
    if(ciudad=== "Medellin"){
        throw new Error("Error");}
});
catch (e){
    console.log(e);
}
}
//Array.array.forEach(element => { 
//});

*/

const estudiantes = [
    {nombre:"Rosmari",carrerra: " Matemático", semestre: 2, sexo: "F", materias:[{nombre:'mate 1', nota: 2}]},
    {nombre:"Patricia",carrerra: " Matemático", semestre: 2 ,sexo: "F" , materias:[{nombre:'mate 2', nota: 4}]},
    {nombre:"Ricardo",carrerra: " Matemático", semestre: 2, sexo: "H" , materias:[{nombre:'mate 3', nota: 3}]},

];

for(const estudiante of estudiantes){
    console.log(estudiante.nombre);
}
/* 
for(lot i= 0; i <estudiantes.length, i++){
    console.log(estudiantes.carrerra);
}*/


estudiantes.map(c => {
    console.log(c.semestre);
})
estudiantes.map( c => console.log(c.semestre));

//filtrar

//.join(';') volver la respuesta en string
/*
const respuesta = estudiantes.filter(c=> c.semestre >= 5);

console.log(respuesta);

const respuesta = estudiantes.filter((c)=> {
    if (c.semestre >= 5 && c.materias.filter(m) => m.nota >2).length > 0){
        return;
    }
});

console.log(respuesta);

//while
let n=0;
while(n <3){
    console.log(m);
    n++
}
*//*
console.log("hola");
//do while
let i=0, resultado = 0;
do{
    i++;
    resultado += i;
}while (i <5);

console.log(resultado);


//paint respuesta de un solo objeto 

{{
    lote:5,
    estado:"Recepción",
    fecha: "2022-03-30"
},
}
let estudiante= estudiantes.find(c => c.nombre === 'Leon');
console.log(estudiante);*/

//recomienda indexOf   busca algo concreto

let facturaEstado =7;
const ESTADOS =[1, 2, 3, 4 ,5 ,8];
let existeESTADO = ESTADOS.indexOf(facturaEstado);
console.log(existeESTADO);

for(const valorEstado of ESTADOS){
if(valorEstado === facturaEstado){
sw =true;
break;
}}
 console.log(sw);


