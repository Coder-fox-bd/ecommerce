var center = [24.000484790799824, 90.42031288146974]
var mymap = L.map('map').setView(center, 10);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiY29kZXJmb3hiZCIsImEiOiJja2I5ajBpazIwZWxiMnVudmdhazZ3MGpzIn0.6MCbxjs5bc2y53Gl9vGV0A'
// }).addTo(mymap);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
// }).addTo(mymap);

// Note that difference in the "lyrs" parameter in the URL:
// Hybrid: s, h;
// Satellite: s;
// Streets: m;
// Terrain: p;

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(mymap);

var marker = L.marker(center, {
    draggable: true
}).addTo(mymap);
marker.bindPopup("<b>Drage it Or click on the map.</b>").openPopup();

var popup = L.popup();

marker.on('dragend', function (e) {
    updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});

function updateLatLng(lat, lng, reverse) {
    if (reverse) {
        marker.setLatLng([lat, lng]);
        mymap.panTo([lat, lng])
    } else {
        document.getElementById('latitude').value = marker.getLatLng().lat;
        document.getElementById('longitude').value = marker.getLatLng().lng;
        mymap.panTo([lat, lng])
    }
}

mymap.on('click', function (e) {
    marker.setLatLng(e.latlng);
    updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});

// // Tracking Location with ip address
// var HttpClient = function () {
//     this.get = function (aUrl, aCallback) {
//         var anHttpRequest = new XMLHttpRequest();
//         anHttpRequest.onreadystatechange = function () {
//             if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
//                 aCallback(anHttpRequest.responseText);
//         }

//         anHttpRequest.open("GET", aUrl, true);
//         anHttpRequest.send(null);
//     }
// }

// var ip_request = new HttpClient();
// ip_request.get('https://get.geojs.io/v1/ip.json', function (response) {
//     // do something with response
//     var ip = JSON.parse(response);
//     console.log(ip);
//     var address_request = new HttpClient();
//     address_request.get('https://get.geojs.io/v1/ip/geo/' + ip.ip + '.json', function (response) {
//         // var address = JSON.parse(response);
//         var address = JSON.parse(response);
//         console.log(address);
//     });
// });
// Tracking location with geolocation
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
    var tracked_position = [position.coords.latitude, position.coords.longitude];
    marker.setLatLng(tracked_position);
    mymap.flyTo(tracked_position, 15);
}

// function reverseGeocode(platform) {
//     var lat = 23.9685564;
//     var long = 90.385752;
//     var proxy = "'" +lat+ "," +long+"'";
//     var geocoder = platform.getGeocodingService(),
//         parameters = {
//             prox: proxy,
//             mode: 'retrieveAddresses',
//             maxresults: '1',
//             gen: '9'
//         };

//     geocoder.reverseGeocode(parameters,
//         function (result) {
//             console.log(result);
//         }, function (error) {
//             console.log(error);
//         });
// }

// reverseGeocode()