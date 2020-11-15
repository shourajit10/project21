function isTouching(circle ,hexagon){
    if(circle.x-hexagon.x<circle.width/2+hexagon.width/2
      && hexagon.x-circle.x<hexagon.width/2+circle.width/2
      && circle.y-hexagon.y<circle.height/2+hexagon.height/2
      && hexagon.y-circle.y<hexagon.height/2+circle.height/2){
   return true;
    }
    else{
     return false;
    }
}