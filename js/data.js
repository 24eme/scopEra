// https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038369660&dateTexte=&categorieLien=id
// https://www.coordonnees-gps.fr/
var marker = L.icon({
    iconUrl: 'css/img/marker.png',
    iconSize: [35, 30],
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
        "arrondisement": "Baseball Stadium",
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
        "arrondisement": "Baseball Stadium",
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
        "arrondisement": "Baseball Stadium",
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
        "arrondisement": "Baseball Stadium",
        "secteur": "",
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

L.geoJSON(scops, {
    onEachFeature: onEachFeature
}).addTo(map);

//Pour moi filtrage
// function checkScop(filtrage) {
//   return dd >= document.getElementById("").value;
// }
//
// function myFunction() {
//   document.getElementById("demo").innerHTML = secteur.filter(checkScop);
// }
//
