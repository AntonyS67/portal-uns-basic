$(document).ready(function(){
    $('.section-cards').slick({
        lazyLoad:'ondemand',
        slidesToShow:3,
        slideToScroll:1,
        appendArrows: $(this).find('.section-card-buttons'),
        prevArrow: '<button class="prev">&#10094;</button>',
        nextArrow: '<button class="next">&#10095;</button>',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    })
})

function showNav(){
    const navbar = document.getElementById('navbar');
    const nav = document.getElementById('ul');
    const icon = document.getElementById('bars');
    nav.classList.toggle('show');
    navbar.classList.toggle('rwd');
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times')
    }else{
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars');
    } 
}

var slideIndex = 1;

function plusSlides(n,classSlide,dot){
    showSlides(slideIndex +=n,classSlide,dot)
}

function currentSlide(n,classSlide,dot){
    showSlides(slideIndex=n,classSlide,dot)
}

function showSlides(n,classSlide,dot){
    let i;
    let slides = document.getElementsByClassName(classSlide);
    let dots = document.getElementsByClassName(dot);
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

