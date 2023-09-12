const btnDropdown = document.querySelectorAll('.btn__dropdown');
let arrowUp = null;

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