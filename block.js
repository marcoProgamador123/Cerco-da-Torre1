class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("block.png");
        //this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          //imageMode(CENTER);
          //image(this.image,0,0,30,40);
          pop();
            /*push();
            World.remove(world,this.body);
            this.Visiblity = this.Visiblity-5
            tint(255,this.Visiblity)
            image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
            pop();*/
            
        }
        
        
      }

