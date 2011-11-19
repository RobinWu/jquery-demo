$(function(){
    $(".nav li").hover( 
      function () { 
        $('.grid li div').stop().animate({opacity:"0"},0);

        var ind = $(".nav li").index(this);
        $($('.grid li#g1 div')[ind]).stop().animate({opacity:"1"},0);
        $($('.grid li#g2 div')[ind]).stop().animate({opacity:"1"},200);
        $($('.grid li#g3 div')[ind]).stop().animate({opacity:"1"},400);
        $($('.grid li#g4 div')[ind]).stop().animate({opacity:"1"},600);
        $($('.grid li#g5 div')[ind]).stop().animate({opacity:"1"},800);
        $($('.grid li#g6 div')[ind]).stop().animate({opacity:"1"},1000);
      }
    );
});