const carrito =[
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisor 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach
carrito.forEach(producto => console.log(producto.nombre));

// map para crear un nuevo arreglo y asignarlo a una nueva variable.
const arreglo1 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo1);