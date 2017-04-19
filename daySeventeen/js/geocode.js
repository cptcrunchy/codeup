 (function() {

 var address = 'one utsa blvd san antonio tx'

 var geocoder;
 var mapcode;
 // var mapZoom = '';

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

 // function zoomIn() {

 // }

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
             });
         } else {
             alert('Geocode was not successful for the following reason: ' + status);
         }
     });
 }


 // document.getElementById('zoomIn').addEventListener('click', function(e) {
 //     console.log(e);
 // });
 var submit = document.getElementById('submit').addEventListener('click', codeAddress);

 });

 })();