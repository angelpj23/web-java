'use strict'

/*
Que nos dija si un numero es par o impar
1-ventana prompt
2-Si no es valido que nos pida de nuevo el numero
*/
function show(){
    var numero = parseInt(prompt("Introduce un numero", 0));

    while(isNaN(numero)){
          numero = parseInt(prompt("Introduce un numero", 0));
          }
    
    if(numero % 2 == 0){
       alert("Es un numero par");
       }else{
           alert("Es impar");
       }
    
}










