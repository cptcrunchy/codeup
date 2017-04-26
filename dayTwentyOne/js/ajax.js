$(document).ready(function() {
    "use strict";
    var url = "http://swapi.co/api/people";

    function writeNames(names) {
        data.results.forEach(function(el) {
            $('.names').append('<li>' + el.name + '</li>');
        });
    }


    $.ajax(url, {
        'data': {
            'name': 'Jason',
            'age': 32,
        },
        'type': 'GET'
    }).done(function(data) {


    });



});