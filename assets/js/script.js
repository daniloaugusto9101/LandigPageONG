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


window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("header__sticky", window.scrollY > 0);
});