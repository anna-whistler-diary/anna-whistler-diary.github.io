
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let numSlides=14;
let slideWidth=468.5;

function showSlides(n) {
  if ((n<1) || (n>=numSlides))
    return;
  slideIndex=n;
  let slideOffset = -(slideIndex-1)*slideWidth;
  let myImages = document.getElementsByClassName("myImages");
  myImages[0].style.transform = ("translateX("+slideOffset+"px)");
} 