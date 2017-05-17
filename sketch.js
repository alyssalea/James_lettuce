var Lettus
var Leef
var Leettuce
var Lettoce
var Letttuce
var Letuce
var Veggieman
var Guy
var Music
var Yay
var Mumsh
var GuyX1 = 300
var GuyY1 = 300
var GuyX2 = 400
var GuyY2 = 400
var GuyX3 = 500
var GuyY3 = 500
var GuyX4 = 600
var GuyY4 = 600
var counter = 0;
var countertwo = 0;
musevol = 1
yayvol = 2
increase = 0.5
function preload() {
  Lettus = loadImage ("assets/lettus.png");
  Leef = loadImage ("assets/leef.png");
  Leettuce = loadImage ("assets/leettuce.png");
  Lettoce = loadImage ("assets/lettoce.png");
  Letttuce = loadImage ("assets/letttuce.png");
  Letuce = loadImage ("assets/letuce.png");
  Veggieman = loadImage ("assets/veggieman.png");
  Guy = loadImage ("assets/guy.png");
  Music = loadSound ("assets/vaporwave.mp3")
  Yay = loadSound ("assets/Kids Saying Yay! Sound Effect.mp3")
  Mumsh = loadSound ("assets/yummm.mp3")
  frameRate (45)
}
function setup() {
  Music.setVolume(musevol)
  Yay.setVolume(yayvol)
  Mumsh.setVolume(yayvol)
  createCanvas(windowWidth,windowHeight);
  background (100,200,30);
  frameRate(30);
  delay = new p5.Delay();
}
function mouseClicked(){
  increase = increase + 0.1
  yayvol = yayvol + increase
  if (musevol > 0.1) {
  musevol = musevol - 0.1
delay.process(Yay, .0, .9, 5000);
  Yay.play()
  } else {
    musevol = musevol + 2
  delay.process(Yay, .0, .9, 5000);
  Yay.play()
  }
}
function draw() {
Mumsh.setVolume(yayvol)
  Music.setVolume(musevol)
  Yay.setVolume(yayvol)
  fill (random(200,250),random(20,200),random(20,250));
  textSize(random(100,145));
   textAlign(CENTER);
  text('lettuce time', width/2, height/2);
  console.log(counter);
  console.log(yayvol);
  if(counter % 690 === 0){
    Yay.play()
  }
  if(counter % 420 === 0){
    Yay.play()
  }
  if(counter % 666 === 0){
    Yay.play()
  }
  if(counter % 2650 === 0){
    Music.play()
  }
  if(counter % 50 === 0){
    delay.process(Mumsh, .0, 0.7, 5000);
    Mumsh.play()
  }
  image(Lettus, mouseX, mouseY);
  image(Guy, GuyX1, GuyY1)
  GuyX1 = GuyX1 + random(-15,15)
  GuyY1 = GuyY1  + random(-15,15)
   image(Guy, GuyX2, GuyY2)
  GuyX2 = GuyX2 + random(-16,16)
  GuyY2 = GuyY2  + random(-16,16)
   image(Guy, GuyX3, GuyY3)
  GuyX3 = GuyX3 + random(-15,16)
  GuyY3 = GuyY3  + random(-15,16)
   image(Guy, GuyX4, GuyY4)
  GuyX4 = GuyX4 + random(-16,15)
  GuyY4 = GuyY4  + random(-16,15)
  image(Veggieman, random (0,width), random (0,height));
  image(Letuce, random (0,width), random (0,height));
   image(Letuce, random (0,width), random (0,height));
   image(Letuce, random (0,width), random (0,height));
   image(Letuce, random (0,width), random (0,height));
   image(Letuce, random (0,width), random (0,height));
   image(Letuce, random (0,width), random (0,height));
   image(Letttuce, random(0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random(0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Letttuce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
  image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random(0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random(0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
   image(Lettoce, random (0,width), random (0,height));
  image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random(0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random(0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Leettuce, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
   image(Leef, random (0,width), random (0,height));
 image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random(0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
    image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0, width), random(0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
  //raw sexual energy
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
   image(Lettus, random (0,width), random (0,height));
  fill (random(10,250),random(10,250),random(10,250));
  textSize(random(0,269));
  
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height))
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height))
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (0,width), random (0,height));
  text ("lettuce time", random (width,height), random (width,height));
   fill (random(10,250),random(10,250),random(10,250));
  textSize(random(20,269));
  text ("L E T T U C E", random (0,width), random (0,height));
  text ("L E T T U C E", random (0,width), random (0,height));
  text ("L E T T U C E", random (0,width), random (0,height));
  text ("L E T T U C E", random (0,width), random (0,height));
  text ("L E T T U C E", random (0,width), random (0,height));
   fill (random(10,250),random(10,250),random(10,250));
  textSize(random(20,150));
  text ("I hope you are enjoying my lettuce, friend!", random (0,width), random (0,height));
  counter = counter +1;
  }  
