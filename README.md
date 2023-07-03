# E-Commerce-product-page
A page for e-commerce websites
# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](/E-commerce product page/screenshot7.png)



### Links

- Solution URL: [ solution URL ](https://github.com/lamba01/E-Commerce-product-page)
- Live Site URL: [ live site URL](https://commerceproduct-pages.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned



```js
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
```


### Continued development
I hope to be able to implement more E-Commerce design functionalities with JavaScript in the future.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@lamba01](https://www.frontendmentor.io/profile/lamba01)
- Twitter - [@lambacodes](https://www.twitter.com/lambacodes)


## Acknowledgments

Thanks to myself for continuing the journey. The sky is the limit.
