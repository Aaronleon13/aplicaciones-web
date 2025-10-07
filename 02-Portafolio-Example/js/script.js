const mensaje = 'Hola mundo desde script.js';

console.log(mensaje.length);
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
console.log(mensaje.includes('mundo'));
console.log(mensaje.replace('mundo', 'JavaScript'));
console.log(mensaje.charAt(0));

const numeroPar = 42;

console.log(numeroPar);

let otroMensaje = 'Este es otro mensaje';
console.log(otroMensaje);
otroMensaje = 'Mensaje modificado';
console.log(otroMensaje);



const nombre = 'Pedro';
const edad = 20;

console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
} else {
    console.log(`${nombre} es menor de edad.`);
}

for (let i = 1; i <= mensaje.length; i++) {
    console.log(`Número: ${i}`);
}

for (const caracteres of mensaje) {
    console.log(`Letra: ${caracteres}`);
}

const array = [1, 2, 3, 4, 5];

array.push(6);
array.unshift(0);
console.log(array);
array.slice(2, 4);
console.log(array);
array.pop();
array.splice(2, 1);
array.indexOf(3);
array.includes(4);
array.reverse();
console.log(array.reverse);
array.join('-');

console.log(array.join(','));


function saludar(param) {
    console.log(`Esta es una función de saludo: ${param}`);
}

saludar('Joaquin el Rey de los PROMPTS');

const despedida = (param) => {
    console.log(`Esta es una función de despedida: ${param}`);
}

despedida('Ulises Duque de los Prompts');



const name = document.querySelector('.name');

name.textContent = 'Nicolas /';