// import data from './data.json';
// No puedo importar JSON directamente porque el NAVEGADOR no lo permite
// Pero en NodeJS si se puede hacer

const alumno = {
    nombre: 'Joaquin',
    edad: 25,
    curso: 'JavaScript',
    metodoSaludo: function() {
        console.log('Hola');
    }
};

const jsonAlumno = JSON.stringify(alumno);
console.log(jsonAlumno);

const objectAlumno = JSON.parse(jsonAlumno);
console.log(objectAlumno);

const alumnos = [
    { nombre: 'Joaquin', edad: 25, curso: 'JavaScript' },
    { nombre: 'Ulises', edad: 22, curso: 'Python' },
    { nombre: 'Ivan', edad: 28, curso: 'Java' }
]

console.log(alumno.nombre);

const filterAlumnos = alumnos.filter(function(alumno) {
    return alumno.edad > 24;
});

console.log(filterAlumnos);



// Fetch API para obtener datos de un archivo JSON
// De esta manera si puedo obtener el JSON en el navegador
const getData = async () => {
    const response = await fetch('./js/data.json');
    const data = await response.json();
    console.log(data);  
}

getData();