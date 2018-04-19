 
document.addEventListener('DOMContentLoaded', function() {
   var map = L.map('map').setView([37.75,-122.45], 12);
    L.esri.basemapLayer("Topographic").addTo(map);
L.esri.dynamicMapLayer({
    url: "https://mapservices.nps.gov/arcgis/rest/services/LandResourcesDivisionTractAndBoundaryService/MapServer",
    opacity: 1
  }).addTo(map);
})