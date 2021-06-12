class Box{
//properties
constructor(x,y,width,height){
   var options={
     restitution : 0,
     friction:1
     
   }

  //make the body
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width;
  this.height=height;
  World.add(world,this.body)
  
}







//functions
display(){
   
   push()
  translate(this.body.position.x,this.body.position.y)
  rotate(this.body.angle)
  fill("red")
  rectMode(CENTER)
  rect(0,0,this.width,this.height);
  pop()
}





}