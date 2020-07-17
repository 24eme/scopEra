//Remplir le jeu de données de scops

var scops = [
  [48.894436, 2.353057,'La Louve'],
  [48.8492165, 2.3391038,'Coopérative laitière du Beaufortain'],
  [48.894436, 2.353057,'Coopérative de la Goutte d\'Or'],
  [48.8254034, 2.3414492,'24ème'],
  [48.842192, 2.3255263,'ACOME'],
  [48.8261712, 2.3534897,'INITIS'],
  [48.8277159,2.3298764,'IXREF'],
  [48.8518354, 2.4119051,'KOMOREBI'],
  [45.44225311279297,4.375606060028076,'Yes High Tech'],
  [48.8745253,2.3415619,"DALIBO"],
  [48.87087631225586,2.341618776321411,'Bearstech'],
  [48.86988830566406,2.3100507259368896,"V-Technologies"],
  [48.8543903,2.3823288,'SCOP IT'],
  [48.8541803,2.3643888,"Develop'it"]
];

//Fonction pour remplir la map
function fillMap(data){
  for (var i = 0; i < data.length; i++) {
    var marker = L.marker(data[i]).addTo(map);
  }
}

fillMap(scops);


//Pour moi filtrage
// function checkScop(filtrage) {
//   return dd >= document.getElementById("").value;
// }
//
// function myFunction() {
//   document.getElementById("demo").innerHTML = secteur.filter(checkScop);
// }
//
