const { default: axios } = require("axios")

const poblacion =() => async() => {
const{data :{data}}= await    axios.get('apihttps://datausa.io/api/data?drilldowns=Nation&measures=Population');

let total = 0;

data.map(x=> {
    total =total + x.Population;
});
console.log(total);
}
poblacion();