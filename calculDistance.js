
// Les coordonnées 1, 2 et 3
// 1 Paris près place Vendôme
// 2 Marseille
// 3 St Denis Basilique
var la1 = 48.866667;
var ln1 = 2.333333;

var la2 = 43.296482;
var ln2 = 5.3697799;

var la3 = 48.935459;
var ln3 = 2.359835;


// Fonction 1 - La Terre est ronde (si j'te jure)
function getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lng2-lng1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return (deg * Math.PI)/180
}
console.log(getDistanceFromLatLonInKm(la1,ln1,la3,ln3));