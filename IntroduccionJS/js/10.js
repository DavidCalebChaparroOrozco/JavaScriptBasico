// Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

const pie = {
    color: "oscuro",
    tamanio: 10,
    talla : "L",
}


// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto['precio']);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;
console.log(producto);