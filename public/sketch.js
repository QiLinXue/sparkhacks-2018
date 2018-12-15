// Global variables
var mode = 0;
var asteroids = [];
var positions = [];

// Interface
var sideExpanded = false;
var sideClickClosed = false;
var sideBarSize = 300;
var titleBarSize = 60;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

    // Create asteroids
    for (var i = 0; i < 10; i++) {
        asteroids.push(new Asteroid(random(10, 100), random(1000, 10000), random(1000000, 100000000)));
    }

    // Create positions of asteroids
    for (var i = 0; i < asteroids.length; i++) {
        positions.push([(width/(asteroids.length+1) * (i+1)), height/2]);
    }
    
    print(asteroids);
    print(positions);
}

function draw(){
    background(50);

    // Draw asteroids
    for (var i = 0; i < asteroids.length; i++) {
        asteroid = asteroids[i];
        asteroid.display(positions[i][0], positions[i][1], 50);
    }

    // Title banner
    fill(20,48,49);
    noStroke();
    rect(0, 0, width, 60);

    textAlign(CENTER, CENTER);
    textSize(60);
    fill(255);
    text("A X I", width/2, 35);

    // Side bar on the right
    stroke(255);
    strokeWeight(3);

    line(width - 60, 15, width - 20, 15);
    line(width - 60, 30, width - 20, 30);
    line(width - 60, 45, width - 20, 45);

    if (!sideExpanded) {
        if (mouseX >= width-65 && mouseY <= 60) {
            if (!sideClickClosed) {
                sideExpanded = true;
                // Reposition asteroids
                for (var i = 0; i < asteroids.length; i++) {
                    positions[i] = [((width-sideBarSize)/(asteroids.length+1) * (i+1)), height/2];
                }
            }
        } else {
            sideClickClosed = false;
        }
    } else {
        strokeWeight();
        stroke(20, 48, 49);
        fill(255);
        rect(width - sideBarSize, titleBarSize, sideBarSize, height-titleBarSize);

        if (mouseX < width - sideBarSize ) {
            sideExpanded = false;
            reposition();
        }
    }
}

function mousePressed() {
    // Side bar
    if (mouseX >= width-65 && mouseY <= titleBarSize) {
        if (sideExpanded) {
            sideClickClosed = true;
            // Reposition asteroids
            for (var i = 0; i < asteroids.length; i++) {
                positions[i] = [((width-sideBarSize)/(asteroids.length+1) * (i+1)), height/2];
            }
        }
        if (!sideExpanded) {
            sideExpanded = true;
            // Reposition asteroids
            for (var i = 0; i < asteroids.length; i++) {
                positions[i] = [((width-sideBarSize)/(asteroids.length+1) * (i+1)), height/2];
            }
        } else {
            sideExpanded = false;
            reposition();
        }
    }
}

function reposition() {
    // Reposition asteroids
    for (var i = 0; i < asteroids.length; i++) {
        positions[i] = [(width/(asteroids.length+1) * (i+1)), height/2];
    }
}