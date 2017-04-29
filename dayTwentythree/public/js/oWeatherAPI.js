$(document).ready(function() {
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=4726206&cnt=3", {
        APPID: "0e25dfeca63103d3a311c460a9e27548",
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        // function getLocation(lat, lng) {
        //     $.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=4726206&cnt=3", {
        //         APPID: "0e25dfeca63103d3a311c460a9e27548",
        //         cnt: "3",
        //         lat: lat,
        //         lon: lng,
        //         units: "imperial"
        //     }).done(function(data) {
        //         getForecast(data);
        //     });
        // }
        // getLocation(29.423017, -98.48527);
        // Stattion Name
        var stationId = data.city.name;
        $('#station').append(stationId);

        var forecasts = data.list;
        // console.log(forecasts);

        //Wind Direction in Compass Format
        function getDirection(dir) {
            var compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            var result = Math.floor((360 - dir) / 22.5);
            return compass[result];
        }
        //Forecast Variables

        var content = [];

        function getForecast(forecast) {
            $.each(forecast, function(i, v) {
                content.push("<div class='col-xs-4 wInfo'>" + "<div class='title'>High / Low</div>");
                content.push("<div class='cTemp'>" + (Math.ceil(forecast[i].temp.max)) + '&deg;');
                content.push(" / " + (Math.ceil(forecast[i].temp.min)) + '&deg;' + "</div>");
                content.push("<div class='tempIcon'>" + "<img src='http://openweathermap.org/img/w/" + forecast[i].weather[0].icon);
                content.push(".png' alt=''></div>" + "<div class='conditions' id='castId'>" + '<span class="cond">' + forecast[i].weather[0].main);
                content.push("</span>: " + "<span>" + forecast[i].weather[0].description + '</span>' + "</div>");
                content.push("<div class='conditions'>" + "<span class='cond'>Humidity: </span>" + "<span>" + forecast[i].humidity + "&#37;</span></div>");
                content.push("<div class='conditions'>" + "<span class='cond'>Wind: </span>" + "<span>" + (Math.floor(forecast[i].speed)));
                content.push(" mph / " + getDirection(forecast[i].deg) + "</span></div>" + "<div class='conditions'>");
                content.push("<span class='cond'>Pressure: </span>" + "<span>" + forecast[i].pressure + "</span></div>" + "</div>");
            });
            $('#forecast').append(content.join(""));
        }
        getForecast(forecasts);
    });

    // function getLocation(lat, lng) {
    //     $.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=4726206&cnt=3", {
    //         APPID: "0e25dfeca63103d3a311c460a9e27548",
    //         cnt: "3",
    //         lat: lat,
    //         lon: lng,
    //         units: "imperial"
    //     }).done(function(data) {
    //         getForecast(data);
    //     });
    // }
    // getLocation(29.423017, -98.48527);


    // function createMarker(lat, lon) {
    //     var marker = new google.maps.Marker({
    //         position: {
    //             lat: lat,
    //             lng: lon
    //         },
    //         map: mapCode,
    //         draggable: true,
    //         animation: google.maps.Animation.DROP
    //     });
    //     marker.addListener('dragend', function() {
    //         var lat = this.position.lat();
    //         var lng = this.position.lng();
    //     });
    // }
    // $('#address-btn').click(codeAddress);

});