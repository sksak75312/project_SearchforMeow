const faqButton = document.querySelectorAll('.faq__button');
let openedButton = null;

faqButton.forEach((button) => {
  button.addEventListener('click', () => {
    
      
    if (button === openedButton) {
      button.querySelector('.faq__button-minus').classList.add('d-none');
      button.querySelector('.faq__button-plus').classList.remove('d-none');
      openedButton = null;
    } else {
      if (openedButton) {
        openedButton.querySelector('.faq__button-minus').classList.add('d-none');
        openedButton.querySelector('.faq__button-plus').classList.remove('d-none');
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