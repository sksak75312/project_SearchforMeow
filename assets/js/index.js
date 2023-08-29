const faqButton = document.querySelectorAll('.faq__button');
const btnDropdown = document.querySelectorAll('.btn__dropdown');
let openedButton = null;
let arrowUp = null;

// faq 加減切換
faqButton.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (button === openedButton) {
      button.querySelector('.faq__button-minus').classList.toggle('d-none');
      button.querySelector('.faq__button-plus').classList.toggle('d-none');
      openedButton = null;
    } else {
      if (openedButton) {
        openedButton.querySelector('.faq__button-minus').classList.toggle('d-none');
        openedButton.querySelector('.faq__button-plus').classList.toggle('d-none');
      }
      button.querySelector('.faq__button-plus').classList.toggle('d-none');
      button.querySelector('.faq__button-minus').classList.toggle('d-none');
      openedButton = button;
    }
    
    button.disabled = true;

    setTimeout(() => {
      button.disabled = false;
    }, 500);
  });

})


// Select 箭頭旋轉
btnDropdown.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const iconDown = arrow.querySelector('.js-iconDown');

    if (arrow === arrowUp) {
      iconDown.classList.toggle('rotate__down');
      iconDown.classList.toggle('rotate__up');
      arrowUp = null;
    } else {
      if (arrowUp) {
        arrowUp.querySelector('.js-iconDown').classList.toggle('rotate__down');
        arrowUp.querySelector('.js-iconDown').classList.toggle('rotate__up');
      }
      iconDown.classList.toggle('rotate__down');
      iconDown.classList.toggle('rotate__up');
      arrowUp = arrow;
    }
    
  })
})


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


// shelter swiper 動畫 
const shelterSwiper = new Swiper('.shelterSwiper', {
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 1500,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: '.js-shelter-next',
    prevEl: '.js-shelter-prev',
  },
});

// aos 啟動
AOS.init();