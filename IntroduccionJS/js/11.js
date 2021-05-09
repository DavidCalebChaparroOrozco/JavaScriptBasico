// Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Forma anterior
const precioProductos = producto.precio;
const nombreProductos = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);


// Destructuring
const {precio,  nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);