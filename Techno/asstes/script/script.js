const headerPrimary =document.querySelector(".primary-headder");
const logo = document.querySelector(".logo-img");

const headerVal = 100;

window.addEventListener('scroll', () => {
    const currentScroll= window.scrollY;

        if (currentScroll > headerVal) {
          headerPrimary.classList.add("sticky")
            logo.src = `asstes/images/logo-2.png`

        } else {
            headerPrimary.classList.remove("sticky")
            logo.src = `asstes/images/logo-1.png`
        }
})

// carousel
$(document).ready(function(){
    $(".owl-carousel").each(function(index){
        let item = index == 0 || index == 2 ? 3 : 4;
        $(this).owlCarousel({
            loop:true,
            margin:0,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:4
                },
                992:{
                    items: 4
                }
            }
        });
      });
           
})