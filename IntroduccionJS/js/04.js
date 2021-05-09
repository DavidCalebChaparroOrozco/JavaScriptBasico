// String o Cadenas de Texto

const producto = "Monitor de 20 Pulgadas\"";
const producto2 = 'Monitor HD';
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const correo = 'correo@correo.com';

// length es para la extension
console.log(producto.length);
console.log(producto2);
console.log(tweet.length);

// IndexOf Si una palabra existe en una cadena de texto (retorna posición)
console.log(tweet.indexOf('JavaScript'));
console.log(producto.indexOf('Tablet'));
console.log(correo.indexOf('@'));


// Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));

