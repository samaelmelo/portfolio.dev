// abre fecha menu lateral em modo mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
  body.classList.toggle('menu-nav-active')
})

