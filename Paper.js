class Paper{
    constructor(x, y, r, angle){
        var options = {
            isStatic:false,
            restitution:0.3,
            fiction:0.5,
            density:1.2
         }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);    
    }
    display(){
        var angle = this.body.circle;
        push();
        translate(this.body.position.x, this.body.position.x);
        rotate(angle);
        fill("brown");
        ellipse(0, 0, rX = 0, rY = 0);
        pop();
    }
}