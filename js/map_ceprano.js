"use strict"

const coordsCeprano = [41.54603090907846, 13.52275074246561]

const map = L.map('map').setView(coordsCeprano, 16);



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

const marker = L.marker(coordsCeprano,{icon:buildingIcon}).addTo(map)