var map;
var markersArray = [];


function initMap(railsMarkers) {
          map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 0, lng: 0},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        };


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      };




      for (var i = 0; i < railsMarkers.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(railsMarkers[i]["lat"], railsMarkers[i]["lng"]),
          map: map
        });
        markersArray.push(marker);
      };

      // console.log(markersArray);
};

function removeMarkers() {
  // console.log(markersArray);
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
  // console.log(markersArray);
};



function addMarkers(railsMarkers) {
      for (var i = 0; i < railsMarkers.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(railsMarkers[i]["lat"], railsMarkers[i]["lng"]),
          setMap: map
        });
      };
       markersArray.push(marker);
};







