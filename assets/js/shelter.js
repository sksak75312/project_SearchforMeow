$(document).ready(function () {
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
        }, 20);
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "北部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "中部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "南部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "東部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item5').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "離島" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    //add favorite
    $('.favor').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('addFavor zoom');
        setTimeout(() => {
            $(this).removeClass('zoom');
        }, 20);
    });
    //look pic
    //one
    $('.one .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/1/1.png").css("width","100%");
    });
    $('.one .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/1/2.png").css("width","100%");
    });
    $('.one .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/1/3.png").css("width","100%");
    });
    $('.one .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //two
    $('.two .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/2/1.png").css("width","100%");
    });
    $('.two .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/2/2.png").css("width","100%");
    });
    $('.two .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/2/3.png").css("width","100%");
    });
    $('.two .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //three
    $('.three .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/3/1.png").css("width","100%");
    });
    $('.three .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/3/2.png").css("width","100%");
    });
    $('.three .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/3/3.png").css("width","100%");
    });
    $('.three .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //four
    $('.four .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/4/1.png").css("width","100%");
    });
    $('.four .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/4/2.png").css("width","100%");
    });
    $('.four .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/4/3.png").css("width","100%");
    });
    $('.four .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //five
    $('.five .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/5/1.png").css("width","100%");
    });
    $('.five .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/5/2.png").css("width","100%");
    });
    $('.five .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/5/3.png").css("width","100%");
    });
    $('.five .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //six
    $('.six .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/6/1.png").css("width","100%");
    });
    $('.six .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/6/2.png").css("width","100%");
    });
    $('.six .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/6/3.png").css("width","100%");
    });
    $('.six .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
});

