// Global variables
var mode = 0;
var asteroids = [];


function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    for (var i = 0; i < 10; i++) {
        asteroids.push(new Asteroid(random(10, 100), random(1000, 10000), random(1000000, 100000000)));
    }
    print(asteroids);
}

function draw(){
    background(50);
    for (var i = 0; i < asteroids.length; i ++) {
        asteroid = asteroids[i];
        asteroid.display(40 + 60 * i, height/2, 50);
    }
}