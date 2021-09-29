function setup() {
  
  alert("This project is called Art 151 Project. The user interface is just clicking around the screen and moving around the mouse. The face changes each time you get in to the website. It is based on the initial speed of movement. Find out what happens on each click! The text box may or may not explain certain features. The main focus I had on this project is to be creative and as messy as possible, utilizing marks, texts, colors, and shapes. Furthermore, I had the project set up in such a way where there will be two separate means of ahcieving this. The user and the computer. Together, the two will draw in an initially white canvas. Initially, I wanted to make the computer try to erase the drawing of the user. But that was a little too sad. I wanted a more uplifting message, so I had the computer join in with user, and draw.")
  
  //Other ball parameters
  createCanvas(windowWidth, windowHeight);
  b = random(1,windowWidth-random(1,100))
  r = random(1,windowHeight-random(1,100))
  b_change = 20*random(-1,1)
  r_change = random(1,20)*random(-1,1)
  
  //Body Movement
  Face_Xchange = 10*random(-1,1)
  Face_Ychange = random(1,9)*random(-1,1)
  
  Face_Xmove = 0
  Face_Ymove = 0
  
  //Conversation
  randomInput = 0
  Countdown = 0
  dialogue = ''
  Text_Color = 0
  Color_Change = 10
  
  //White
  background(255,255,255)
  
  //mood number
  m_nX = Face_Xchange
  m_nY = Face_Ychange
  
  //Facial_Features (Lazy)
  Closed_Line1_X1 = 0
  Closed_Line1_Y1 = 0
  Closed_Line1_X2 = 0
  Closed_Line1_Y2 = 0
  
  Closed_Line2_X1 = 0
  Closed_Line2_Y1 = 0
  Closed_Line2_X2 = 0
  Closed_Line2_Y2 = 0
   
  //Facial_Features (Hyper)
  OpenEyes1 = 0
  OpenEyes2 = 0
  Big_Smile = 0
  
  //Text Box Color
  A = random(50,200)
  B = random(50,200)
  C = random(50,200)
  
  //Outer Face Layer
  Stroke1 = 255
  Stroke2 = 255
  Stroke3 = 255
  RANDOMIZING = 0
  
}

//Ball Parameters
n = 95
a = 1
accuracy1 = 10
accuracy2 = 0.5
Difficulty = 1
let value = 0

//Curiosity
Curious = 0
JoiningIn1 = 255
JoiningIn2 = 255
JoiningIn3 = 255


