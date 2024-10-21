"use strict"

const coordsPoint = [49.2590436, 19.8144495]

const map = L.map('map').setView(coordsPoint, 16);



// -------- Icon --------

let buildingIcon = L.icon({
    iconUrl:'../img/marker/marker.png',
    iconSize:[38,95]
  })
  
  // -------- Map --------
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker(coordsPoint,{icon:buildingIcon}).addTo(map)