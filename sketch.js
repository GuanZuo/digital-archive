let img;

function preload() {
  img = loadImage("di_ji.jpg"); // 確保圖片檔與 HTML 同層
}

function setup() {
  createCanvas(windowWidth, 500);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(255);
  if (img) {
    image(img, width / 2, height / 2 - 30, 300, 300);
  }
  fill(50);
  text("台灣帝雉（Swinhoe's Pheasant）", width / 2, height - 50);
}

function windowResized() {
  resizeCanvas(windowWidth, 500);
}
