$(document).ready(function () {

    /* Sticky navigation */
    $('.js--section-about-myself').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');

        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    /* Sticky navigation */
    $('.js--portfolio-list').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');

        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });


    /* scroll on buttons */
    /* select the class .js--scroll-to-home when clicked on it, the next part */
    /* will happen -> an animation which scrolls to the top of the js-front-page, that is the home-page */
    /* with an offset op 1 second */
    $('.js--scroll-to-home').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-front-page').offset().top
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
    $('.js--wp2').waypoint(function (direction) {
        $('.js--wp2').addClass('animated pulse');
    }, {
        offset: '85%'

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

// Get the element id sticky-menu, when sticky-menu is there (true), show the sticky menu.
var stickymenu = document.getElementById("sticky-menu");
if (stickymenu) {
    {
        $('nav').addClass('sticky');

    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};