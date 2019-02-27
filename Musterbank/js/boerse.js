'use strict';

document.getElementById("start").addEventListener("click", starteSpiel);
document.getElementById("aktieKaufen").addEventListener("click", aktieKaufen);
document.getElementById("aktieVerkaufen").addEventListener("click", aktieVerkaufen);

let canvas = document.getElementById("canvas");
canvas = canvas.getContext('2d');
let x = 0;
let y = 250;

var aktienAnzahl = 0;
var kontoStand = 10000;
var aktuellerPreis = 100;
var aktuelleZeit = 300;

var intervalId;
var sekundenInterval;
canvas.lineJoin = "round";
canvas.beginPath();
canvas.moveTo(x,y);

function starteSpiel() {
intervalId = setInterval(veraendereKurs, 500);
sekundenInterval = setInterval(timer, 1000);
document.getElementById("start").disabled = true;
}

function aktieKaufen() {
    if (kontoStand > aktuellerPreis) {
        aktuellerPreis = aktuellerPreis;
        kontoStand -= aktuellerPreis;
        aktienAnzahl++;
        document.getElementById("kontostand").innerHTML = kontoStand.toFixed(2);
        document.getElementById("anzahlAktien").innerHTML = aktienAnzahl;
    }
}

function aktieVerkaufen() {
    if (aktienAnzahl > 0){
        aktuellerPreis = aktuellerPreis;
        kontoStand = Number(kontoStand) + Number(aktuellerPreis);
        aktienAnzahl--;
        document.getElementById("kontostand").innerHTML = kontoStand.toFixed(2);
        document.getElementById("anzahlAktien").innerHTML = aktienAnzahl;
    }
}

function veraendereKurs() {
    canvas.lineTo(x,y);
    x++;
    canvas.lineWidth = 1;
    canvas.stroke();
    let random2 = Math.random();

    if (random2 < 0.1 || random2 > 0.9) {
        return;
    }
    if (random2 < 0.5){
        kursMinus();
    } else{
        kursPlus();
    }
    var inhalt = document.getElementById('aktuellerKurs');
    inhalt.innerHTML = aktuellerPreis.toFixed(2);
}
function timer() {
    aktuelleZeit--;
    document.getElementById("zeit").innerHTML = aktuelleZeit;
    if (aktuelleZeit == 0){
        beendeSpiel();
    }
}

function beendeSpiel() {
    clearInterval(intervalId);
    clearInterval(sekundenInterval)
}

function kursPlus() {
    let random = Math.random();
    if (random > 0.1 && random < 0.2){
        y = y - 1;
        aktuellerPreis += 0.1;
    }
    else if (random > 0.2 && random < 0.3){
        y = y - 2;
        aktuellerPreis += 0.2;
    }
    else if (random > 0.3 && random < 0.4){
        y = y - 3;
        aktuellerPreis += 0.3;
    }
    else if (random > 0.4 && random < 0.5){
        y = y - 4;
        aktuellerPreis += 0.4;
    }
    else if (random > 0.5 && random < 0.6){
        y = y - 5;
        aktuellerPreis += 0.5;
    }
    else if (random > 0.6 && random < 0.7){
        y = y - 6;
        aktuellerPreis += 0.6;
    }
    else if (random > 0.7 && random < 0.8){
        y = y - 7;
        aktuellerPreis += 0.7;
    }
    else if (random > 0.8 && random < 0.9){
        y = y - 8;
        aktuellerPreis += 0.8;
    }
    else if (random > 0.9){
        y = y - 9;
        aktuellerPreis += 0.9;
    }
}

function kursMinus() {
    if (aktuellerPreis <= 0){
        return;
    }
    let random = Math.random();
    if (random > 0.1 && random < 0.2){
        y = y + 1;
        aktuellerPreis -= 0.1;
    }
    else if (random > 0.2 && random < 0.3){
        y = y + 2;
        aktuellerPreis -= 0.2;
    }
    else if (random > 0.3 && random < 0.4){
        y = y + 3;
        aktuellerPreis -= 0.3;
    }
    else if (random > 0.4 && random < 0.5){
        y = y + 4;
        aktuellerPreis -= 0.4;
    }
    else if (random > 0.5 && random < 0.6){
        y = y + 5;
        aktuellerPreis -= 0.5;
    }
    else if (random > 0.6 && random < 0.7){
        y = y + 6;
        aktuellerPreis -= 0.6;
    }
    else if (random > 0.7 && random < 0.8){
        y = y + 7;
        aktuellerPreis -= 0.7;
    }
    else if (random > 0.8 && random < 0.9){
        y = y + 8;
        aktuellerPreis -= 0.8;
    }
    else if (random > 0.9){
        y = y + 9;
        aktuellerPreis -= 0.9;
    }
}