(function($) {
    var fixHeader = function() {
        var scrollPoint = $(window).scrollTop(),
            headerHeight = $('.report__title__heading').height();

        if (scrollPoint > headerHeight) {
            $('.report__header')
                .addClass('js-report__header');
        } else {
            $('.report__header')
                .removeClass('js-report__header');
        }
    };

    $(document).on('ready', function() {
        fixHeader();
    });

    $(document).on('scroll', function() {
        fixHeader();
    })
})(jQuery);

/*
 Scroll to functionality
 */

(function($) {
    var slowScroll = function(target, speed) {
        $('html, body')
            .stop()
            .animate(
                {scrollTop: $(target).offset().top},
                speed
            );
    };

    $(document).ready(function() {
        $('a[href^="#"]').click(function(event) {
            var link = $(event.currentTarget),
                target = link.attr('href'),
                speed = link.hasClass('main-navigation__item') ? 250 : 1000;

            if (target.length) {
                event.preventDefault();
                slowScroll(target, speed);
            }
        });

    });
})(jQuery);


(function($) {
    $(document).ready(function() {
        $('.download__title').mouseenter(function(e) {
            var download = $('.download__list'),
                language = $('.language__list');
            language.hide();
            download.show();
        });

        $('.download').mouseleave(function(e) {
            var download = $('.download__list');
            download.hide();
        });

        $('.language__title').mouseenter(function(e) {
            var language = $('.language__list'),
                download = $('.download__list');
            download.hide();
            language.show();
        });

        $('.language').mouseleave(function(e) {
            var language = $('.language__list');
            language.hide();
        });
    });
})(jQuery);
