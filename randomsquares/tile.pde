class tile {
  
  float x, y, w;
  int rand = Math.round(random(3,9));
  
  tile(float tempx, float tempy, float tempw) {
    x=tempx;
    y=tempy;
    w=tempw;
  }
  
  void display() {
    
    fill(255);
    rect(x,y,w,w);
    fill(0);
    
    beginShape();
    
    //purely random
    //for(int i = 0; i < rand; i++) {
    //    vertex(random(x,x+w),random(y,y+w));
    //}
    
    //grabbing random values from a deck of 10
    for(int i = 0; i < rand; i++) {
        vertex(x+valueFromDeck(),y+valueFromDeck());
    }
    
    ////high bias
    //for(int i = 0; i < rand; i++) {
    //    vertex(max(random(x,x+w),random(x,x+w)),max(random(y,y+w),random(y,y+w)));
    //}
    
    //low bias
    //for(int i = 0; i < rand; i++) {
    //    vertex(min(random(x,x+w),random(x,x+w)),min(random(y,y+w),random(y,y+w)));
    //}
    
    endShape();
  }
  
  
}
