// For Loop

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

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

for(let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre );
}



// While Loop

// let i = 0; // Indice

// while(i <= 10){ // Condición

//     if( i % 2 === 0){
//         console.log(`El numero ${i} es PAR`)
//     } else {
//         console.log(`El numero ${i} es IMPAR`)
//     }

//     i++; // Incremento
// }

// let i = 0; // Indice

// while(i < carrito.length){ // Condición

//     console.log( carrito[i].nombre );

//     i++; // Incremento
// }



// Do While Loop

// let i = 0;

// do {

//     if( i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }

//     i++;
// } while( i < 10);