$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('header').addClass('white');
        $('header').addClass('shadow-sm');
    }
    else {
        $('header').removeClass('white');
        $('header').removeClass('shadow-sm');
    }
})