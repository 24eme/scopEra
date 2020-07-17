// https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038369660&dateTexte=&categorieLien=id
// https://www.coordonnees-gps.fr/
var markerInfo = L.icon({
    iconUrl: 'css/img/marker.png',
    iconSize: [30, 30],
});

var markerAutre = L.icon({
  iconUrl: 'css/img/employment.png',
  iconSize: [30, 30],
})

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
        layer.setIcon(markerInfo).addTo(map);
        // console.log(feature.properties.secteur);
        // for( var i=0; i<7;i++){
        //   if (feature.properties.secteur=="production"){
        //     layer.setIcon(markerInfo).addTo(map);
        //   };
        // layer.setIcon(markerAutre).addTo(map);
        //  };
    };
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
        "name": "Yes High Tech",
        "arrondisement": "0",
        "secteur": "production",
        "adresse":'20 Rue Saint-Joseph, 42000 Saint-Étienne, France',
        "popupContent": "Yes High Tech"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [4.375949859619141,45.4421501159668]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "24ème",
        "arrondisement": "9",
        "secteur": "informatique",
        'adresse':'40 rue Laffitte,75009 Paris',
        "popupContent": "24ème"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3381113, 48.8740412]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "DALIBO",
        "arrondisement": "9",
        "secteur": "informatique",
        'adresse':'43 Rue du Faubourg Montmartre, 75009 Paris',
        "popupContent": "DALIBO"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3415619, 48.8745253]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Bearstech",
        "arrondisement": "0",
        "secteur": "informatique",
        'adresse':'40 Passage des Panoramas, Paris, France',
        "popupContent": "Bearstech"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.341618776321411, 48.87087631225586]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "V-Technologies",
        "arrondisement": "8",
        "secteur": "informatique",
        'adresse':'6 Avenue Franklin Delano Roosevelt, 75008 Paris',
        "popupContent": "V-Technologies"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3100507259368896, 48.86988830566406]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "SCOP IT",
        "arrondisement": "11",
        "secteur": "informatique",
        'adresse':'5 Rue Richard Lenoir, 75011 Paris',
        "popupContent": "SCOP IT"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3823288, 48.8543903]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "Develop'it",
        "arrondisement": "4",
        "secteur": "informatique",
        'adresse':'46 Rue Saint-Antoine, 75004 Paris',
        "popupContent": "Develop'it"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3643888,48.8541803]
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
