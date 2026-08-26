"use strict";

class Entity {
  constructor(image, position, rotation, scale) {
    this.image = image;
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }

  update(){
        this.rotation += Math.PI/8;
        this.position.x += 1;
        this.draw();
  }

  draw() {
      context.setTransform(this.scale, 0, 0, this.scale, this.position.x, this.position.y);
      context.rotate(this.rotation);
      context.drawImage(this.image, -this.image.width/2, -this.image.height/2);
      context.setTransform(1, 0, 0, 1, 0, 0);
  }
}
