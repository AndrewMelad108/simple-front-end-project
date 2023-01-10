/* تحديد زمن دوران الاسليد*/
$(document).ready(function(){

    $('.carousel').carousel({
        interval:5000
    });
    // show color option div click on the gear//
    $(".gear-check").click(function()
    {
        $(".color-option").fadeToggle();
    });
    //click themes color//
    var colorLi= $(".color-option ul li");
    colorLi
    .eq(0).css("backgroundColor","#e62929").end()
    .eq(1).css("backgroundColor","#ff0081").end()
    .eq(2).css("backgroundColor","#10ea02").end()
    .eq(3).css("backgroundColor","#b001dc");


    colorLi .click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        //console.log($(this).attr("data-value"))
    });
    //Caching the scroll top element

    var scrollButton=$(".scroll"); ///لازم يكون المكان اللي يتعمل بيه الكاش الاب 

    $(window).scroll(function()
    {
        console.log($(this).scrollTop());
        if($(this).scrollTop()>=1000)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide(); 
        }

    });
    scrollButton.click(function(){
        $("html,body").animate({scrollTop:0},700);
        });

});
