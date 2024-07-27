const menubtn = document.querySelector("#menubtn");
const mainlink = document.querySelector("#main-links");
const livro_photo_RPNSAS = document.querySelector("#livro_photo-RPNSAS");
const livro_photo_AMDM = document.querySelector("#livro_photo-AMDM");
const perfil = document.querySelector("#perfil");
const RPNSAS = 'https://www.editorafolheando.com.br/pd-96e016-roupas-pretas-nao-se-secam-ao-sol.html?ct=&p=1&s=1'
const AMDM = 'https://www.amazon.com.br/Agridoce-Morte-das-Mariposas-ebook/dp/B0BMTKCFPF'
const Insta = 'https://www.instagram.com/marnylton/'

function openInNewTab(url){
    const win = window.open(url, '_blank')
    win.focus()
}

menubtn.addEventListener('click', () => {
    mainlink.classList.toggle('open')
})

livro_photo_RPNSAS.addEventListener('click', ()=> {
    openInNewTab(RPNSAS)
})
livro_photo_AMDM.addEventListener('click', ()=> {
    openInNewTab(AMDM)
})
perfil.addEventListener('click', ()=>{
    openInNewTab(Insta)
})
