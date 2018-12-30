$(document).ready(function(){
    $(".loading").fadeOut(1500,function(){
    $("body").css("overflow","auto")
   }) 

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
        if(scrTop<150)
         {
             $(".btnTop").css("display","none");
         }
     else
         {
             $(".btnTop").css("display","block");
         }
        
    })

$(window).scroll(function(){
    var height=$(window).scrollTop();
    if(height>=150)
        {
            $(".pic img").css("display","block")
            $(".pic img").addClass("animated bounceInUp")
             $(".content").css("display","block")
            $(".content").addClass("animated bounceInDown")
        }
});
$(window).scroll(function(){
    var height=$(window).scrollTop();
    if(height>=500)
        {
            $(".icons").css("display","block")
            $("#iconLeft").addClass("animated bounceInUp")
            $("#iconRight").addClass("animated bounceInDown")
            $("#iconCenter").addClass("animated wobble")
        }
});
$(window).scroll(function(){
    var height=$(window).scrollTop();
    if(height>=950)
        {
            $(".item.right").addClass("animated  bounceInUp")
            $(".item-pic").addClass("animated wobble")
            $(".item.left").addClass("animated  bounceInUp")
            
        }
});
$(".btnTop").click(function(){
    $("body").animate({scrollTop:"0"},1500)
})
})