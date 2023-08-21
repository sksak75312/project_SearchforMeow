import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

//<script src="https://kit.fontawesome.com/96a7520586.js" crossorigin="anonymous"></script>

//header
$(document).ready(function () {
    $('.mobileBarbtn').click(function (e) { 
        e.preventDefault();
        $('.dropMenu').removeClass('d-none');
        setTimeout(() => {
            $('.dropMenu').addClass('dropDown');
        }, 20);
    });
    $('.header-btn-close').click(function (e) { 
        e.preventDefault();
        $('.dropDown').addClass('dropUp');
        setTimeout(() => {
            $('.dropMenu').addClass('d-none');
            $('.dropMenu').removeClass('dropDown');
            $('.dropMenu').removeClass('dropUp');
        },300);
    });
});