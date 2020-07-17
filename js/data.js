// https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038369660&dateTexte=&categorieLien=id
// https://www.coordonnees-gps.fr/
alert('la');
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
alert('la');
$("#health").click(function() {
  alert('ici');
});

var scops = $.getJSON("cooperative.json");
scops.then(function(data) {
      var allscops = L.geoJson(data);

      var culture = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field == "Culture";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: cafeIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
      var commerce = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field == "Commerce";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: cafeIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
      var education = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field == "Education";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: cafeIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
      var social = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field == "Social";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: cafeIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
      var health = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field == "Santé";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: cafeIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
      var environment = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field == "Environnement";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: cafeIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
      var others = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.field != "Culture" "Commerce" "Education" "Social" "Sante" "Environnement" ;
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.name).openPopup();
                });
            }
      });
        map.fitBounds(allscops.getBounds(), {
            padding: [50, 50]
        });

        culture.addTo(map);
        commerce.addTo(map);
        education.addTo(map);
        social.addTo(map);
        sante.addTo(map);
        environment.addTo(map);
        others.addTo(map);

        $("#allscops").click(function() {
            map.addLayer(allscops)
            map.removeLayer(culture)
            map.removeLayer(commerce)
            map.removeLayer(education)
            map.removeLayer(social)
            map.removeLayer(sante)
            map.removeLayer(environment)
            map.removeLayer(others)
        });
        $("#culture").click(function() {
            map.addLayer(culture)
            map.removeLayer(allscops)
            map.removeLayer(commerce)
            map.removeLayer(education)
            map.removeLayer(social)
            map.removeLayer(sante)
            map.removeLayer(environment)
            map.removeLayer(others)
        });
        $("#commerce").click(function() {
            map.addLayer(commerce)
            map.removeLayer(allscops)
            map.removeLayer(culture)
            map.removeLayer(education)
            map.removeLayer(social)
            map.removeLayer(sante)
            map.removeLayer(environment)
            map.removeLayer(others)
        });
        $("#education").click(function() {
            map.addLayer(education)
            map.removeLayer(allscops)
            map.removeLayer(culture)
            map.removeLayer(commerce)
            map.removeLayer(social)
            map.removeLayer(sante)
            map.removeLayer(environment)
            map.removeLayer(others)
        });
        $("#social").click(function() {
            map.addLayer(social)
            map.removeLayer(allscops)
            map.removeLayer(commerce)
            map.removeLayer(education)
            map.removeLayer(culture)
            map.removeLayer(sante)
            map.removeLayer(environment)
            map.removeLayer(others)
        });
        $("#health").click(function() {
          alert('ici');
            map.addLayer(sante)
            map.removeLayer(allscops)
            map.removeLayer(commerce)
            map.removeLayer(education)
            map.removeLayer(social)
            map.removeLayer(culture)
            map.removeLayer(environment)
            map.removeLayer(others)
        });
        $("#environment").click(function() {
            map.addLayer(environment)
            map.removeLayer(allscops)
            map.removeLayer(commerce)
            map.removeLayer(education)
            map.removeLayer(social)
            map.removeLayer(sante)
            map.removeLayer(culture)
            map.removeLayer(others)
        });
        $("#others").click(function() {
          map.addLayer(others)
          map.removeLayer(allscops)
          map.removeLayer(commerce)
          map.removeLayer(education)
          map.removeLayer(social)
          map.removeLayer(sante)
          map.removeLayer(environment)
          map.removeLayer(culture)
        });
    });

var allscops = L.geoJSON()

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
