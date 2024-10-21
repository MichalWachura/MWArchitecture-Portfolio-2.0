"use strict"

const coords = [47.358586569499906, 8.51624391347801]

const map = L.map('map').setView(coords, 16);



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

const marker = L.marker(coords,{icon:buildingIcon}).addTo(map)