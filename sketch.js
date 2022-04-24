let osc, playing, freq, amp;
let button, img;
let virtualMuseum = 'MuseumEntrance';

function preload(){
  img = loadImage('assets/gallery.png');

  let link = createA('exit.html','EXIT HERE');
  link.position(0, 500);
  link.style('font-size', '17px');
  link.style('color', '#232323');
  link.style('font', 'helvetica');
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  button = createButton('Tap to play');
  button.position(0, 140);
  button.mousePressed();
  button.style('background-color', '#ffff');
  image(img, 20, 0, 400, 400);
}

function draw() {

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

  text('Title: ' + freq, 0, 180);
  text('Artist: ' + amp, 0, 200);

  if (playing) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
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
