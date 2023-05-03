'use strict'

/*
   1-Pida 5 numeros por pantalla y los meta en un array
   2-Mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
   3-Ordenarlo y mostrarlo
   4-Invertir su orden y mostrarlo
   5-Mostrar cuantos elementos tiene el array
  
*/

function MostrarArray(elementos,texto = ""){
    //Mostrar en el cuerpo de la pagina
    document.write("<h1>Contenido del array "+texto+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    
    document.write("</ul>");
}

var numeros = new Array(5);

// Pedir numeros

for(var i = 0; i <= 4; i++){
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
}

// Mostrar en el cuerpo de la pagina

MostrarArray(numeros);

// Mostrar en el array en la consola
console.log(numeros);

// Ordenar y Mostrar
numeros.sort(function(a,b){return a-b});
MostrarArray(numeros, 'ordenado');

// Invertir y mostrar
numeros.reverse();
MostrarArray(numeros, 'revertido');

// Contar elementos

document.write("<h1>El array tiene: "+numeros.length+"</h1>");






