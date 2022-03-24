const estudiantes = [
    {nombre:"Rosmari",carrerra: " Matemático", semestre: 2, sexo: "F"},
    {nombre:"Patricia",carrerra: " Matemático", semestre: 2 ,sexo: "F"},
    {nombre:"Ricardo",carrerra: " Matemático", semestre: 2, sexo: "H"},

];
for(const estudiante of estudiantes){
    console.log(estudiante.nombre);
}

//guardar en un ciclo independiaente
for (let i =0; i < estudiantes.length; i++)
{
    if(estudiantes[i].semestre >=5 ){
        aprobo.push(estudiantes[i].nombre);
    }
} 
console.log(aprobo);

let respuesta =estudiantes.map(c =>{
    if(c.semestre >=5){
        return c.nombre;
    }
})
console.log(respuesta);
