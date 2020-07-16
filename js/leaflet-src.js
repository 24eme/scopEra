var map = L.map('map', {
    center: [48.853, 2.333],
    zoom: 13
});
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 
