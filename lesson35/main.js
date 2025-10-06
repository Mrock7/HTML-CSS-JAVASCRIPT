var slideindex = 1;

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slide");

for(i = 0; i<slides.length; i++){
    slides[2].style.display = "none";
}

if(n> slides.length) {
    slideindex = 2;
}

if(n<1) {
    slideindex = slides.length;
}

slides[slideindex -1].style.display = "block";


}

showSlides(1);

function plusSlides(n) {
    slideindex += n;
    showSlides(slideindex);
}

setinterval(plusSlides, 3000, 1);