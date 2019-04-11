/*
Scripts for docs.html page
 */

jQuery(document).ready(function($) {

    var browserData = browserDetect();
    var fallBackCss = false;
    var browserVersion;
    if (browserData.name === 'chrome') {
        browserVersion = browserData.version.split('.')[0];
        if (browserVersion < 26) {
            fallBackCss = true;
        }
    } else if (browserData.name === 'firefox') {
        browserVersion = browserData.version.split('.')[0];
        if (browserVersion < 16) {
            fallBackCss = true;
        }
    } else if (browserData.name === 'ie') {
        browserVersion = browserData.version.split('.')[0];
        if (browserVersion < 10) {
            fallBackCss = true;
        }
    } else if (browserData.name === 'opera') {
        browserVersion = browserData.version.split('.')[0];
        if (browserVersion < 30) {
            fallBackCss = true;
        }
    }
    if (fallBackCss) {
        $('body').addClass('mw-fallback-css');
    }

    $('.navigation a').click(function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.section.visible').removeClass('visible');
        $(target).addClass('visible');
    });

    $('.submenu a').click(function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.section.visible .subsection.visible').removeClass('visible');
        $(target).addClass('visible');
    });

});