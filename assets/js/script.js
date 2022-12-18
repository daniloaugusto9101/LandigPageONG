
// Efeito Menu Stivk
window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("header__sticky", window.scrollY > 0);
});

// Exibe scrooll suave
const menu = document.querySelectorAll('.menu a[href^="#"]')

menu.forEach(item =>{
    item.addEventListener('click', toScroll)
})

function toScroll(event){
    event.preventDefault();
    const element = event.target 
    const id = element.getAttribute('href');

    const section = document.querySelector(id)
    const to = section.offsetTop;

    window.scroll({
        top: to - 80,
        behavior: "smooth"
    })
}


// Abre e fecha menu mobolie
const navbar = document.querySelector('.nav-bar__container')
btn.addEventListener('click', function(){
    navbar.classList.toggle('active')
})


// Efeito abrir e fechar card de perguntas
const cards = document.querySelectorAll(".cardP")

cards.forEach(function(card) {
    const icon = card.querySelector(".cardP__icon");
    icon.addEventListener("click", function(item){

        cards.forEach(function(item) {
            // console.log(item)
            if (item !== card) {
                item.classList.remove("card--aberto");
            }
        });
        
        card.classList.toggle("card--aberto");
    })
});







