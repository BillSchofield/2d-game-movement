"use strict";

class Vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update(){
        this.rotation += Math.PI/8;
        this.x += 1;
        drawImage(this.image, this.x, this.y, this.scale, this.rotation);
  }
}