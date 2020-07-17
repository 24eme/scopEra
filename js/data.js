function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    };
};

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
        "secteur": "médicale",
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
        "name": "ACADIE",
        "arrondisement": "11",
        "secteur": "production",
        'adresse':'170 Bis RUE DU FBG SAINT-ANTOINE 75011 PARIS',
        "popupContent": "ACADIE"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3732022,48.8520337]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "CAP",
        "arrondisement": "12",
        "secteur": "bancaire",
        'adresse':'21 RUE DE FECAMP 75012 PARIS',
        "popupContent": "CAP"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3988467, 48.8353243]
    }
  },
  {
    "type": "Feature",
    "properties": {
        "name": "ETYSSA",
        "arrondisement": "8",
        "secteur": "médicale",
        'adresse':'57 Rue d\'Amsterdam, 75009 Paris, France',
        "popupContent": "ETYSSA"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3269719, 48.8805759]
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
  pointToLayer: function(feature, latlng) {
        if (feature.properties.secteur=="informatique"){
          var icon = L.icon({
              iconUrl: 'css/img/computers.png',
              iconSize: [30, 30],
          });
        }
        if (feature.properties.secteur=="production"){
          var icon = L.icon({
              iconUrl: 'css/img/employment.png',
              iconSize: [30, 30],
          });
        }
        if (feature.properties.secteur=="médicale"){
          var icon = L.icon({
              iconUrl: 'css/img/health-medical.png',
              iconSize: [30, 30],
          });
        }
        if (feature.properties.secteur=="bancaire"){
          var icon = L.icon({
              iconUrl: 'css/img/bank.png',
              iconSize: [30, 30],
          });
        }

        return L.marker(latlng, {icon: icon});
    },
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
