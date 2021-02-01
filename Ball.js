class Ball{
    constructor(x, y, r) {
        var options = {
            'restitution': 1,
            'friction': 0.3,
            'density': 2

        }
       
        this.body= Bodies.circle(x,y,r, options);
        World.add(world, this.body);
        this.x= x;
        this.y=y;
        this.r=r;
        
      }
      display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push ();
        ellipseMode(CENTER);
        translate(pos.x, pos.y);
        rotate (angle);
        ellipse(0, 0, this.r);  //since translate is at pos.x and pos.y, ellipse should be at 0,0
        pop ();

      }
}
