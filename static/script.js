// abre fecha menu lateral em modo mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')
const footer = document.querySelector('#footer')

menuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
  body.classList.toggle('menu-nav-active')
  footer.classList.toggle('wid')
});

// fechar o menu quando clicar em alguma item e muda o icone para list
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => item.addEventListener('click', () => {
  if(body.classList.contains('menu-nav-active')){
    body.classList.remove('menu-nav-active')
    menuMobile.classList.toggle('active')
    footer.classList.toggle('wid')
  }
}));

// mostrar link ativo no dashboard
const links = document.querySelectorAll('.nav-item a')
  
links.forEach( link => link.addEventListener('click', (event) => {
  const elementClass = event.target.className === 'nav-link active'
    for(element of links){
      element.classList.remove('active')
    }

    elementClass ?  link.classList.remove('active') : link.classList.add('active')
}));



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
  
  });
  
};

animeScroll()

window.addEventListener('scroll', () => {
  animeScroll()
});


// ativar o carregamento no botao enviar formilario para

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')


btnEnviar.addEventListener('click', ()=>{
  btnEnviarLoader.style.display = 'block'
  btnEnviar.style.display = 'none'
});

// tirar a mensagem depois de 5 segundos

setTimeout( () => {
  document.querySelector('#alerta').style.display = 'none'
},4000);