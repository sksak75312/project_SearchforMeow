import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

//bootstrap popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    //header
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
    //footer
    $('.toTop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0},700);
        
    }); 
});