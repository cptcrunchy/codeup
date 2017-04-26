$(document).ready(function() {

    "use strict";

    var url = "data/store/";
    var options = {
        "data": {
            title: "title",
            categories: "categories",
            quantity: "quantity",
            price: "price"
        }
    }

    function writeNames(data) {
        data.each(function(el) {
            console.log(el);
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