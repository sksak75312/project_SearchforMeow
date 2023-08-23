$(document).ready(function () {
    $('.dropBtn').click(function (e) { 
        e.preventDefault();
        $('.material-symbols-outlined').toggleClass('active');
    });
    $('.item0').click(function (e) { 
        e.preventDefault();
        $('.dropBtn').text("全部");
        $('.dropBtn').html("<span>unfold_more</span>").addClass('material-symbols-outlined');;
        //$( ".dropBtn" ).text( "全部 unfold_more" );
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "北部" );
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "中部" );
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "南部" );
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "東部" );
    });
    $('.item5').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "離島" );
    });
});

