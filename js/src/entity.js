class Entity {
  constructor(image, x, y, rotation, scale) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.scale = scale;
  }

  update(){
        this.rotation += Math.PI/8;
        this.x += 1;
        drawImage(this.image, this.x, this.y, this.scale, this.rotation);
  }
}