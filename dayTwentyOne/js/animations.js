$(document).ready(function() {
    "use strict";
    // TODO: "Move It" should move the box 100 pixels to the left

    $('#btn-move').click(function() {
        $('#animate-box').animate({
            left: "+=100px"
        }, 600);
    });

    // TODO: "Scale It" should expand the box width by 50%
    $('#btn-scale').click(function() {
        $('#animate-box').animate({
            width: '50%'
        }, 600);
    });
    // TODO: "Hide It" should use opacity to make the box invisible
    $('#btn-hide').click(function() {
        $('#animate-box').animate({
            opacity: '0'
        }, 600);
    });
    // TODO: "Show It" should make the box appear
    $('#btn-show').click(function() {
        $('#animate-box').animate({
            opacity: '1'
        }, 600);
    });
    // TODO: "Animate All" should use an animation stack to:
    $('#btn-all').click(function() {
        $('#animate-box').animate({
            left: '0',
            width: '250px',
            opacity: '1'
        }, 600);
    });

});