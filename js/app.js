//Variables con let y const------------------------------------------

const aprendiento2 = 'Javascript'; //este valor siempre se va quedar
console.log(aprendiento2);
//scope
let aprendiendo3 = true;
if (aprendiendo3 == true){
    let aprendiendo3 = false;
    console.log(aprendiendo3);
}
console.log(aprendiendo3);
console.log('Fin del video 2 y 3')
//Template Strings------------------------------------------------------------------
var nombre1 = 'Juan';
const trabajo1 = 'Sistemas';
//forma 1 'antigua forma'
console.log('Nombre: ' + nombre1 + ', Trabajo: ' + trabajo1);
//forma 2 'nueva forma'
console.log(`Nombre: ${nombre1} , Trabajo: ${trabajo1}`);

//forma 1 'antigua forma' 
//Nota: si desea mostrar, comentar las lineas de Arreglos, map y Object.keys

/* const contenedorApp2 = document.querySelector('#app');
let html1 = '<ul>' +
                '<li> Nombre: ' + nombre1 + '</li>' +
                '<li> Trabajo: ' + trabajo1 + '</li>' +
                '</ul>';
//forma 2 'nueva forma'
let html1 = `
            <ul>
                <li> Nombre: ${nombre1} </li>
                <li> Trabajo ${trabajo1} </li>
            </ul>
            `;
contenedorApp2.innerHTML = html1; */ 
console.log('Fin del video 4 Template')
//Funciones con parametros------------------------------------------------------------------
function actividad(nombre2 = 'walter', trabajo2 = 'almacen'){
    console.log(`El encargado de ${trabajo2} es ${nombre2}`);
}
actividad('german','informatica');
actividad('Brandon', 'tecnico de computadoras');
console.log('Fin del video 6 funciones con parametros');
//Arrow functions------------------------------------------------------------------

let comidas = (parametro1,parametro2) => {
    return `Me gusta el ${parametro1} y no el ${parametro2}`;
}

let pedazo;
pedazo = comidas('queso', 'mortadela');
pedazo = comidas('helado', 'jugo');
console.log(pedazo);
console.log('Fin del video 7 Arrow functions');
//Object literal------------------------------------------------------------------
const persona = {
    nombre : 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500,
    vector: ['hola','hola2','hola3']
    
}

console.log(persona);
console.log('fin del video 8 object literal');
//object Constructor------------------------------------------------------------------
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
//crear una nueva tarea, su ventaja es crear multiples objetos
const tarea1 = new Tarea('Aprender JavaScript y react', 'Urgente');
const tarea3 = new Tarea('Aprender JavaScript y react', 'Urgente');

console.log(tarea1);
console.log(tarea3);
console.log('fin del video 9 Object constructor');
//Prototypes------------------------------------------------------------------
Tarea.prototype.mosrarInformacionTarea = function(){  //ahora esta funcion mostrarInformacionTarea esta unicamente atado al metodo Tarea, sirve para ordenar el codigo, ademas con prototype podras atar las funciones que quieras
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea2 = new Tarea('Pasear al perro', 'media');
console.log(tarea2);
console.log(tarea2.mosrarInformacionTarea()); 
console.log('Fin del video 10 Prototypes');
//Destructuring de objetos ----------------------------------------------------------
const aprendiendoJS= {
    version: {
        nueva : 'ES6',
        anterior : 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}
console.log(aprendiendoJS);
//version anterior
//let version = aprendiendoJS.version.nueva;
//let framework = aprendiendoJS.frameworks[1];

//Destructuring nueva
let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks);
let {nueva} = aprendiendoJS.version;
console.log(nueva);
console.log('Fin del video 11 Drestructuring de objetos');

//Object literal Enhacement----------------------------------------------------------
const banda = 'Metalica';
const genero = 'Heavy metal';
const canciones = ['Master of puppets', 'Seek & Destroy', 'Enter Sandrian'];

//forma anterior
// const metalica = {
//     banda : banda,
//     genero : genero,
//     canciones : canciones
// }

//nueva forma
const metalica = {banda, genero, canciones};
console.log(metalica);
console.log('Fin del video 12 Object literal');

//Funciones en un Objeto----------------------------------------------------------
const persona2 = {
    nombre: 'Juan',
    trabajo: 'Desarrollador web',
    edad: 500,
    musicaRock : true,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona2.mostrarInformacion();
console.log('Fin del video 13 Funciones de un objeto');

//Arreglos, map y Object.keys----------------------------------------------------------
//arreglos
const carrito = ['Producto 1','Producto 2','Producto 3', 'Producto 4'];
console.log(carrito);
const appContenedor = document.querySelector('#app');

let html= ''; //usaremos para imprimir en el html
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;
//Object.keys
console.log(Object.keys(persona.vector));
console.log('Fin del video 14 arreglos, map y Object.keys');

//Spread Operator ----------------------------------------------------------
let lenguajes= ['JavaScript', 'PHP', 'Python'];
//let frameworks= ['React', 'VueJS', 'AngularJS']; // No lo coloco porque ya lo declare en los anteriores ejercicios
let combinacion = [...lenguajes,...frameworks]; //para concatenar arreglos
// y porque no usar concat?
//let [ultimo] = lenguajes.reverse(); // esto captura 'Phyton' pero tambien voltea el arreglo(lo cambia)
let [ultimo] = [...lenguajes].reverse(); //este no lo modifica el arreglo y tambien me captura el ultimo
console.log(ultimo);
console.log(combinacion);
//otro ejemplo del spread
function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(numeros);//no realiza la suma
suma(...numeros); //y realiza la suma
console.log('Fin del video 15 Spread');

//Promises----------------------------------------------------------

const aplicarDescuento = new Promise((resolve,reject) => {
    setTimeout (() => {
        let descuento = false;//cambiar a true o false para ver la diferencia
        if (descuento){
            resolve('Descuento aplicado!');
        }else{
            reject('No se pudo aplicar el descuento');
        }
    },3000);//el setTimeout es para simular lo que tarda en leer la BD
});
aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});
console.log('Fin del video 16 promises, el resultado mostrara 3 seg despues al final');

