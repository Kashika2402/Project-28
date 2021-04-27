class Ground
{ 
  constructor()
  {
      var options=
      {
          isStatic: 8,
          friction:0.41
      }  
this.body = Bodies.rectangle(500,625,1200,20,options);
World.add(world, this.body); 
  }
  display()
  {  
    rectMode(CENTER);
    fill(255);
    rect(500,625,1200,20); 
  }
}
