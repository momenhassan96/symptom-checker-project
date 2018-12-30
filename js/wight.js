 $(window).scroll(function(){
        var scrTop= $(window).scrollTop();
        if(scrTop>150)
            {
                $(".navbar").css("background-color","#13c5dd");
                $(".nav-link").css("color","#fff");
                $(".navbar-brand").css("color","#fff");
            }
        else
            {
                  $(".navbar").css("background-color","#fff");
                $(".nav-link").css("color","#13c5dd");
                $(".navbar-brand").css("color","#13c5dd");
            }
    })
$(".btnTop").click(function(){
    $("body").animate({scrollTop:"0"},1500)
})
