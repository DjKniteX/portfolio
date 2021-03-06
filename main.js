
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
});



function relocate_linkedin() {
    location.href = "https://www.linkedin.com/in/nikki-xaysanasy-8b8565a1/"
}

function relocate_github() {
    location.href = "https://github.com/djknitex"
}

function relocate_email() {
    location.href = "mailto:nxaysanasy@gmail.com"
}
function relocate_portfolio() {
    location.href = "#portfolio"
}
function relocate_blog() {
    location.href = "https://blog.nikkix.me"
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

$("nav").find("a").click(function(e){
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
