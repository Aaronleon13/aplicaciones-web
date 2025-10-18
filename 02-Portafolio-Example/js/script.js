// Constante
const mensaje = 'Hola mundo desde script.js';

console.log(mensaje.length);
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
console.log(mensaje.includes('mundo'));
console.log(mensaje.replace('mundo', 'JavaScript'));
console.log(mensaje.charAt(0));

const numeroPar = 42;

console.log(numeroPar);

// Variable
let otroMensaje = 'Este es otro mensaje';
console.log(otroMensaje);
otroMensaje = 'Mensaje modificado';
console.log(otroMensaje);


//Impresión de variables en consola
const nombre = 'Pedro';
const edad = 20;

console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// Estructuras de control
if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
} else {
    console.log(`${nombre} es menor de edad.`);
}

// Ciclos
for (let i = 1; i <= mensaje.length; i++) {
    console.log(`Número: ${i}`);
}

for (const caracteres of mensaje) {
    console.log(`Letra: ${caracteres}`);
}

// arreglos
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

// Funciones
function saludar(param) {
    console.log(`Esta es una función de saludo: ${param}`);
}

// Invocación de la función
saludar('Joaquin el Rey de los PROMPTS');

// Funciones de flecha
const despedida = (param) => {
    console.log(`Esta es una función de despedida: ${param}`);
}

// Invocación de la función
despedida('Ulises Duque de los Prompts');


const sumar = (a, b) => {
    return console.log(a + b);
    
}

const sumar2 = (a, b) => a + b;


sumar(5, 10);
sumar2(20, 30);

const name = document.querySelector('.name');

name.textContent = 'Nicolas /';


//ISOGRAMA
// Un isograma es una palabra que no tiene letras repetidas.
// Por ejemplo, la palabra "lamp" es un isograma, 
// pero la palabra "hello" no lo es porque tiene dos letras "l".

const esIsograma = (palabra) => {
    const arrayLetras = [];
    for (const letra of palabra) {
        if (arrayLetras.includes(letra)) {
            return console.log(`No es un isograma: ${palabra}`);
        }
        arrayLetras.push(letra);
        console.log(arrayLetras);
        
    }
    return console.log(`Es un isograma: ${palabra}`);
    
}

esIsograma('tomar'); // true
esIsograma('hello'); // false

//ANAGRAMA
// Un anagrama es una palabra o frase que se forma
// reordenando las letras de otra palabra o frase.
// Por ejemplo, "amor" es un anagrama de "roma".

const sonAnagramas = (palabra1, palabra2) => {

    //Agregue el join para poder verificar si array1 es igual a array2
    // ya que sort devuelve un array y no una cadena de texto
    // y al comparar un array con otro array siempre devuelve false
    // incluso si tienen los mismos elementos

    // Convertir las palabras a arrays de letras, ordenarlas y unirlas de nuevo en cadenas
    const array1 = palabra1.split('').sort().join();
    const array2 = palabra2.split('').sort().join();


    // Verificar si tienen la misma longitud 
    // Tambien se puede usar palabra1.length !== palabra2.length
    // pero es menos eficiente

    if (array1.length !== array2.length) {
        return console.log(`No son anagramas: ${palabra1} y ${palabra2}`);
    }

    // El join fue agregado en las lineas 94 y 95
    // a si la compración es mas precisa

    if (array1 === array2) {
        return console.log(`Son anagramas: ${palabra1} y ${palabra2}`);
    }else{
        return console.log(`No son anagramas: ${palabra1} y ${palabra2}`);
        
    }
}

sonAnagramas('amor','romas')


//CALLBACKS HELL
// Un callback es una función que se pasa como argumento a otra función
// y se ejecuta dentro de esa función.
const otraFuncion = () => {
    console.log('Función 2 ejecutada');
}

const funcion1 = (otraFuncion) => {
    setTimeout(() => {
        console.log('Función 1 ejecutada');
        otraFuncion();
    }, 5000);
}

console.log(funcion1(otraFuncion));

//EJEMPLO DE CALLBACK HELL
// const hacerPiza = () => {
//     const masa = () => {
//         const hornear = () => {
//             const decorar = () => {
//             }   
//         }
//     }
// }

// Promesas. Las promesas son una forma de manejar operaciones asincrónicas en JavaScript.
// Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.

const promesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve('La promesa se cumplió');
    } else {
        reject('La promesa se rechazó');
    }
});

promesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    }); 


const funcionAsincrona = async (promesa) => {
    try {
        const resultado = await promesa;
        console.log(`Resultado: ${resultado}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

funcionAsincrona(promesa);



const body = document.querySelector('body header nav a');
const projectCard = document.querySelector('.project-card');
const sectionId = document.getElementById('projects');

// const body2 = document.getElementsByTagName('body');
// const byid = document.getElementById('byid');
// const byclass = document.getElementsByClassName('byclass');
// const byname = document.getElementsByName('byname');

console.log(body);
console.log(projectCard);
console.log(sectionId);


<<<<<<< HEAD

=======
const buttons = document.querySelectorAll('.project-card button');
const projectCards = document.querySelectorAll('.project-card');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button){
            projectCards.forEach((card) => {
                // insertar el codigo aqui.
            });
        }
    });
});
>>>>>>> 61ab46c164fcabbf6836107e91794e7a7a410cee