//primises con ajax----------------------------------------------------------

// const descargarUsuarios = cantidad => new Promise((resolve,reject) =>{
//     //pasar la cantidad a la api

//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    
//     //llamado a ajax

//     const xhr = new XMLHttpRequest();

//     //abrir la conexion
//     xhr.open('GET', api, true);

//     //on load
//     xhr.onload = () => {
//         if(xhr.status == 200){
//             resolve(JSON.parse(xhr.responseText).results);
//         }else{
//             reject(Error(xhr.statusText));
//         }
//     }

//     //opcional (on error)
//     xhr.onerror = (error) => reject(error);
//     //send
//     xhr.send();
// });

// descargarUsuarios(15)
//     .then(
//     miembros => imprimirHTML(miembros),
//     error => console.error(
//         new Error('Hubo un error' + error)
//     )
// )
// console.log('Fin del video 18 Promises con ajax')

// //Mostrando el resultado en nuestro HTML----------------------------------------------------------
// function imprimirHTML(usuarios){
//     let html= '';
//     usuarios.forEach(usuario => {
//         html += `
//             <li>
//                 Nombre: ${usuario.name.first} ${usuario.name.last}
//                 Páis: ${usuario.nat}
//                 Correo: ${usuario.email}
//                 Fecha de registro: ${usuario.registered.age} años
//                 Imagen: 
//                     <img src="${usuario.picture.medium}">
//             </li>
//         `;
//     });

//     const contenedorApp = document.querySelector('#app');
//     contenedorApp.innerHTML = html;
// }

console.log('Fin del video 19, lo mostrado esta en el html')
//POO ----------------------------------------------------------
class Oficio{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Oficio{
    constructor(nombre, prioridad, cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }
    hola(){
        return 'hola';
    }
}

let oficio1 = new Oficio('Aprender JavaScript', 'Alta');
let oficio2 = new Oficio('Prepara cafe', 'Media');
let oficio3 = new Oficio('Pasear al perro', 'Media');
let oficio4 = new Oficio('Conocer a mis suegros', 'Baja');

oficio1.mostrar();
oficio2.mostrar();
oficio3.mostrar();
oficio4.mostrar();

let compra1 = new ComprasPendientes('Pollo', 'Alta', '1 kl');
compra1.mostrar();
// console.log(Oficio1.mostrar());
// console.log(Oficio2.mostrar());
// console.log(Oficio3.mostrar());
//console.log(Oficio4.mostrar());

console.log('Fin del video 20 y 21 Programacion orientada a objetos')

import {tareaComp} from './tarea.js';
import {TareaClass} from './tarea.js';
console.log(tareaComp);

const tarea4 = new TareaClass('Matematicas','Alta');
tarea4.mostrar();