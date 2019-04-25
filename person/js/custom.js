/*
 Template Name: Snappy
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: 
 License URI: license/
 */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });


    $("#toggle").click(function () {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

});




