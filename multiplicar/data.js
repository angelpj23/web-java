'use strict'

/*
    Tabla de multiplicar de un numero introducido por pantalla
*/
function show(){
    var numero = parseInt(prompt('¿De que numero quieres la tabla?',1));

    document.write("<h1>Tabla del "+numero+"</h1>");
    
    for(var i = 1; i <= 15; i++){
        document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
    }
}












