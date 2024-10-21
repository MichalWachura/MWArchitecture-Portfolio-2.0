"use strict"

const coordsMarina = [50.33557151275338, 18.625311463255187]

const map = L.map('map').setView(coordsMarina,17)

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



L.marker(coordsMarina,{icon:buildingIcon}).addTo(map)