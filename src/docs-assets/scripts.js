/*
Scripts for docs.html page
 */

jQuery(document).ready(function($) {

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