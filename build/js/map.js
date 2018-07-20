var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -6.1823611,
            lng: 106.78839
        },
        zoom: 17
    });

    // var infowindow = new google.maps.InfoWindow();
    // var service = new google.maps.places.PlacesService(map);

    // service.getDetails({
    //     placeId: 'ChIJ-WuLqPb2aS4RQSPbZFEyxTQ'
    // }, function (place, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: place.geometry.location
    //         });
    //         google.maps.event.addListener(marker, 'click', function () {
    //             infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    //                 'Place ID: ' + place.place_id + '<br>' +
    //                 place.formatted_address + '</div>');
    //             infowindow.open(map, this);
    //         });
    //     }
    // });
}