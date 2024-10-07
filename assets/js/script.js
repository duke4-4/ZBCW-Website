'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {

//   if (window.scrollY >= 100) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }

// });
// const testimonialsCarousel = document.querySelector('.testimonials-carousel');
// const slideWidth = testimonialsCarousel.offsetWidth;
// const slidesCount = testimonialsCarousel.children.length;

// let currentIndex = 0;
// let autoSlideInterval;

// function updateCarousel() {
    
//     currentIndex = (currentIndex + 1) % slidesCount;

//     testimonialsCarousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//         updateCarousel();
//     }, 5000); 
// }

// function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
// }

// updateCarousel();
// startAutoSlide();

$(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});


