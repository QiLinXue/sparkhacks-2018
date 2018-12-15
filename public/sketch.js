// Global variables
var mode = 0;
var asteroids = [];
var positions = [[]];

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
    for (var i = 0; i < asteroids.length; i++) {
        asteroid = asteroids[i];
        asteroid.display(positions[i][0], positions[i][1], 50);
    }
}

function mousePressed() {
    print("click")
}