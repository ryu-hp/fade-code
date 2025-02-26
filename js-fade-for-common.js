$(document).ready(function() {
    function fadeAnimation() {
        $('.js-fadeInMv, .js-fadeIn, .js-fadeInRight, .js-fadeInLeft').each(function() {
        var elemPos = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop() + windowHeight - 100;

        if (scrollPos > elemPos) {
            $(this).addClass('visible');
        }
        })
    }

    // スクロールと初期ロード時にチェックを実行
    $(window).on('scroll', fadeAnimation);
    fadeAnimation();
});