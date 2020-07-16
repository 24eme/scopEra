function loadData(jsonUrl, onLoadCallback) {
window.fetch(jsonUrl).then((res) => {
return res.json()
}).then((data) => {
onLoadCallback(data)
});
}

function filterMap(){
  var scops = [];

}
