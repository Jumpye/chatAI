$(".totop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('.totop').fadeIn("fast");
    } else {
        $('.totop').stop().fadeOut("fast");
    }
});

