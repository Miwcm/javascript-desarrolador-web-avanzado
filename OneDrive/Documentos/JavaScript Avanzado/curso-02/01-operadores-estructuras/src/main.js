import './style.css'

console.warn('// ! Arrays (Arreglos o Vectores)');
// Estructura de datos indexada. Tienen un identificador único por el elementos. Empieza por 0. Tienen una dimensión (Cantidad de elementos dentro)

let arrayFrutas = ['Manzana', 'Pera', 'Kiwi', 'Banana', 'Naranja', 'Frutilla' , 'Melon', 'Cerezas', 'Frutas de Dragón', 'Uva', 'Zandía', 'Durazno', 'Mango']

let arrayFrutasFaltantes = ['Mora', 'Melocotón', 'Limón', 'Mandarina', 'Arandano', 'Kinoto', 'Anana']

console.log(arrayFrutas);
console.log(arrayFrutas[0]); // Accedo al primer elemento (Manzana)
console.log(arrayFrutas[arrayFrutas.length-1]) // Accedo al último elemento
console.log(arrayFrutas.at(-1)) // Accedo al último elemento
console.log(arrayFrutas.length);
console.log(arrayFrutasFaltantes)
console.log(arrayFrutasFaltantes[0]) // Accedo al primer elemento (Mora)
console.log(arrayFrutasFaltantes[arrayFrutas.length-1]) // Accedo al primer elemento (Mora)
console.log(arrayFrutasFaltantes.at(-1)) // Accedo al último elemento

console.log('// ! Métodos de los arrays');

console.log('// concat(): Une varios array')
let nuevoArrayFrutasTodas = arrayFrutas.concat(arrayFrutasFaltantes)
console.log(nuevoArrayFrutasTodas);

console.log('// join(): Combina los elementos de un array en una sola cadena')

let cadenaFrutas = nuevoArrayFrutasTodas.join()
console.log(cadenaFrutas);
cadenaFrutas = nuevoArrayFrutasTodas.join('%')
console.log(cadenaFrutas);

console.log('// pop(): Elimina el último elemento');

let ultimoElemento = nuevoArrayFrutasTodas.pop()
console.log(ultimoElemento);

console.log('// push(): Agrega al final un elemento');

let nuevaCantidadDeElementosDelArray = nuevoArrayFrutasTodas.push('Frambuesa', 'Granada', 'Ciruela', 'Guarana', 'Ñangapiri', 'Palta', 'Tomate')
console.log(nuevaCantidadDeElementosDelArray); // 26

console.log('// reverse(): Invierte el orden de los elementos')

let arrayInvertido = nuevoArrayFrutasTodas.reverse()
console.log(arrayInvertido);

console.log('// shift(): Eliminaga un el elemento al principio')

let elementoDelPrincipioEliminado = arrayInvertido.shift()
console.log(elementoDelPrincipioEliminado);

console.log('// unshift(): Agrega un el elemento al principio')

nuevaCantidadDeElementosDelArray = arrayInvertido.unshift('Carambola', 'Coco', 'Higo', 'Litchi', 'Papaya', 'Maracuya')
console.log(nuevaCantidadDeElementosDelArray); // 31

console.log('// forEach(): Itera sobre los elementos (recorre elementos)')
// Recorre los elementos de la array

// callback (cb): Es una función pasada como argumento de otra función
//                            ⬇️⬇️ <---- callback
//arrayInvertido.forEach(function() {})

/*
! Al no tener nombre se llama función anonima
function(fruta) {
    console.log(fruta)
}
*/

console.log(arrayInvertido);

arrayInvertido.forEach(function(fruta, indice, array) {
    console.log(fruta)
    console.log(indice)
    console.log(array);
})
console.warn('-----------------------------------------');

function callbackFuncion(item, indice, array) {
    console.log(item)
    console.log(indice)
    console.log(array);
}

arrayInvertido.forEach(callbackFuncion)

console.warn('-----------------------------------------');

let personas = ['Laura', 'Lorena', 'Claudia', 'Nadia', 'Silvia']

personas.forEach(callbackFuncion)

/* function forEach(callback) {
    // -----
    // -----
    // -----

    callback()
} */

//             ⬇️ ⬇️  <---- Parametros
/* function sumar(n1, n2) {
    return n1 + n2
}
 */
