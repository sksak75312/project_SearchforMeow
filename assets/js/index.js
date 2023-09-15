const faqButton = document.querySelectorAll('.faq__button');
let openedButton = null;


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