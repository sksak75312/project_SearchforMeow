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
        $('.headerDropMenu').removeClass('d-none');
        setTimeout(() => {
            $('.headerDropMenu').addClass('h-dropDown');
        }, 20);
    });
    $('.header-btn-close').click(function (e) { 
        e.preventDefault();
        $('.headerDropMenu').removeClass('h-dropDown');
        setTimeout(() => {
            $('.headerDropMenu').addClass('d-none');
            $('.headerDropMenu').removeClass('h-dropUp');
        },300);
    });
    //footer
    $('.toTop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0},700);
        
    }); 
    $(window).scroll(function(){
        var h=$(document.body).height();//網頁文件的高度
        var c = $(document).scrollTop();//滾動條距離網頁頂部的高度
        var wh = $(window).height(); //頁面視覺化區域高度
       
        if ((h-(wh+c)<850) && (jQuery(document).width()<992)){
            $('#toTop').fadeIn(800);
        }
        else{
            $('#toTop').fadeOut(800);
        };
    });
    // function showBtnCondition() {
    //     if ($(this).scrollTop() > 800) {
    //       $('#toTop').fadeIn();
    //         } else {
    //          $('#toTop').fadeOut();
    //        }
    //      }
    //  $(window).scroll(showBtnCondition);
});