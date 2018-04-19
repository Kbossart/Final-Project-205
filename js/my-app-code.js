 
document.addEventListener('DOMContentLoaded', function() {
   var map = L.map('map').setView([43.8041,-120.5542], 12);
    L.esri.basemapLayer("Topographic").addTo(map);
L.esri.dynamicMapLayer({
    url: "https://mapservices.nps.gov/arcgis/rest/services/LandResourcesDivisionTractAndBoundaryService/MapServer",
    opacity: 1
  }).addTo(map);
})

map.on('mousemove', showLatLng);

function showLatLng(e) {
  document.getElementById("").innerText = (e.latlng.lat).toFixed(5) + " | " + (e.latlng.lng).toFixed(5);
}
document.getElementById("").onclick = function(){
  map.setView([43.8041,-123.5542], 16);
};
var map = L.map('map')
L.esri.featureLayerService({
  url: https//gis.blm.gov/orarcgis/rest/services/Facility/BLM_OR_Recreation_Site/MapServer>opacity:1
  }).addTo(map);

map.on('click', onMapClick);

