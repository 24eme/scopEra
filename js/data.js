//Remplir le jeu de données de scops

var scops = [
  [48.894436, 2.353057,'La Louve'],
  [48.8492165, 2.3391038,'Coopérative laitière du Beaufortain'],
  [48.894436, 2.353057,'Coopérative de la Goutte d\'Or'],
  [48.8254034, 2.3414492,'24ème'],
  [48.842192, 2.3255263,'ACOME'],
  [48., 2.,'INITIS'],
  [48., 2.,'IXREF'],
  [48., 2.,'KOMOREBI'],
  [48., 2.,'La Louve'],

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
