 $(".scrollable").click(function() {
     var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 2000);
}); 

