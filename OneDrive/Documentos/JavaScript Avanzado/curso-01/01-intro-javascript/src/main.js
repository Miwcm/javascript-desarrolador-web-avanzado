import './style.css'

console.warn("Mensajes de consola")
//! Constructores de variables
console.log("Nivel informativo")
console.warn("Nivel de precaucion")
console.error("Nivel de error critico") //se rompio 

//VAR (no usar)
//LET (ES6)

let palabra = 'Hola' //cadena (string)
console.log(palabra);
let nombre = 'Maxi' //cadena (string)
console.log(nombre);
let isActivo = true //Bool
console.log(isActivo);
let numero = 22 //Numero
console.log(numero); 
let numeroDec = 33.22 // Numero // camelCase para variables
console.log(numeroDec);

// !Objeto literal

const objeto = {
    nombre: 'Maxi',
    apellido: 'Principe',
    edad : 22,
    isTeacher: true,
    saludar: function(){
        console.log('Hola soy', this.nombre)
    }

}

let arrayFrutas = ['Manzana' , 'Pera', 'Limon', 'Banana', 'Naranja', 'Frutilla', 'Melon']

let arrayFrutasFaltantes = ['Mora', 'Melocoton', 'Mandarina', 'Arandano']

console.log(arrayFrutas)
console.log(arrayFrutas[0])


//metodos de los arrays
console.log('Metodos de los arrays');