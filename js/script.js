$(document).ready(function() {
    $('.burger__mune').click(function(event) {
        $('.burger__mune,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.reviews__slider').slick({
        dots:true,
        arrows:false
    });
});

