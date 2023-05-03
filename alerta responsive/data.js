'use strict'

function show(){
    alert("Hola soy una alerta");

    // Confirmacion
    
    var mi_resultado = confirm("estas seguro que quieres continuar?");
    
    console.log(mi_resultado);
    
    // INGRESO DE DATOS
    
    var respuesta = prompt("¿Quien eres?", "usuario");

    document.write("Hola "+respuesta+", tu usuario es tipo:" + typeof respuesta); //imprime el tipo de la respuesta
//imprime el tipo de la respuesta
}











