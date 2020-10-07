require('https://maps.googleapis.com/maps/api/js?key=AIzaSyDatb-OuXM3HnUrSN3LBEiV4vWLgD_sTj0&libraries=geometry')

var p1 = new google.maps.LatLng(45.463688, 9.18814);
var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);

function calculateDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

console.log(calculateDistance(p1,p2));