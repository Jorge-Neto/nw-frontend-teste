const swiper = new Swiper(".swiper-container", {
  slidesPerView: 9,
  centerInsufficientSlides: true,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false
  },
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      spaceBetween: 15
    },
    // when window width is >= 640px
    375: {
      slidesPerView: 2.5,
      spaceBetween: 15
    }
  }
});
