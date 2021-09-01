function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  n = 95
  accuracy = 10
  

  function draw() {
    background(255,255,255);
    
    noFill()
    circle(mouseX,mouseY,n)
    
    noFill()
    circle(mouseX,mouseY,80)
    
    noFill()
    circle(mouseX,mouseY,85)
    
    noFill()
    circle(mouseX,mouseY,40)
    
    
    line(mouseX-(n/2),mouseY,mouseX+(n/2),mouseY)
    line(mouseX,mouseY-(n/2),mouseX,mouseY+(n/2))
    
    if (n> 300 || n < 95){
      accuracy = accuracy*-1
    }
    
    n = n + accuracy
    
  }