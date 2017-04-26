$(document).ready(function() {

    "use strict";

    // var url = "../data/inventory.json";

    $.getJSON("inventory", function(el) {
        console.log(el);
    })

    // var options = {
    //     "data": {
    //         title: "title",
    //         categories: "categories",
    //         quantity: "quantity",
    //         price: "price"
    //     }
    // }

    // function writeNames(data) {
    //     data.forEach(function(el) {
    //         var html = '<tr><td>' +
    //             el.title + '</td><td>' +
    //             el.quantity + '</td><td>$' +
    //             el.price + '</td><td>' +
    //             el.categories[0] + '</td></tr>'

    //         $('#insertProducts').append(html);

    //     });
    // }

    // $.ajax(url).done(function(data) {
    //     writeNames(data);
    // });


});