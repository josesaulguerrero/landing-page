let items = document.getElementsByClassName('item');
const burgerIcon = document.getElementById('burger-menu')
const burgerMenu = document.getElementById('nav-bar__options')
const firstLine = document.getElementById('firstLine')
const secondLine = document.getElementById('secondLine')
const thirdLine = document.getElementById('thirdLine')


function removeClass() {
   burgerMenu.classList.add('nav-bar__options-noshow')
   firstLine.classList.remove('rotated1')
   secondLine.classList.remove('noshow')
   thirdLine.classList.remove('rotated3')
   burgerIcon.classList.remove('stuck')
}

function addClass() {
   burgerMenu.classList.remove('nav-bar__options-noshow')
   firstLine.classList.add('rotated1')
   secondLine.classList.add('noshow')
   thirdLine.classList.add('rotated3')
   burgerIcon.classList.add('stuck')
}

function toggleClasses() {
   if(burgerMenu.classList.contains('nav-bar__options-noshow')) addClass()
   else removeClass()
}

burgerIcon.addEventListener('click', toggleClasses)

// console.log(items)

for (const item of items) { item.addEventListener('click', removeClass) }

// items.map((item) => {
//    item.addEventListener('click', removeClass)
// })