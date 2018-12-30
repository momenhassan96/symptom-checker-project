

    $(window).scroll(function(){
        var scrTop= $(window).scrollTop();
       
        if(scrTop<100)
         {
             $(".btnTop").css("display","none");
         }
     else
         {
             $(".btnTop").css("display","block");
         }
        
     
})

           $(".btnTop").click(function(){
    $("body").animate({scrollTop:"0"},1500)
    })
                            