// POO

/** Object Literal **/
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente= function(){
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto (nombre, precio,disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
// Crear funciones que solo se utilizan en un objeto en espacifico
Producto.prototype.formatearProducto= function(){
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio} y esta ${this.disponible}`;
}


const producto2 = new Producto('Monitor Curvo de 49"',800,true);
const producto3 = new Producto('Laptop',300,true);
const producto4 = new Producto('Raton',60,false);
const producto5 = new Producto('Teclado',120,true);
const cliente = new Cliente('David', 'Chaparro');

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );