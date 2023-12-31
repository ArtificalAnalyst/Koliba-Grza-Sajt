/*
'use strict';
(function ($) {
    $(window).on('load', function () {
        $(".stm-header").sticky({topSpacing: 0});
    });
})(jQuery);*/

'use strict';

(function ($) {
    'use strict';
    var holder_created = false;
    var element_name = '.stm-header__row_color_' + stm_sticky;
    var $element = $(element_name);
    var elH = $element.outerHeight();
    var currentScrollPosition = 0;
    var scrollDirection = 'bottom';
    var lastScroll = 0;
    var elementTopPosition = 0;
    var thresHold = 400;
    var thresHoldMinus = 200;
    var $holder = $('.hotello_sticky_holder');

    $(document).ready(function () {
        if (typeof stm_sticky !== 'undefined') {
            $element.addClass('hotello_is_sticky');
            create_holder($element, elH);

            stm_sticky_header();
        }
    });

    $(window).on( "load", function() {
        stm_sticky_header();
    });

    $(window).on( "scroll", function() {
        stm_sticky_header();
    });

    function stm_sticky_header() {
        var windowW = window.innerWidth;
        if ($element.length && windowW > 1024) {
            elementTopPosition = $element.offset().top;
            currentScrollPosition = $(document).scrollTop();
            if (currentScrollPosition > lastScroll) {
                scrollingBottom();
            } else {
                scrollingTop();
            }
            lastScroll = currentScrollPosition;
        }

        if (windowW < 1025) {
            $element.removeClass('hotello_is_sticky');
        }
    }

    function create_holder($element, elH) {
        if (!holder_created) {
            var holder = '<div class="hotello_sticky_holder hidden" style="height:' + elH + 'px"></div>';
            $element.before(holder);
            holder_created = true;
        }
    }

    function scrollingBottom() {
        if (currentScrollPosition > thresHold - thresHoldMinus) {
            $element.addClass('hotello_going_sticky');
            $('.hotello_sticky_holder').removeClass('hidden');
        }

        if (currentScrollPosition > thresHold) {
            $element.addClass('hotello_sticked');
        }
    }

    function scrollingTop() {
        if (currentScrollPosition < thresHold) {
            $element.removeClass('hotello_sticked hotello_going_sticky');
            $('.hotello_sticky_holder').addClass('hidden');
        }
    }
})(jQuery);