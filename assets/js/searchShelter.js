import axios from "axios";

const searchArea = document.querySelector('.js-search-area');
const recommendCat = document.querySelector('.js-recommendCat');

axios
  .get(
    'https://data.moa.gov.tw/api/v1/AnimalRecognition/?&Page=1&animal_kind=貓&api_key=9CP6MQ9SFCVOB50L3H080DX03O6D58'
  )
  .then((res) => {
    const data = res.data.Data.slice(0, 10);
    console.log(data);
    data.forEach((cat) => {
      recommendCat.innerHTML += `
      <div class="swiper-slide">
        <div>
          <div class="position-relative mb-4">
            <a href="./adoption-appointedCat.html" class="search__img__link">
              <img src="${
                cat.album_file
              }" class="search__img img-fluid w-100 object-fit-cover" alt="">
              <i class="search__heartBorder fa-regular fa-heart position-absolute fs-2 text-white"></i>
              <i class="search__heart fa-solid fa-heart d-none position-absolute fs-2"></i>
            </a>
          </div>
          <div class="d-flex align-items-center gap-2 mb-4">
            <h6 class="mb-0 fs-6 fs-md-5 fw-medium lh-sm letterSpc-8 text-title">${
              cat.animal_colour
            }</h6>
            <span class="badge py-2 px-4 rounded-pill border border-1 border-text fs-7 fs-md-9 fw-medium lh-sm letterSpc-8 text-text">冬天小棉襖</span>
          </div>
          <p class="mb-4 fs-7 fs-md-9 fw-medium lh-sm letterSpc-8">${
            cat.animal_place
          }</p>
          <div class="d-md-flex justify-content-between align-items-center flex-wrap mb-11">
            <a href="#" class="d-flex align-items-center gap-1 mb-3 mb-md-0 text-text">
              <img src="../assets/images/icon/heart-solid 1.svg" class="img-fluid" alt="">
              <span class="fw-medium lg-sm letterSpc-8 font-SansTC">${Math.floor(
                Math.random() * 150
              )}</span>
            </a>
            <ul class="d-flex gap-2 mb-0 list-unstyled">
              <li class="d-flex align-items-center gap-2">
                <img src="../assets/images/icon/icon_gender.svg" class="img-fluid" alt="">
                <p class="mb-0 fs-7 fs-md-9 fw-medium lh-sm letterSpc-8">${
                  cat.animal_sex === 'F' ? '女孩' : '男孩'
                }</p>
              </li>
              <li class="d-flex align-items-center gap-2">
                <img src="../assets/images/icon/icon_cat.svg" class="img-fluid" alt="">
                <p class="mb-0 fs-7 fs-md-9 fw-medium lh-sm letterSpc-8">成貓</p>
              </li>
              <li class="d-flex align-items-center gap-2">
                <img src="../assets/images/icon/icon_paw.svg" class="img-fluid" alt="">
                <p class="mb-0 fs-7 fs-md-9 fw-medium lh-sm letterSpc-8">橘貓</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
    });

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
  });



// // search swiper 動畫
// const searchSwiper = new Swiper('.searchSwiper', {
//   autoplay: {
//     delay: 1500,
//   },
//   loop: true,
//   navigation: {
//     nextEl: '.js-search-next',
//     prevEl: '.js-search-prev',
//   },
// });

// searchSwiper.el.onmouseenter = function () {
//   searchSwiper.autoplay.stop();
// };
// searchSwiper.el.onmouseleave = function () {
//   searchSwiper.autoplay.start();
// };
