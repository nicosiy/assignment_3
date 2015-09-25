function setup() {
	// Canvas Setup
	createCanvas(640, 440);
	strokeWeight(1);
	stroke(255, 255, 255);
}

function draw() {

	//Click Interactivity (BG Color Change)
	if (mouseIsPressed) {
		background(52, 45, 115);
	} else {
		background(150, 7, 20);
	}
	// Crosshair
	line(mouseX, 0, mouseX, 480);
	line(0, mouseY, 640, mouseY);

	if (mouseIsPressed) {
		fill(52, 45, 115);
	} else {
		fill(150, 7, 20);
	}
	ellipse(mouseX, mouseY, 40, 40);
}
