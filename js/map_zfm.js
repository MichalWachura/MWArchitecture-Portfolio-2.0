"use strict"

const coordsZfm = [50.28825454823797, 18.678698954019374]

const map = L.map('map').setView(coordsZfm, 16);



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

const marker = L.marker(coordsZfm,{icon:buildingIcon}).addTo(map)