//   ⬇️ ⬇️  <---- Argumentos
/* sumar(2, 4) // Invoco, llamo, ejecuto. */

console.warn('------------------------------------------------------')
console.warn('------------------------------------------------------')
console.warn('------------------------------------------------------')

console.warn('Repaso metodo forEach()')

const arrayAnimales = ['Gatos', 'Perros', 'Cabras', 'Horneros','Ornitorrincos','Mapaches', 'Gallinas']
console.log(arrayAnimales);

arrayAnimales.forEach((animal) => {
    console.log(animal);
})

for (let i=0; i<arrayAnimales.length; i++){
    console.log(arrayAnimales[i]);
}


console.warn('// map(): El map recorre los elementos del array y modifica su valores creando resultado otro array de la misma dimensión')

const arrayNumeros = [7, 10, 13, 2, 5, 15, 29]
console.log(arrayNumeros);

let resultado = arrayNumeros.map((num) => {// retorna U[] <- cualquier tipo de datos
    // debugger 
    return num * 2
}) 

console.log(resultado)


console.warn('// filter(): Filtra los elementos de un array y crea como resultado otro array con los elementos filtrados.')

const pares = arrayNumeros.filter((num) => {
    if(num % 2 === 0){
        return num
    }
} )

console.log(pares);

/*const impares = arrayNumeros.filter((num) => {
    if(num % 2 !== 0){
        return num
    }
} )
*/

//Simplificando

let impares = arrayNumeros.filter((num) => num % 2 !== 0)
console.log(impares)



console.warn('Repaso arrow function')
//funciones tradicionales
function restarOtraManera(n1, n2){
    console.log(n1-n2);
}

restarOtraManera(8,5)

let restar = function(n1, n2){
    console.log(n1-n2);
}

restar(4,1)

//funciones flechas <= no usar en objetos 

let restarArrow = (n1,n2) => console.log(n1,n2) //<= si solo tengo una sentencia no hace falta que use {}

let multiplicarArrow = (n1, n2, n3) => {
    let res = n1*n2*n3
    return res
} 

const resultadoMulti = multiplicarArrow(3,5,7)
console.log(resultadoMulti)



console.log('// slice(): Extrae una copia de una parte de un array en nuevo array')
let flores = ['Dandelion', 'Rosa', 'Girasol', 'Margarita', 'Petunia', 'Violeta', 'Tulipan', 'Clavel', 'Cala']

console.log(flores)

let dosFlores = flores.slice(2,5)
console.log(dosFlores)


console.log('// splice(): Agrega o elimina elementos en una posición especifica')

let elementosEliminados = flores.splice(2,1)
console.log(flores);
console.log(elementosEliminados)

// ? Reemplazar
let borroDandelion = flores.splice(0,1,'Lirio', 'Geranio')
console.log(borroDandelion);
console.log(flores)


console.warn('// sort(). Orden alos elementos alfabeticamente')
let arrayLetras = ['A', 'Z', 'G', 'D', 'E', 'F']
let arrayNumeritos = [11, 2, 19, 33, 6, 15]
console.log(arrayLetras)
console.log(arrayNumeritos)
let funcionOrdenamiento = (a,b) => {
    //console.log(a-b) // a es mas chico que b(-1) | a es mas grande que b(1)
    return a-b
}
let ordernadoNumeritos = funcionOrdenamiento.sort(funcionOrdenamiento)
console.log(ordernadoNumeritos);

let ordenandoLetras = arrayLetras.sort()

console.warn("Gestión de un array como cola o pila");

// cola -> shift() y unshift()
// pila -> pop() y push()

console.warn('// Array (listas) homogeneas')

let colores = ['rojo', 'verde', 'azul', 'negro', 'lila'] // todas cadenas
let edades = [22, 33, 25, 55, 90] // todas numeros

console.warn('// Array (listas) heterogeneos [NO DEBO]');
//                0 -> nombre | 1 -> apellido | 2 -> edad | 3 -> isTeacher
// let arrayMaxi = ['Maximiliano', 'Principe', 22, true]

//let maxiNombre = 'Maximiliano'
//let maxiApellido = 'Principe'
//let maxiEdad = 22
//let maxiIsteacher = true
//let maxi = 'Maximiliano|Principe|22|true'


console.warn("// ! CONST (ES6)");
/* Me permite construir cajitas que NO PUEDO modificar más adelante */

