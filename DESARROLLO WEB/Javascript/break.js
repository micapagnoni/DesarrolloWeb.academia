//Break sirve para poner una condición estricta que permita determinar cuando cortar la ejecución de un ciclo.
//El iterador opuesto a este es "continue", el cual indica que "si se cumple tal condición, seguí ejecutando"

var x = 10;
for (x; x > 0 ; x--) { 

    if (x==5) {
        break;
    }

    console.log("El valor de X es:" +x); //Sentencia
  }