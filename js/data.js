
var marker = L.icon({
    iconUrl: '../css/img/marker.png',
    iconSize: [30, 30],
});

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
        layer.setIcon(marker).addTo(map);
    }
};

var scops = [
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.353057, 48.894436]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3414492, 48.8254034]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3414492, 48.8254034]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3414492, 48.8254034]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3414492, 48.8254034]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3414492, 48.8254034]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3414492, 48.8254034]
    }
  },
];

// var greenIcon = L.icon({
//     iconUrl: 'leaf-green.png',
//     shadowUrl: 'leaf-shadow.png',
//
//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// //
// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
//
// var myStyle = {
//     "color": "#ff7800",
//     "weight": 5,
//     "opacity": 0.65,
// };
//
// L.geoJSON(scops, {
//     style: myStyle
// }).addTo(map);
L.geoJSON(scops, {
    onEachFeature: onEachFeature
}).addTo(map);
//L.geoJSON(geojsonFeature).addTo(map);


//Pour moi filtrage
// function checkScop(filtrage) {
//   return dd >= document.getElementById("").value;
// }
//
// function myFunction() {
//   document.getElementById("demo").innerHTML = secteur.filter(checkScop);
// }
//
