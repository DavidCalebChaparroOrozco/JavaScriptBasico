
// Declaración de funcion
sumar();
function sumar(){
    console.log (10 + 10);
}

// Expresion de la función
// sumar2(); // Saca error
const sumar2 = function(){
    console.log (3+3);
}
sumar2();

// IIFE esta variable no va a salir de este archivo
(function (){
    const cliente = "David";
})();