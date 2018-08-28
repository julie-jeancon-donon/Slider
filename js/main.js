// let slider = document.getElementsByClassName('slider');
// const INDEXMAX = slider.length-1;
//
//
//
// var myInterval = setInterval(carousel,1000);
//
// let index = 0;
// function carousel(){
//   //mettre toutes les img en display none
//   for (var i = 0; i < slider.length; i++) {
//     slider[i].style.display = "none";
//   }
//
//   slider[index].style.display = "block";
//   //utiliser l'index
//   // max index == 2
//   index++;
//   // si index > 2 on fait un index = 0
//   if (index > INDEXMAX){
//     index = 0;
//   }
// }


let slider = document.getElementsByClassName("slider");
let index = 0;
var image = ["img/1.jpeg","img/2.jpeg","img/3.jpeg"];
const INDEXMAX = image.length-1;

var myInterval = setInterval(carousel,1000);


function carousel(){
  // console.log()
  slider[0].src = image[index];
   index++;
   if (index > INDEXMAX){
     index = 0;
   }
}




















// var slideIndex = 0;
// showSlides();
// var id =0;
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlide");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//
//     id = setTimeout(showSlides, 3000);
// }
//
//
// function plusSlides(n) {
//   clearTimeout(id);
//   slideIndex += n;
//   var slides = document.getElementsByClassName("mySlide");
//
//   if (slideIndex < 1) {slideIndex = slides.length}
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
//
//
//   id = setTimeout(showSlides, 3000);
//
// }
//
// function currentSlide(n) {
//   clearTimeout(id);
//   slideIndex = n;
//   var slides = document.getElementsByClassName("mySlide");
//   for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
//   id = setTimeout(showSlides, 3000);
//
// }
