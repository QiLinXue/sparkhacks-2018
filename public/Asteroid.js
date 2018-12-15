class Asteroid {
    constructor(name, diameter, profit, displaySize=50) {
        this.name = name;
        this.diameter = diameter; // Meters
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
        // else if(this.mode == 2){
        //     this.popup_full(x+100,y+100);
        // }

        fill(80);
        noStroke();
        ellipse(x, y, this.displaySize, this.displaySize);
        textAlign(CENTER, TOP);
        textSize(30);
        fill(255);
        noStroke();
        text(this.name, x, y - this.displaySize - 15);
        textSize(20);
        text("$" + this.profit, x, y + this.displaySize - 15);
    }

    popup_small(x, y) {
        noStroke();
        fill(255);
        textAlign(CENTER, TOP);
        textSize(11);
        var subtitle = "Size: " + this.diameter.toPrecision(2) + " m";
        // rect(x - this.displaySize, y - this.displaySize, 2*this.displaySize,this.displaySize);
        // fill(0);
        text(subtitle, x - this.displaySize, y - this.displaySize, 2*this.displaySize,this.displaySize);
    }

    popup_full(){
        noStroke();
        fill(255,255,255,180);
        rect(100,100,width-200,height-200);

        fill(0);
        textAlign(CENTER,TOP);
        
        textSize(40);
        text("Asteroid Name",100,100,width-200,60);

        textAlign(CENTER,TOP);
        textSize(20);
        text("162173 Ryugu, provisional designation 1999 JU3, is a near-Earth object and a potentially hazardous asteroid of the Apollo group. It measures approximately 1 kilometer (0.6 mi) in diameter and is a dark object of the rare spectral type Cg, with qualities of both a C-type asteroid and a G-type asteroid. In June 2018, a spacecraft arrived at the asteroid, Hayabusa2.",150,200,width-300,400);
        text("Diameter: 300 km      Distance: 100000 km      Risk Factor: 45%      Profit: $9000",150,325,width-300,150);

        fill(138,175,178);
        rect(width/2-150,500,300,100);
        fill(0);
        textAlign(CENTER,CENTER);
        textSize(60);
        text("invest",width/2-150,500,300,100);

        if(mouseIsPressed && mouseX > width/2-150 && mouseX < width/2+150 && mouseY > 500 && mouseY < 600){
            console.log("hello");
        }
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