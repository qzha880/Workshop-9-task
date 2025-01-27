let webCam
let lineSystem1 = [];
let lineSystem2 = [];
let scale = 18;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webCam = createCapture(VIDEO);
  webCam.size(width/scale, height/scale);
  webCam.hide();

  for (x = 0; x < 200; x++){
    rx = random(15, width - 15);
    ry = random(15, height - 15);
    lineSystem1[x] = new horizontalLine(rx, ry);
  }

  for (x = 0; x < 200; x++){
    rx = random(15, width - 15);
    ry = random(15, height - 15);
    lineSystem2[x] = new verticalLine(rx, ry);
  }
}

function draw() {
  
  webCam.loadPixels();

  for (x = 0; x < lineSystem1.length; x++){
    lineSystem1[x].move();
    lineSystem1[x].show();
    lineSystem1[x].checkEdges();
  }

  for (x = 0; x < lineSystem2.length; x++){
    lineSystem2[x].move();
    lineSystem2[x].show();
    lineSystem2[x].checkEdges();
  }
}

class horizontalLine{

  constructor(x, y){
    this.x = x;
    this.y = y;

  }

  move(){
    this.x = this.x + random (-8, 8);
    this.y = this.y + random (-8, 8);
  }

  show(){
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColour = webCam.get(pX, pY);
    fill(pixelColour[0], pixelColour[1], pixelColour[2], 120);
    noStroke();
    rect(width-this.x, this.y, width/10, 1);
  }

  checkEdges(){
    if(this.x < 15){
      this.x = 15;
    } else if (this.x > width - 15){
      this.x = width - 15;
    }
    if(this.y < 15){
      this.y = 15;
    } else if (this.y > height - 15){
      this.y = height - 15;
    }
  }
}

class verticalLine{

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  move(){
    this.x = this.x + random (-8, 8);
    this.y = this.y + random (-8, 8);
  }

  show(){
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColour = webCam.get(pX, pY);
    fill(pixelColour[0], pixelColour[1], pixelColour[2], 120);
    noStroke();
    rect(width-this.x, this.y, 1, height/10);
  }

  checkEdges(){
    if(this.x < 15){
      this.x = 15;
    } else if (this.x > width - 15){
      this.x = width - 15;
    }
    if(this.y < 15){
      this.y = 15;
    } else if (this.y > height - 15){
      this.y = height - 15;
    }
  }
}