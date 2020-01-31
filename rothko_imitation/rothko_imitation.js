function setup() {
  // randomSeed(random(32768));
  createCanvas(512, 512);
  // c1=color(242,123,19)
  high=max(max(random(255),random(255)),128)
  mid=(random(55)+random(55))/2+100
  low=min(random(255),random(255))
  c_array=[0,1,2]
  shuffle(c_array)
  mid_mid=[high,mid,low]
  up=[high,mid+100,low+20]
  down=[high-100,mid-100,low+20]
 
  mid_mid=color(mid_mid[c_array[0]],mid_mid[c_array[1]],mid_mid[c_array[2]])
  up=color(up[c_array[0]],up[c_array[1]],up[c_array[2]])
  down=color(down[c_array[0]],down[c_array[1]],down[c_array[2]])

 
  height_top=up*2
  // height_mid
  height_low=down*2
//   up_high=high
//   up_mid=mid+100
//   up_low=low+20
 
 
//   down_high=high+100
//   down_mid=mid+100
//   down_low=low+20
 

}

function draw() {
 
  background(mid_mid);
  noStroke()
  fill(242,123,19)

 
 
  // c1=color(up[0],up[1],up[2])
  // c2=color(mid_mid[0],mid_mid[1],mid_mid[2])
  // c3=color(down[0],down[1],down[2])
  fill(up);
  rect(8,8,width-16,max(low,64));
  fill(down)
  rect(8,height-8,width-16,-high)
  // fill(c1)
  // rect(0,0,width,height/4)
}
