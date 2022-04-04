jQuery(document).ready(function ($) {


    $('.fa-bars').click(function () {
        $("nav").addClass('show');
    })

        $('.fa-xmark').click(function () {
        $("nav").removeClass('show');
    })

            $('a').click(function () {
        $("nav").removeClass('show');
    })

});
