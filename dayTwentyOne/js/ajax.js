$(document).ready(function() {
    "use strict";
    var url = "http://swapi.co/api/people";
    var options = {
        "data": {
            name: "names",
            gender: "gender"
        }
    }

    function writeNames(names) {
        names.results.forEach(function(el) {
            console.log(names.results);
            $('.names').append('<li>' + el.name + " " + el.gender + '</li>');
        });
    }


    $.ajax(
        url, options).done(function(data) {
        writeNames(data);

    });


});