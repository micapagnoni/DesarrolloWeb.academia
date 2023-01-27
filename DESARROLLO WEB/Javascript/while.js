//While es muy parecido a for pero se usa cuando NO se tiene idea de cuántas 
//iteraciones va a haber en el ciclo. Por ejemplo: cuando se traen registros 
//de una base de datos en la que no conocemos cuantos datos hay. 

var x = 10;

while (x > 0) {
    console.log("Mi variable vale:"+x)
    x--; 
}