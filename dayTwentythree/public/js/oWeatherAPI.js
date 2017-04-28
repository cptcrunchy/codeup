$(document).ready(function() {

    $.get("http://api.openweathermap.org/data/2.5/forecast/daily?id={4726206}&cnt=3", {
        APPID: "0e25dfeca63103d3a311c460a9e27548",
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        // Stattion Name
        var stationId = data.city.name;
        $('#station').append(stationId);

        var forecast = data.list;
        // console.log(forecast);
        //Wind Direction in Compass Format
        function getDirection(dir) {
            var compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            var result = Math.floor((360 - dir) / 22.5);
            return compass[result];
        }
        //Forecast Variables
        var html = [];
        $.each(forecast, function(i, v) {
            html.push("<div class='col-xs-4 wInfo'>" + "<div class='title'>High / Low</div>");
            html.push("<div class='cTemp'>" + (Math.ceil(forecast[i].temp.max)) + '&deg;');
            html.push(" / " + (Math.ceil(forecast[i].temp.min)) + '&deg;' + "</div>");
            html.push("<div class='tempIcon'>" + "<img src='http://openweathermap.org/img/w/" + forecast[i].weather[0].icon);
            html.push(".png' alt=''></div>" + "<div class='conditions' id='castId'>" + '<span class="cond">' + forecast[i].weather[0].main);
            html.push("</span>: " + "<span>" + forecast[i].weather[0].description + '</span>' + "</div>");
            html.push("<div class='conditions'>" + "<span class='cond'>Humidity: </span>" + "<span>" + forecast[i].humidity + "&#37;</span></div>");
            html.push("<div class='conditions'>" + "<span class='cond'>Wind: </span>" + "<span>" + (Math.floor(forecast[i].speed)));
            html.push(" mph / " + getDirection(forecast[i].deg) + "</span></div>" + "<div class='conditions'>");
            html.push("<span class='cond'>Pressure: </span>" + "<span>" + forecast[i].pressure + "</span></div>" + "</div>");
        });
        $('#forecast').append(html.join(""));
    });



});