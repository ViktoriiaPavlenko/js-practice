// task1
const textRef = document.querySelector('#text')
const btnRef = document.querySelector('#hider')

btnRef.addEventListener('click', hideText)

function hideText () {
  textRef.innerHTML = ''
}

// 2 variant
// document.getElementById('hider').onclick = function() {
//     document.getElementById('text').hidden = true;
// }


// task2
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
menuElem.classList.toggle('open');
};