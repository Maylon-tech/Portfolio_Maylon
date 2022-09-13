
// Botao Croll page UP
const botaoUp = document.querySelector('.botao-scroll')
botaoUp.addEventListener('click', () => {
    window.scrollTo(0,0)
})
document.addEventListener('scroll', ocultar)
function ocultar() {
    if(window.scrollY > 10) {
        botaoUp.style.opacity = 1
    } else {
        botaoUp.style.opacity = 0
    }
}
ocultar()