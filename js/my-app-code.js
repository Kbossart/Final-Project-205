 
document.addEventListener('DOMContentLoaded', function() {
   var map = L.map('map').setView([43.8041,-120.5542], 8);
    L.esri.basemapLayer("Topographic").addTo(map);
L.esri.dynamicMapLayer({
    url: "https://mapservices.nps.gov/arcgis/rest/services/LandResourcesDivisionTractAndBoundaryService/MapServer",
    opacity: 1
  }).addTo(map);
    L.esri.featureLayer({
  url: "https://gis.blm.gov/orarcgis/rest/services/Facility/BLM_OR_Recreation_Site/MapServer/0"
  }).addTo(map);
    L.esri.featureLayer({
  url: "https://gis.blm.gov/orarcgis/rest/services/Facility/BLM_OR_Recreation_Site/MapServer/1"
  }).addTo(map);
    L.esri.featureLayer({
  url: "https://gis.blm.gov/orarcgis/rest/services/Facility/BLM_OR_Recreation_Site/MapServer/2"
  }).addTo(map);
   L.esri.featureLayer({
  url: "https://gis.blm.gov/orarcgis/rest/services/Facility/BLM_OR_Recreation_Site/MapServer/3"
  }).addTo(map); 
   L.esri.featureLayer({
  url: "https://gis.blm.gov/orarcgis/rest/services/Facility/BLM_OR_Recreation_Site/MapServer/4"
  }).addTo(map);  
    
map.on('mousemove', showLatLng);

function showLatLng(e) {
  document.getElementById("latandlong").innerText = (e.latlng.lat).toFixed(5) + " | " + (e.latlng.lng).toFixed(5);
}
function setMapView(zoomLevel, latitude, longitude) {
  map.setView([latitude, longitude], zoomLevel);
}

function setMapView(zoomLevel, latitude, longitude) {
  map.setView([43.8041,-120.5542], 8);
}
document.getElementById("goTo").onclick=setMapView;
{
  ;
};
    function ReplacingImage() {
    document.getElementById("Oregon State Park Img").src="OSimage.jpg";
    
}
    var searchControl = L.esri.Geocoding.geosearch().addTo(map);

  var results = L.layerGroup().addTo(map);

  searchControl.on('results', function(data){
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });
    
    /*
    map.setView([43.8041,-123.5542], 16)
*/

});
