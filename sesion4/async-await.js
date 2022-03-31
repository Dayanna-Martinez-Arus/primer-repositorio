// convertir una función en una promesa  getnombreSin
async function getLista(){
    let i =0;
    for (const i =15; i<16; i++)
    console.log(i);

}/*
async function getListaSin(){
    //await su funcion siempre debe ser async
    await getLista();
    
}*/
const getListaSin= async()=>{
    console.log(  await getLista());
    returntrue;
}

//
console.log(getLista());
//console.log(getListaSin());