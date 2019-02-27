'use strict';

document.getElementById("start").addEventListener("click", starteSpiel);
document.getElementById("aktieKaufen").addEventListener("click", aktieKaufen);
document.getElementById("aktieVerkaufen").addEventListener("click", aktieVerkaufen);

let canvas = document.getElementById("canvas");
canvas = canvas.getContext('2d');
let x = 0;
let y = 250;

var aktienAnzahl = 0;
var kontoStand = 1500;
var aktuellerKurs = 100;
var secondsTillEnd = 150;
var started = false;

var kursInterval;
var zeitInterval;
//canvas.lineJoin = "round";
canvas.beginPath();
canvas.moveTo(x,y);

function starteSpiel() {
    if (!started) {
        kursInterval = setInterval(veraendereKurs, 500);
        zeitInterval = setInterval(timer, 1000);
        started = true;
    }
    }


function aktieKaufen() {
    if (kontoStand >= aktuellerKurs) {
        kontoStand -= aktuellerKurs;
        aktienAnzahl++;
        document.getElementById("kontostand").innerHTML = kontoStand.toFixed(2);
        document.getElementById("anzahlAktien").innerHTML = aktienAnzahl;
    }
}

function aktieVerkaufen() {
    if (aktienAnzahl > 0){
        kontoStand = Number(kontoStand) + Number(aktuellerKurs);
        aktienAnzahl--;
        document.getElementById("kontostand").innerHTML = kontoStand.toFixed(2);
        document.getElementById("anzahlAktien").innerHTML = aktienAnzahl;
    }
}

function veraendereKurs() {
    if (x > 1000) {
        canvas.clearRect(0,0,canvas.width, canvas.height);
        canvas.beginPath();
        x = 0;
        return;
    }
    canvas.lineTo(x,y);
    x = x + 4;
    canvas.stroke();
    let randomWinLose = Math.random();

    if (randomWinLose < 0.1 || randomWinLose > 0.9) {
        return;
    }
    if (randomWinLose < 0.5){
        kursMinus();
    } else{
        kursPlus();
    }
    document.getElementById('aktuellerKurs').innerHTML = aktuellerKurs.toFixed(2);
}
function timer() {
    secondsTillEnd--;
    document.getElementById("zeit").innerHTML = secondsTillEnd;
    if (secondsTillEnd <= 0){
        beendeSpiel();
        document.getElementById("userInformation").innerHTML = "Spiel beendet. Ihr Kontostand: " + kontoStand.toFixed(2);
    }
}

function beendeSpiel() {
    clearInterval(kursInterval);
    clearInterval(zeitInterval)
}

function kursPlus() {
    let random = Math.random();
    if (random > 0.1 && random < 0.2){
        y = y - 1;
        aktuellerKurs += 0.1;
    }
    else if (random > 0.2 && random < 0.3){
        y = y - 2;
        aktuellerKurs += 0.2;
    }
    else if (random > 0.3 && random < 0.4){
        y = y - 3;
        aktuellerKurs += 0.3;
    }
    else if (random > 0.4 && random < 0.5){
        y = y - 4;
        aktuellerKurs += 0.4;
    }
    else if (random > 0.5 && random < 0.6){
        y = y - 5;
        aktuellerKurs += 0.5;
    }
    else if (random > 0.6 && random < 0.7){
        y = y - 6;
        aktuellerKurs += 0.6;
    }
    else if (random > 0.7 && random < 0.8){
        y = y - 7;
        aktuellerKurs += 0.7;
    }
    else if (random > 0.8 && random < 0.9){
        y = y - 8;
        aktuellerKurs += 0.8;
    }
    else if (random > 0.9){
        y = y - 9;
        aktuellerKurs += 0.9;
    }
}

function kursMinus() {
    if (aktuellerKurs <= 0){
        return;
    }
    let random = Math.random();
    if (random > 0.1 && random < 0.2){
        y = y + 1;
        aktuellerKurs -= 0.1;
    }
    else if (random > 0.2 && random < 0.3){
        y = y + 2;
        aktuellerKurs -= 0.2;
    }
    else if (random > 0.3 && random < 0.4){
        y = y + 3;
        aktuellerKurs -= 0.3;
    }
    else if (random > 0.4 && random < 0.5){
        y = y + 4;
        aktuellerKurs -= 0.4;
    }
    else if (random > 0.5 && random < 0.6){
        y = y + 5;
        aktuellerKurs -= 0.5;
    }
    else if (random > 0.6 && random < 0.7){
        y = y + 6;
        aktuellerKurs -= 0.6;
    }
    else if (random > 0.7 && random < 0.8){
        y = y + 7;
        aktuellerKurs -= 0.7;
    }
    else if (random > 0.8 && random < 0.9){
        y = y + 8;
        aktuellerKurs -= 0.8;
    }
    else if (random > 0.9){
        y = y + 9;
        aktuellerKurs -= 0.9;
    }
}