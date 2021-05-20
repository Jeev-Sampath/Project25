class Paper {
    constructor(x,y,r){
        var options ={
            isStatic: false,
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = 5;
        this.image = loadImage("paper.png");
        this.depth = -5;
        //this.scale = 0.5;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        fill(230);
        strokeWeight(0);
        //stroke("red");
        ellipse(pos.x,pos.y,this.r,this.r);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        

      }
}
