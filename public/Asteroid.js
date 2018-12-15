class Asteroid {
    constructor(name, value, profit, approach, period, minerals, risks, ac, picture, displaySize=50) {
        // Atributes
        this.name = name;
        this.value = value;
        this.profit = profit;
        this.approach = approach;
        this.period = period;
        this.minerals = minerals;
        this.risks = risks;
        this.ac = ac;
        this.displaySize = displaySize
        this.picture = loadImage(picture);

        // Utilities
        this.mode = 0;
        this.mouseDown = false;

        // Calculation
        // print(risks);
        var shares = 100000000;
        var realValue = profit * (1-((1-risks[0]/100)*(1-risks[1]/100)*(1-risks[2]/100)*(1-risks[3]/100)));
        var distributedValue = realValue * ac * 1000000000;
        this.sharePrice = (distributedValue/shares).toPrecision(3);
        print(this.sharePrice);

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
                    popup = true;
                }
                // else if(this.mode == 2 && !this.mouseDown){
                //     this.mode = 0;
                // }
                
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
        if(mouseX<100 || mouseX>width-100 || mouseY<100 || mouseY > height-100){
            if(mouseIsPressed && this.mode == 2 && !this.mouseDown){
                this.mode = 0;
                popup = false;
            }
        }
        


        if(this.mode == 1){
            this.popup_small(x,y);
        }
        // else if(this.mode == 2){
        //     this.popup_full(x+100,y+100);
        // }

        fill(80);
        noStroke();
        image(ast, x - this.displaySize/2, y - this.displaySize/2, this.displaySize, this.displaySize);
        textAlign(CENTER, TOP);
        textSize(25);
        fill(255);
        noStroke();
        text(this.name, x, y - this.displaySize - 20);
        textSize(15);
        text(this.sharePrice + "¢ per share", x, y + this.displaySize - 10);
    }

    popup_small(x, y) {
        noStroke();
        fill(255);
        textAlign(CENTER, TOP);
        textSize(20);
        var subtitle = "Profit: $" + this.profit + " b";
        // rect(x - this.displaySize, y - this.displaySize, 2*this.displaySize,this.displaySize);
        // fill(0);
        text(subtitle, x, y + this.displaySize + 20);
    }

    popup_full(){
        // Main Popup
        noStroke();
        fill(255,255,255);
        rect(100,100,width-200,height-200);

        fill(0);
        textAlign(CENTER);
        textSize(40);
        text(this.name, width/2, 105);

        // Left Panel
        // rect(150,150,width/3-100,height-400);
        fill(255);
        textSize(30);
        fill(0);
        text(this.name + " Info",150,170,width/3-100,height-300);
        textSize(20);
        text(" \n\n Extractable Value: "+this.value+" B \n\n Est. Profit: "+this.profit+" B \n\n Next Approach: "+this.approach+" \n\n Period: "+this.period+" years \n\n Minerals: \n"+this.minerals,150,200,width/3-100,height-300);

        // Center Panel
        fill(0);
        // rect(width/3+51,150,width/3-100,height-400);

        
        var c1 = this.risks[0]*100;
        var c2 = this.risks[1]*100;
        var c3 = this.risks[2]*100;
        var c4 = this.risks[3]*100;
        
        // Bars
        fill(100);
        rect(width/3+100,195,c1*3,50);
        rect(width/3+100,285,c2*3,50);
        rect(width/3+100,375,c3*3,50);
        rect(width/3+100,465,c4*3,50);
        ellipse(width/3+100+c1*3,220,50,50);
        ellipse(width/3+100+c2*3,310,50,50);
        ellipse(width/3+100+c3*3,400,50,50);
        ellipse(width/3+100+c4*3,490,50,50);
        
        // Text
        fill(0);
        textSize(18);
        textAlign(LEFT,CENTER);
        text("Deep Space Industries - "+c1/100+"% chance",width/3+80,155,320,50);
        text("Planetary - "+c2/100+"% chance",width/3+80,245,300,50);
        text("Moon Express - "+c3/100+"% chance",width/3+80,335,300,50);
        text("Kleos Space - "+c4/100+"% chance",width/3+80,425,300,50);
        
        // Company Logos
        fill(200,0,50);
        ellipse(width/3+100,220,50,50);
        fill(200,0,80);
        ellipse(width/3+100,310,50,50);
        fill(200,0,110);
        ellipse(width/3+100,400,50,50);
        fill(200,0,140);
        ellipse(width/3+100,490,50,50);
        
        // Right Panel
        fill(0);
        // rect(2*width/3-48,150,width/3-100,height-400);
        image(this.picture,2*width/3-48,200,width/4,width/4);

        // text(" Diameter: 300 km \n Distance: 100000 km \n Risk Factor: 45% \n Profit: $9000",150,325,width-300,150);

        fill(138,175,178);
        rect(width/2-150,560,300,100);
        fill(0);
        textAlign(CENTER,CENTER);
        textSize(30);
        text("Trade ("+this.sharePrice+"¢/share)",width/2-150,560,300,100);

        if(mouseIsPressed && mouseX > width/2-150 && mouseX < width/2+150 && mouseY > 560 && mouseY < 600){
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