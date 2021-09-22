// abre fecha menu lateral em modo mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
  body.classList.toggle('menu-nav-active')
})

// fechar o menu quando clicar em alguma item e muda o icone para list
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => item.addEventListener('click', () => {
  if(body.classList.contains('menu-nav-active')){
    body.classList.remove('menu-nav-active')
    menuMobile.classList.toggle('active')
  }
}))