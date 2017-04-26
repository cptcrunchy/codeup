$(document).ready(function() {

    "use strict";

    var url = "data/inventory.json";
    var options = {
        "data": {
            title: "title",
            categories: "categories",
            quantity: "quantity",
            price: "price"
        }
    }

    function writeNames(data) {
        data.forEach(function(el) {
            var html = '<tr><td>' +
                el.title + '</td><td>' +
                el.quantity + '</td><td>$' +
                el.price + '</td><td>' +
                el.categories[0] + '</td></tr>'

            $('#insertProducts').append(html);

        });
    }


    $.ajax(url).done(function(data) {
        writeNames(data);
    });





    // TODO: Create an ajax GET request for /data/inventory.json

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
});