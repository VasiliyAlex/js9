let body = document.querySelector('body')
let red = document.querySelector('.box2__item:nth-of-type(1)')
let yellow = document.querySelector('.box2__item:nth-of-type(2)')
let blue = document.querySelector('.box2__item:nth-of-type(3)')
let black = document.querySelector('.box2__item:nth-of-type(4)')
let x = document.querySelector('.box2__item:nth-of-type(5)')


red.addEventListener('click', ()  => {body.style.background = 'red'})
yellow.addEventListener('click', ()  => {body.style.background = 'yellow'})
blue.addEventListener('click', ()  => {body.style.background = 'blue'})
black.addEventListener('click', ()  => {body.style.background = 'black'})
x.addEventListener('click', ()  => {body.style.background = ''})



let items = document.querySelectorAll('.box1__item')
let redItem = document.querySelector('.box3__item:nth-of-type(1)')
let yellowItem = document.querySelector('.box3__item:nth-of-type(2)')
let blueItem = document.querySelector('.box3__item:nth-of-type(3)')
let blackItem = document.querySelector('.box3__item:nth-of-type(4)')
let xItem = document.querySelector('.box3__item:nth-of-type(5)')


items.forEach((item) => {
    redItem.addEventListener('click', ()  => {item.style.background = 'red'})
})
items.forEach((item) => {
    yellowItem.addEventListener('click', ()  => item.classList.toggle ('yellow'))
})

items.forEach((item) => {
    blueItem.addEventListener('click', ()  => item.classList.toggle ('blue'))
})

items.forEach((item) => {
    blackItem.addEventListener('click', ()  => {item.style.background = 'black'})
})

items.forEach((item) => {
    xItem.addEventListener('click', ()  => {item.style.background = 'none'})
})