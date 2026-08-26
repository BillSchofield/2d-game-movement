const canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d");

let currentInterval;
let image = new Image();
image.src = './images/rocket-ship.png';
var rotation = Math.PI/8;
const spaceShip = new Entity(
    image,
    (canvas.width - 300) / 2,
    (canvas.height - 300) / 2,
    rotation,
    1
    );

update(image);
function drawImage(image, x, y, scale, r){
    context.setTransform(scale, 0, 0, scale, x, y);
    context.rotate(r);
    context.drawImage(image, -image.width / 2, -image.height / 2);
    context.setTransform(1,0,0,1,0,0);
}

function update(image) {
    currentInterval = setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        spaceShip.update();
    }, 100);
}