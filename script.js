var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("demo");
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* plus and minus btns */
var value = document.getElementById('value').value;
var plusbtn = document.getElementById('plus-btn');
plusbtn.onclick = () =>{
  value++
  document.getElementById('value').value = value
}
var minusbtn = document.getElementById('minus-btn');
minusbtn.onclick = () =>{
  if(value > 0){
    value-- 
  document.getElementById('value').value = value
  }
}

/* slideshow display */
function displayslide() {
  let slide = document.querySelector('aside')
  slide.classList.toggle('toggleaside')
}

/* Cart contents */
var cartvalue = document.getElementById('cart-value');
var addtocart = document.getElementById('addtocart');
let emptycart = document.getElementById('empty-cart');
let cartdisplay = document.getElementById('product-cart');
let amount = document.getElementById('number-selected')
addtocart.onclick = () =>{
  if(value == 0){
    cartvalue.innerHTML != Number(value)
  }else{
  amount.value = value
  let price = document.getElementById('price');
  price.innerHTML = '$' + Number(value) * 125
  cartvalue.style.display = 'block'
  cartvalue.innerHTML = Number(value)
  document.getElementById('value').value = Number(0)
  }
}
/* Display cart contents */
function cart(){

  if(amount.value > 0) {
    cartdisplay.classList.add('emptycart')
    emptycart.style.display = 'none'
  }else {
    emptycart.style.display = 'block'
    cartdisplay.classList.remove('emptycart')
  }
}

var main = document.querySelector('main');
main.onclick = () =>{
  if(emptycart.classList.toggle('emptycart')){
    emptycart.style.display = 'none'
  }else if(cartdisplay.classList.toggle('emptycart')){
    cartdisplay.classList.toggle('emptycart')
  }
}
/* Delete btn */
var delbtn = document.getElementById('delete-btn')
delbtn.onclick = () =>{
  if(amount.value > 0) {
    amount.value = 0 
    document.getElementById("value").value = "0";
    cartvalue.style.display = 'none'
    cart()
  }else {
    cart()
  }

}

/* Mobile slideshow */
var slideIndex = 1;
showmobileSlides(slideIndex);
// Next/previous controls
function plusmobileSlides(n) {
  showmobileSlides(slideIndex += n);
}
// Thumbnail image controls
function currentmobileSlide(n) {
  showmobileSlides(slideIndex = n);
}
function showmobileSlides(n) {
  var i;
  var slide = document.getElementsByClassName("mobile-slides");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
 slide[slideIndex-1].style.display = "block";
}

/* Mobile menu toggle */
var menu = document.querySelector('.mobile-menu');
var hamburger = document.getElementById('hamburger');
var overlay = document.querySelector('.overlay');
hamburger.onclick = () =>{
  menu.classList.toggle("slidemenu")
    setTimeout(() => {
      document.querySelector('.overlay').style.display = 'block'
    }, 1500);
  }
  var close = document.getElementById('close-menu');
close.onclick = () =>{
    menu.classList.remove("slidemenu")
    document.querySelector('.overlay').style.display = 'none'
  }
