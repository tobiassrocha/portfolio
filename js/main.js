$(document).ready(function () {

    verifyTheme();

    // call to circles progress skills
    $('.content__skills-circle').circleProgress({
        animation: false,
        size: 150,
        fill: { gradient: ["#54B689", "#69e0aa"] },
        emptyFill: "#e5e5e5"
    });

    // animation main menu anchor
    $('.header__navbar a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });

    // show and hide menu mobile
    $('.js-menu').click(function () {
        var self = $('.js-container-menu');

        if (self.hasClass('active')) {
            self.removeClass('active');
            self.slideUp();
        } else {
            self.addClass('active');
            self.slideDown();
        }
    });

    // function scroll back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.js-back-to-top').fadeIn();
        } else {
            $('.js-back-to-top').fadeOut();
        }
    });

    // function scroll back to top
    $('.js-back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // change site theme
    $('.js-change-theme').click(function () {
        var body = $('body');

        if (body.hasClass('dark-mode')) {
            body.removeClass('dark-mode');
            localStorage.setItem('tobaias-last-theme', 'clear');
        } else {
            body.addClass('dark-mode');
            localStorage.setItem('tobaias-last-theme', 'dark');
        }
    });

    // verify theme and add the correctly after refresh the page
    function verifyTheme() {
        var theme = localStorage.getItem('tobaias-last-theme');
        var body = $('body');
        var input = $('.js-change-theme');

        if (theme == 'clear') {
            body.removeClass('dark-mode');
        } else {
            body.addClass('dark-mode');
            input.attr('checked', 'checked');
        }
    }
});