'use strict'

//Paralelismo del café

//Variables
let nombreDelCafe = '';

//Pide que lo ingrese el usuario
nombreDelCafe = prompt('Ingrese el cafe que desea'); //El usuario lo ingresa

//Función con parámetro
function hacercafe(nombreDelCafe){
    return `Aquí está su ${nombreDelCafe}, que lo disfrutes`;
}
console.log(hacercafe(nombreDelCafe));

//Función sin parámetro
function saludo (){
    return 'Hola';
}
console.log(saludo());

//Variables
let numeroUno = 0;
let numeroDos = 0;

//Pide que lo ingrese el usuario
numeroUno = parseInt('Ingresa el 1er número a sumar');
numeroDos = parseInt('Ingrese el 2do número a sumar');

//Función con parámetro
function sumar (numeroUno, numeroDos){
return numeroUno + numeroDos;
}
console.log(sumar(numeroUno, numeroDos));

let nombre = 'Sebastián';
let age = 16;
let haveChildren = false;
let studies = {
    nombre: 'UDEA',
    años: 5,
};
console.log(studies.nombre)//Para solo mostrar el nombre de lo que hay en esa variable
let monts = ['Enero', 'Febrero', 'Marzo'];
console.log(monts[0]);