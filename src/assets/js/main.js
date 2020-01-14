$(document).ready(function(){
    $('.content__skills-circle').circleProgress({
        animation: false,
        size: 150,
        fill: {gradient: ["#54B689", "#69e0aa"]}
    });

    $('.header__navbar a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 1000);
    });

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
});