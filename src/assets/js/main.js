$(document).ready(function(){
    // call to circles progress skills
    $('.content__skills-circle').circleProgress({
        animation: false,
        size: 150,
        fill: {gradient: ["#54B689", "#69e0aa"]}
    });

    // animation main menu anchor
    $('.header__navbar a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 1000);
    });

    // show and hide menu mobile
    $('.js-menu').click(function(){
        var self = $('.teste');

        if (self.hasClass('active')) {
            self.removeClass('active');
            self.slideUp();
        } else {
            self.addClass('active');
            self.slideDown();
        }
    });

    // function scroll back to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.js-back-to-top').fadeIn();
        } else {
            $('.js-back-to-top').fadeOut();
        }
    });

    // function scroll back to top
    $('.js-back-to-top').click(function(){
        $('html, body').animate({
            scrollTop : 0
        },1000);
        return false;
    });
});