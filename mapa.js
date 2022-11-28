var map = L.map('map', {
    center: [-8.063, -34.873],
    zoom: 16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-8.063, -34.873]).addTo(map);
marker.bindPopup("<b>ETE Porto Digital</b><br>Av. Rio Branco").openPopup();