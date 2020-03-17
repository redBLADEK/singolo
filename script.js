const menu = document.querySelector("nav ul");

menu.addEventListener("click", (event) => {
  menu.querySelectorAll('li button').forEach(e => e.classList.remove('current'));
  event.target.classList.add("current");

  let classForScroll = event.target.innerHTML.toLowerCase()+"";

  window.scrollTo({
    top: document.querySelector(`.${classForScroll}`).offsetTop - 0,
    behavior: 'smooth'
  });
});

var slideIndex = 1;
showSlides(slideIndex);
function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}