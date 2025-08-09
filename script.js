/* VARIABLES */
let catcher, coin;
let score = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);

  // Yellow rectangle catcher box
  catcher = new Sprite(200, 350, 80, 20);
  catcher.color = color(139, 69, 19);
  catcher.rotationLock = true;
  

  // Coin
  coin = new Sprite(100, 0, 30);
  coin.color = color(255, 215, 0);
  coin.velocity.y = 2;
  coin.rotationLock = true;
}

/* DRAW LOOP REPEATS */
function draw() {
  background(209, 237, 242);

  // Instructions
  fill(44, 75, 90);
  textSize(14);
  text("Tap left/right side to move the brown box!", width / 2 - 120, 20);

  // TOUCH-BASED MOVEMENT
  if (mouseIsPressed) {
    if (mouseX < width / 2) {
      catcher.vel.x = -3;
    } else {
      catcher.vel.x = 3;
    }
  } else {
    catcher.vel.x = 0;
  }

  // Keep catcher on screen
  catcher.x = constrain(catcher.x, 40, 360);

  // If coin hits bottom
  if (coin.y >= height) {
    coin.y = 0;
    coin.x = random(50, 350);
    coin.velocity.y = random(2, 4);
    score -= 1;
  }

  // Detect overlap WITHOUT bouncing
  if (coin.overlaps(catcher)) {
    coin.y = 0;
    coin.x = random(50, 350);
    coin.velocity.y = random(2, 4);
    score += 1;
  }

  // Show score
  fill(44, 75, 90);
  textSize(20);
  text("Score = " + score, 10, 40);
}