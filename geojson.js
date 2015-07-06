var coorsField = {"type": "Feature",
  "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-104.99404, 39.75621]
      }
  };




var myLines = [{
"type": "LineString",
"coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
"type": "LineString",
"coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];




// var treeStyle = {
// "color": "#78AB46",
// "weight": 5,
// "opacity": 0.65
// };
//
// var civilStyle = {
//   "color": "#ff7800",
//   "weight": 5,
//   "opacity": 0.65
// };

var tourStyle = {
  "color": "#78AB46",
  "weight": 5,
  "opacity": 0.65
};

var states = [{
"type": "Feature",
"properties": {"party": "Republican"},
"geometry": {
    "type": "Polygon",
    "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
}
}, {
"type": "Feature",
"properties": {"party": "Democrat"},
"geometry": {
    "type": "Polygon",
    "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
}
}];


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


// var treeSpecimens = ({"type":"FeatureCollection",
//   "totalFeatures":13,
//   "features":[{
//     "type":"Feature",
//     "id":"Specimen_Tree_points.1",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.321190077409,33.7929151790267]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Calhoun Oak",
//       "Tree_Info":"This white oak located on the front lawn of Emory Hospital was named for Dr. Phinizy Calhoun, Jr., the son of the region's first eye and ear specialist, Abner W. Calhoun. Calhoun, Jr. was credited with bringing modern ophthalmology to Georgia. He was the",
//       "Tree_ID":1}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.2",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32435913430537,33.792891017002525]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"American Holly",
//       "Tree_Info":"Located at North Kilgo near Asbury Circle, the American Holly was moved here from the site of the new Candler Library addition. This yellow-berried variety was probably purchased in the 40's or early 50's.",
//       "Tree_ID":2}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.3",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32761541402256,33.79145336765085]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"East Palatka Holly",
//       "Tree_Info":"Located at the corner of Dickie and Eagle Row, and believed to be an offspring of the original East Palatka Holly which was brought to campus by Bishop Warren CandlerÃ¢Â€Â™s wife. She had discovered a young sprout of an East Palatka Holly growing in a crotc",
//       "Tree_ID":3}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.4",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32552239241117,33.790425152699775]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"White Oak",
//       "Tree_Info":"Located on the end of the Quadrangle near White Hall and the Administration Building, this oak was planted to commemorate the inauguration of Dr. James Wagner as President of Emory University. The White Oak is the state tree of Maryland, Dr. Wagner's nat",
//       "Tree_ID":4}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.5",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32392649308812,33.790905076124346]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Overcup Oak",
//       "Tree_Info":"The Overcup Oak was planted in front of Bowden Hall to commemorate the presidency of Dr. William Chace, who assumed leadership of the university as the 18th president in July 1994 until he retired in 2003. Chace was president during what was perhaps the",
//       "Tree_ID":5}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.6",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32439693092094,33.79060048437911]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Oak",
//       "Tree_Info":"The Oak in front of Carlos Hall was donated by vice president and deputy to the president Dr. Gary Hauk in memory of his son Thomas. Dr. Hauk has served in senior administrative positions for more than twenty years.",
//       "Tree_ID":6}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.7",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.3249166000246,33.79033226073309]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Pecan Tree",
//       "Tree_Info":"Located outside of on the Quadrangle, the pecan tree is believed to have been planted at the request of Bishop Warren Candler's wife Mrs. Antoinette (Nettie) Candler.",
//       "Tree_ID":7}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.8",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32525575267192,33.789259358492814]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Baker Woodlands",
//       "Tree_Info":"Located between Fishburne Drive and South Kilgo Circle, the Baker Woodlands were named for the late Woolford B. Baker, beloved professor of biology and protector of Emory's natural resources. Baker Woodland is a wonderful example of a Piedmont hardwood f",
//       "Tree_ID":8}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.9",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32509164663918,33.78855014439466]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Water Oaks",
//       "Tree_Info":"Four massive oaks are located in the front and on side of Glenn Memorial Sanctuary. These oaks were most likely moved from a local site shortly after construction and, as a result, are probably older than Glenn Memorial.",
//       "Tree_ID":9}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.10",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32249329932426,33.789691248542916]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Shumard Oaks",
//       "Tree_Info":"Three Shumard oaks are located on the south side of the Goizueta Business School. They were moved here from the site of the Whitehead Biomedical Research building when they were approximately 12 inches diameter.",
//       "Tree_ID":10}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.11",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32318254520074,33.79123694394329]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"White Oak",
//       "Tree_Info":"This white oak is located in Beckham Grove.",
//       "Tree_ID":11}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.12",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32352169784807,33.791668824017805]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Ginkgo Tree",
//       "Tree_Info":"The Ginkgo located at the Asbury side of Callaway was planted as a gift to Emory from Jean Porter, who retired in 2002 after nearly 50 years at Emory. Porter served as director of the Emory Well House from its inception in 1986 until her retirement this",
//       "Tree_ID":12}
//     },
//     {"type":"Feature",
//     "id":"Specimen_Tree_points.13",
//     "geometry":{
//       "type":"Point",
//       "coordinates":[-84.32397572525727,33.79146424951728]},
//     "geometry_name":"the_geom",
//     "properties":{
//       "Tree_Name":"Sugar Maple",
//       "Tree_Info":"This sugar maple was planted by as a class tree in 2005 outside of the Callaway Center on the corner of the Quadrangle following convocation.",
//       "Tree_ID":13}
//     }],
//     "crs":{"type":"name",
//       "properties":{"name":"urn:ogc:def:crs:EPSG::4326"}
//       }
//   });
