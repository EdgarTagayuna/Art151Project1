function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  n = 50
  accuracy = 10

  function draw() {
    background(mouseX,mouseY,n);
  
    fill(300,300,300)
    circle(mouseX,mouseY,n)
    
    line(mouseX-(n/2),mouseY,mouseX+(n/2),mouseY)
    line(mouseX,mouseY-(n/2),mouseX,mouseY+(n/2))
    
    if (n> 255 || n < 50){
      accuracy = accuracy*-1
    }
    
    n = n + accuracy
  }