function setup() {
  
  //Other ball parameters
  createCanvas(windowWidth, windowHeight);
  b = random(1,windowWidth-random(1,100))
  r = random(1,windowHeight-random(1,100))
  ball_speed = 20*random(-1,1)
  r_change = random(1,20)*random(-1,1)
  
  //Health Bars
  Cursor_Bar = windowWidth/3
  LifeBar=(windowWidth-100)
  
  //Body Movement
  Face_Xchange = 5*random(-1,1)
  Face_Ychange = random(1,9)*random(-1,1)
  
  Face_Xmove = 0
  Face_Ymove = 0
}

//Ball Parameters
n = 95
a = 1
accuracy1 = 10
accuracy2 = 0.5
Difficulty = 1
Stage = Difficulty
Diff_Eyes = 0

Obstacle1 = 0
let value = 0

function draw() {
    if (LifeBar<=0){
      LifeBar = (windowWidth-100)
      Difficulty = Difficulty + 1     
    }
  
    if (Difficulty>3){
      Diff_Eyes = 15
      Obstacle1 = 50
    }
  
    background(0,0,0)
    fill(255,255,255)
    noStroke()
    circle(b,r,Obstacle1)
  
  
    //face
    noStroke()
    fill(255,255,255)
    circle((windowWidth/2)+Face_Xmove,(windowHeight/2)+Face_Ymove,200)
  
    //eyes
    fill(0)
    circle((windowWidth/2-50)+Face_Xmove,(windowHeight/2)+Face_Ymove,50)
    circle((windowWidth/2+50)+Face_Xmove,(windowHeight/2)+Face_Ymove,50)
    
    fill(255,255,255)
    circle((windowWidth/2-50)+Face_Xmove,(windowHeight/2)+Face_Ymove,Diff_Eyes)
    circle((windowWidth/2+50)+Face_Xmove,(windowHeight/2)+Face_Ymove,Diff_Eyes)
  
    //mouth
    fill(0,0,0)
    arc((windowWidth/2)+Face_Xmove, (windowHeight/2+40)+Face_Ymove, 100, 80, 0, PI, CHORD)
  
    
    //Enemy Health Bar
    noFill()
    stroke(a,n,b)
    rect(50,40,windowWidth-100,30)
  
    fill(0,255,0)
    noStroke()
    rect(50,40,LifeBar,30)
    
    fill(255,255,255)
    textSize(24);
    text('Art 151 Project: Ghost', 55, 62)
  
    //Cursor Health Bar
    noFill()
    stroke(255,255,255)
    rect(50,windowHeight-50,windowWidth/3,30)
  
    fill(255,204,0)
    noStroke()
    rect(50,windowHeight-50,windowWidth/3,30)
    
  
    stroke(255,0,0)
    strokeWeight(4)
    line(mouseX,mouseY,mouseX-value,mouseY-value)
    line(mouseX,mouseY,mouseX+value,mouseY+value)
    line(mouseX,mouseY,mouseX+value,mouseY-value)
    line(mouseX,mouseY,mouseX-value,mouseY+value)
   
    //Target
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
      r_change = random(1,20)
    }
  
    if (r>windowHeight){
      r_change = random(1,20)*-1
    }
    
    if (r<0){
      r_change = random(1,20)*-1
      r_change = r_change*-1
    }
  
    if ((Face_Xmove+(windowWidth/2)+100)>windowWidth || (Face_Xmove+(windowWidth/2)-100)<0){
      Face_Xchange = Face_Xchange*-1
    }
  
    if ((Face_Ymove+(windowHeight/2)+100>windowHeight) || (Face_Ymove + (windowHeight/2)-100)<0){
      Face_Ychange = Face_Ychange*-1
    }
  
    Face_Xmove = Face_Xmove + Face_Xchange
    Face_Ymove = Face_Ymove + Face_Ychange
    
    n = n + accuracy1
    a = a + accuracy2
    b = b + ball_speed
    r = r + r_change
  
    if (b>mouseX+300 || b<mouseX-300){
      Cursor_Bar = Cursor_Bar - 1
    }
  
    if (r>mouseY+300 || r<mouseY-300){
      Cursor_Bar = Cursor_Bar - 1
    }
  
    while(value>0){
    value = value - 1;
    }
}

function mousePressed() {
  if (value == 0) {
    value = 50;
    LifeBar = LifeBar-(25*((1/Difficulty)*3));
  }
}