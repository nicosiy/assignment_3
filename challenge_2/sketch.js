function setup() {
	// Canvas Setup
	createCanvas(640, 440);
	strokeWeight(1);
	noLoop();
}

function draw() {
	// BG color
	background(124, 124, 158);

	// Fill
	noFill();

	// B&W Circles
	var blackCircle = 20;
	for (var x = 0; x < 50; x++) {
		stroke(0, 0, 0);
		ellipse(320, 240, x * blackCircle, x * blackCircle);
	}
	var whiteCircle = 40;
	for (var y = 0; y < 50; y++) {
		stroke(255, 255, 255);
		ellipse(320, 240, y * whiteCircle, y * whiteCircle);
	}
}
