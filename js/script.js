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

  var infowindow = new google.maps.InfoWindow({
    content: "My school's parking lot",
  });
  infowindow.open(map, marker);

for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
