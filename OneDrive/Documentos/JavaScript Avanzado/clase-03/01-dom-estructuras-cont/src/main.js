import './style.css'

console.warn('BOM -> Browser Object Model'); // Objeto que representa las caracteristicas del Navegador

console.log(window)

console.warn('DOM -> Document Object Model'); // Objeto que representa la caracteristicas del HTML

console.log(window.document) // representación
console.dir(window.document) // sacar radiografía

// ! Accedo absoluto a un elemento de DOM

console.log(document.children[0].children[1].children[0]) // h1

// ! Métodos clasicos de acceso a los elementos del DOM
console.warn('// ? getElementById() // Me retorna un HTMLElement');

const textSecundario = document.getElementById('texto-secundario')
//console.log(textoSecundario)
console.dir(textoSecundario)

textoSecundario.classList.add('color-fondo-violeta')

if(textSecundario==null){
 //debuger
 console.log('Esta seleccionado correctamente')
}
else{
    //debuger
    console.error('Todo mal...')
}

console.warn('// ? getElementsByClassName() // Me retorna una colección de HTMLElement');



console.warn('// ? getElementsByTagName() // Me retorna un colección de HTMLElement');

const todosLosTitulosH2 = document.getElementsByTagName('h2')
console.log(todosLosTitulosH2);// HTMLCollection -> Se va a trabajar como si fuera un array

const primerElemento = todosLosTitulosH2[0]
console.log(primerElemento)
primerElemento.classList.add('color-fondo-violeta')

console.warn('// ? Métodos modernos de acceso a los elementos del DOM');
console.warn('// ? querySelector() // Me retorna un Nodo');
console.warn('// ? querySelectorAll() // Me retorno una lista de Nodos');D