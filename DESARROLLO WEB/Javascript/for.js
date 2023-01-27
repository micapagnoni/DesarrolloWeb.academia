
//for: sentencia de ITERACIÓN (inicialización; condición; incremento o decremento)
//Se utiliza cuando el programador sabe exactamente cuantas iteraciones va a hacer el ciclo.

var x = 0;
for (x; x <= 5 ; x++) { 
    console.log("El valor de X es:" +x); //Sentencia
  }

  //La sentencia que definimos se va a cumplir siempre que 
  //la varible X cumpla con la condición que le establecimos,
  //es decir: siempre que X sea menor o igual a 5, entonces se
  //va a imprimir en pantalla el incremento de su valor, a partir
  //de la variable incial cero:
  //Ejemplo:
  // 0 + 1 = 1 (como 1 es <= a 5, repito la sentencia)
  // 1 + 1 = 2 (<=5 entonces repito)
  // 2 + 1 = 3 (<=5 entonces repito)
  // 3 + 1 = 4 (<=5 entonces repito)
  // 4 + 1 = 5 (=5 entonces repito)
  // 5 + 1 = 6 (>5 asi que no lo imprimo en pantalla)

  var x = 10;
  for (x; x > 0; x--) { 
      console.log("El valor de X es:" +x); //Sentencia
    }
