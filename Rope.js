class Rope {
    constructor(point1, body2){

        var options = {
            pointA: point1,
            bodyB: body2,
            length: 200,
            stiffness: 1,
        }

        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
     
    }

    display() {
        
        var pointA = this.rope.pointA;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }

}