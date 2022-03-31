
const axios =  require('axios');
const kevilToCelsius = require('kelvin-to-celsius');
//let urlApiIP = `https://api.ipify.org/?format=json`;

let urlApiClima ='https://api.openweathermap.org/data/2.5/weather?lon=LONGITUD&lat=LATITUD&appid=6966d6b283a10ad3c2ac309a9ec4e348';


const getIp =async ( )=>{
    try{
    const{data :{ip}}= await axios(urlApiIp);
    console.log(ip);
    return ip;
} catch (e){
    console.log(e);
}
}
module.export =(getIp);
