class Asteroid {
    constructor(diameter, distance, profit) {
        this.diameter = diameter; // Meters
        this.distance = distance; // Meters
        this.profit = profit; // USD
    }

    display(x, y, size) {
        fill(0);
        strokeWeight(4);
        stroke(150);
        ellipse(x, y, size, size);
    }
}
