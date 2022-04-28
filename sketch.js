let osc, playing, freq, amp;
let button, img;
let virtualMuseum = 'MuseumEntrance';

/*var distance, a, a1;*/

function preload(){
  img = loadImage('assets/gallery.jpg');

  let link = createA('exit.html','EXIT HERE');
  link.position(0, 500);
  link.style('font-size', '17px');
  link.style('color', '#232323');
  link.style('font', 'helvetica');
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');

  /*a=422
  b=495*/
  /*button = createButton('Tap to play');
  button.position(0, 400);
  button.mousePressed();
  button.style('background-color', '#ffff');*/
  // image(img, 20, 0, 400, 400);
}

function draw() {
background(255);
image(img, 20, 0, 500, 500);
/*nofill();
strokeWeight(6);
rect(58,0,422, 495)*/


  switch (virtualMuseum) {
    case 'MuseumEntrance':
      landingpage();
      break;
    case 'explore':
      virtualmuseum();
      break;
    case 'return':
      endingpage();
      break;
  }
  freq = constrain(map(mouseX, 0, width, 100, 400), 100, 400);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('Title: ' + freq, 0, 440);
  text('Artist: ' + amp, 0, 460);

  if (playing) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }

  /*distance = dist (mouseX, mouseY, 100, 100)
  if(distance<50){
    b=0
  }
  else{b=200}
  if((150<mouseX)&&(350>mouseX)&&(100<mouseY)&&(200>mouseY)){
   a1=200}
  else{
  a1= 100 }*/
}

function landingpage(){

}

function virtualmuseum(){

}

function endingpage(){

}
function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  osc.amp(0, 0.5);
  playing = false;
}
