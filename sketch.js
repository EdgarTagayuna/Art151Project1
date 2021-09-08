function setup() {
  createCanvas(windowWidth, windowHeight);
}

n = 95
a = 1
b = 1
accuracy1 = 10
accuracy2 = 0.5
ball_speed = 15
let value = 0

function draw() {
    background(255,255,255)
    
    fill(a,n,b)
    noStroke()
    circle(b, windowHeight/2,50)
  
    stroke(255,0,0)
    strokeWeight(4)
    line(mouseX,mouseY,mouseX-value,mouseY-value)
    line(mouseX,mouseY,mouseX+value,mouseY+value)
    line(mouseX,mouseY,mouseX+value,mouseY-value)
    line(mouseX,mouseY,mouseX-value,mouseY+value)
   
    noFill()
    stroke(0,255,0)
    strokeWeight(1)
    circle(mouseX,mouseY,n)
    
    noFill()
    stroke(0,255,0)
    strokeWeight(1)
    circle(mouseX,mouseY,80)
    
    noFill()
    stroke(0,255,0)
    strokeWeight(1)
    circle(mouseX,mouseY,85)
    
    noFill()
    stroke(0,255,0)
    strokeWeight(1)
    circle(mouseX,mouseY,40)
    
    
    line(mouseX-(n/2),mouseY,mouseX+(n/2),mouseY)
    line(mouseX,mouseY-(n/2),mouseX,mouseY+(n/2))
    
    if (n>300 || n<95){
      accuracy1 = accuracy1*-1
    }
  
    if (a>255 || a<0){
      accuracy2 = accuracy2*-1
    }
    
    if (b>windowWidth || b<0){
      ball_speed = ball_speed*-1
    }
    
    n = n + accuracy1
    a = a + accuracy2
    b = b + ball_speed
  
    while(value>0){
    value = value - 1;
    }
}

function mousePressed() {
  if (value == 0) {
    value = 50;
  }
}
    