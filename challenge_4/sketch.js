//Ball Variables:

var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;
var ball1 = 100;
var ball2 = 200;
var ballSpeed1 = 5;
var ballSpeed2 = 5;

function setup() {
	createCanvas(640, 700);
}

function draw() {

	// Move balls
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	ball1 = ball1 + ballSpeed1;
	ball2 = ball2 + ballSpeed2;

	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	}
	if (ball1 > width) {
		ballSpeed1 = -ballSpeed1;
	}

	// bottom
	if (ballY > height) {
		ballSpeedY = -ballSpeedY;
	}
	if (ball2 > height) {
		ballSpeed2 = -ballSpeed2;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
	if (ball1 < 0) {
		ballSpeed1 = -ballSpeed1;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if (ball2 < 0) {
		ballSpeed2 = -ballSpeed2;
	}

	//Draw Balls

	background(0);
	ellipse(ballX, ballY, 50, 50);
	ellipse(ball1, ball2, 50, 50);


}
