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

// Eventos
console.log(1);

// Load espera que el JavaScript y los archivos que dependen del HTML estén listos
// window.addEventListener('load', function() { // FORMA 1
//     console.log(2);
// })

window.addEventListener('load', print) // FORMA 2

window.onload = function() { // Es lo mismo que el addEventListener('load')
    console.log(3);
}

// Con DOMContentLoaded solo espera al HTML, pero no espera el CSS o imágenes
document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
})

console.log(5);

function print() {
    console.log(2);
}

window.onscroll = function(event) {
    console.log('Scrolling...');
    // console.log(event);
}

// Seleccionar eventos y asociarles un evento
// const btnSend = document.querySelector('.boton--primario')
// btnSend.addEventListener('click', function(event) {
//     console.log(event);
//     console.log(event.target);
//     event.preventDefault() // Sirve para validar un formulario
//     console.log('Enviando formulario...');
// })

// Eventos de los inputs y textarea
const data = {
    nombre: '',
    email: '',
    mensaje: ''
}

const name = document.querySelector('#nombre')
const email = document.querySelector('#email')
const message = document.querySelector('#mensaje')
const form = document.querySelector('.formulario')

// name.addEventListener('change', function() { // Se captura información después de salir del campo
//     console.log('Escribiendo...');
// })

// name.addEventListener('input', function(event) { // Captura la información del campo en tiempo real
//     // console.log('Escribiendo...');
//     console.log(event.target.value);
// })

name.addEventListener('input', readText)
email.addEventListener('input', readText)
message.addEventListener('input', readText)

// Evento Submit
form.addEventListener('submit', function(event) {
    event.preventDefault()
    // Validar formulario
    const { nombre, email, mensaje } = data
    
    if(nombre === '' || email === '' || mensaje === '') {
        showMessage('Todos los campos son obligatorios', 'error')
        return
    }
    // Crear la alerta de enviar correctamente
    showMessage('Mensaje enviado correctamente', 'correcto')
})

function readText(event) {
    // console.log(event.target.value);
    
    // El nombre de los id deben ser los mismos que hay en data
    data[event.target.id] = event.target.value

    console.log(data);
}

// Mostrar un mensaje en pantalla exitoso o de error
function showMessage(message, className) {
    const show = document.createElement('p')
    show.textContent = message
    show.classList.add(className)
    form.appendChild(show)

    // Mensaje desaparece después de 5 segundos
    setTimeout(() => { show.remove() }, 5000)
}