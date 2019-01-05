$(window).scroll(function(){
        var scrTop= $(window).scrollTop();
        if(scrTop>100)
            {
            $(".navbar").css("background-color","rgba(255, 255, 255, 0.5)");
     
        else 
            {
                $(".navbar").css("background-color","#fff");
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
    $("body").animate({scrollTop:"0"},1500)
})


$("#btnCalc").click(function(){
    
     var age =Number($("#calc").val());
            var calc=Number(220-age);
    
    if(age=="")
        {
            $("#result").fadeIn(1000);
             $("#res").css("backgroundColor","#f8d7da");
            $("#res").css("color","#721c24");
            $(".fa-window-close").css("color","#721c24");
            $("#count").css("color","#721c24");
            document.getElementById("res").innerHTML="You have to fill field";
            document.getElementById("count").innerHTML="Sorry.!";
        }
    else if(age<=18 || age>99)
        {
            $("#result").fadeIn(1000);
             $("#res").css("backgroundColor","#f8d7da");
            $("#res").css("color","#721c24");
            $(".fa-window-close").css("color","#721c24");
            $("#count").css("color","#004085");
            document.getElementById("res").innerHTML="The generation that can use this is<br/> between 18 and 99. Please enter the generation again.";
            document.getElementById("count").innerHTML="Not Found";
        }
    else
    {   
           
    
           $("#result").fadeIn(1000);
            $("#res").css("backgroundColor","#cce5ff")
            $("#res").css("color","#004085")
            $(".fa-window-close").css("color","#fff");
            document.getElementById("count").innerHTML= calc;
            document.getElementById("res").innerHTML="Estimated target area of your heart rate";
        }
        
    
    
    
        $("#result i").click(function(){
            $("#result").fadeOut(1000);
        })
})

     /*  $("#result").fadeIn(1000);
             $("#res").css("backgroundColor","#f8d7da");
            $("#res").css("color","#721c24");
            $(".fa-window-close").css("color","#721c24");
            document.getElementById("res").innerHTML="You should enter your age !.";
            document.getElementById("count").innerHTML="Not Found"; 
            
        */