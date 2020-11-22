class Bob {
    constructor(x, y, radius) {
        
        var options = {isStatic:false, restitution:1, friction:0, density:2};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
    }
   
    display(){
        var pos = this.body.position;
        fill("red");
        circle(pos.x, pos.y, 2*this.radius);
    }
}