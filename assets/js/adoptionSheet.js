import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const cityDom = document.querySelector('.js-city');
const townDom = document.querySelector('.js-town');
const areaText = document.querySelector('.js-area-text');
const dropdownValidation = document.querySelectorAll('.dropdown-validation');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const formProfile = document.querySelector('.js-profile');
const formDetail = document.querySelector('.js-detail');
const formThanks = document.querySelector('.js-thanks');
const timeLine = document.querySelector('.js-timeLine');
const timeLineSpan = timeLine.querySelectorAll('span');
const timeLineLeft = timeLine.querySelector('.timeLine__left');
const timeLineRight = timeLine.querySelector('.timeLine__right');
let currentStep = 1;


const getAccessToken = async () => {
  const res = await axios.post(
    'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
    {
      grant_type: 'client_credentials',
      client_id: 'sksak75312-53681308-78bc-403b',
      client_secret: '4df72a2d-14a9-4f79-87c8-55a002e1f028',
    }
  );
    return res.data.access_token;
}; 
const accessToken = await getAccessToken();

const getCityData = async () => {

  try {
    let cityHtml = ``;
    const res =  await axios.get(
      'https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      )
      res.data.forEach(city => {
        cityHtml += `<li><a class="dropdown-item" href="#" id= ${city.City}>${city.CityName}</a></li>`
      })
      cityDom.innerHTML = cityHtml;
  } catch (err)  {
    console.log(err)
  }
  
}

getCityData();


const dropdownHandler = (e) => {
  e.preventDefault();
  const currentValidation = e.target.closest('.dropdown-validation');
  const currentText = currentValidation.querySelector('.dropdown-text');
  const containCity = currentValidation.querySelector('.js-city');

  if (typeof e.target.text === 'string') {
    currentValidation.classList.add('is-valid');
    currentValidation.classList.remove('is-invalid');
    currentText.innerText = e.target.text;
    if (containCity) {
      areaText.innerText = '選擇區域';
      let townHtml = ``;
      axios
        .get(
          `https://tdx.transportdata.tw/api/basic/v2/Basic/City/${e.target.id}/Town?%24format=JSON`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          res.data.forEach((town) => {
            townHtml += `<li><a class="dropdown-item" href="#">${town.TownName}</a></li>`;
          });
          townDom.innerHTML = townHtml;
        });
    }
  } else {
    currentValidation.classList.add('is-invalid');
    currentValidation.classList.remove('is-valid');
  }
};

// 遍利所有 dropdownMenus 的選單
dropdownMenus.forEach((menu) => {
  menu.addEventListener('click', dropdownHandler);
});


// Bootstrap 表單驗證
(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else if (currentStep === 1) {
          event.preventDefault();
          event.stopPropagation();
          formProfile.classList.toggle('d-none');
          formDetail.classList.toggle('d-none');
          timeLineLeft.classList.toggle('active');
          timeLineSpan[1].classList.toggle('active');
          window.scrollTo(0, 0);
          currentStep++
        } else if (currentStep === 2) {
          event.preventDefault();
          event.stopPropagation();
          formDetail.classList.toggle('d-none');
          formThanks.classList.toggle('d-none');
          timeLineRight.classList.toggle('active');
          timeLineSpan[2].classList.toggle('active');
          window.scrollTo(0, 0);
        }

        dropdownValidation.forEach((validate) => {
          if (validate.classList.contains('is-valid') === false) {
            event.preventDefault();
            event.stopPropagation();
            validate.classList.add('is-invalid');
          }
        });


        form.classList.add('was-validated');
      },
      false
    );
  });
})();

