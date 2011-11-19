$(function(){
    $(".nav li").hover( 
      function () { 
        $('.grid li div').stop().animate({width:"0"},0);

        var ind = $(".nav li").index(this);
        $($('.grid li#g1 div')[ind]).stop().animate({width:"211px"},0);
        $($('.grid li#g2 div')[ind]).stop().animate({width:"211px"},50);
        $($('.grid li#g3 div')[ind]).stop().animate({width:"211px"},100);
        $($('.grid li#g4 div')[ind]).stop().animate({width:"211px"},150);
        $($('.grid li#g5 div')[ind]).stop().animate({width:"211px"},200);
        $($('.grid li#g6 div')[ind]).stop().animate({width:"211px"},250);
      }
    );
});