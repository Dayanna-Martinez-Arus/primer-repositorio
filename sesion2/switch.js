const edad= 30;

let mensaje= '';



if(edad =5 ){

Mensaje= "es un infante";

}else if (edad = 5 && edad <18 ) {

    mensaje= 'es un adulto';

}else if(edad == 18 ) {

    mensaje = "Es mayor"



}else if (edad == 30 ) {

    mensaje = "Es mas viejo"

}



switch(edad) {

    case 5:

    mensaje="es un infante";

    break;

    case 18:

        mensaje= "Es un adulto"

        break;

        case 30:

        mensaje= "Es más viejo"

        break;

}



console.log(mensaje);