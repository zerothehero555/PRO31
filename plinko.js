class Plinko
{
   constructor(x,y)
   
   {
       var options={
            isStatic:true,
            restitution:1,
             friction:0,
             density:7.8


     }
   this.body=Bodies.circle(x,y,10,options)
   World.add(world,this.body);

 }
 display(){
    push()
    ellipseMode(RADIUS)
    fill(255,255,255)
    strokeWeight(3);
     fill(255,255,255)
     ellipse(this.body.position.x,this.body.position.y,10,10)
     pop()





 }
}

