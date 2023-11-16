var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.690948, lng: -87.718256 },
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: { lat: 41.690948, lng: -87.718256 },
    map: map,
  });
