// Code reference from p5.js website//

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	strokeWeight(2);
}

function draw() {
	background(255, 255, 255);

	const columns = 15;
	const rows = 10;
	const cellWidth = width / columns;
	const cellHeight = height / rows;

	for (let c = 0; c < columns; c++) {
		for (let r = 0; r < rows; r++) {
			const x = c * cellWidth + cellWidth / 2;
			const y = r * cellHeight + cellHeight / 2;

			drawFlower(x, y, min(cellWidth, cellHeight));
		}
	}
}

function drawFlower(x, y, size) {
	const flowerSize = random(size * .5, size * .95);
	const petalSize = flowerSize / 2;
	const spacing = petalSize / 2;

	fill(random(255), random(255), random(255));
	circle(x - spacing, y - spacing, petalSize);
	circle(x + spacing, y - spacing, petalSize);
	circle(x - spacing, y + spacing, petalSize);
	circle(x + spacing, y + spacing, petalSize);

	fill(random(255), random(255), random(255));
	circle(x, y, petalSize);
}

//
/* let num = 60;
let mx = [];
let my = [];

function setup() {
  createCanvas(720, 400);
  noStroke();
  fill(255, 153);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(237, 34, 93);

  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }
}
*/

/*
let squareX, squareY;  // Position of square button
let circleX, circleY;  // Position of circle button
let squareSize = 90;   // Width/height of square
let circleSize = 93;   // Diameter of circle

let squareColor;
let circleColor;
let baseColor;

let squareOver = false;
let circleOver = false;

function setup() {
  createCanvas(710, 400);
  squareColor = color(0);
  circleColor = color(255);
  baseColor = color(102);
  circleX = width/2+circleSize/2+10;
  circleY = height/2;
  squareX = width/2-squareSize-10;
  squareY = height/2-squareSize/2;
}

function draw() {
  update(mouseX, mouseY);

  noStroke();
  if (squareOver) {
    background(squareColor);
  } else if (circleOver) {
    background(circleColor);
  } else {
    background(baseColor);
  }

  stroke(255);
  fill(squareColor);
  square(squareX, squareY, squareSize);
  stroke(0);
  fill(circleColor);
  circle(circleX, circleY, circleSize);
}

function update(x, y) {
  if( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    squareOver = false;
  } else if ( overSquare(squareX, squareY, squareSize) ) {
    squareOver = true;
    circleOver = false;
  } else {
    circleOver = squareOver = false;
  }
}

function overSquare(x, y, size) {
  if (mouseX >= x && mouseX <= x+size && 
      mouseY >= y && mouseY <= y+size) {
    return true;
  } else {
    return false;
  }
}

function overCircle(x, y, diameter) {
  const disX = x - mouseX;
  const disY = y - mouseY;
  if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}
*/
