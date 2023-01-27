//Una función encapsula un pequeño bloque de códigos.
//Son útiles cuando sentimos que estamos repitiendo códigos, ahí 
//el momento de armar la función y reemplazarla.


//Definimos la función "hola mundo"
function HolaMundo() {
    console.log("Hola mundo!");
}

//Invocamos la función "HolaMundo" cada vez que sea necesario

HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();

//Otro ejemplo:

function sumar(a,b) {
    var resultado = a+b;

        return resultado;
}

suma = sumar(3,4);
console.log(suma);

//Otra manera posible, sería:

function sumar(a,b) {
        return a+b;
}

suma = sumar(3,4);
console.log(suma);