function draw() {
  
    //Eyes constant basing on mood value
  
    if (abs(m_nX) <= 3 && abs(m_nY) <= 3){
      
      //left eye
      Closed_Line1_X1 = (windowWidth/2-75)+Face_Xmove
      Closed_Line1_Y1 = (windowHeight/2)+Face_Ymove
      Closed_Line1_X2 = (windowWidth/2-25)+Face_Xmove
      Closed_Line1_Y2 = (windowHeight/2)+Face_Ymove
      
      //right eye
      Closed_Line2_X1 = (windowWidth/2+25)+Face_Xmove
      Closed_Line2_Y1 = (windowHeight/2)+Face_Ymove
      Closed_Line2_X2 = (windowWidth/2+75)+Face_Xmove
      Closed_Line2_Y2 = (windowHeight/2)+Face_Ymove
      
      OpenEyes1 = 0
      OpenEyes2 = 0
      
      Big_Smile = 30
    
    }else if (abs(m_nX) > 3 && abs(m_nY) > 3){
      
      OpenEyes1 = 50 //Left and right eye sockets
      OpenEyes2 = 15 //Left and right pupils
      
      Closed_Line1_X1 = 0
      Closed_Line1_Y1 = 0
      Closed_Line1_X2 = 0
      Closed_Line1_Y2 = 0
  
      Closed_Line2_X1 = 0
      Closed_Line2_Y1 = 0
      Closed_Line2_X2 = 0
      Closed_Line2_Y2 = 0
      
      Big_Smile = 65
    } else if (abs(m_nX) <= 3 || abs(m_nY) <= 3){
      
      OpenEyes1 = 50 //Left and right eye sockets
      OpenEyes2 = 15 //Left and right pupils
      
      Closed_Line1_X1 = 0
      Closed_Line1_Y1 = 0
      Closed_Line1_X2 = 0
      Closed_Line1_Y2 = 0
  
      Closed_Line2_X1 = 0
      Closed_Line2_Y1 = 0
      Closed_Line2_X2 = 0
      Closed_Line2_Y2 = 0
      
      Big_Smile = 65
    }
  
  
  
    //Body
    noStroke()
    fill(Stroke1,Stroke2,Stroke3)
    circle((windowWidth/2)+Face_Xmove,(windowHeight/2)+Face_Ymove,RANDOMIZING)
  
    //face
    noStroke()
    fill(JoiningIn1,JoiningIn2,JoiningIn3)
    circle((windowWidth/2)+Face_Xmove,(windowHeight/2)+Face_Ymove,200)
  
    //eyes open parameters
    noStroke()
    fill(0)
    circle((windowWidth/2-50)+Face_Xmove,(windowHeight/2)+Face_Ymove,OpenEyes1)
    circle((windowWidth/2+50)+Face_Xmove,(windowHeight/2)+Face_Ymove,OpenEyes1)
    
    fill(255,255,255)
    circle((windowWidth/2-50)+Face_Xmove,(windowHeight/2)+Face_Ymove,OpenEyes2)
    circle((windowWidth/2+50)+Face_Xmove,(windowHeight/2)+Face_Ymove,OpenEyes2)
  
    //closed eyes parameters
    stroke(0)
    strokeWeight(15)
    line(Closed_Line1_X1, Closed_Line1_Y1, Closed_Line1_X2, Closed_Line1_Y2)
    line(Closed_Line2_X1, Closed_Line2_Y1, Closed_Line2_X2, Closed_Line2_Y2)
  
    //Eye brows
    noFill()
    strokeWeight(6)
    arc((windowWidth/2-50)+Face_Xmove, (windowHeight/2)+Face_Ymove, 70, 70, PI, TWO_PI)
    arc((windowWidth/2+50)+Face_Xmove, (windowHeight/2)+Face_Ymove, 70, 70, PI, TWO_PI)
  
    //mouth
    fill(0,0,0)
    arc((windowWidth/2)+Face_Xmove, (windowHeight/2+40)+Face_Ymove, 60, Big_Smile, 0, PI, CHORD)
  
  
    //Red X mark
  
    stroke(255,0,0)
    strokeWeight(5)
    line(mouseX,mouseY,mouseX-value,mouseY-value)
    line(mouseX,mouseY,mouseX+value,mouseY+value)
    line(mouseX,mouseY,mouseX+value,mouseY-value)
    line(mouseX,mouseY,mouseX-value,mouseY+value)
   
    //Target
    noFill()
    stroke(a,n,mouseX)
    strokeWeight(1)
    circle(mouseX,mouseY,n)
    
    noFill()
    stroke(a,n,mouseX)
    strokeWeight(1)
    circle(mouseX,mouseY,80)
    
    noFill()
    stroke(a,n,mouseX)
    strokeWeight(1)
    circle(mouseX,mouseY,85)
    
    noFill()
    stroke(a,n,mouseX)
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
      b_change = b_change*-1
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
    b = b + b_change
    r = r + r_change
  
    //Dialogues
    
    if (randomInput <= 1){
      RANDOMIZING = 0
      dialogue = 'Hello World! Click around, and find out what I do!'
    } else if (randomInput <= 2){
      RANDOMIZING = 0
      dialogue = 'Having fun yet?'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 255
      B = 255
      C = 0
    } else if (randomInput <=3){
      RANDOMIZING = 0
      dialogue = 'You can call me ART 151 Project 1'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 230
      B = 220
      C = 120
    } else if (randomInput <= 4){
      RANDOMIZING = 0
      dialogue = 'Can we be friends?'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 255
      B = 192
      C = 203
    } else if (randomInput <= 5){
      RANDOMIZING = 0
      dialogue = 'What time is it?'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 221
      B = 160
      C = 221
    } else if (randomInput <= 6){
      RANDOMIZING = 0
      dialogue = 'Sometimes I do not feel like moving a lot. A lazy mood if you will...'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 48
      B = 191
      C = 191
    } else if (randomInput <= 7){
      RANDOMIZING = 0
      dialogue = 'When you click in front of me, a red x symbol shows up.'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 255
      B = 255
      C = 0
    } else if (randomInput <= 8){
      RANDOMIZING = 0
      dialogue = 'I do not like red x symbols, so I move around them!'
      
      JoiningIn1 = 255
      JoiningIn2 = 0
      JoiningIn3 = 0
      
      A = 190
      B = 0
      C = 0
    } else if (randomInput <= 9){
      RANDOMIZING = 0
      dialogue = 'I have about... 20 or so dialogues give or take? Maybe even more!'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 100
      B = 230
      C = 120
    } else if (randomInput <= 10){
      RANDOMIZING = 0
      dialogue = 'My creator is lazy, so he probably will not add more dialogues'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 255
      B = 209
      C = 220
    } else if (randomInput <= 11){
      RANDOMIZING = 0
      dialogue ='Other times, I feel like moving a lot. A hyper mood if you will!'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 255
      B = 255
      C = 0
    } else if (randomInput <= 12){
      RANDOMIZING = 0
      dialogue = 'Hey!'
      
      JoiningIn1 = 255
      JoiningIn2 = 0
      JoiningIn3 = 0
      
      A = 190
      B = 0
      C = 0
    } else if (randomInput <= 13){
      RANDOMIZING = 0
      dialogue ='Stop moving around your mouse. You are making a mess!'
      
      JoiningIn1 = 255
      JoiningIn2 = 0
      JoiningIn3 = 0
      
      A = 190
      B = 0
      C = 0
    } else if (randomInput <= 14){
      RANDOMIZING = 0
      dialogue = 'Is it really that fun messing around in this blank page?'
          
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 135
      B = 206
      C = 235
    } else if (randomInput <= 15){
      RANDOMIZING = 0
      dialogue = 'How about this? Am I doing it right?'
      JoiningIn1 = 255
      JoiningIn2 = 192
      JoiningIn3 = 203
      
      A = 255
      B = 102
      C = 0
    } else if (randomInput <= 17){
      RANDOMIZING = 0
      dialogue = 'How you liking these colors?'
      
      JoiningIn1 = a
      JoiningIn2 = n
      JoiningIn3 = b
      
      A = 255
      B = 0
      C = 102  
    } else if (randomInput <= 18){
      RANDOMIZING = 0
      dialogue = 'I probably should go back to work again... maybe'
      
      JoiningIn1 = 255
      JoiningIn2 = 102
      JoiningIn3 = 0
      
      A = 255
      B = 104
      C = 220
    } else if (randomInput <= 19){
      RANDOMIZING = 0
      dialogue = 'Yeah, I should probably go back to work... now!'
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 127
      B = 0
      C = 255
    } else if (randomInput <= 20){
      RANDOMIZING = 0
      dialogue = 'what about these colors, huh?'
      
      JoiningIn1 = b
      JoiningIn2 = a
      JoiningIn3 = n
      
      A = 200
      B = 0
      C = 200
    } else if (randomInput <= 21){
      RANDOMIZING = 210
      dialogue = 'These colors seem nice too. I have them randomized!'
      
      
      //Epilepsy Warning
      Stroke1 = random(1,255)
      Stroke2 = random(1,255)
      Stroke3 = random(1,255)
      
      JoiningIn1 = 255
      JoiningIn2 = 255
      JoiningIn3 = 255
      
      A = 0
      B = 200
      C = 150 
    } else if (randomInput <= 22){
      RANDOMIZING = 0
      dialogue = 'This one, I based the colors on my position. Fancy, huh?'
      
      JoiningIn1 = (windowWidth/2)+Face_Xmove
      JoiningIn2 = (windowHeight/2)+Face_Ymove
      JoiningIn3 = n + b
      
      A = 0
      B = 200
      C = 150
    } else if (randomInput <= 23){
      RANDOMIZING = 0
      dialogue = 'Check these out. These colors are based on your position!'
      
      JoiningIn1 = mouseX
      JoiningIn2 = mouseY
      JoiningIn3 = a + b
      
      A = 255
      B = 223
      C = 0
    }
  
    fill(A,B,C)
    stroke(a,n,b)
    strokeWeight(7)
    rect(0,windowHeight-100,windowWidth,windowHeight-100)

    noStroke()
    fill(Text_Color, Text_Color, Text_Color)
    textSize(32)
    text(dialogue, 25, windowHeight-40)
  
    
    if (Text_Color>255 || Text_Color < 0){
      Color_Change = Color_Change*-1
    }
  
    Text_Color = Text_Color + Color_Change
  
  
    while(value>0){
    value = value - 1;
    }
  
  
}

function mousePressed() {
  if (value == 0) {
    value = 50;
    
    //X_Boundaries_Click
    
    
    if ((windowWidth/2)+Face_Xmove < mouseX && Face_Xchange > 0){
      Face_Xchange = Face_Xchange*-1
      Face_Ychange = random(1,9)*random(-1,1)
    }
    
    if ((windowWidth/2)+Face_Xmove > mouseX && Face_Xchange < 0){
      Face_Xchange = Face_Xchange*-1
    }
    
    
    randomInput = random(1,23)
    Text_Color = 255
  }
}