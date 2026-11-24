// camera connection to cpx to server to p5.js on website
// p5.js feed screen save to computer. 

let video;
// let flower
let d;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

  // video=createCapture(video);

  // flower= await loadJSON("flower.json");

  d= await loadJSON("http://api.open-notify.org/astros.json");
  
}

function draw() {
  background(220);

  // feed from camera duh


  rectMode(CENTER);
  rect(windowWidth/2, 9*(windowHeight/10), (windowWidth/4),(windowHeight/13));

  
  textSize(windowWidth/30);
  textAlign(CENTER, CENTER);
  text('screenshot', windowWidth/2, 9*(windowHeight/10));
  
// fill(flower.r, flower.g, flower.b);
  // text(flower.name, 100,50);
  
}

function mouseClicked(){

if ((mouseX>((windowWidth/2)-(windowWidth/8))) && (mouseX<((windowWidth/2)+(windowWidth/8))) && (mouseY>((9*(windowHeight/10))-(windowHeight/26))) &&(mouseY<(9*(windowHeight/10))+(windowHeight/26))){
    saveCanvas('confessionCapture', 'jpg');
}
  
}


function gotData(data){

  print(data);
  print('hello world');
}