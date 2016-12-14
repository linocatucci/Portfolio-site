$(document).ready(function () {

    /* Sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');

        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    /* scroll on buttons */
    /* select the class .js--scroll-to-plan when clicked on it, the next part */
    /* will happen -> an animation which scrolls to the top of the js--section-plans */
    /* with an offset op 1 second */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);

    });

    /* scroll on buttons */
    /* select the class .js--scroll-to-start when clicked on it, the next part */
    /* will happen -> an animation which scrolls to the top of the js--section-features */
    /* with an offset/animation van / op 1 second */
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-features').offset().top
        }, 1000);

    });


    /* navication scroll */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });

    /* animations on scroll */
    $('.js--wp1').waypoint(function (direction) {
        $('.js--wp1').addClass('animated fadeIn');
    }, {
        offset: '50%'

    });
    $('.js--wp2').waypoint(function (direction) {
        $('.js--wp2').addClass('animated fadeInUp');
    }, {
        offset: '50%'

    });
    $('.js--wp3').waypoint(function (direction) {
        $('.js--wp3').addClass('animated fadeIn');
    }, {
        offset: '50%'

    });
    $('.js--wp4').waypoint(function (direction) {
        $('.js--wp4').addClass('animated pulse');
    }, {
        offset: '50%'

    });

    /* mobile navigation */

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});
