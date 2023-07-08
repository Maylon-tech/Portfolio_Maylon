
// Botao Croll page UP
const botaoUp = document.querySelector('.botao-scroll')
const header = document.querySelector('.header')

botaoUp.addEventListener('click', () => {
    window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)
document.addEventListener('scroll', BgHeaer)

function ocultar() {
    if(window.scrollY > 10) {
        botaoUp.style.opacity = 1
    } else {
        botaoUp.style.opacity = 0
    }
}

function BgHeaer() {
    if(window.scrollY > 10) {
        header.style.backgroundColor = '#222'
    } else {
        botaoUp.style.backgroundColor = 'transparent'
    }
}