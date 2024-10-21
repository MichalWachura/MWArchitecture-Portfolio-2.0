"use strict"

const coordsTokyo = [50.2913738999769, 18.783940282877722]

const map = L.map('map').setView(coordsTokyo,17)

// -------- Icon --------

let buildingIcon = L.icon({
  iconUrl:'../img/marker/marker.png',
  iconSize:[38,95]
})

// -------- Map --------
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



L.marker(coordsTokyo,{icon:buildingIcon}).addTo(map)