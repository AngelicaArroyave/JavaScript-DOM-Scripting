// querySelector
const heading = document.querySelector('#heading')
heading.textContent = 'Nuevo heading'
heading.classList.add('new-class')
console.log(heading);

// querySelectorAll
const links = document.querySelectorAll('.navegacion a')
console.log(links);
console.log(links[0]);
links[0].textContent = 'Nuevo texto para enlace'
links[0].href = 'http://google.com'
console.log(links[0]);
links[0].classList.add('new-class-link')
// links[0].classList.remove('navegacion__enlace')

// getElementById
const heading2 = document.getElementById('heading')
console.log(heading2);

// Generar un nuevo enlace con createElement
const newLink = document.createElement('A')

// Agregar el href
newLink.href = 'new-link.html'

// Agregar el texto
newLink.textContent = 'Tienda virtual'

// Agregar la clase
newLink.classList.add('navegacion__enlace')

console.log(newLink);

// Agregar al documento (HTML)
const navigation = document.querySelector('.navegacion')
navigation.appendChild(newLink)

// Con querySelectorAll
// const elementosNavegacion = document.querySelectorAll('.navegacion');

// elementosNavegacion.forEach(elemento => {
//     const nuevoElemento = document.createElement('div');
//     nuevoElemento.textContent = 'Nuevo elemento';

//     elemento.appendChild(nuevoElemento);
// });