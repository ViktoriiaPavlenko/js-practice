// window.addEventListener('click', callback)

// function callback(params) {
//   console.log(`click случился`)
// }

// ----- события 

// с формой: submit (при Enter || bytton.type="submit")
// input - болтливое событие ввода данных
// change
// клавиатура: keydown, keypress, keyup
// click
// focus & blur


// ----------
const form = document.querySelector('.form')
console.log(form)

form.addEventListener('submit', (event) => {
  event.preventDefault() // останавливаем дефолтную отправку формы
//   console.log('отправка формы произошла', event)
//   console.log(event.target.children.firstInput.value)
//   console.log(event.target.elements.firstInput.value)
//   console.log(event.target.children.secondInput.value)
//   console.log(event.target.elements.secondInput.value)
})

// form.addEventListener('input', (evt) => {
//     // console.log(evt.target.value)
// })

// form.addEventListener('change', (e) => {
//     console.log('change', e.target.value)
// })
// const firstInput = document.querySelector('[name="firstInput"]')

// firstInput.addEventListener('focus', (e) => {
//     console.log('focus:', e.target.value)
// })

// firstInput.addEventListener('blur', (e) => {
//     console.log('blur:', e.target.value)
// })



// ------------------

// e.code - стандартизированное имя клавиши
// e.key - значение клавиши, согласно языковой разметки
function getDown(e) {
  console.log('keydown', e.code, e.key)
}

window.addEventListener('keydown', getDown)

window.addEventListener('keypress', (e) => {
  // у системных клавиш его нет!!!
  console.log('keypress', e.code, e.key)
})
window.addEventListener('keyup', (e) => {
  console.log('keyup', e.code, e.key)
})