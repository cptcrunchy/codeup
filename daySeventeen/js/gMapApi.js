(function() {
    "use strict";

    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 29.426791, lng: -98.489602 },
        zoom: 19,
        mapOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'styled_map']
        }
    });


    var address = "One UTSA Circle";

    function geocodeIt(address) {
        var geocoder = new google.maps.Geocoder();
        geocoeer.geocode({ address: address }, function(results, status) {
            console.log(status);
            console.log(results[0].geometry.location.lng());

            if (status === "OK") {
                map.setCenter(results[0].geometry.location);
            }
        })
    }


})();