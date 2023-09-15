var swiper = new Swiper('.shelter_sm', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper('.shelter_big', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 1500,
  }
});
