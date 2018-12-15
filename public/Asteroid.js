class Asteroid {
    constructor(diameter, distance, profit, displaySize=50) {
        this.diameter = diameter; // Meters
        this.distance = distance; // Meters
        this.profit = profit; // USD

        this.displaySize = displaySize

        this.mode = 0;

        this.mouseDown = false;
    }

    display(x, y) {
        
        // Determine Mode
        if(this.contains(x,y)){
            if(mouseIsPressed){
                
                if(this.mode < 2 && !this.mouseDown){
                    for (var i = 0; i < asteroids.length; i++) {
                        asteroid = asteroids[i];
                        asteroid.mode = 0;
                    }
                    this.mode = 2;
                }
                else if(this.mode == 2 && !this.mouseDown){
                    this.mode = 0;
                }
                
                this.mouseDown = true;
            }
            else if(this.mode < 2){
                this.mouseDown = false;
                this.mode = 1;
            }
        }
        else if(!mouseIsPressed && this.mode == 1){
            this.mode = 0;
        }
        if(!mouseIsPressed){
            this.mouseDown = false;
        }


        if(this.mode == 1){
            this.popup_small(x,y);
        }
        else if(this.mode == 2){
            this.popup_full(x+100,y+100);
        }

        fill(0);
        strokeWeight(4);
        ellipse(x, y, this.displaySize, this.displaySize);
    }

    popup_small(x, y) {
        fill(255);
        textAlign(CENTER);

        var subtitle = "Size: " + this.diameter.toPrecision(2) + " m";

        text(subtitle, x - this.displaySize, y - this.displaySize, 2*this.displaySize,this.displaySize);
    }

    popup_full(){
        fill(255,255,255,50);
        rect(100,100,width-200,height-200);
    }


    contains(x, y) {
        if (dist(x, y, mouseX, mouseY) <= this.displaySize /2) {
            return true;
        } else {
            return false;
        };
    };

    // mousePressed() {
    //     return True;
    // }
}

// function mousePressed() {
//     for (var i = 0; i < asteroids.length; i++) {
//         asteroid = asteroids[i];
//         asteroid.mousePressed();
//     }
// }