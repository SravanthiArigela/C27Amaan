class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 1.0,
            friction : 0,
            density : 1.0
        }
       this.x = x;
       this.y = y;
       this.radius = radius;
       this.body = Bodies.circle(this.x, this.y, (this.radius)/2, options);
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("purple");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}


/*class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
*/