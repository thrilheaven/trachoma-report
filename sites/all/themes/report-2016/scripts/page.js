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