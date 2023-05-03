'use strict'

/*
    Calculadora:
    - Pida los numeros por pantalla
    - Si metemos uno mal , que nos los vuelva a pedir
    - Mostrar en el cuerpo de la pagina el resultado de sumar, restar, multiplicar, y dividir esas dos cifras
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));

var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero', 0));

    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

var resultado = "La suma es :"+(numero1+numero2)+"<br/>"+
            "La Resta es :"+(numero1-numero2)+"<br/>"+
            "La Multiplicacion es :"+(numero1*numero2)+"<br/>"+
            "La Division es :"+(numero1/numero2)+"<br/>";


document.write(resultado);




