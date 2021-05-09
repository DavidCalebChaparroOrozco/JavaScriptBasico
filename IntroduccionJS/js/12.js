// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Object.freeze(producto); // No permite agregar,modificar ,ni eliminar las propiedades
// Object.seal(producto); // Permite agregar ,ni eliminar las propiedades pero si permite modificarlas

producto.imagen = "imagen.jpg";
producto.precio = "NUEVO PRECIO";
delete producto.precio;

// console.log(Object.isFrozen(producto));// Metodo para saber si un objeto sellado
console.log(Object.isSealed(producto));

// console.log(producto);