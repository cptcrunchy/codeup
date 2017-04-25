$(document).ready(function() {


    $('.btn-default').click(function() {
        $('dd').toggleClass('invisible');
        ($('dd').hasClass('invisible')) ?
        $(this).html('<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Show'): $(this).html('<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Hide');

    });


    $('.btn-2').click(function() {
        $('.parks').each(function(index, el) {
            $(el).children().last().css('background-color', 'rgb(255,255,0)');
        });
    });


    $('h3').click(function() {
        $(this).next().css('font-weight', 'bold');
    });


    $('li').click(function() {

        $(this).parent().children().first().css('color', '#00f');

    });



});