class Brick extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height);
    
   
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
    // World.remove(world, this.body);
     push();
     stroke ("maroon");
     fill ("orange");
    translate(this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);

   
     pop();
   }
  }

  score(){
    if (this.body.speed>=3 && this.body.position.y>=10){
      score++;
    }
  }



};