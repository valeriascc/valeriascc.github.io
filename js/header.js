$(document).scroll(function(){
    if ($(document).scrollTop() >= 700) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});