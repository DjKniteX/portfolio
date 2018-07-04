
function relocate_linkedin() {
    location.href = "https://www.linkedin.com/in/nikki-xaysanasy-8b8565a1/"
}

function relocate_github() {
    location.href = "https://github.com/djknitex"
}

function relocate_email() {
    location.href = "mailto:nxaysanasy@gmail.com"
}

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