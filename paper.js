class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            friction:0,
            density:0.8
        } 
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options)
        this.image = loadImage("sprites/paper.png")
    
         World.add(world,this.body);
    }

    display()
    {
        var pos= this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}