jQuery(document).ready(function($) {

    $('.navigation a').click(function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.section.visible').removeClass('visible');
        $(target).addClass('visible');
    });

});