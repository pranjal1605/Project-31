class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
        }
        this.body = Matter.Bodies.circle(x,y,10,options)
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,10,10);
        pop();
    }
}