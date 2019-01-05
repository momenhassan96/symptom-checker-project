$(window).scroll(function(){
        var scrTop= $(window).scrollTop();
        if(scrTop>150)
            {
                 $(".navbar").css("background-color","rgba(255, 255, 255, 0.5)");
            }
     
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
    
    var weight= Number($("#weight").val());
    
    var length =Number($("#length").val());
    
      var calc =Number(weight/length);
    
    var res =Number(length/calc);

    
    if (weight =="" && length =="")
        {
            $("#result").fadeIn(1000);
            $("#res").css("background-color","#f8d7da");
            $("#res").css("color","#721c24");
            $(".fa-window-close").css("color","#721c24");
            $("#count").css("color","#721c24");
            document.getElementById("res").innerHTML="You have to fill field";
            document.getElementById("count").innerHTML="Sorry.!";
            
        }
          else if (weight =="dsds"&& length =="dsadsa")
        {
             $("#result").fadeIn(1000);
             $("#res").css("backgroundColor","#f8d7da");
            $("#res").css("color","#721c24");
            $(".fa-window-close").css("color","#721c24");
             $("#count").css("color","#721c24");
            document.getElementById("res").innerHTML="You should fill field .!";
            document.getElementById("count").innerHTML="Not Found";
        }
    
    else
        {
                 $("#result").fadeIn(1000);
             $("#res").css("backgroundColor","#cce5ff")
            $("#res").css("color","#004085")
            $(".fa-window-close").css("color","#fff");
            $("#count").css("color","#004085");
            document.getElementById("res").innerHTML="Normal weight " +Math.floor(res)+" BMI";
            document.getElementById("count").innerHTML= "Calculation result";
            
        }
    
   $("#result i").click(function(){
            $("#result").fadeOut(1000);
        })
    
})
