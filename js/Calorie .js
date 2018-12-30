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
$(".btnTop").click(function(){
    $("body").animate({scrollTop:"0"},5000)
})

$("#btnCalc").click(function(){          
     
                  
    
    
    var length = Number($("#length").val());
    
    var weight = Number($("#weight").val());
    
    var age = Number($("#age").val()); 
    
    var gender = $(".gender").val();
  
    if(length=="" && weight=="" && age=="")
        {
            
            $("#message").css("background-color","#f8d7da")
            $("#message").css("border-color","#f5c6cb")
            $(".fas").css("color","#721c24");
            $("#message").css("color","#721c24")
            document.getElementById("message").innerHTML="You have to fail fields";
        }
    else if(gender==1)
        {
          var clori =(10*(weight)+(6.25)*(length)-5*(age)+5);
           document.getElementById("message").innerHTML="The number of calories you lost this day is "+ clori +" Calories";
            $("#message").css("background-color","#cce5ff")
            $("#message").css("border-color","#b8daff")
            $("#message").css("color","#004085")
             $(".fas").css("color","#fff");
        }
    else if(gender==2)
        {
            var clori =Number((10*(weight)+6.25*(length)-5*(age)-161));
             document.getElementById("message").innerHTML="The number of calories you lost this day is "+ clori +" Calories";
            $("#message").css("background-color","#cce5ff")
            $("#message").css("border-color","#b8daff")
            $("#message").css("color","#004085")
             $(".fas").css("color","#fff");
    }
          
       $("#calc").fadeIn(1000);     
     })

    $(".fas").click(function(){
        $("#calc").fadeOut(1000);
    })
   
  

