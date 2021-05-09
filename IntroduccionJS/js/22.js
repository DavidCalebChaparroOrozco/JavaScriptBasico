
// const puntaje = 100;

// if(puntaje !== 1000){
//     console.log("No es igual");

// } else {
//     console.log("El puntaje es 1000");
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log("El usuario puede pagar");
// } else {
//     console.log("Fondos insuficientes")
// }

const rol = 'Editor';

if(rol === 'Administrador'){
    console.log("Accesso a todo el sistema");
} else if (rol === 'Editor') {
    console.log("Eres Editor, puedes entrar pero no hacer mucho");
} else {
    console.log("No tienes acceso");
}