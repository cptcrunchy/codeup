$(document).ready(function() {
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "0e25dfeca63103d3a311c460a9e27548",
        id: 4726206,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
    });

});