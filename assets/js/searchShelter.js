// search swiper 動畫
const searchSwiper = new Swiper('.searchSwiper', {
  autoplay: {
    delay: 1500,
  },
  loop: true,
  navigation: {
    nextEl: '.js-search-next',
    prevEl: '.js-search-prev',
  },
});

searchSwiper.el.onmouseenter = function () {
  searchSwiper.autoplay.stop();
};
searchSwiper.el.onmouseleave = function () {
  searchSwiper.autoplay.start();
};
