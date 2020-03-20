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

function onoff1(id) {
    var el = document.getElementById(id);
    if (el.src.indexOf("assets/iPhone-Vertical.png")>0) {
    el.src="assets/Phone Vertical.png"
    }
    else
    {
    document.getElementById(id).src="assets/iPhone-Vertical.png"
    }
}

function onoff2(id) {
    var el = document.getElementById(id);
    if (el.src.indexOf("assets/iPhone-Horizontal.png")>0) {
    el.src="assets/Phone Horizontal.png"
    }
    else
    {
    document.getElementById(id).src="assets/iPhone-Horizontal.png"
    }
}

const tabs = document.querySelectorAll(".portfolio_tabs button");
const portfolio = document.querySelector(".four_column_layout");
tabs.forEach(tab => tab.addEventListener("click", (event) => {
  if( !event.target.classList.contains("selected") ) {
    let portfolioPictures = [...portfolio.querySelectorAll(".portfolio_picture")];
    portfolioPictures.unshift(portfolioPictures.pop());
    portfolioPictures.forEach( pic => portfolio.append(pic) );
  }
  tags.forEach(t => t.classList.remove('selected'));
  event.target.classList.add("selected");
}));
