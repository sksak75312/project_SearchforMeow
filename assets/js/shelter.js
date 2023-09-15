$(document).ready(function () {
    //h1 animate
    $('.shelter').data("aos","fade-up");
    if(jQuery(window).width()<992){
        $('h1,.shelterIcon').addClass('animate__animated animate__zoomIn');
        $('.shelter .row').eq(3).find('.col-10').addClass('aos-init').attr("data-aos","fade-up");
    }else{
        $('h1,.shelterIcon').removeClass('animate__animated animate__bounceInDown');
    };
    //aos
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
    });
    //dropdown
    $('.dropBtn').click(function (e) { 
        e.preventDefault();
        $('.expand_more').toggleClass('active');
    });
    $('.item0').click(function (e) { 
        e.preventDefault();
        $('.dropBtn').text("全部");
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 0.02*1000);
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "北部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 0.02*1000);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "中部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 0.02*1000);
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "南部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 0.02*1000);
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "東部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 0.02*1000);
    });
    $('.item5').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "離島" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 0.02*1000);
    });
    
    //chose which area's shelter to show
    $('.AllBtn').click(function (e) { 
        e.preventDefault();
        $('.shelterArea .col-10').fadeOut(300);
        setTimeout(() => {
            $('.shelterArea .col-10').fadeIn(500);
        }, 0.3*1000);
    });
    $('.NorthernBtn').click(function (e) { 
        e.preventDefault();
        $('.northern').siblings(':not(.northern)').fadeOut(300);
        setTimeout(() => {
            $('.northern').fadeIn(500);
        }, 0.3*1000);
    });
    $('.CentralBtn').click(function (e) { 
        e.preventDefault();
        $('.central').siblings(':not(.central)').fadeOut(300);
        setTimeout(() => {
            $('.central').fadeIn(500);
        }, 0.3*1000);
    });
    $('.SouthernBtn').click(function (e) { 
        e.preventDefault();
        $('.southern').siblings(':not(.southern)').fadeOut(300);
        setTimeout(() => {
            $('.southern').fadeIn(500);
        }, 0.3*1000);
    });
    $('.EasternBtn').click(function (e) { 
        e.preventDefault();
        $('.eastern').siblings(':not(.eastern)').fadeOut(300);
        setTimeout(() => {
            $('.eastern').fadeIn(500);
        }, 0.3*1000);
    });
    $('.OffshoreIslandBtn').click(function (e) { 
        e.preventDefault();
        $('.offshoreIsland').siblings(':not(.offshoreIsland)').fadeOut(300);
        setTimeout(() => {
            $('.offshoreIsland').fadeIn(500);
        }, 0.3*1000);
    });

    //add favorite
    $('.favor').click(function (e) { 
        e.preventDefault();
        $(this).stop().toggleClass('addFavor zoom').css("zoom","1.5");
        setTimeout(() => {
            $(this).css("zoom","1");
        },0.03*1000);
    });
    //look pic 
    //one
    $('.one .picItem1').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.one .mainPicItem1').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.one .mainPicItem1').siblings().not('.group1').addClass('d-none');
            $('.one .mainPicItem1').removeClass('d-none');
            setTimeout(() => {
                $('.one .mainPicItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.one .picItem2').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.one .mainPicItem2').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.one .mainPicItem2').siblings().not('.group1').addClass('d-none');
            $('.one .mainPicItem2').removeClass('d-none');
            setTimeout(() => {
                $('.one .mainPicItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.one .picItem3').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.one .mainPicItem3').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.one .mainPicItem3').siblings().not('.group1').addClass('d-none');
            $('.one .mainPicItem3').removeClass('d-none');
            setTimeout(() => {
                $('.one .mainPicItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.one .picItem4').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.one .mainPicItem4').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.one .mainPicItem4').siblings().not('.group1').addClass('d-none');
            $('.one .mainPicItem4').removeClass('d-none');
            setTimeout(() => {
                $('.one .mainPicItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    //two
    $('.two .picItem1').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.two .mainPicItem1').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.two .mainPicItem1').siblings().not('.group1').addClass('d-none');
            $('.two .mainPicItem1').removeClass('d-none');
            setTimeout(() => {
                $('.two .mainPicItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.two .picItem2').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.two .mainPicItem2').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.two .mainPicItem2').siblings().not('.group1').addClass('d-none');
            $('.two .mainPicItem2').removeClass('d-none');
            setTimeout(() => {
                $('.two .mainPicItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.two .picItem3').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.two .mainPicItem3').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.two .mainPicItem3').siblings().not('.group1').addClass('d-none');
            $('.two .mainPicItem3').removeClass('d-none');
            setTimeout(() => {
                $('.two .mainPicItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.two .picItem4').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.two .mainPicItem4').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.two .mainPicItem4').siblings().not('.group1').addClass('d-none');
            $('.two .mainPicItem4').removeClass('d-none');
            setTimeout(() => {
                $('.two .mainPicItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    //three
    $('.three .picItem1').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.three .mainPicItem1').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.three .mainPicItem1').siblings().not('.group1').addClass('d-none');
            $('.three .mainPicItem1').removeClass('d-none');
            setTimeout(() => {
                $('.three .mainPicItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.three .picItem2').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.three .mainPicItem2').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.three .mainPicItem2').siblings().not('.group1').addClass('d-none');
            $('.three .mainPicItem2').removeClass('d-none');
            setTimeout(() => {
                $('.three .mainPicItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.three .picItem3').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.three .mainPicItem3').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.three .mainPicItem3').siblings().not('.group1').addClass('d-none');
            $('.three .mainPicItem3').removeClass('d-none');
            setTimeout(() => {
                $('.three .mainPicItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.three .picItem4').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.three .mainPicItem4').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.three .mainPicItem4').siblings().not('.group1').addClass('d-none');
            $('.three .mainPicItem4').removeClass('d-none');
            setTimeout(() => {
                $('.three .mainPicItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    //four
    $('.four .picItem1').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.four .mainPicItem1').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.four .mainPicItem1').siblings().not('.group1').addClass('d-none');
            $('.four .mainPicItem1').removeClass('d-none');
            setTimeout(() => {
                $('.four .mainPicItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.four .picItem2').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.four .mainPicItem2').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.four .mainPicItem2').siblings().not('.group1').addClass('d-none');
            $('.four .mainPicItem2').removeClass('d-none');
            setTimeout(() => {
                $('.four .mainPicItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.four .picItem3').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.four .mainPicItem3').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.four .mainPicItem3').siblings().not('.group1').addClass('d-none');
            $('.four .mainPicItem3').removeClass('d-none');
            setTimeout(() => {
                $('.four .mainPicItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.four .picItem4').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.four .mainPicItem4').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.four .mainPicItem4').siblings().not('.group1').addClass('d-none');
            $('.four .mainPicItem4').removeClass('d-none');
            setTimeout(() => {
                $('.four .mainPicItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    //five
    $('.five .picItem1').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.five .mainPicItem1').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.five .mainPicItem1').siblings().not('.group1').addClass('d-none');
            $('.five .mainPicItem1').removeClass('d-none');
            setTimeout(() => {
                $('.five .mainPicItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.five .picItem2').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.five .mainPicItem2').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.five .mainPicItem2').siblings().not('.group1').addClass('d-none');
            $('.five .mainPicItem2').removeClass('d-none');
            setTimeout(() => {
                $('.five .mainPicItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.five .picItem3').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.five .mainPicItem3').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.five .mainPicItem3').siblings().not('.group1').addClass('d-none');
            $('.five .mainPicItem3').removeClass('d-none');
            setTimeout(() => {
                $('.five .mainPicItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.five .picItem4').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.five .mainPicItem4').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.five .mainPicItem4').siblings().not('.group1').addClass('d-none');
            $('.five .mainPicItem4').removeClass('d-none');
            setTimeout(() => {
                $('.five .mainPicItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    //six
    $('.six .picItem1').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.six .mainPicItem1').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.six .mainPicItem1').siblings().not('.group1').addClass('d-none');
            $('.six .mainPicItem1').removeClass('d-none');
            setTimeout(() => {
                $('.six .mainPicItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.six .picItem2').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.six .mainPicItem2').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.six .mainPicItem2').siblings().not('.group1').addClass('d-none');
            $('.six .mainPicItem2').removeClass('d-none');
            setTimeout(() => {
                $('.six .mainPicItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.six .picItem3').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.six .mainPicItem3').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.six .mainPicItem3').siblings().not('.group1').addClass('d-none');
            $('.six .mainPicItem3').removeClass('d-none');
            setTimeout(() => {
                $('.six .mainPicItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.six .picItem4').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('opacity-25').siblings().addClass('opacity-25');
        $('.six .mainPicItem4').siblings().not('.group1').addClass('opacity-0');
        setTimeout(() => {
            $('.six .mainPicItem4').siblings().not('.group1').addClass('d-none');
            $('.six .mainPicItem4').removeClass('d-none');
            setTimeout(() => {
                $('.six .mainPicItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    //pagination
    $('.pageMark').click(function (e) { 
        e.preventDefault();
        $(this).addClass('paginationActive');
        $(this).parent().siblings().find('a').removeClass('paginationActive');
    });
    $('.backPage').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('.paginationActive').parent().prev().find('.pageMark').addClass('paginationActive');
        $(this).parent().siblings().find('.paginationActive').parent().next().find('.pageMark').removeClass('paginationActive');
    });
    $('.nextPage').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('.paginationActive').parent().next().find('.pageMark').addClass('paginationActive');
        $(this).parent().siblings().find('.paginationActive').parent().prev().find('.pageMark').removeClass('paginationActive');
    });
});

