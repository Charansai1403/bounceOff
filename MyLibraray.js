//bounceoff algorithm
function bounceOff(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }
  //istouching algorithm
  function isTouching(t1,t2){
    if (t1.x - t2.x < t2.width/2 + t1.width/2
      && t2.x - t1.x < t2.width/2 + t1.width/2
      && t1.y - t2.y < t2.height/2 + t1.height/2
      && t2.y - t1.y < t2.height/2 + t1.height/2) {
    return true
  }
  else {
    return false
  }
  }
  