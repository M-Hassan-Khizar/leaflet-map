// Map initialization
var map = L.map("map").setView([30.3753, 69.3451], 6);

// Leaflet map with OSM layer
var tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Adding a marker
var marker = L.marker([30.3753, 69.3451], {
    draggable: true,
    title: "This is hover text for marker",
    opacity: 0.5
}).addTo(map).bindPopup("<h1>Marker </h1><p>This is the marker text</p><img src='./img/red-marker.png'c/>").openPopup();
