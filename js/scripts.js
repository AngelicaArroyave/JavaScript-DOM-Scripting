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
links[0].classList.remove('navegacion__enlace')

// getElementById
const heading2 = document.getElementById('heading')
console.log(heading2);