$(document).ready(function() {
    "use strict";
    // var url = "http://swapi.co/api/people";
    // var options = {
    //     "data": {
    //         "name": "Jason",
    //         "age": 32
    //     }
    // }

    // function writeNames(names) {
    //     names.results.forEach(function(el) {
    //         $('.names').append('<li>' + el.name + '</li>');
    //     });
    // }


    // $.ajax(url, options).done(function(data) {
    //     writeNames();

    // });

    $.ajax({
        url: 'http://',
        data: {
            format: 'json'
        },
        error: function() {
            $('#info').html('<p>An error has occurred</p>');
        },
        dataType: 'jsonp',
        success: function(data) {
            //variables go here
        },
        type: 'GET'
    });

});