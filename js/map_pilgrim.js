"use strict"

const coordsPilgrim = [61.50324915954917, 7.6156578932706465]

const map = L.map('map').setView(coordsPilgrim, 16);



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

const marker = L.marker(coordsPilgrim,{icon:buildingIcon}).addTo(map)