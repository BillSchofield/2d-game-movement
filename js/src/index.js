"use strict";

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d");

let currentInterval;
let image = new Image();
image.src = './images/rocket-ship.png';

const spaceShip = new Entity(
    image,
    new Vector2d((canvas.width - 300) / 2,(canvas.height - 300) / 2),
    Math.PI/8,
    1
    );

start();

function start() {
    currentInterval = setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        spaceShip.update();
    }, 100);
}