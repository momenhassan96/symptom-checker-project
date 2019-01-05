 $(window).scroll(function(){
        var scrTop= $(window).scrollTop();
        if(scrTop>150)
            {
                $(".navbar").css("background-color","rgba(255, 255, 255, 0.5)");
                                $(".nav-link").css("color","black");

                $(".navbar-brand").css("color","#008fd5");
                $("#alon").css("color" , "#008fd5");
            }
        else
            {
                  $(".navbar").css("background-color","white");
                $(".nav-link").css("color","black");
                $(".navbar-brand").css("color","##008fd5");
                $("#alon").css("color" , "#008fd5");
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
 

h=localStorage.getItem("content");
if(h==1)
    {
        document.getElementById("heading").innerHTML="Why should you rub your skin with snow?"+"<br/><br/>";
        
        var img =document.getElementById("image")
        img.src="https://modo3.com/thumbs/fit630x300/156991/1486393303/%D9%81%D9%88%D8%A7%D8%A6%D8%AF_%D9%88%D8%B6%D8%B9_%D8%A7%D9%84%D8%AB%D9%84%D8%AC_%D8%B9%D9%84%D9%89_%D8%A7%D9%84%D9%88%D8%AC%D9%87.jpg";
        var src=document.getElementById("heading")
        src.appendChild(img)
        
        
        
        document.getElementById("prag").innerHTML="The snow has two kinds of effect on the body. The first is its effect on the circulatory system, which causes severe constriction in the blood vessels feeding the affected area. After about ten minutes, This contraction of blood vessels in the brain orders the nerves of blood vessels, due to bloody drought or blood deficiency caused by cold ice.Ice can be treated in this way by motor injuries that result in blood leakage. The snow is placed on the bleeding site for 10 minutes every two hours, thus ensuring more leaks and bleeding, and no change in subcutaneous color. It is also possible to benefit from the characteristics of blood vessels in the treatment of chronic diseases, such as arthritis, back pain and muscle pain, by doing sessions in which the snow is used for 20 minutes to benefit from the effectiveness of snow in improving the circulation of these areas. According to Dr. Hossam Salem, snow is classified globally as 'red rays', as it can give heat like the red rays, and evidence of this is the occurrence of ice burns if the snow is used in the wrong way. The other effect of snow is its effect on the nervous system. It affects the sensory nerve impulses that carry the pain. The snow causes the sedimentation of the injured position. Ice also constricts the blood vessels of the modern injury, stops blood bleeding and causes blood vessels to break out. There are several forms of cooling, such as a bag, which is a bag of skin or plastic in a gelatinous substance that absorbs coldness and transmits it to the position of injury when used, but it only lasts for twenty minutes and then must be refrigeration. Caution should be used when using a wet towel Above the skin so as not to burn the snowy skin. There is another type of cooling called 'chemical', by using a spray containing a chemical sprayed on the site of injury, it is a snow-like substance, and its disadvantages are expensive and we need to keep it always in the refrigerator, and can not be used on wounds or sores or Feeling or sensitive places. The natural snow is a frozen water which is the best and best types of cooling for easy preparation, cheap price and without any side effects on wounds, sores, face and eyes. It can be filled with a plastic cup. Then, stir a wooden tongue into the cup and then insert the freezer. By the wood tip, the massage work on the injury places"
        
        document.getElementById("head1").innerHTML="1-The beauty benefit of snow";
        document.getElementById("pragh1").innerHTML="Ice packs are used for medical and cosmetic purposes. Many women use them for skin by placing ice cubes on makeup . It keeps the skin longer than five hours on the face. The correct way to use ice packs to make makeup is to rub the face. Then put the base cream and powder as a final layer and lightly put the piece of ice on the cheeks, and a soft pink appearance put a little blush on the cheeks. In the case of make-up brides and make-up compact uses the previous steps, but in the last step spray snow on the face about twenty centimeters of make-up, but for medical purposes ice cubes also used for the face, and there are many benefits of cutting snow to the face will be mentioned in this article.";
        
        document.getElementById("head2").innerHTML="2-Benefits of putting ice on the face";
        
        document.getElementById("pragh2").innerHTML="The use of ice on a daily basis and rubbing on the face is resistant to the appearance of wrinkles and the effects of aging on the face. It is also recommended to put ice after any face mask because it closes the pores of the skin and reduces the redness of the face. More snow is more valuable to him than natural materials. Many women use many natural ingredients and herbs to make ice cubes. For example, when adding rose water, sweet almond oil, and a little ice cream in the ice mold, It helps to eliminate the effects of fatigue and exhaustion of the face, and relieve the swelling of the eyes by placing the ice mold for five minutes under the eyes, and it is ok to make ice from boiling parsley and rose water, it is useful to rub the skin. The ice helps the oily skin to get a clear, bright complexion, using the ice cubes with lemon juice and mint. This method is preferred twice a week, and the ice pieces of milk contribute to the freshness of the skin especially in the morning and to the glowing complexion. And soft use ice cubes made of orange juice, and rubbing the face for two minutes. It moisturizes the face and reduces its sweating when summer temperatures rise. It is recommended to place a cloth dampened in water in the freezer. After freezing it is placed on the face for ten minutes and the face is applied with sunscreen.";

        document.getElementById("head3").innerHTML="3-Ice damage on the face";
        
        document.getElementById("pragh3").innerHTML="Before using ice on the face should be alert, but the snow does not leave long in one place on the face, because it affects the wall capillaries located in the skin of the face, which leads to the explosion and protruding on the face and hurt the skin allergies, but must be moved and rubbing";
    
    
    }
else if(h==2)
{
     document.getElementById("heading").innerHTML="The benefits of cinnamon oil"+"<br/><br>";
        var img = document.getElementById("image");
    img.src="https://www.verywellhealth.com/thmb/dqKAeSJs1C1cxE8jPC4aFYmxjUY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/148197893-569feea53df78cafda9f216d.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="An oil with a warm, sweet aroma, cinnamon essential oil is a type of essential oil used in aromatherapy. Typically sourced from the bark of the cinnamon tree, cinnamon essential oil is said to offer a variety of health benefits.Cinnamon essential oil contains a number of compounds thought to influence health. These compounds include cinnamaldehyde, which has been found to reduce inflammation and act as an antimicrobial (a substance that destroys or suppresses the growth of microorganisms, including bacteria and fungi)."
        
        document.getElementById("head1").innerHTML="1-Uses for Cinnamon Essential Oil";
        document.getElementById("pragh1").innerHTML="Cinnamon essential oil is touted as a natural remedy for health concerns ranging from cough and colds to constipation.In addition, cinnamon essential oil is said to stimulate circulation, reduce stress, relieve pain, fight off infections, improve digestion, and protect against insects.";
        
        document.getElementById("head2").innerHTML="2-The Benefits of Cinnamon Essential Oil";
        
        document.getElementById("pragh2").innerHTML="Despite its long history of use in aromatherapy, cinnamon essential oil has been tested in very few scientific studies.To date, research on the health effects of the aromatherapeutic use of cinnamon essential oil is very limited. However, a number of studies suggest that compounds found in cinnamon essential oil may offer certain health benefits.To date, research on the health effects of the aromatherapeutic use of cinnamon essential oil is very limited. However, a number of studies suggest that compounds found in cinnamon essential oil may offer certain health benefits.It's important to note that none of the above studies tested the aromatherapeutic use of cinnamon essential oil. It should also be noted that ingestion of cinnamon essential oil may have harmful effects.";

        document.getElementById("head3").innerHTML="3-How to Use It";
        
        document.getElementById("pragh3").innerHTML="When combined with a carrier oil (such as jojoba, sweet almond, or avocado), cinnamon essential oil can be applied to the skin or added to baths. Essential oils can cause chemical burns and other adverse effects if they aren't properly diluted in a carrier oil or applied directly to the skin.Cinnamon essential oil also can be inhaled after sprinkling a few drops of the oil onto a cloth or tissue, or by using an aromatherapy diffuser or vaporizer.Side EffectsCinnamon essential oil should not be taken internally without the supervision of a health professional. Internal use of cinnamon essential oil may have toxic effects.Cinnamon (particularly Cassia cinnamon) is high in coumarin, a compound that can be toxic to the liver and kidneys if used in excess amounts. (Coumarin can be absorbed through the skin and cause adverse effects even if it isn't ingested.) Coumarin can also have a 'blood-thinning' effect.In addition, some individuals may experience irritation and/or allergic reactions when applying cinnamon essential oil to the skin.It's also important to note that self-treating a health condition with cinnamon essential oil and avoiding or delaying standard care may have serious consequences.Pregnant women and children should consult their primary health care providers prior to using essential oils.";
    
        document.getElementById("head4").innerHTML="4-Where to Find It";
        document.getElementById("pragh4").innerHTML="You can find a lot of tips on purchasing essential oils online. Widely available for purchase on various sites, cinnamon essential oil is sold in many natural-foods stores and in stores specializing in self-care products.";
}





else if(h==3)
    {
         document.getElementById("heading").innerHTML="SOAP SOAP: Goodbye to acne and other benefits "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://www.verywellhealth.com/thmb/5tWEhUB2BSL39tgG9N6iS5bhW1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Face-washing-567876843df78ccc1537f518.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="If you have acne, you're walking a very fine line when it comes to effective facial cleansing. The way that you wash your face and the kinds of products that you use can be the difference between a breakout and clear skin.If a product makes your skin too dry, then your skin can become irritated and crack, allowing bacteria to cause pimples. On the other hand, if your skin is too oily, then the oil can clog pores, causing blackheads, whiteheads, and other types of acne. There are so many cleansers on the market, but which one is the most effective? These six cleansers are proven to clear up the skin and reduce acne."
        
        document.getElementById("head1").innerHTML="1-Clean & Clear Daily Pore Cleanser";
        document.getElementById("pragh1").innerHTML="This oil-free cleanser feels like a gel coming out of the tube and produces a light lather. It contains micro-scrubbers that gently exfoliate the skin and get rid of pore-clogging dirt, oil, and dead skin cells. The beads break down when they come in contact with water so they don't cause any harsh abrasions.<br/>This cleanser is a good choice for someone who has oily to very oily skin.";
        
        document.getElementById("head2").innerHTML="2-Clinique Liquid Facial Soap";
        
        document.getElementById("pragh2").innerHTML="Clinique has three different versions of Liquid Facial Soap. One is made for very dry to dry skin, one is made for dry combination skin, and one is made for combination oily or oily skin. The mild formula falls in the middle of the spectrum.It doesn't contain any fragrances, and it rinses off well. This is the most expensive cleanser on this list, but it's an effective product that's made by a trustworthy brand.";

        document.getElementById("head3").innerHTML="3-CeraVe Hydrating Cleanser";
        
        document.getElementById("pragh3").innerHTML="In the world of skincare, CeraVe products offer cutting-edge technology at very low prices. The technology that CeraVe offers is even more cutting-edge than what you'll find in most higher-priced products, and this cleanser definitely lives up to that reputation.It contains ceramides, which are naturally-occurring oils in the skin's outermost layer (the epidermis). This cleanser is ideal for normal to dry skin because it actually puts these natural oils back into the skin, which helps repair it and replenish it.The CeraVe Hydrating Cleanser does not contain any irritating ingredients, making it an excellent choice for those who have sensitive skin. Because it replenishes natural oils, it's probably not a good choice for those who have oily skin.";
    
        document.getElementById("head4").innerHTML="4-Clean & Clear Essentials Foaming Facial Cleanser for Sensitive Skin";
        document.getElementById("pragh4").innerHTML="This is a great all-around cleanser for any skin type except very dry. It's gentle and oil-free, and it effectively removes dirt, oil, and makeup without drying out the skin.<br/>It's also the least expensive cleanser on this list. This cleanser does have a fragrance, but it's on the skin for such a minimal amount of time that its irritating effects are negligible.";
        
        document.getElementById("head5").innerHTML="5-Neutrogena Fresh Foaming Cleanser";
        document.getElementById("pragh5").innerHTML="This is another great skin cleanser for normal to oily skin. It does a good job of taking off makeup and it's not irritating. It rinses off well and doesn't clog pores. It does contain fragrance, however, so people who have very sensitive or very dry skin might not want to use it.<br/>As with any cleanser, the amount of time that the product is on your skin is so short that it's unlikely such a small dose of fragrance would be irritating to all but those who have the most sensitive skin.";
        
        document.getElementById("head6").innerHTML="6-Eucerin Redness Relief Soothing Cleanser";
        document.getElementById("pragh6").innerHTML="Eucerin Redness Relief Cleanser is a great cleanser for sensitive skin. It doesn't contain any soap or fragrance, and it won't clog pores. It contains natural licochalcone, or licorice root, which is an anti-inflammatory. However, it's unlikely to actually reduce redness in the short-term because it's not in contact with the skin for very long.<br/>If you are unsure whether you have acne or rosacea, or you if have acne and skin that turns red easily, this could be the right cleanser for you..";
}


else if(h==4)
    {
        document.getElementById("heading").innerHTML="Nail fungus "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Matte_black_and_white_polkadot_nails_%2816476158115%29.jpg/1024px-Matte_black_and_white_polkadot_nails_%2816476158115%29.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Nail fungus is a common condition that begins as a white or yellow spot under the tip of your fingernail or toenail. As the fungal infection goes deeper, nail fungus may cause your nail to discolor, thicken and crumble at the edge. It can affect several nails.<br/>If your condition is mild and not bothering you, you may not need treatment. If your nail fungus is painful and has caused thickened nails, self-care steps and medications may help. But even if treatment is successful, nail fungus often comes back.<br/>Nail fungus is also called onychomycosis (on-ih-koh-my-KOH-sis). When fungus infects the areas between your toes and the skin of your feet, it's called athlete's foot (tinea pedis)."
        
        document.getElementById("head1").innerHTML="Symptoms";
        document.getElementById("pragh1").innerHTML="You may have nail fungus if one or more of your nails are:"+"<br/><br/>"+"<ul><li>"+"Thickened"+"</li><li>"+"Whitish to yellow-brown discoloration"+"</li><li>"+"Brittle, crumbly or ragged"+"</li><li>"+"Distorted in shape"+"</li><li>"+"A dark color, caused by debris building up under your nail"+"</li><li>"+"Smelling slightly foul"+"</li></ul>"+"<br/><br/>"+"Nail fungus can affect fingernails, but it's more common in toenails.";
       document.getElementById("head2").innerHTML="Causes";
        
        document.getElementById("pragh2").innerHTML="Fungal nail infections are caused by various fungal organisms (fungi). The most common cause is a type of fungus called dermatophyte. Yeast and molds also can cause nail infections."+"<br/><br/>"+"Fungal nail infection can develop in people at any age, but it's more common in older adults. As the nail ages, it can become brittle and dry. The resulting cracks in the nails allow fungi to enter. Other factors — such as reduced blood circulation to the feet and a weakened immune system — also may play a role."+"<br/><br/>"+"Toenail fungal infection can start from athlete's foot (foot fungus), and it can spread from one nail to another. But it is uncommon to get an infection from someone else.";

        document.getElementById("head3").innerHTML="Risk factors";
        
        document.getElementById("pragh3").innerHTML="Factors that can increase your risk of developing nail fungus include:"+"<ul><li>"+"Being older, owing to reduced blood flow, more years of exposure to fungi and slower growing nails"+"</li><li>"+"Sweating heavily"+"</li><li>"+"Having a history of athlete's foot"+"</li><li>"+"Walking barefoot in damp communal areas, such as swimming pools, gyms and shower rooms"+"</li><li>"+"Having a minor skin or nail injury or a skin condition, such as psoriasis"+"</li><li>"+"Having diabetes, circulation problems or a weakened immune system"+"</li></ul>";
    
        document.getElementById("head4").innerHTML="Complications";
        document.getElementById("pragh4").innerHTML="A severe case of nail fungus can be painful and may cause permanent damage to your nails. And it may lead to other serious infections that spread beyond your feet if you have a suppressed immune system due to medication, diabetes or other conditions."+"<br/><br/>"+"If you have diabetes, you may have reduced blood circulation and nerve supply in your feet. You're also at greater risk of a bacterial skin infection (cellulitis). So any relatively minor injury to your feet — including a nail fungal infection — can lead to a more serious complication. See your doctor if you have diabetes and think you're developing nail fungus.";
        
        document.getElementById("head5").innerHTML="Prevention";
        document.getElementById("pragh5").innerHTML="The following habits can help prevent nail fungus or reinfections and athlete's foot, which can lead to nail fungus:"+"<ul><li>"+"Wash your hands and feet regularly. Wash your hands after touching an infected nail. Moisturize your nails after washing."+"</li><li>"+"Trim nails straight across, smooth the edges with a file and file down thickened areas. Disinfect your nail clippers after each use."+"</li><li>"+"Wear sweat-absorbing socks or change your socks throughout the day."+"</li><li>"+"Choose shoes made of materials that breathe."+"</li><li>"+"Discard old shoes or treat them with disinfectants or antifungal powders."+"</li><li>"+"Wear footwear in pool areas and locker rooms."+"</li><li>"+"Choose a nail salon that uses sterilized manicure tools for each customer."+"</li><li>"+"Give up nail polish and artificial nails."+"</li></ul>";
    }

else if(h==5)
    {
        document.getElementById("heading").innerHTML="Benefits of toothpaste for skin very Important ! "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://www.boldsky.com/img/2015/02/23-1424685345-paleface.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Toothpaste used on your skin will help to also improve your tone. The properties present in white toothpaste have the ability to lessen marks and scars. It also lightens the pigmentation on your skin thus giving you a better look and feel. So, if your game to use toothpaste to get proper skin, then here are some of the best uses of this cleaning agent."
        
        document.getElementById("head1").innerHTML="Toothpaste For Skin Whitening"
        
        document.getElementById("pragh1").innerHTML="Toothpaste for skin whitening is one of the best remedies you can try. All you need to do is - use one tbsp of toothpaste mixed with a little lemon juice. The mixture is applied on your face to as a pack to help improve skin tone.";
       document.getElementById("head2").innerHTML="Toothpaste For Acne";
        
        document.getElementById("pragh2").innerHTML="Acne is the second skin problem every one faces. When ever a pimple pops up, dab a little paste over it and let it stay overnight. The next morning the pimple appears to be dry without a scar too. Toothpaste For Blemishes You can say good-bye to blemishes with the help of toothpaste. Make a mixture with paste and milk, apply it on your face to get rid of the problem. Toothpaste For For Wrinkles Wrinkles can be lightened with the help of toothpaste too. All you need to do is apply a little toothpaste on the area and leave in overnight. Rinse the next day. Toothpaste For Dark Spots Dark spots can be lightened with toothpaste. However you need to add the juice of a tomato to the paste to make a mask for the spots. Stylish Collection. Free Shipping & Returns. Premium Brands on Flipkart Awesome Deals Ending This Friday. Shop now Find a wide selection of women's clothing, shoes, jewelry and watches at Amazon Toothpaste For Blackheads Blackheads is another skin problem each of us face everyday. To remove blackheads, use toothpaste mixed with a portion of walnut scrub. Toothpaste For Dark Lines With the help of toothpaste for skin care, getting rid of those nasty dark or black lines is made simple. All you need to do is make a mixture of paste and water and apply it to the lines. Toothpaste For Facial Hair To remove facial hair use a combination of toothpaste, lemon and salt or sugar. This mixture is massaged on your skin in an upward manner to remove the facial hair. Toothpaste For Whiteheads Whiteheads can be removed if you brush your skin using toothpaste and water. Toothpaste For Oily Skin Oily skin can be treated with the help of toothpaste. Make a solution of paste, water and salt. Rinse your face each morning to solve this skin problem. FOR QUICK ALERTS SUBSCRIBE NOW View Sample TRENDING ON ONEINDIA Bombay HC Directive On Playing Music On New Year's Eve Stylish Collection. Free Shipping & Returns. Premium Brands on Flipkart Coffee Scrub Homemade DIY India Vs Australia 3rd Test — Live Updates From Day 2 Yogurt & Lemon Homemade Face Pack Here Are The Top-10 Ultra-Premium Smartphones Of 2018 New Bajaj Pulsar 250 Coming Soon — To Replace The NS200 5 Pointers To Get Your Term Insurance Right Salman Khan’s 53rd Birthday Bash! Shanaya Kapoor's Multi-hued Attire To Mararikulam, A Fisherman's Village How do I look? Monkey steals tourist's sunglasses, tries them on for size India's Digital Initiative In Two Wheeler Insurance Sector Videos Masoor Dal Homemade Face Pack For Glowing Skin ";

        document.getElementById("head3").innerHTML="Toothpaste For Blemishes";
        
        document.getElementById("pragh3").innerHTML="You can say good-bye to blemishes with the help of toothpaste. Make a mixture with paste and milk, apply it on your face to get rid of the problem.";
    
        document.getElementById("head4").innerHTML="Toothpaste For For Wrinkles";
        document.getElementById("pragh4").innerHTML="Wrinkles can be lightened with the help of toothpaste too. All you need to do is apply a little toothpaste on the area and leave in overnight. Rinse the next day.";
        
        document.getElementById("head5").innerHTML="Toothpaste For Dark Spots";
        document.getElementById("pragh5").innerHTML="Dark spots can be lightened with toothpaste. However you need to add the juice of a tomato to the paste to make a mask for the spots.";
        
        document.getElementById("head6").innerHTML="Toothpaste For Blackheads";
        document.getElementById("pragh6").innerHTML="Blackheads is another skin problem each of us face everyday .To remove blackheads, use toothpaste mixed with a portion of walunt scrub";
    }


else if(h==6)
    {
        document.getElementById("heading").innerHTML="Simple secrets increase your beauty And of elegance "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://tonyaleigh.com/wp-content/uploads/2014/05/6fbd052154ebd6e0e452b5f6b161bf64.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Elegance is not a word we often hear."+"<br/><br/>"+"Worse yet, it’s not one we often aspire to embody."+"<br/><br/>"+"We’re just trying to get the kids to school, run businesses, get to the office on time, clean the house, pay the bills, and put dinner on the table."+"<br/><br/>"+"<b>Living elegantly? Refinement?  Luxuriously?  Who has time for that?</b>"+"<br/><br>"+"Darling, I get it. Being a single mom and running a company definitely leaves me running around without makeup and my hair unkempt . . . on days."+"<br/><br/>"+""
        
        document.getElementById("head1").innerHTML="Toothpaste For Skin Whitening"
        
        document.getElementById("pragh1").innerHTML="Toothpaste for skin whitening is one of the best remedies you can try. All you need to do is - use one tbsp of toothpaste mixed with a little lemon juice. The mixture is applied on your face to as a pack to help improve skin tone.";
       document.getElementById("head2").innerHTML="Toothpaste For Acne";
        
        document.getElementById("pragh2").innerHTML="Acne is the second skin problem every one faces. When ever a pimple pops up, dab a little paste over it and let it stay overnight. The next morning the pimple appears to be dry without a scar too. Toothpaste For Blemishes You can say good-bye to blemishes with the help of toothpaste. Make a mixture with paste and milk, apply it on your face to get rid of the problem. Toothpaste For For Wrinkles Wrinkles can be lightened with the help of toothpaste too. All you need to do is apply a little toothpaste on the area and leave in overnight. Rinse the next day. Toothpaste For Dark Spots Dark spots can be lightened with toothpaste. However you need to add the juice of a tomato to the paste to make a mask for the spots. Stylish Collection. Free Shipping & Returns. Premium Brands on Flipkart Awesome Deals Ending This Friday. Shop now Find a wide selection of women's clothing, shoes, jewelry and watches at Amazon Toothpaste For Blackheads Blackheads is another skin problem each of us face everyday. To remove blackheads, use toothpaste mixed with a portion of walnut scrub. Toothpaste For Dark Lines With the help of toothpaste for skin care, getting rid of those nasty dark or black lines is made simple. All you need to do is make a mixture of paste and water and apply it to the lines. Toothpaste For Facial Hair To remove facial hair use a combination of toothpaste, lemon and salt or sugar. This mixture is massaged on your skin in an upward manner to remove the facial hair. Toothpaste For Whiteheads Whiteheads can be removed if you brush your skin using toothpaste and water. Toothpaste For Oily Skin Oily skin can be treated with the help of toothpaste. Make a solution of paste, water and salt. Rinse your face each morning to solve this skin problem. FOR QUICK ALERTS SUBSCRIBE NOW View Sample TRENDING ON ONEINDIA Bombay HC Directive On Playing Music On New Year's Eve Stylish Collection. Free Shipping & Returns. Premium Brands on Flipkart Coffee Scrub Homemade DIY India Vs Australia 3rd Test — Live Updates From Day 2 Yogurt & Lemon Homemade Face Pack Here Are The Top-10 Ultra-Premium Smartphones Of 2018 New Bajaj Pulsar 250 Coming Soon — To Replace The NS200 5 Pointers To Get Your Term Insurance Right Salman Khan’s 53rd Birthday Bash! Shanaya Kapoor's Multi-hued Attire To Mararikulam, A Fisherman's Village How do I look? Monkey steals tourist's sunglasses, tries them on for size India's Digital Initiative In Two Wheeler Insurance Sector Videos Masoor Dal Homemade Face Pack For Glowing Skin ";

        document.getElementById("head3").innerHTML="Toothpaste For Blemishes";
        
        document.getElementById("pragh3").innerHTML="You can say good-bye to blemishes with the help of toothpaste. Make a mixture with paste and milk, apply it on your face to get rid of the problem.";
    
        document.getElementById("head4").innerHTML="Toothpaste For For Wrinkles";
        document.getElementById("pragh4").innerHTML="Wrinkles can be lightened with the help of toothpaste too. All you need to do is apply a little toothpaste on the area and leave in overnight. Rinse the next day.";
        
        document.getElementById("head5").innerHTML="Toothpaste For Dark Spots";
        document.getElementById("pragh5").innerHTML="Dark spots can be lightened with toothpaste. However you need to add the juice of a tomato to the paste to make a mask for the spots.";
        
        document.getElementById("head6").innerHTML="Toothpaste For Blackheads";
        document.getElementById("pragh6").innerHTML="Blackheads is another skin problem each of us face everyday .To remove blackheads, use toothpaste mixed with a portion of walunt scrub";
        
    }





else if(h==7)
    {
        document.getElementById("heading").innerHTML="Fat accumulation in the back: causes and solutions "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://cmeimg-a.akamaihd.net/640/clsd/getty/cache.gettyimages.com/f590d8cfb26a49949da00c422413f8b8.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Excess fat commonly accumulates on the back and can increase your shirt size, bra size and be an indication of being overweight. Though medical conditions, genetics and medicine can cause weight gain, a lack of physical activity and poor nutrition habits are the most common culprits."
        
        document.getElementById("head1").innerHTML="Activity Level"
        
        document.getElementById("pragh1").innerHTML="Take inventory of your daily activities. If you find that you sit most of the day and perform minimal physical activity, you likely live a sedentary lifestyle. Your body needs a fuel source for any activity. It first burns any stored sugar, then it uses body fat. If you don't use these fuel sources, your body can suffer from a decreased metabolism and gradually accumulate weight";
        
       document.getElementById("head2").innerHTML="Dietary Habits";
        
        document.getElementById("pragh2").innerHTML="Consider what you eat and drink each day. Think about where your food products come from. Are they processed foods with additives and preservatives, or are they foods that come from natural sources? Foods that come from fast-food restaurants or are bought in packages are typically junk foods. These food products are most commonly high in fat, calories, carbohydrates, added sugar and sodium. Your body needs these items to function but doesn't need as many as most prepared foods come with. A diet that's high in fat, sugar and calories can lead to excessive weight and back fat.";

        document.getElementById("head3").innerHTML="Significance";
        
        document.getElementById("pragh3").innerHTML="If you have back fat, it's likely that you have body fat in other places. Although fat can seem to accumulate easier in one spot than another on your body, it's not common for only one spot on your body to gain weight. If you have enough body fat to be considered overweight or obese, you are potentially jeopardizing your physical health. Being overweight can increase your risk for Type 2 diabetes, heart disease, cancer, depression, sleep apnea, stroke and high blood pressure.";
    
        document.getElementById("head4").innerHTML="Solutions";
        document.getElementById("pragh4").innerHTML="There's no such thing as exercises to lose weight in just one area, but you can reduce your back fat while improving your entire body composition. Start with a few minutes of exercise each day. It can be as little as five to 10 minutes per session. Work toward completing 30 to 45 minutes of aerobic exercise most days of the week. Aerobic exercise can include anything that engages most of your body and keeps your heart rate elevated -- such as swimming, tennis, basketball, racquetball, running and walking. The American College of Sports Medicine also recommends that you perform two sessions of strength training a week. Strength training builds muscle tissue, reduces body fat, speeds your metabolism -- burning calories even when you're stationary -- and improves your fitness output. To make your diet more health conscious, include a variety of foods from all of the food groups. Eat more vegetables, fruits, grains, meats and dairy products. Aim for low-fat, fat-free, sugar-free and organic products that provide nutrients without additives.";
        
    }


else if(h==8)
    {
        document.getElementById("heading").innerHTML="All about diet cookies Its benefits are many . "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://www.verywellfit.com/thmb/LfxOIwMqncGyongX8o8_ZU_-5Oo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/90260212-56aa05b03df78cf772ac0f50.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="If you are trying to lose weight, you are probably trying to avoid higher calorie snacks like cookies.  Chips Ahoy calories, Oreo calories, and even homemade cookie calories add up quickly. But cookies can be part of a healthy eating plan. The key is to eat them in moderation and to choose cookies that are better for weight loss."
        
        document.getElementById("head1").innerHTML="Calories in Cookies ";
        
        document.getElementById("pragh1").innerHTML="The number of calories in a cookie depends on the type of cookie you eat. Oreo cookies, for example contain about 50 calories per cookie. Chips Ahoy brand chocolate chip cookies contain 160 calories in each three-cookie serving."+"<ul><li>"+"Fig Newtonsprovide about 100 calories per serving and 2 grams of fat."+"</li><li>"+"Rice Krispie Treats provide about 100 calories per serving"+"</li><li>"+"Nilla Wafers provide about 110 calories per serving (8 wafers)"+"</li><li>"+"Shortbread cookies contain about 40 calories per cookie"+"</li><li>"+"Double Stuff Oreos provide about 140 calories per serving (2 cookies)"+"</li><li>"+"Little Debbie Oatmeal Creme Pies provide about 170 calories per serving (1 cookie)"+"</li><li>"+"Peanut butter cookies prepared from a recipe usually provide about 95 calories per 3-inch cookie."+"</li><li>"+"Sugar cookies usually provide about 70 calories per cookie (unfrosted)"+"</li><li>"+"Otis Spunkmeyer cookie calories depend on the size of the cookie. A large 57-gram cookie provides 260 calories. Smaller cookies provide 90 - 160 calories."+"<br/><br/>"+"Calories in cookies that you bake at home can be harder to calculate because there is quite a bit of variation in the ingredients used and in the size of each cookie. In general, however, a homemade chocolate chip cookie is likely to provide about 75 calories and 4.5 grams of fat. A homemade brownie (made from a prepared mix like Betty Crocker) is likely to provide about 100 calories and one gram of fat."+"<br/><br/>"+"And what about Christmas cookies? Holiday cookies can be a diet disaster. Frosted cookies have more fat and sugar than their non-frosted counterparts.  And gingerbread cookies may contain up to 300 calories or more per cookie. In many cases, the high calorie count is due to the fact that gingerbread cookies are larger.";
        
       document.getElementById("head2").innerHTML="Worst Cookies for Weight Loss";
        
        document.getElementById("pragh2").innerHTML="The worst cookies for your health and for your diet are likely to be the packaged cookies that you buy in the store. Why? Because they often provide more sugar and processed ingredients than the ones you make at home. Some even contain hydrogenated oils, or trans fats, which are not good for your body."+"<br/><br/>"+"In addition to the ingredients, packaged cookies are easy to overeat. Many times, we eat them directly from the package, so we're likely to eat more than a single serving. Which means that you'll have to multiply your cookie calories times two or three servings to get the correct number."+"<br/>"+"Refrigerated cookie dough that you make at home can also be dangerous to your weight loss diet. One tollhouse cookie made from refrigerated dough can provide 80 calories or more, and that's if you make them exactly according to the instructions. Many bakers make them slightly larger—which increases the calorie count."+"<br/><br/>"+"Regardless of which cookie you choose, moderation is key. Don’t eat directly from the box. Remove a single serving (usually 1-2 cookies), put away the container and eat only what you removed. Don't go back for seconds!";

        document.getElementById("head3").innerHTML="The Best Cookies for Weight Loss";
        
        document.getElementById("pragh3").innerHTML="If you have a craving for sweets and you're on a diet, you can choose to eat fruit as a low calorie option. But sometimes you need the real deal. So if you choose to eat cookies, I recommend making diet-friendly cookies at home.The best cookies for dieters will include healthy ingredients like oatmeal or almonds. Oatmeal cookies contain healthy fiber to keep you feeling full.And peanut butter cookies give you a little extra protein when they are made with healthy peanut butter and real nuts.If you don't like peanuts, there are other high protein cookie recipes that are easy to make, and some don't even require a long day of mixing and baking.";
    }

else if(h==9)
    {
        document.getElementById("heading").innerHTML="Ways to burn fat after fatty meals . "+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/151/213/87779251.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Sticking to a healthy diet all the time can be difficult. Temptation is everywhere, in the form of high-fat entrees and comfort food that might make you feel better for a while but pack on the calories. If you've given in to the lures of a heavy meal, don't be too hard on yourself. Now it's time to get back to making more healthful diet choices and getting to work burning off that big meal. The added calories and fat of one large meal aren't likely to cause weight gain, so your main goal is to get back to your normal exercise routine as soon as you can and fight temptation in the future."
        
        document.getElementById("head1").innerHTML="Step 1"+"<br/><br/>";
        var img=document.createElement("img")
        img.src="https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/171/242/76762332.jpg"
        var src=document.getElementById("head1")
        src.appendChild(img);
        
        document.getElementById("pragh1").innerHTML="Wait three to four hours after you've finished a heavy meal before you start exercising. According to MedlinePlus.com, you should avoid exercising on an empty stomach, but exercising too soon after eating can lead to stomach cramps or diarrhea.";
        
       document.getElementById("head2").innerHTML="Step 2"+"<br/><br/>";
        
         var img=document.createElement("img")
        img.src="https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/142/32/76764562.jpg"
        var src=document.getElementById("head2")
        src.appendChild(img);
        document.getElementById("pragh2").innerHTML="Calculate how many calories were in the meal you ate. A large cheeseburger from a fast food restaurant has more than 1,400 calories. Add a large order of French fries and you could consume as many calories in one meal as you should have all day. Visit an online calorie counter to find the calorie content of popular foods.";

        document.getElementById("head3").innerHTML="Step 3"+"<br/><br/>";
         var img=document.createElement("img")
        img.src="https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/103/100/86491220.jpg"
        var src=document.getElementById("head3")
        src.appendChild(img);
        
        document.getElementById("pragh3").innerHTML="Begin exercising. The number of calories you burn depends on your weight and the type of exercise you're doing. In one hour, a 200-pound adult burns 637 calories doing high-impact aerobics. An hour of backpacking burns the same number of calories, so a day hike would be a good way to burn off a heavy meal. Jogging for an hour burns 728 calories, rollerblading knocks out 1,138, and running burns off a whopping 1,229 calories per hour.";
        
        
        
        document.getElementById("head4").innerHTML="Step 4"+"<br/><br/>";
         var img=document.createElement("img")
        img.src="https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/99/91/LS000315.jpg"
        var src=document.getElementById("head4")
        src.appendChild(img);
        
        document.getElementById("pragh4").innerHTML="Find a group of friends and start a ball game. An hour of football, tennis or basketball burns off 728 calories if you weigh 200 pounds. Racquetball burns off 637 calories per hour, and an hour of softball or baseball burns off 455 calories from that heavy meal.";
        
        
        document.getElementById("head5").innerHTML="Step 5"+"<br/><br/>";
        var img=document.createElement("img")
        img.src="https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/151/169/87722587.jpg"
        var src=document.getElementById("head5")
        src.appendChild(img);
        
        document.getElementById("pragh5").innerHTML="Try tae kwon do. One hour of this type of martial arts burns 910 calories.";
    }
else if(h==10)
    {
          document.getElementById("heading").innerHTML="Learn about the benefits of vegetable salad Do not miss it Very healthy."+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Have you had your salad today? Eating salad almost every day may be one of the most healthy eating habits you can adopt -- and one of the simplest, experts say."+"<br/><br/>"+"Eating salads is a super-convenient way to work in a couple of servings of vegetables and/or fruit. Green salads are on the menu of almost every restaurant. You can even buy a side salad (with Romaine lettuce, carrots and tomatoes, available with fat-free or reduced-calorie salad dressing) for a buck at many fast food chains these days. And you can make a green salad at home in 5 minutes, armed with a bag of pre-washed salad greens, a few carrots or other veggies, and a bottle of light salad dressing."+"<br/><br/>"+"Not only that, but salads are cool, crunchy, and fun to eat (lots of textures, colors, and flavors). Most people enjoy eating salads--even kids! You can customize them to include the fruits and vegetables that appeal to you the most, and whichever ones you have on hand."+"<br/><br/>"+"Here are four health reasons to reach for a salad today:";
        
        document.getElementById("head1").innerHTML="1. Eat Salads for the Fiber ";
        
        document.getElementById("pragh1").innerHTML="It's hard to believe that something we can't even digest can be so good for us! Eating a high-fiber diet can help lower cholesterol levels and prevent constipation."+"<br/><br/>"+"Not only that, says Barbara Rolls, PhD, author of The Volumetrics Eating Plan, eating more fiber can help you feel fuller, eat less, and ultimately lose weight.";
        

        document.getElementById("head2").innerHTML="2. Eat Salads for the Health Benefits of Fruits and Vegetables";
        
        document.getElementById("pragh2").innerHTML="Many experts agree that Americans need to eat more fruits and vegetables (especially dark green and orange vegetables) and legumes -- all popular salad ingredients. David Jacobs, PhD, professor of Public Health at the University of Minnesota, says in an email interview that there is plenty of evidence that nutrient-rich plant foods contribute to overall health."+"<br/><br/>"+"If you frequently eat green salads, you'll likely have higher blood levels of a host of powerful antioxidants (vitamin C and E, folic acid, lycopene, and alpha- and beta-carotene,) especially if your salad includes some raw vegetables. Antioxidants are substances that help protect the body from damage caused by harmful molecules called free radicals."+"<br/><br/>"+"For years, researchers have noted a link between eating lots of fruits and vegetables and lower risks of many diseases, particularly cancer. A recent study from the National Cancer Institute suggests that people whose diets are rich in fruits and vegetables may have a lower risk of developing cancers of the head and neck -- even those who smoke and drink heavily. Foods found to be particularly protective include beans and peas, string beans, peppers, tomatoes, carrots, apples, nectarines, peaches, plums, pears, and strawberries.";
        
        document.getElementById("head3").innerHTML="3. Eat Salads to Cut Calories and Increase Satisfaction";
        
        document.getElementById("pragh3").innerHTML="If losing weight is your goal, you may want to start your meals with a green salad. Studies have shown that eating a low-calorie first course, like a green salad of 150 calories or less, enhances satiety (feelings of fullness) and reduces the total number of calories eaten during the meal."+"<br/><br/>"+"Rolls, lead researcher of the study, suggests that 'bigger is better' as long as the salad is bigger in volume, not in calories - which means more veggies and less dressing and other fatty add-ons."+"<br/><br/>"+"'We saw reductions in consumed calories when people ate salads that were 1 1/2 cups and 3 cups in volume but around 100 total calories,' she says. The 3-cup, 100-calorie salad reduced the total calories consumed at the meal by about 55.";
        
        
        document.getElementById("head4").innerHTML="4. Eat Salads to Get Smart Fats";
        
        document.getElementById("pragh4").innerHTML="Eating a little good fat (like the monounsaturated fat found in olive oil, avocado and nuts) with your vegetables appears to help your body absorb protective phytochemicals, like lycopene from tomatoes and lutein from dark green vegetables."+"<br/><br/>"+"A recent study from Ohio State University measured how well phytochemicals were absorbed by the body after people ate a salad of lettuce, carrot, and spinach, with or without 2 1/2 tablespoons of avocado. The avocado-eaters absorbed eight times more alpha-carotene and more than 13 times more beta-carotene (both of which are thought to help protect against cancer and heart disease) than the group eating salads without avocado."+"<br/><br/>"+"If you dress your salad with a little olive oil, there may even be some additional years in it for you. Italian research on people aged 60 and older has suggested that a diet that includes plenty of olive oil and raw vegetables is linked to reduced mortality.";
        
        
    }

else if(h==11)
    {
        
          document.getElementById("heading").innerHTML="Cinnamon and Ginger You'll be amazed at their very useful benefits !"+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://modo3.com/thumbs/fit630x300/106236/1473116330/%D9%81%D9%88%D8%A7%D8%A6%D8%AF_%D8%A7%D9%84%D8%B2%D9%86%D8%AC%D8%A8%D9%8A%D9%84_%D9%88%D8%A7%D9%84%D9%82%D8%B1%D9%81%D8%A9_%D9%84%D9%84%D8%AA%D8%AE%D8%B3%D9%8A%D8%B3.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="Ginger is a plant with a strong smell and tasting taste, and color between yellowish white and brown, and has yellow flowers, and is not taken ginger only after the flowering of flowers and leaves, a plant very useful to the body, taking it every day useful in the absorption of vitamins that melt in fat, such as: K E, D and A, helps to expand the blood vessels, increases sweating, gives sexual energy, benefits in the treatment of colds, improves the digestive system and expels gases from the body, and grows in East India, Mexico, the Philippines and other Eastern countries Asia.";
        
        document.getElementById("head1").innerHTML="Cinnamon";
        
        document.getElementById("pragh1").innerHTML="Cinnamon is the inner bark of an evergreen tree with a high height of up to 40 meters. Its origin is Cyrilanki. It is also grown in the East Asian countries. The color of its flowers is yellow. Its fruits are small. Cinnamon is used to treat many things; it lowers high pressure, It helps to give birth if you drink it shortly before birth, and it contains a substance that reduces the symptoms of side-by-side diabetes. Cinnamon oil is said to irritate the skin if touched, cause vomiting if it enters the mouth, and cinnamon mixed with ginger is a great mixture that has several benefits , And we will mention here its usefulness to reduce weight.";
        

        document.getElementById("head2").innerHTML="Benefits of ginger and cinnamon for slimming";
        
        document.getElementById("pragh2").innerHTML="Ginger and cinnamon is one of the most popular drinks in weight loss. It burns fat stored in the body, takes the lead in fat burning beverages and treats stomach problems. The importance of this mixture is to mix ginger and cinnamon together to get the desired results. In fat cracking and their melting."+"<br/><br/>"+"And cinnamon works to control the level of insulin in the blood and stability, low level of insulin helps to lose weight significantly, and to digest cinnamon, the body chemical reactions require heat, and therefore lose some calories and weight loss automatically, if both ginger and cinnamon separately have these benefits Many of the fat burning and weight loss, how to mix them together, and get double results and a great speed in weight loss, and there are several recipes to mention here some of them.";
        
    }

else if(h==12)
    {
         document.getElementById("heading").innerHTML="Detecting daily things hinders weight loss And you should avoid them ."+"<br/><br>";
        
        var img = document.getElementById("image");
        img.src="https://images.agoramedia.com/everydayhealth/gcms/Ways-Youre-Sabotaging-Your-Diet-01-1440x810.jpg?width=730";
        var src=document.getElementById("heading");
        src.appendChild(img);
    
    document.getElementById("prag").innerHTML="You’ve been cutting down on fat, controlling carbs and exercising five days a week. So why aren’t you losing weight? From physical factors (age and genetics) to self-sabotage (eating mindlessly), here are 9 things that will derail your quest for a slimmer body..."+"<br/><br/>"+"You’re no slacker when it comes to your health: You exercise, watch what you eat, use portion control and resist Ben & Jerry’s without a problem." ;
        
        document.getElementById("head1").innerHTML="1. You don’t have enough muscle.";
        
        document.getElementById("pragh1").innerHTML="The more muscle you have, the more calories you burn. Muscle tissue consumes more calories than fat tissue even when you’re at rest, says the American Council on Exercise (ACE)."+"<br/><br/>"+"That's why men burn calories a lot faster than women; they have more muscle. "+"<br/><br/>"+"That's why men burn calories a lot faster than women; they have more muscle. "+"<br/><br/><br/>"+"What to do: Lift weights. You don’t have to get huge, but building and maintaining muscle week after week, year after year makes a difference in the long run."+"<br/><br/>"+"Registered dietitian and certified personal trainer Marci Anderson has her clients alternate between strength exercises and heart rate-raising cardio in each session. "+"<br/><br/>"+"“That way, their strength training includes the calorie-burning effect of cardio,” Anderson says.";
        

        document.getElementById("head2").innerHTML="You inherited a “fat gene.” ";
        
        document.getElementById("pragh2").innerHTML="If both parents are obese, you are much more likely to be obese, says Jill Comess, M.S., R.D., food science and nutrition program director at Norfolk State University in Virginia."+"<br/><br/>"+"“A child with one obese parent has a 50% chance of being obese. When both parents are obese, their children have an 80% chance of obesity,” according to the University of California San Francisco Medical Center." +"<br/><br/>"+"What to do: You’re not doomed. Your “genes are not [your] destiny,” according to the Harvard School of Public Health."+"<br/><br/>"+"A 2011 study published in PLoS Medicine found that you can blame only about 2 pounds on “fat genes.” And even if you have a genetic predisposition to being overweight, regular exercise will reduce its effect by 27%."+"<br/><br/>"+"“Losing even just a few pounds makes you healthier and less likely to develop diabetes, high blood pressure, heart disease and cancer,” Comess says. “So you don’t have to be super-slim to improve your health.” "+"<br/><br/>"+"“Losing even just a few pounds makes you healthier and less likely to develop diabetes, high blood pressure, heart disease and cancer,” Comess says. “So you don’t have to be super-slim to improve your health.” "+"<br/><br/>"+"If an overweight woman loses even 5%-10% of her total body weight, she has a greater chance of reducing or getting off her high blood pressure or other meds, she adds. ";
        
        
          document.getElementById("head3").innerHTML="3. Your medicine cabinet is to blame.";
        
        document.getElementById("pragh3").innerHTML="A host of drugs that treat diabetes, depression, high blood pressure, inflammatory disease and more affect weight regulation. Some will make you hungrier and others stimulate your body to store fat. And if a drug affects the brain, there’s a good chance it affects weight, Anderson says."+"<br/><br/>"+"What to do: Ask your health care provider if an alternate drug or a lower dose could work, but don’t change your medications without discussing it first."; 


        
        
        document.getElementById("head4").innerHTML="4. You're Not Eating Whole Foods";
        
        document.getElementById("pragh4").innerHTML="Food quality is just as important as quantity."+"<br/><br/>"+"Eating healthy foods can improve your wellbeing and help regulate your appetite. These foods tend to be much more filling than their processed counterparts."+"<br/><br/>"+"Keep in mind that many processed foods labeled as 'health foods' aren't really healthy. Stick to whole, single-ingredient foods as much as possible.";
        
         document.getElementById("head5").innerHTML="5. You're Not Lifting Weights";
        
        document.getElementById("pragh5").innerHTML="One of the most important things you can do when losing weight is to do some form of resistance training, such as lifting weights."+"<br/><br/>"+"This can help you maintain muscle mass, which is often burned along with body fat if you are not exercising."+"<br/><br/>"+"Lifting weights can also help prevent metabolic slowdown and ensure that your body stays toned and muscular.";
        
         document.getElementById("head6").innerHTML="6. You're Binge Eating (Even on Healthy Food)";
        
        document.getElementById("pragh6").innerHTML="Binge eating is a common side effect of dieting. It involves rapidly eating large amounts of food, often much more than your body needs."+"<br/><br/>"+"This is a significant problem for many dieters. Some of them binge on junk food, while others binge on relatively healthy foods, including nuts, nut butters, dark chocolate, cheese, etc."+"<br/><br/>"+"Even if something is healthy, its calories still count. Depending on the volume, a single binge can often ruin an entire week's worth of dieting.";

    }

else if(h==13)
    {
        document.getElementById("heading").innerHTML="Five exercises to get rid of back fat ."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://s-media-cache-ak0.pinimg.com/originals/b8/3b/55/b83b558f911e307e6a61c56fd548e153.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    document.getElementById("prag").innerHTML="“The fat on the back and underarms can be a terrible problem for many people. But, you can feel more confident in your own skin with just a little extra effort.” " ;
        
        document.getElementById("head1").innerHTML="1. PULL-UPS";
        
        document.getElementById("pragh1").innerHTML="Perhaps the most obvious one and, unfortunately, the hardest one, as it requires so much upper-body strength. The key to becoming good at pull-ups is exercise, exercise and more exercise. Even if you start off being able to pull yourself up from the bar only a minimal amount, don’t give up. Find ways to make pull-ups easier and move slowly and gradually to the full-on, palms-away pull-ups that you’re seeing everyone else do. Some gyms have an assisted pull-up machine and you can always ask for advice on how to use one. Even if it looks big and scary, it will make pull-ups seem much more achievable than you probably thought they were!";
        

        document.getElementById("head2").innerHTML="2.  PUSH-UPS” ";
        
        document.getElementById("pragh2").innerHTML="Another very popular one, and one that takes a long time to master, push-ups are normally lauded as a great chest exercise, but they strengthen muscles in your back too. A lot of people don’t know how to do a good push-up. Make sure your hands are wider than shoulder width apart – putting them at shoulder width is probably the worst thing you can do. To make sure the focus falls on your back, focus on the downward movement. Hold yourself down at the bottom for about three seconds. If you integrate this simple exercise in your routine, you’ll be surprised at the difference it makes for your back fat. ";
        
        
          document.getElementById("head3").innerHTML="3. THE REVERSE FLY";
        
        document.getElementById("pragh3").innerHTML="This is one of the best anti-back fat exercises you can do at home as it doesn’t require that much equipment at all – just two dumbbells. If you don’t have these, two bottles full of water will also do. What you do is you spread out your arms at shoulder level and you squeeze your shoulder blades together a few times. Then you lower your hands back down and repeat. This exercise is great not just for burning back fat, but also for generally managing your core strength. Keep your head in line with your spine, just to make sure that the exercise is as efficient as possible."; 


        
        
        document.getElementById("head4").innerHTML="4. THE UPRIGHT ROW";
        
        document.getElementById("pragh4").innerHTML="This exercise is a great replacement for a rowing machine if you don’t have access to one. Using two dumbbells – or objects of a similar weight – make a rowing movement from your thighs towards your chin. Make sure your elbows extend as much as possible and feel your back flex from the movement. Keep the dumbbells as close to your body as you can, because that makes the exercise all the more effective. Remember that the main movement needs to come from your elbows, because that’s controlled by a muscle all the way in the middle of the back. By working that muscle, you’re gaining the necessary muscle tone to get rid of that back fat and bra overhang as soon as you can.";
        
         document.getElementById("head5").innerHTML="5. PLANK WITH AN ARM RAISE";
        
        document.getElementById("pragh5").innerHTML="If you’ve ever been to a gym class, you’ll have heard of the dreaded plank. However, this isn’t just any plank exercise – this one makes sure that the muscles in your back get a workout as well. By raising one of your arms during the plank, you’re helping your body find its center and develop its upper strength. As we mentioned before, getting rid of back fat is all about developing muscle. What better way to do that than by using the plank exercise?";
        
         document.getElementById("head6").innerHTML="FINAL THOUGHTS";
        
        document.getElementById("pragh6").innerHTML="Positive thinking is key when it comes to dealing with back fat. When you stay positive, you will be inspired to keep trying new things to help you reach your weight loss goals. Exercise and proper diet will get you a long way down the road to being a healthier, happier you!";

    }

else if(h==14)
    {
        document.getElementById("heading").innerHTML="Health benefits you get from mountain climbing ."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=6615&index=0&w=605&h=434";
        var src=document.getElementById("heading");
        src.appendChild(img);
    document.getElementById("prag").innerHTML="“The health and well being benefits of the great outdoors (and climbing indoors) are numerous. As well as the physical benefits, there are many mental health and social benefits”." ;
        
        document.getElementById("head1").innerHTML="Benefits of hill walking";
        
        document.getElementById("pragh1").innerHTML="Physical health: Walking is one of the easiest and cheapest ways of exercising, and an effective way of managing weight. Regular brisk walking will improve performance of the heart, lungs and circulation, as well as lower blood pressure. Find out more about the health benefits of walking on the Ramblers website."+"<br/><br/>"+"Regular walking has been shown to reduce the risk of chronic illnesses, such as heart disease, type 2 diabetes, asthma, stroke and some cancers Find out more about walking for health. "+"<br/><br/>"+"Mental health and well being: Walking may be more powerful than we realise. It helps us cope at work by helping de-stress amongst nature, it 'heals' our brains, helps us concentrate, makes us more creative and can help treat depression. Read about six surprising scientific facts about walking.";
        

        document.getElementById("head2").innerHTML="Benefits of climbing ";
        
        document.getElementById("pragh2").innerHTML="Physical health: Climbing uses lots of muscle groups, both in the upper and lower body. Your back, abdominal and leg muscles all get exercised as well as your ﬁngers, shoulders and arms."+"<br/><br/>"+"Regular climbing can improve stamina and endurance as well as muscle strength. In addition, all the reaching and stretching for holds improves ﬂexibility and agility. Getting out and about in the outdoors, walking to reach the crag you wish to climb on, is also good aerobic exercise. "+"<br/><br/>"+"Mental health and well being: Climbing offers a wealth of health benefits that are not just physical.  It improves your self esteem, mental agility and self awareness. It’s a great stress-buster and a full body workout, so it’s good for general wellbeing."+"<br/><br/>"+"Climbing requires a lot of problem solving, mental concentration and focus, so it helps sharpen your brain. A lot of people like it as it allows you to escape everyday worries and just focus on the climb.  It also can give a great sense of achievement.  Read BMC member Jake McMannus’s story of how climbing is helping him to climb out of depression."+"<br/><br/>"+"Climbing can be a very sociable activity. Sport England’s Active People Survey results show that most people say they participate for the social aspect.  You develop strong friendships with your climbing partners due to the level of trust involved and through sharing challenges and experiences.. ";
        
        
          document.getElementById("head3").innerHTML="Benefits of being close to nature";
        
        document.getElementById("pragh3").innerHTML="The need to respect and preserve the natural environment is never more apparent than to those who visit, explore and enjoy the landscape in which they undertake their activities."+"<br/><br/>"+"Increased public access to the countryside directly supports the Government’s ambition, set out in the Natural Choice: the Natural Environment White Paper, to reconnect people with the natural environment. The NEWP states that “a healthy, properly functioning natural environment is the foundation of sustained economic growth, prospering communities and personal wellbeing” and that “everyone should have fair access to a good quality natural environment”."+"<br/><br/>"+"The UK Government’s National Ecosystem Assessment also asserts that the social benefits of people being able to access and enjoy the countryside should be valued at £484 million per annum. The harmful effects from disconnection with nature – sometimes called ‘Nature Deficit Disorder’ - are increasingly recognised by the scientific community."+"<br/><br/>"+"Public recreation and access to our countryside and green spaces are fundamental to people’s understanding and enjoyment of the natural environment. Unless people are able to access the natural environment they are unlikely to want to take action to enhance / conserve it – supporting recreational activities such as hill walking and mountain climbing are key to connecting the public with the natural environment."; 


        
        
        document.getElementById("head4").innerHTML="Inactivity statistics ";
        
        document.getElementById("pragh4").innerHTML="As a nation we aren’t doing enough exercise to meet the amount recommended by the physical activity guidelines. Over half of adults (16+) do not do any sport, according to Sport England's Active People Survey."+"<b/><br/>"+"The cost of inactivity in the UK is estimated as £8.2 billion per year (Department of Heath: The public health white paper, 2004). It has been estimated that a permanent reduction of 1% unit in the UK sedentary population would deliver a social benefit of up to £1.44bn per year (a mean of £2,423 per additionally active person), could save 1,063 lives per year and reduce morbidity by 15,000 cases. (CJC Consulting report for the Forestry Commission, 2005). Download the report"+"<br/><br/>"+"Physical inactivity among today’s 11-25 year olds will cost the UK economy £53.3 billion over their lifetimes, according to a new report The inactivity time bomb (StreetGames/Cebr, 2014)."+"<br/><br/>"+"The Walking Works report (Ramblers and Macmillan Cancer Support, 2013) laid out that if more people met the physical activity guidelines by walking it could save 37,000 lives.";
        

    }

else if(h==15)
    {
        document.getElementById("heading").innerHTML="Test yourself about fitness."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://media.self.com/photos/57dc46c9e8bc27aa347c38ac/master/w_752,c_limit/25000-body-makeover-05-fiss431.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
        
    document.getElementById("prag").innerHTML="“How Fit Are You? Take Our Test!”." ;
        
        document.getElementById("head1").innerHTML="Benefits of hill walking"+"<br/><br/>";
        
        
        var img = document.getElementById("image");
        img.src=" https://media.self.com/photos/57dc46c9e8bc27aa347c38ac/master/w_752,c_limit/25000-body-makeover-05-fiss431.jpg";
        var src=document.getElementById("head1");
        src.appendChild(img);
        
        
        document.getElementById("pragh1").innerHTML="You hit the gym regularly but aren't seeing results? Our self-test will help you pinpoint your better-body roadblock. We tend to focus our exercise efforts on what we're good at, explains SELF's fitness director, Meaghan B. Murphy. But revealing weaknesses, then improving on them, is the secret to changing your shape. Ready for her own workout wake-up call, Murphy headed to E, Equinox Fitness Club's exclusive Manhattan gym (members pay $25,000 to join, use a retina scan to get in and change in private cabanas!), for an eye-opening assessment. Turns out, the self-professed cardio queen needs to spend less time in Spin class and more in Downward Dog—Murphy's cardio level was close to elite, but her flexibility was labeled poor. Now it's your turn to spotlight strengths and ID downfalls with a DIY version of the fancy-pants assessment, created by David Harris, vice president of personal training at Equinox. It evaluates the three traits of true fitness: endurance, strength and body mobility. See how you rate, and use our expert tips to make your workout work for you. Then forget about retinas. Everyone will be scanning your ridiculously fit body!";
        

        document.getElementById("head2").innerHTML="Futuristic Fitness "+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://media.self.com/photos/57dc46c76f1b1dac12e5bdc8/master/w_752,c_limit/25000-body-makeover-02-fiss431.jpg";
        var src=document.getElementById("head2");
        src.appendChild(img);
        document.getElementById("pragh2").innerHTML="This Hannibal Lecter–like mask measures how efficiently the body uses oxygen (your VO*[2]*Max), which is a good gauge of endurance, explained test administrator Josh Stoltz. ";
        
        
          document.getElementById("head3").innerHTML="Body Balance"+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://media.self.com/photos/57dc46c88a461ae034a917be/master/w_752,c_limit/25000-body-makeover-03-fiss431.jpg";
        var src=document.getElementById("head3");
        src.appendChild(img);
        document.getElementById("pragh3").innerHTML="A reach-back test reveals shoulder mobility: crucial for lifting, putting away groceries and more."; 


        
        
        document.getElementById("head4").innerHTML="Body Balance "+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://media.self.com/photos/57dc46c90d97fce032117ec5/master/w_752,c_limit/25000-body-makeover-04-fiss431.jpg";
        var src=document.getElementById("head4");
        src.appendChild(img);
        document.getElementById("pragh4").innerHTML="Hold this pose! Wobbling is a tip-off that your balance and flexibility need fixing!";
        
        
        
        document.getElementById("head5").innerHTML="Test Your Range of Motion to Stay Flexible "+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://media.self.com/photos/57dc46c9e8bc27aa347c38ac/master/w_752,c_limit/25000-body-makeover-05-fiss431.jpg";
        var src=document.getElementById("head5");
        src.appendChild(img);
        document.getElementById("pragh5").innerHTML="This butt and thigh toner is a helpful indicator of lower-body mobility, Harris says. Too-tight hamstrings, hips and ankles will be quickly revealed."+"<br/><br/>"+"Test yourself."+"<br/>"+"Stand with feet hip-width apart, hands behind head, elbows out. Squat as low as you can, knees over ankles, toes forward, back flat. Pause, rate form in a mirror, and record result."+"<br/><br/>"+"How Do You Rate?"+"<br/>"+"Stand with feet hip-width apart, hands behind head, elbows out. Squat as low as you can, knees over ankles, toes forward, back flat. Pause, rate form in a mirror, and record result."+"<br/><br/>"+"Test yourself."+"<br/>"+"Heels on ground, thighs parallel to the floor = Excellent!Butt is a little bit higher than knee level. = GoodKnees are barely bent, and body is shaky. = FairCan't perform the move without toppling or pain = PoorGet fitter!Try hip-opening low lunges. Take a big step forward on right foot and bend knee to a 90-degree angle. Drop back knee to floor. Hold 30 seconds; switch sides.";
        
    }
    

else if(h==16)
    {
        document.getElementById("heading").innerHTML="Best Five Muscle Building Supplements ."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://www.bodybuilding.com/fun/images/2015/default-supplementation-article-tablet-830x467.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
    document.getElementById("prag").innerHTML="“If you exercise regularly, you likely want to be sure you’re getting the most out of it."+"<br/><br/>"+"One important benefit of exercise is gaining muscle and strength. Having a healthy amount of muscle allows to you to perform your best during exercise and daily life."+"<br/><br/>"+"Three main criteria must be met for maximal muscle gain: eating more calories than you burn, consuming more protein than you break down and an exercise program that is challenging to your muscles (1, 2, 3)."+"<br/><br/>"+"While it’s possible to meet all these criteria without taking dietary supplements, certain supplements may help you meet your goals."+"<br/><br/>"+"The 6 supplements listed below may help you gain more muscle with your exercise program” .";
        
        document.getElementById("head1").innerHTML="1. Creatine";
        
        document.getElementById("pragh1").innerHTML="Creatine is a molecule that’s produced naturally in your body. It provides energy for your muscles and other tissues.<br/><br/>However, taking it as a dietary supplement can increase muscle creatine content by up to 40% beyond its normal levels (4, 5, 6).<br/><br/>This affects your muscle cells and exercise performance, promoting muscle gain. In fact, a large amount of research shows creatine improves muscle strength (7, 8, 9).<br/><br/>This is good news if you’re trying to gain muscle. Greater strength allows you to perform better during exercise, leading to larger increases in muscle mass over time (10).<br/><br/>Creatine can also increase water content in your muscle cells. This may cause your muscle cells to swell slightly and produce signals for muscle growth (11).<br/><br/>Furthermore, this supplement may increase levels of the hormones involved in muscle growth, such as IGF-1 (12).<br/><br/>Moreover, some research shows that creatine could decrease the breakdown of proteins in your muscles (13).<br/><br/>Overall, many researchers have studied creatine supplements and exercise, and one thing is clear — creatine can help increase muscle mass (14, 15).<br/><br/>Creatine has also been studied extensively and has an outstanding safety profile (14).<br/><br/>If you are looking for a supplement to help you gain muscle, consider creatine first.";
        

        document.getElementById("head2").innerHTML="2. Branch Chain Amino Acids ";
        
        document.getElementById("pragh2").innerHTML="Since taking Branch Chain Amino Acids (BCAAs) regularly I have witnessed a noticeable improvement in muscle density and my recovery rate has also increased exponentially. As essential aminos, the BCAAs (leucine, isoleucine and valine) must be taken through the foods we eat."+"<br/><br/>"+"As the only three aminos metabolized directly by muscle tissue they are especially important for the immediate recovery of muscle tissue. They are used to build new proteins after hard training. As a primary muscle-building insurance policy, BCAAs should be on the top of anyone's supplement list.";
        
        
          document.getElementById("head3").innerHTML="3. Omega-3 Fish Oil";
        
        document.getElementById("pragh3").innerHTML="he many health benefits to be derived from eating fatty, cold-water fish such as salmon and mackerel are well documented."+"<br/><br/>"+"However, due to various contaminants, purity and quantity of essential fatty acids supplied, availability and price, gaining valuable Omega-3 fatty acids from these sources is often not ideal. Fish oil in supplemental form, on the other hand, provides the perfect ratio of these Omega-3's in the purest and most concentrated way possible."+"<br/><br/>"+"To improve performance and build muscle a healthy physical state must first be attained as muscle can only grow when the right conditions are in place to do so. Omega-3 fatty acids may support blood circulation to allow nutrients such as protein and carbohydrates to reach muscle and exert their effects."; 


        
        
        document.getElementById("head4").innerHTML="4. Vitamin/Mineral Supplement";
        
        document.getElementById("pragh4").innerHTML="A multivitamin and mineral supplement is not purely a bodybuilding supplement in terms of directly targeting muscle growth the way creatine and L-glutamine do. Taking a high potency and high quality vitamin/mineral product is a fundamental way in which to support the cellular conditions under which performance and muscle growth can occur."+"<br/><br/>"+"Though certain compounds like vitamin-C (comprising, along with A and E, the so called antioxidants) are thought to be of greater importance for immune function, it is the synergistic effect of all key vitamins and minerals taken in a specific ratio that will support the best results in health and subsequent tissue growth and function."+"<br/><br/>"+"So-called doctors and nutritionists might tell us that the perfect ratio of vitamins and minerals can be achieved through eating a diet rich in certain fruits and vegetables. However, today's soil conditions, various pollutants, and the over processing of foods make it all but impossible to achieve such a perfect ratio."+"<br/><br/>"+"Even those who eat strictly organic do not get what they should as far as nutritional potency and quality is concerned. ";
        
         document.getElementById("head5").innerHTML="5.Creatine";
        
        document.getElementById("pragh5").innerHTML="When creatine hit the shelves in the early '90s, it quickly became the supplement of choice for athletes the world over."+"<br/><br/>"+"A supplement that can support increases in size and strength—as attested to by countless scientific studies—creatine (monohydrate, the version that, despite many new revolutionary forms, still seems to work best in the long run) will, for most, boost lean muscle mass and amplify strength gains.";
        
    }

else if(h==17)
    {
        document.getElementById("heading").innerHTML="Does drinking water in copper cups help improve brain function Interesting topic ? ."+"<br/><br>";
       
  
    document.getElementById("prag").innerHTML="“The latest health claim says that drinking water from a copper cup boosts health by reducing inflammation, bolstering brain functioning, aiding in weight loss, slowing aging, fighting cancer, and acting like an anti- microbial."+"<br/><br/>"+"Whoa, does this mean people should toss out their glasses and buy a supply of copper mugs? Is it even possible that drinking from a certain type of cup can do anything other than make a Moscow Mule taste better? Or is this just the latest health fad?”"; 
        
          var img = document.getElementById("image");
        img.src=" https://media1.s-nbcnews.com/j/newscms/2016_16/1052911/copper-cup-stock-today-160418-tease_a881c7c1915ce9ed14c24f0a72f2ccd1.fit-560w.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
        
        document.getElementById("pragh1").innerHTML="“Drinking out of a copper mug is neither healthy or not healthy,” says Dr. Michael Lynch, medical director for the Pittsburgh Poison Center and assistant professor in the department of emergency medicine at the University of Pittsburgh School of Medicine."+"<br/><br/>"+"Or, to put another way:"+"<br/><br/>"+"“I don’t think it is harmful, but it is not a magic bullet,” says Lauren Blake, a registered dietitian at the Ohio State University Wexner Medical Center."+"<br/><br/>"+"RELATED: How a daily cup of tea may benefit your health"+"<br/><br/>"+"There are no studies that find drinking from a copper cup helps with weight loss, improves brain function, slows aging, fights cancer, or reduces inflammation. But a study did find that leaving water in a copper vessel kills off bacteria."+"<br/><br/>"+"“I still don’t know how much it would kill,” says Blake. “That would probably be a good space to use it, but I wouldn’t trust it to kill all the bacteria.”"+"<br/><br/>"+"Copper plays an important role in overall health and many of these overblown claims about copper cups seem to originate from what’s known about that mineral. It helps with brain function, can partner with other enzymes to work as an antioxidant, encourages red blood cell production, and maintains collagen and elastin, aiding in bone health."+"<br/><br/>"+"“It is important because it helps in terms of iron absorption,'says Leslie Bonci, a nutritionist and owner of Active Eating Advice."+"<br/><br/>"+"But most of us get plenty of copper from our diets. People need small amounts of copper — 900 micrograms a day. Foods such as mushrooms, cashews, almonds, beef liver, legumes, whole grains, and oysters are rich in copper. Cashews have about 500 micrograms per ounce; a few tablespoons of the nuts make up half of what a person needs."+"<br/><br/>"+"“There are so few people out there who would ever have a necessity to take [a copper supplement]. Nobody should be self supplementing with copper unless they have a medical reason to do,” says Bonci."+"<br/><br/>"+"Copper is a heavy metal and there's a danger of ingesting too much. Lynch has treated people who attempted suicide by drinking copper, though it’s rare. Too much copper causes people to experience nausea, diarrhea, and stomach bleeding. Prolonged exposure could cause neurological problems.";
        
    }

else if(h==18)
    {
        document.getElementById("heading").innerHTML="Shocking information about restaurants You have to be careful ."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://media.self.com/photos/57dc46c9e8bc27aa347c38ac/master/w_752,c_limit/25000-body-makeover-05-fiss431.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
        
    document.getElementById("prag").innerHTML="We surveyed dozens of people in the restaurant biz on what they never, ever touch, whether it’s to avoid outrageous markup, food poisoning, or germ minefields. Watch for these offenders." ;
        
        document.getElementById("head1").innerHTML="Iceberg lettuce"+"<br/><br/>";
        
        
        var img = document.getElementById("image");
        img.src=" https://www.rd.com/wp-content/uploads/2018/09/iceberg-wedge-salad-760x506.jpg";
        var src=document.getElementById("head1");
        src.appendChild(img);
        
        
        document.getElementById("pragh1").innerHTML="The iceberg wedge salad is one of the industry’s biggest rip-offs. Take into account that iceberg lettuce is about 98 percent water, and it’s easy to see why. “It’s marked up at least 20 times,” says Peter Chastain, executive chef and owner of California’s Prima Ristorante. Plus, germs can hide inside lettuce’s cracks, corners, and edges. “You think lemons in water are dirty? The salads are filthy,” Cannon says. Even if restaurants do decide to wash their greens, the lettuce is often served soggy, which is big red flag—standing water mixed with lukewarm, mayo-based dressing is a disaster waiting to happen.";
        

        document.getElementById("head2").innerHTML="Best-sellers"+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://www.rd.com/wp-content/uploads/2016/02/02-13-things-you-shouldnt-eat-at-a-restaurant-best-sellers-760x506.jpg";
        var src=document.getElementById("head2");
        src.appendChild(img);
        document.getElementById("pragh2").innerHTML="You might think best-selling items have high turnover. But to keep up with demand, fast-food restaurants and some other places pre-make their top sellers, which gives these wrapped and bagged choices plenty of time to develop food-borne illnesses. Instead, opt for the less popular options which are more likely to be prepared to order, says Howard Cannon, CEO of Restaurant Expert Witness and author of The Complete Idiot’s Guide to Starting A Restaurant, who adds, “Anything sitting in holding, covered with mayonnaise, is probably not that great.”";
        
        
          document.getElementById("head3").innerHTML="Tap water"+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://www.rd.com/wp-content/uploads/2016/02/03-13-things-you-shouldnt-eat-at-a-restaurant-tap-water-760x506.jpg";
        var src=document.getElementById("head3");
        src.appendChild(img);
        document.getElementById("pragh3").innerHTML="“One of the most dangerous items in a restaurant is water,” Cannon says, although anything that sits between 40 degrees to 140 degrees for more than a short time has a high potential to harbor bacteria. If your table is already set with a carafe of water, or you’re handed anything warmer than ice-cold, ask for a new glass."; 


        
        
        document.getElementById("head4").innerHTML="Free bar snacks"+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://www.rd.com/wp-content/uploads/2016/02/04-13-things-you-shouldnt-eat-at-a-restaurant-bar-snacks-760x506.jpg";
        var src=document.getElementById("head4");
        src.appendChild(img);
        document.getElementById("pragh4").innerHTML="Since these nuts, pretzels, and other munchies are free of charge, restaurants and bars often don’t set out a fresh serving for each new customer. It’s like eating out of a stranger’s hand! Then at closing time they’re dumped back into a container, to be re-poured into dishes the next day.";
        
        
        
        document.getElementById("head5").innerHTML="Meat with the bone in "+"<br/><br/>";
        var img = document.getElementById("image");
        img.src="https://www.rd.com/wp-content/uploads/2016/02/05-13-things-you-shouldnt-eat-at-a-restaurant-bone-in-meat-760x506.jpg";
        var src=document.getElementById("head5");
        src.appendChild(img);
        document.getElementById("pragh5").innerHTML="Small cuts of meat, like bone-in pork or chicken breasts, are harder to cook thoroughly because their outsides easily char. This often translates to crispy on the outside and raw on the inside. Unlike undercooked beef—say, a rare burger or a steak tartare—undercooked pork and chicken are highly dangerous and could causes food-borne illnesses, according to the Center for Disease Control and Prevention. Plus, bone-in means less meat.";
        
    }
else if(h==19)
    {
        document.getElementById("heading").innerHTML="Fact or myth needs chewing gum for years to digest Listen to your curiosity ."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://static.scientificamerican.com/sciam/cache/file/855A6E20-2F03-4E5E-A5C516751DA37438_source.jpg?w=590&h=800&89F2EC0B-52DD-4FB9-8EE38C7DD368BCFC";
        var src=document.getElementById("heading");
        src.appendChild(img);
    document.getElementById("prag").innerHTML="“If you exercise regularly, you likely want to be sure you’re getting the most out of it."+"<br/><br/>"+"One important benefit of exercise is gaining muscle and strength. Having a healthy amount of muscle allows to you to perform your best during exercise and daily life."+"<br/><br/>"+"Three main criteria must be met for maximal muscle gain: eating more calories than you burn, consuming more protein than you break down and an exercise program that is challenging to your muscles (1, 2, 3)."+"<br/><br/>"+"While it’s possible to meet all these criteria without taking dietary supplements, certain supplements may help you meet your goals."+"<br/><br/>"+"The 6 supplements listed below may help you gain more muscle with your exercise program” .";
        
        document.getElementById("pragh1").innerHTML="It's a moment nearly everyone has experienced. You're contentedly chewing a wad of gum when an unforeseen turn brings about a quick disposal—the hard way. Whether the cause is imminent detection by a high school teacher, a dearth of garbage cans or even an untimely hiccup, you gulp down the rubbery gob whole. It's only then that a refrain from childhood echoes through your mind: 'Don't swallow chewing gum—it will stay in your system for seven years!' As the minty mass descends into your digestive abyss, you wonder: 'Will I really be part Wrigley for years to come?'."+"<br/><br/>"+"Rest assured—this decades-old bit of folklore, of unknown origin but almost universal renown, has little basis in fact. Asked if the rumor is medically unfounded, pediatric gastroenterologist David Milov of the Nemours Children's Clinic in Orlando, Fla., replies: 'I can tell you that with complete certainty.'"+"<bt/>br/>"+"If the legend were true, Milov says, 'that would mean that every single person who ever swallowed gum within the last seven years would have evidence of the gum in the digestive tract,' but colonoscopies and capsule endoscopy procedures turn up no such evidence. 'On occasion we'll see a piece of swallowed gum,' he says, 'but usually it's not something that's any more than a week old.'"+"<br/><br/>"+"According to Rodger Liddle, a gastroenterologist at the Duke University School of Medicine, 'nothing would reside that long, unless it was so large it couldn't get out of the stomach or it was trapped in the intestine.' To put that size into perspective, Liddle says that swallowed quarters usually pass, but that larger coins or objects might not."+"<br/><br/>"+"So what does become of gum that's been chewed up but not spit out? Not much, as it happens. Some of the components, such as sweeteners, are broken down, but the gum's base is largely indigestible. The Food and Drug Administration defines chewing gum base as a 'nonnutritive masticatory substance' that may be composed of any number of natural or synthetic elastomers, or rubberlike materials, as well as plasticizing softeners, resins and preservative antioxidizing agents. The permitted elastomers include natural, tree-derived chicle, a gum chewed by indigenous Central Americans, and the somewhat less traditional butyl rubber, which also finds use in the manufacture of inner tubes."+"<br/><br/>"+"Chewing gum, of course, has been around in one form or another for thousands of years: tooth-marked lumps of birch bark tar have been found in Europe that date back to the Mesolithic period of the Stone Age. And this past summer, researchers reported that quids—balls of plant material chewed by ancient Native Americans—had yielded DNA from members of a tribe called the Western Basketmakers, who lived in the southwestern U.S. some 2,000 years ago."+"<br/><br/>"+"Unsurprisingly, perhaps, the human body cannot do much with these rubbery concoctions, resilient as they are. Chewing gum 'is pretty immune to the digestive process,' Milov says. 'It probably passes through slower than most foodstuffs, but eventually the normal housekeeping waves in the digestive tract will sort of push it through, and it will come out pretty unmolested.'"+"<br/><br/>"+"Nevertheless, the usually safe passage of gum through the system doesn't mean it is wise to habitually swallow it. As Milov and his colleagues wrote in Pediatrics in 1998, chronic gum swallowing—or swallowing gum in conjunction with other indigestibles—can spell trouble. The team's report describes three children suffering from gum-based gastrointestinal blockages, two of whom received gum as positive reinforcement for good behavior and regularly disposed of the treat by swallowing it. In both cases the children became constipated, as the gum snowballed into a substantial 'taffylike' mass that required extraction. In the third patient, a girl just a year and a half old, four coins were found lodged in the esophagus, fused into a single blob by a wad of chewing gum.";
        
    }
else if(h==20)
    {
          document.getElementById("heading").innerHTML="Garlic oil: its benefits and damageMore information about .."+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src=" https://cdn2.stylecraze.com/wp-content/uploads/2013/09/48_17-Side-Effects-Of-Garlic-You-Must-Be-Aware-Of_552242461.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
        
        document.getElementById("head1").innerHTML="What's New and Beneficial About Garlic";
        
        document.getElementById("pragh1").innerHTML="The potential benefits of garlic intake for decreased risk of cardiovascular disease have been studied in a variety of conditions including heart attack (myocardial infarct), coronary artery disease (CAD), high blood pressure (hypertension), and atherosclerosis. The everyday flexibility of our blood vessels has been shown to improve with intake of garlic, and the likelihood of blood vessel damage due to chronic excessive inflammation has been shown to decrease when this allium vegetable in consumed on a regular basis."+"<br/><br/>"+"Studies on garlic-containing meal plans and cancer risk show potential benefits from regular intake of this much-loved vegetable. Varying decreases in risk have been associated with garlic consumption in different body locations, including the upper digestive tract (including the mouth, pharynx, larynx and esophagus) as well as the stomach. In multiple studies, the sulfur-containing compounds in garlic have been directly implicated in these potential health benefits."+"<br/><br/">+"Studies are beginning to give us a better understanding about the amount of garlic needed to provide us with overall health benefits. In terms of amount, approximately 20 grams of garlic (in food form) best describes the quantity needed, and in terms of frequency, 1-3 times per week translates into measurable benefits. At WHFoods, we group garlic together with onions and leeks as allium vegetables, and you can find more details about our recommended intake level in our Vegetable Advisor."+"<br/><br/>"+"If you would like a great hands-on example of how to bring garlic into your weekly meal plan in a delicious and easy-to-follow way, you need to look no further than our World's Healthiest Foods Meal Plan. You will find garlic being incorporated into our World's Healthiest Foods Meal Plan on each day of the meal plan, and in a way that brings out the very best blend of flavor of each recipe."
        

        document.getElementById("head2").innerHTML="WHFoods Recommendations ";
        
        document.getElementById("pragh2").innerHTML="As a member of the Allium family of vegetables, garlic shares some nutritional benefits with onions and leeks, which are also members of this Allium family. Other allium vegetables include chives, shallots, and scallions. At WHFoods, our minimum recommended daily intake level for allium vegetables is one-third serving per day. Our outstanding recommended intake is two-thirds serving per day. For onions and leeks, one-third serving would be one-third cup chopped and cooked. For garlic, one-third serving would be 2 cloves. To achieve outstanding daily intake, you would simply double these amounts. Our World' Healthiest Foods Meal Plan is a great place to start if you want to see how easy it is to incorporate garlic into your daily meals in a delicious and flavor-enhancing way. ";
        
        
          document.getElementById("head3").innerHTML="Health Benefits";
        
        document.getElementById("pragh3").innerHTML="While garlic ranks as an excellent source of manganese and vitamin B6, a very good source of vitamin C and copper, and a good source of selenium, phosphorus, vitamin B1, and calcium in our WHFoods rating system, it is the sulfur compounds in garlic that serve as its spotlight nutrients in terms of overall health benefits. The sulfur-containing compounds in this allium vegetable have been shown to provide us with health advantages in a wide variety of body systems, including: our cardiovascular system, immune system, inflammatory system, digestive system, endocrine system, and detoxification system. We'll start with a quick look at these unique sulfur-containing compounds."; 


        
        
        document.getElementById("head4").innerHTML="Potential Changes in Cancer Risk Associated with Garlic Intake";
        
        document.getElementById("pragh4").innerHTML="Unfortunately, most of the garlic-cancer studies that we have seen fail to analyze intake of garlic in its natural food form. Instead, these garlic studies have focused on use of garlic supplements (like garlic oil softgels or garlic capsules/tablets containing powdered extracts). So we're at a disadvantage in drawing firm conclusions about cancer risk for people who enjoy garlic in their meal plans."+"<br/><br/>"+"Among these supplement-focused studies, risk of digestive tract-related cancers seems most consistently impacted by garlic intake. In particular, risk of cancers in the upper digestive tract (including the mouth, pharynx, larynx, esophagus, and stomach) seems to be most commonly impacted..";
        
         document.getElementById("head5").innerHTML="The Nutrient-Rich Way of Cooking Garlic";
        
        document.getElementById("pragh5").innerHTML="We recommend using raw garlic in many of our recipes. If it is a cooked dish that you are preparing and you cannot tolerate raw garlic, add chopped garlic towards the end of the cooking time to retain better flavor."+"<br/><br/>"+"At WHFoods, we believe that lower cooking temperatures can often help lower risk of damage to certain nutrients in food, and the cooking of garlic is no exception. Whether combining garlic with oil, roasting whole bulbs, or cooking with individual cloves, we recommend lower temperature heats in the general range of 150-250F (65-121C).";
    }



else if(h==21)
    {
        document.getElementById("heading").innerHTML="What is the Fenugreek and its wonderful benefits !"+"<br/><br>";
       
    var img = document.getElementById("image");
        img.src="https://i.ndtvimg.com/i/2016-04/fenugreek_625x350_81460965608.jpg";
        var src=document.getElementById("heading");
        src.appendChild(img);
        
        
        document.getElementById("pragh1").innerHTML="Fenugreek is an herb that has many benefits for your health and well-being."+"<br/><br/>"+"It has played a key role in alternative medicine for thousands of years."+"<br/><br/>"+"These days, it's often consumed as a supplement."+"<br/><br/>"+"Fenugreek may have benefits for testosterone levels, blood sugar, breastfeeding and more.";
        

        document.getElementById("head2").innerHTML="What Is Fenugreek? ";
        
        document.getElementById("pragh2").innerHTML="Although you wouldn't consume fenugreek in large amounts, one tablespoon of whole seeds contains 35 calories and several nutrients:"+"<br/><br/><ul><li>"+"Fiber: 3 grams."+"</li><li>"+"Protein: 3 grams."+"</li><li>"+"Carbs: 6 grams."+"</li><li>"+"Fat: 1 gram."+"</li><li>"+"Iron: 20% of your daily requirements."+"</li><li>"+"Manganese: 7% of your daily requirements."+"</li><li>"+"Magnesium: 5% of your daily requirements."+"</li</ul>";
        
        
          document.getElementById("head3").innerHTML="Fenugreek and Breast Milk";
        
        document.getElementById("pragh3").innerHTML="Breast milk is the optimal food for newborns. It's the best source of nutrition for a child's development (3).However, certain issues may cause insufficient breast milk production (3).While prescription drugs are commonly used to treat this, research suggests fenugreek may be a safe, natural alternative.One 14-day study in 77 new mothers found that consuming fenugreek herbal tea increased breast milk production, which helped the babies gain more weight (4).Another study split 66 mothers into three groups: one received fenugreek herbal tea, the second consumed a taste-matched placebo and the third received nothing.The researchers found a relatively large increase in breast milk production.In fact, volume of pumped breast milk increased from around 1.15 ounces (34 ml) in the control and placebo groups to 2.47 ounces (73 ml) in the fenugreek group (5).These studies used fenugreek herbal tea instead of supplements, but supplements would likely have similar effects (5, 6).The current research is encouraging, but always discuss any concerns about breast milk production with your midwife or doctor.<br/><br/>BOTTOM LINE:<br/><br/>The available studies support using fenugreek to increase breast milk production and the rate of weight gain in newborn babies.Effects on Testosterone Levels in Men One of the most common reasons men use fenugreek supplements is to boost testosterone.Some studies have found that it has beneficial effects, including increasing testosterone levels and boosting libido.<br/><br/>In one study, researchers provided 500 mg of fenugreek per day and combined it with an 8-week weight lifting program. 30 college-aged men performed four training sessions per week, with half of them receiving the supplement (7).<br/><br/>Compared to the non-supplement group who experienced a slight decline in testosterone, researchers found an increase in testosterone in the fenugreek group. This group also had a 2% reduction in body fat (7).<br/><br/>When assessing changes in sexual function and libido, one 6-week study provided 30 men with 600 mg of fenugreek. The majority of participants reported increased strength and improved sexual function (8).<br/><br/>BOTTOM LINE:<br/><br/>Although more research is needed, initial research suggests that fenugreek can boost testosterone levels and sexual function in men.<br/><br/>Fenugreek Can Help Control Diabetes and Blood Sugar Levels<br/><br/>The most impressive research on fenugreek has analyzed how it affects metabolic conditions such as diabetes.<br/><br/>It seems to benefit both type 1 and type 2 diabetics, along with improving general carb tolerance in non-diabetic, healthy individuals (9, 10, 11).<br/><br/>In one study in type 1 diabetics, researchers added 50 grams of fenugreek seed powder to the participants' lunches and dinners for 10 days.<br/><br/>A 54% improvement was found in 24-hour urinary blood sugar clearance, along with reductions in total and LDL cholesterol (12).<br/><br/>Finally, one study gave non-diabetic participants fenugreek and witnessed a 13.4% reduction in blood sugar levels four hours after consumption (13).<br/><br/>These benefits may occur due to fenugreeks role in improving insulin function. However, the benefits observed in studies using whole fenugreek powder or seeds may be partly due to the high fiber content (14).BOTTOM LINE:<br/>Fenugreek has relatively strong research supporting its role in blood sugar control and the treatment of type 1 and 2 diabetes.<br/>Other Health Benefits of Fenugreek <br/>Fenugreek has been used to treat a long list of diseases and conditions in alternative medicine.<br/><br/>However, many of these uses have not been studied well enough to reach strong conclusions.<br/>Preliminary research suggests that fenugreek can help with the following:<br/><br/>Appetite control: So far, three fenugreek studies have shown a reduction in fat intake and appetite. One 14-day study found that participants spontaneously reduced total fat intake by 17% (15, 16, 17).<br/>Cholesterol levels: There is some evidence that it can lower cholesterol and triglyceride levels (18, 19).<br/><br/>Heartburn: One 2-week pilot study in people with frequent heartburn found that fenugreek reduced their symptoms. Interestingly, its effects matched those of antacid medications (20).<br/>Inflammation: Fenugreek has been shown to have anti-inflammatory effects in rats and mice. More research is needed to confirm this in humans (21, 22).<br/><br/>Also, some reviews and anecdotal reports from traditional medicine suggest it can help with ulcerative colitis, other skin conditions and numerous illnesses (23, 24).<br/><br/>BOTTOM LINE:<br/><br/>Although more research is needed, initial data shows that fenugreek may also have several other health benefits.<br/>HEALTHLINE PARTNER SOLUTIONS<br/>Get Answers from a Doctor in Minutes, Anytime <br/>Have medical questions? Connect with a board-certified, experienced doctor online or by phone. Pediatricians and other specialists available 24/7.<br/><br/>How to Supplement With Fenugreek <br/>Fenugreek can be consumed in several concentrations and forms, so there is no single recommended dose.<br/><br/>Additionally, the dosage may vary depending on the benefit you seek.<br/><br/>Most testosterone-based research uses only around 500 mg of fenugreek extract, while research in other areas has used around 1,000–2,000 mg.<br/>If using the whole seed, doses of around 2–5 grams seem effective, but it does vary from study to study.<br/>To take fenugreek in supplement form, it may be best to start off at 500 mg and increase to 1,000 mg after 2–3 weeks if you dont experience any side effects.<br/><br/>It can be taken before or with a meal, but because it helps control blood sugar levels, it would make sense to take it with your highest carb meal of the day.<br/><br/>BOTTOM LINE:<br/><br/>How much fenugreek you should take depends on the type of supplement as well as the goal of supplementation. In pill form, the recommended dosage is around 500–1,000 mg per day.<br/>Safety and Side Effects Several animal studies have tested the safety of fenugreek seeds and supplements.<br/><br/>It appears relatively safe for healthy individuals. Animal studies did not find negative effects until doses reached nearly 50 times the recommend dose (23, 25, 26).<br/><br/>In humans, the current research hasnt reported any serious health issues when taken at the recommended dose.<br/><br/>However, as with most supplements, less serious side effects like diarrhea and indigestion have been reported anecdotally.<br/><br/>People may also experience a reduced appetite. This is often a good thing, unless you have an eating disorder or are trying to gain weight (16).<br/><br/>Moreover, some people report a strange and slightly sweet body odor when supplementing, but this is unconfirmed.And given that it lowers blood sugar levels, it should be used with caution if you are taking diabetes medication or other supplements that lower blood sugar levels.<br/><br/>Its always a good idea to check with a medical practitioner before starting a new supplement. Most importantly, ensure that you are taking a safe dose.<br/><br/>BOTTOM LINE:<br/><br/>In humans, some mild side effects may occur, although fenugreek appears relatively safe at the correct dosage.<br/>Summary Fenugreek is an extremely interesting and versatile herb.<br/><br/>It is claimed to have benefits for various health conditions and has been used for all sorts of purposes in herbal medicine.<br/><br/>However, modern science is just beginning to discover its true benefits.<br/>Based on the available evidence, fenugreek has benefits for lowering blood sugar levels, boosting testosterone and increasing milk production in breastfeeding mothers.<br/>Fenugreek may also benefit cholesterol levels, lower inflammation and help with appetite control, but more research is needed in these areas.<br/><br/>More research on this powerful medicinal plant is underway, and it will be interesting to see the results in the years to come.<br/><br/>Written by Rudy Mawer, MSc, CISSN on September 8, 2016 related stories<br/>Yohimbe: Benefits, Uses and Side Effects How St. John"

    };

if(h==22)
    {
         document.getElementById("heading").innerHTML="Garlic oil: its benefits and damageMore information about .."+"<br/><br>";
       
        
        document.getElementById("head1").innerHTML="QuitSmoking";
        
        document.getElementById("pragh1").innerHTML=" It's never too late to quit smoking and there are many benefits to be gained no matter what age you are when you give up. Here are some quick tips to help you kick the nicotine habit."
       
        
        
          document.getElementById("head2").innerHTML="Tip 1";
        
        document.getElementById("pragh2").innerHTML="Write down all the reasons that have made you decide to quit smoking, and carry them with you in case you need reminding! People’s motivations differ but some good examples are to improve your health, to save money and because you are pregnant or wanting to become pregnant."; 


        
        
        document.getElementById("head3").innerHTML="Tip 2";
        
        document.getElementById("pragh3").innerHTML="Quitting is different for everyone, so find an approach that will work for you. This may be either the cold turkey approach (stopping suddenly and totally) or a more gradual reduction in the number of cigarettes you smoke each day.";
        
         document.getElementById("head4").innerHTML="Tip 3";
        
        document.getElementById("pragh4").innerHTML="Nicotine replacement therapy, such as nicotine patches, chewing gum or inhalers, could be a good idea for those who smoke heavily or who feel they may need the extra help. Some products are available on the PBS. There are also oral prescription medicines, such as varenicline (brand name Champix) and bupropion (brand names Prexaton and Zyban) that can help you quit by reducing withdrawal symptoms and the urge to smoke. Talk to your doctor about what would be best for you.";
        
         document.getElementById("head5").innerHTML="Tip 4";
        
        document.getElementById("pragh5").innerHTML="Set a date to quit — and stick to it. Make it sooner rather than later. If you are quitting by yourself, it is recommended that you stop smoking completely on your quit date.";
        
         document.getElementById("head6").innerHTML="Tip 5";
        
        document.getElementById("pragh6").innerHTML="Get as much support as you can from family, friends and work colleagues. Let them know you are planning to quit, and ask smokers not to smoke around you or offer you cigarettes. Quitting with a friend can also be an excellent idea — you can share your feelings and encourage each other.";
    }