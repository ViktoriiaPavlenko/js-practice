// ----------- доступ к элементам

// по селектору тега
const titleByTag = document.querySelector('h1')
// console.log(titleByTag)
// console.dir(titleByTag)

// по селектору идентификатора
const titleById = document.querySelector('#title')
// console.log(titleById)
// console.dir(titleById)
const titleByIdOk = document.getElementById('title')
// console.log(titleByIdOk)
// console.dir(titleByIdOk);

// по селектору класса
const titleByclass = document.querySelector('.main-class')
// console.log(titleByclass)
// console.dir(titleByclass)

const elemsByClass = document.getElementsByClassName('my-class')
// console.log(elemsByClass) // HTMLCollection - коллекция без методов массива
const elemsByClassName = document.querySelectorAll('.my-class')
// console.log(elemsByClassName)

// по селектору атрибута
const titleByAttr = document.querySelector('[data-name="data-title"]')
// console.log(titleByAttr)
// console.dir(titleByAttr)

// по селектору наследника
const elemByParent = document.querySelector('body>p') //1й елемент первого уровня вложенности
// console.log(elemByParent)
// console.dir(elemByParent);

const elemsByParent = document.querySelectorAll('body>p')
// console.log(elemsByParent) // NodeList - коллекция элементов с методом forEach

// по селектору потомка
const elemByProto = document.querySelector('body p') //елемент любого уровня вложенности
// console.log(elemByProto)
// console.dir(elemByProto)

const elemsByProto = document.querySelectorAll('body p')
// console.log(elemsByProto)



// навигация
// console.log(titleByTag.parentNode) // получаем родителя
// console.log(titleByTag.childNodes) // NodeList + text
// console.log(titleByTag.children) // HTMLCollection tag only


// свойства элементов
console.dir(titleByTag)

// class в свойстве classList в виде DOMTokenList

console.log(titleByTag.classList)
titleByTag.classList.add('new-class')
console.log(titleByTag.classList.contains('qwe'))
console.log(titleByTag.classList.contains('new-class'))
titleByTag.classList.remove('main-class')
titleByTag.classList.replace('title', 'new-title')

titleByTag.classList.toggle('new-class')
titleByTag.classList.toggle('new-class')


// id - отдельное свойство
console.log('id:', titleByTag.id)
// attributes
console.log(titleByTag.attributes) // NamedNodeMap
console.log('attributes: ', titleByTag.attributes.id)
console.log('data-', titleByTag.dataset) // DOMStringMap
// добавить новый атрибут
titleByTag.setAttribute('name', 'main-title')
// смотреть атрибут
console.log('getAttribute', titleByTag.getAttribute('name'))
// удалять атрибут
titleByTag.removeAttribute('data-id')

console.log('value', titleByTag.value)
console.log('textContent', titleByTag.textContent)
titleByTag.textContent = 'Hello, World!'
console.log(titleByTag.style)
titleByTag.style.color = 'blue'
titleByTag.style.background = 'yellow'
titleByTag.style.padding = '20px'
titleByTag.style.margin = '20px'


// создание узлов - 2 способа
// 1. createElement() => object  .. разметка
const button = document.createElement('button')
button.textContent = 'click'
console.log('textContent: ', button.textContent)
console.dir(button)
button.style.background = 'green'
button.classList.add('my-btn')
button.setAttribute('type', 'button')
button.dataset.type = 'my-button'


// 2. `` - строчная разметка => string   // строчно выражение
const stringBtn = `<button class="my-btn" type="button" data-type="my-button" style="background: red">STRING BTN</button>`
console.log(stringBtn)


// клонирование
const cloneButtonBefore = button.cloneNode(false)
cloneButtonBefore.textContent = 'before'

const cloneButtonAfter = button.cloneNode(false)
cloneButtonAfter.textContent = 'after'

const cloneButtonPrepend = button.cloneNode(false)
cloneButtonPrepend.textContent = 'prepend'

const cloneButtonAppend = button.cloneNode(false)
cloneButtonAppend.textContent = 'append'

console.log(cloneButtonBefore)


// встраивание элементов - 2 вида
// для объектов через createElement

// titleByTag.before(cloneButtonBefore) // строго перед
// titleByTag.after(cloneButtonAfter) // строго после
// titleByTag.appendChild(cloneButtonAppend)
// titleByTag.prepend(cloneButtonPrepend)

// ИЛИ
// для обьектов
titleByTag.insertAdjacentElement('beforebegin', cloneButtonBefore)
titleByTag.insertAdjacentElement('afterbegin', cloneButtonPrepend)
titleByTag.insertAdjacentElement('beforeend', cloneButtonAppend)
titleByTag.insertAdjacentElement('afterend', cloneButtonAfter)

// // для строк
// titleByTag.innerHTML = stringBtn

// для строк
titleByTag.insertAdjacentHTML('beforebegin', stringBtn)
titleByTag.insertAdjacentHTML('afterbegin', stringBtn)
titleByTag.insertAdjacentHTML('beforeend', stringBtn)
titleByTag.insertAdjacentHTML('afterend', stringBtn)

// // удаление
// // titleByTag.innerHTML = '' - можно для строчных

// titleByTag.removeChild(cloneButtonBefore) // нельзя удалить, потому что не является вложеным элементом
titleByTag.removeChild(cloneButtonAppend)
titleByTag.removeChild(cloneButtonPrepend)
// titleByTag.removeChild(cloneButtonAfter) // нельзя удалить, потому что не является вложеным элементом

cloneButtonBefore.remove()
cloneButtonAfter.remove()

