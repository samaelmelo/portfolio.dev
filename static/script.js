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


// animar todos os itens da tela que tiverem o atributo data-anime
const item = document.querySelectorAll('[data-anime]')
const animeScroll= () =>{
// identificar em que posição do topo o elemento está + altura da janela  *  0.85 
  const windowTop = Math.round(window.scrollY) + window.innerHeight * 0.86

  item.forEach( element => {
    const alturaDoElementoDoTop = element.offsetTop
    if(windowTop > alturaDoElementoDoTop){
      element.classList.add('animate');
    } else {
      element.classList.remove('animate')
    }
  
  })
  
}

animeScroll()

window.addEventListener('scroll', () => {
  animeScroll()
})