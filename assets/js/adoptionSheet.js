const nextBtn = document.querySelector('.js-next');
const profilePage = document.querySelector('.js-profile');
const detailPage = document.querySelector('.js-detail');
const thanksPage = document.querySelector('.js-thanks');
const timeLine = document.querySelector('.js-timeLine');
const timeLineSpan = timeLine.querySelectorAll('span')
const timeLineLeft = timeLine.querySelector('.timeLine__left');
const timeLineRight = timeLine.querySelector('.timeLine__right');
const btnGroup = document.querySelector('.js-btnGroup');
let currentStep = 1;

console.log(timeLineSpan);

function nextPageHandler(e) {
  e.preventDefault();
  currentStep++;
  if (currentStep === 2) {
    profilePage.classList.toggle('d-none');
    detailPage.classList.toggle('d-none');
    timeLineLeft.classList.toggle('active');
    timeLineSpan[1].classList.toggle('active');
  } else if (currentStep === 3) {
    detailPage.classList.toggle('d-none');
    thanksPage.classList.toggle('d-none');
    timeLineRight.classList.toggle('active');
    timeLineSpan[2].classList.toggle('active');
    btnGroup.classList.toggle('d-none')
  }

  window.scrollTo(0, 0);
};

function btnChange() {
  
};

nextBtn.addEventListener('click', nextPageHandler);