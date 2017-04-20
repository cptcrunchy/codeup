 (function() {

     var geocoder;
     var mapcode;
     var cookhouse = { lat: 29.453066, lng: -98.4851513 };


     var marker2 = new google.maps.Marker({
         position: cookhouse,
         map: mapcode
     });

     function initialize() {
         geocoder = new google.maps.Geocoder(); //Creates a new geocoder instance
         var latlng = new google.maps.LatLng(29.426791, -98.489602); //Set starting latlng
         var mapOptions = {
             zoom: 18,
             center: latlng,
             disableDefaultUI: true,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             scaleControl: true
         }
         mapcode = new google.maps.Map(document.getElementById('map'), mapOptions);
         //Links google map API to HTML
     }
     initialize();


     function codeAddress() {
         var address = document.getElementById('address').value;
         geocoder.geocode({
             'address': address
         }, function(results, status) {
             if (status == 'OK') {
                 mapcode.setCenter(results[0].geometry.location); //This line is equal to map:
                 // Setting markers on map
                 var marker = new google.maps.Marker({
                     map: mapcode, //The second element is the var mapcode
                     position: results[0].geometry.location,
                     draggable: true
                 });
                 marker.setMap(mapcode);

             } else {
                 alert('Geocode was not successful for the following reason: ' + status);
             }
         });
     }

     // Reads and sets the Zoom of the map when the slider is changed
     function getUserZoom(resultsMap) {
         var zoom = document.getElementById("zoom-slide").value;
         resultsMap.setZoom(Number(zoom));
     }

     // EVENT LISTENERS //


     document.getElementById('zoom-slide').addEventListener('change', function() {
         getUserZoom(mapcode);
     })
     var submit = document.getElementById('submit').addEventListener('click', codeAddress);



 })();