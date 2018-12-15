// Global variables
var mode = 0;
var asteroids = [];
var positions = [[]];

// Interface
var sideExpanded = false;
var sideClickClosed = false;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

    // Create asteroids
    for (var i = 0; i < 10; i++) {
        asteroids.push(new Asteroid(random(10, 100), random(1000, 10000), random(1000000, 100000000)));
    }

    // Create positions of asteroids
    for (var i = 0; i < asteroids.length; i++) {
        positions.push([(width - 80)/asteroids.length * (i+1) + 40, height/2]);
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
            }
        } else {
            sideClickClosed = false;
        }
    } else {
        strokeWeight();
        stroke(20, 48, 49);
        fill(255);
        rect(width - 300, 60, 300, height-60);

        if (mouseX < width - 300 ) {
            sideExpanded = false;
        }
    }
}

// function mousePressed() {
//     // Side bar
//     if (mouseX >= width-65 && mouseY <= 60) {
//         if (sideExpanded) {
//         sideClickClosed = true;
//         }
//     sideExpanded = !sideExpanded
//     }
// }
