/**  document.getElementById("boton").onclick = function() {
    console.log ("Capturamos el evento CLICK");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
} 

 document.addEventListener("click", function () { 
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML= "Estamos probando nuestro primer evento en JS";
}); */

document.getElementById("boton").addEventListener("click", function () { 
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML= "Estoy probando mis primeros eventos en JS";
}) ; 

document.getElementById("boton_color").addEventListener("click", function () {
    document.body.style.backgroundColor= "#C70039";
});

document.getElementById("boton_ocultar").addEventListener("click", function () {
    document.getElementById("demo").style.display = "none";
});

const collection = document.getElementsByClassName("prueba");
for (let i= 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
    
}