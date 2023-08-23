$(document).ready(function () {
    //dropdown
    $('.dropBtn').click(function (e) { 
        e.preventDefault();
        $('.material-symbols-outlined').toggleClass('active');
    });
    $('.item0').click(function (e) { 
        e.preventDefault();
        $('.dropBtn').text("全部");
        $('.dropBtn').append("<span>unfold_more</span>").find('span').addClass('material-symbols-outlined active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "北部" );
        $('.dropBtn').append("<span>unfold_more</span>").find('span').addClass('material-symbols-outlined active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "中部" );
        $('.dropBtn').append("<span>unfold_more</span>").find('span').addClass('material-symbols-outlined active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "南部" );
        $('.dropBtn').append("<span>unfold_more</span>").find('span').addClass('material-symbols-outlined active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "東部" );
        $('.dropBtn').append("<span>unfold_more</span>").find('span').addClass('material-symbols-outlined active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item5').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "離島" );
        $('.dropBtn').append("<span>unfold_more</span>").find('span').addClass('material-symbols-outlined active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    //
    $('.favor').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('addFavor');
    });
});

