'use strict'

// Plantillas de texto, plantilla de javascript
function show(){
    var nombre = prompt("INTRODUCE TU NOMBRE");

    var apellidos = prompt("INTRODUCE TUS APELLIDOS");
    
    // var texto = "Mi nombre es: "+nombre+" <br/> Mis apellidos son:"
    var texto = `
        <h1>Hola que tal</h1>
        <h3>Mi nombre es: ${nombre}</h3>
        <h1>Mi apellido es: ${apellidos}</h1>
    `;
    
    document.write(texto);
    
}

// ESTO ES NUEVO EN JAVASCRIPT 6






