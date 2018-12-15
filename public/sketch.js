// Global variables
var mode = 0;
var asteroids = [];
var positions = [];
var stars = [];

// Interface
var sideExpanded = false;
var sideClickClosed = false;
var sideBarSize = 300;
var titleBarSize = 60;
var spacing = 200;

// Control animation and controls
var popup = false;

// Images
var ast;
var bg;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

    // Create asteroids
    for (var i = 0; i < 10; i++) {
        // asteroids.push(new Asteroid("eggs " + i, round(random(1000, 10000))/100, round(random(1000000,100000000))/100, round(random(1, 100))/100));
        var temp = new Asteroid(asteroid_list[i][0],asteroid_list[i][1],asteroid_list[i][2],asteroid_list[i][3],asteroid_list[i][4],asteroid_list[i][5],asteroid_list[i][6],20);
        asteroids.push(temp);
    }

    // Create positions of asteroids
    for (var i = 0; i < asteroids.length; i++) {
        positions[i] = [spacing * (i + 1), height/2];
    }

    // Create stars
    for (var i = 0; i < 200; i++) {
        stars.push([floor(random(0, width)), floor(random(titleBarSize, height)), floor(random(1, 4))]);
    }

    // Load images
    ast = loadImage('ast.png');
    bg = loadImage('blue.jpg');
    
    print(asteroids);
    print(positions);
}

function draw(){
    imageMode(CORNER);
    image(bg, 0, 0, width, height);

    // Draw stars
    for (var i = 0; i < stars.length; i++) {
        noStroke();
        fill(255);
        ellipse(stars[i][0], stars[i][1], stars[i][2], stars[i][2]);
    }
    
    // Draw asteroids
    for (var i = 0; i < asteroids.length; i++) {
        asteroid = asteroids[i];
        asteroid.display(positions[i][0], positions[i][1], 50);
    }

    // Draw Description Boxes
    for (var i = 0; i < asteroids.length; i++) {
        asteroid = asteroids[i];
        if(asteroid.mode == 2){
            asteroid.popup_full();
        }
    }

    // Title banner
    fill(20,48,49);
    noStroke();
    rect(0, 0, width, 60);

    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text("A X I", width/2, 35);

    textAlign(RIGHT);
    textSize(20);
    text("Logged in as " + "Ethan Wang", width - 210, 32);

    textAlign(LEFT);
    text("Sign out", width - 170, 32);
    stroke(255);
    strokeWeight(2);
    line(width - 170, 42, width - 95, 42)

    // Scroll arrows
    if (mouseX <= 80 && !popup) {
        noStroke();
        fill(255, 255, 255, 20);
        rect(0, 0, 80, height);

        for (var i = 0; i < asteroids.length; i++) {
            positions[i][0] += round((80 - mouseX)/4*1.5);
            if (positions[i][0] < 0) {
                positions[i][0] += asteroids.length * spacing + 200;
            }
            positions[i][0] %= asteroids.length * spacing + 200;
        }
    }
    if (mouseX >= width - 80 && !sideExpanded && !sideClickClosed && !popup) {
        noStroke();
        fill(255, 255, 255, 20);
        rect(width - 80, 0, 80, height);

        for (var i = 0; i < asteroids.length; i++) {
            positions[i][0] -= round((80 - width + mouseX)/4*1.5);
            if (positions[i][0] < 0) {
                positions[i][0] += asteroids.length * spacing + 200;
            }
            positions[i][0] %= asteroids.length * spacing + 200;
        }
    }

    // Arrows on both sides
    stroke(255);
    strokeWeight(3);
    line(50, height/2 + 30, 30, height/2);
    line(50, height/2 - 30, 30, height/2);

    line(width - 50, height/2 + 30, width - 30, height/2);
    line(width - 50, height/2 - 30, width - 30, height/2);

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
                // for (var i = 0; i < asteroids.length; i++) {
                //     positions[i] = [((width-sideBarSize)/(asteroids.length+1) * (i+1)), height/2];
                // }
            }
        } else {
            sideClickClosed = false;
        }
    } else {
        strokeWeight();
        stroke(20, 48, 49);
        fill(200);
        rect(width - sideBarSize, titleBarSize, sideBarSize, height-titleBarSize);
        fill(140);
        rect(width - sideBarSize, titleBarSize, 10, height-titleBarSize);

        // Subheadings
        textAlign(LEFT, TOP);
        textSize(20);
        fill(0);
        textLeading(50);
        text("My account\nPortfolio\nHoldings\nOrder Status\nTransaction History\nAlerts\nOur Partners\nAbout Us\nContact Us", width - sideBarSize + 20, titleBarSize + 15);

        // Lines
        for (var i = 0; i < 9; i++) {
            stroke(100);
            strokeWeight(1);
            line(width - sideBarSize + 10, titleBarSize + 50*(i+1), width, titleBarSize + 50*(i+1));

            // Arrows
            stroke(20, 48, 49);
            strokeWeight(3);
            line(width - 15, titleBarSize + 20 + 50*i, width - 10, titleBarSize + 25 + 50*i);
            line(width - 15, titleBarSize + 30 + 50*i, width - 10, titleBarSize + 25 + 50*i);
        }

        if (mouseX < width - sideBarSize ) {
            sideExpanded = false;
            // reposition();
        }
    }
}

function mousePressed() {
    // Side bar
    if (mouseX >= width-65 && mouseY <= titleBarSize) {
        if (sideExpanded) {
            sideClickClosed = true;
            // Reposition asteroids
            // for (var i = 0; i < asteroids.length; i++) {
            //     positions[i] = [((width-sideBarSize)/(asteroids.length+1) * (i+1)), height/2];
            // }
        }
        if (!sideExpanded) {
            sideExpanded = true;
            // Reposition asteroids
            // for (var i = 0; i < asteroids.length; i++) {
            //     positions[i] = [((width-sideBarSize)/(asteroids.length+1) * (i+1)), height/2];
            // }
        } else {
            sideExpanded = false;
            // reposition();
        }
    }
}

function reposition() {
    // Reposition asteroids
    for (var i = 0; i < asteroids.length; i++) {
        positions[i] = [(width/(asteroids.length) * (i+0.5)), height/2];
    }
}


