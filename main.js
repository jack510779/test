var map = L.map('map').setView([22.98152659492633, 120.22505780791008], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// to get the height of the window
var height = $(window).height();
console.log(`the height of the pc is: ` + height);

var street = {"type":"FeatureCollection", "features": [
    {"type":"Feature","geometry":{"type":"Point","coordinates":[22.98152659492633, 120.22505780791008]},"properties":{"ele":969.947449,"time":"2019-05-13T00:00:00.000Z","Name":"SL1","Power_Watt":30,"pole_hgt":18}},
 
	]};
	
var s_light_style = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(street, {
    onEachFeature : function(feature, layer){
        var popupContent =  '<h4 class = "text-primary">Street Light</h4>' +
                            '<div class="container"><table class="table table-striped">' +
                            '<thead><tr><th>Properties</th><th>Value</th></tr></thead>' +
                            '<tbody><tr><td> Name </td><td>'+ feature.properties.Name +'</td></tr>' +
                            '<tr><td>Elevation </td><td>' + feature.properties.ele +'</td></tr>' +
                            '<tr><td> Power (watt) </td><td>' + feature.properties.Power_Watt + '</td></tr>' +
                            '<tr><td> Pole Height </td><td>' + feature.properties.pole_hgt + '</td></tr>' +
                            '<tr><td> Time </td><td>' + feature.properties.time + '</td></tr>';
        layer.bindPopup(popupContent)
	},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, s_light_style);
    }
}).addTo(map);
