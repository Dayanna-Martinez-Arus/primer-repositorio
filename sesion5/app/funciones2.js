const { default: axios } = require("axios")

const poblacion =async()  => {
const{data :{data}}= await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

let total = 0;
//map tambien sirve para hacer ciclos fáciles y rápidos
data.map(x=> {
    total =total + x.Population;
});
console.log('la cantidad de poblacion es:'+total);

const cantidad = 14;
data.map(x=> {
    promedio =total / cantidad;
});
console.log('el promedio es:'+promedio);
}
poblacion();

//promedio
/*
let promedio;
const cantidad = 14;
data.map(x=> {
    promedio = total / cantidad;
});
console.log('el promedio es:'+promedio);
poblacion();



*/