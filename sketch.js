let osc, playing, freq, amp;
let button, img;
let virtualMuseum = 'MuseumEntrance';


function preload(){
  img = loadImage('assets/gallery.jpg');

  let link = createA('exit.html','Exit Here');
  link.position(250, 510);
  link.style('font-size', '17px');
  link.style('color', '#232323');
  link.style('font', 'helvetica');
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {
background(255);
image(img, 40, 0, 500, 500);
text('Hover over \nwhite dots \nto reveal \npaintings \ninfo', 10, 250);
text('Click \nanywhere to \nexperience \nthe sound \nof paintings.', 10, 350);
// ellipse 1
if ((mouseX > 80) && (mouseX < 100) &&
   (mouseY > 8) && (mouseY < 28)) {
   fill(0);
   rect(80, 25, 110, 55);
   fill(255);
   text('The Scream\nby Edvard Munch\n1893', 90, 40);

 } else {
   fill(255);
 }
ellipse(90, 18, 10, 10);

//ellipse 2
if ((mouseX > 190) && (mouseX < 210) &&
   (mouseY > 8) && (mouseY < 28)) {
     fill(0);
     rect(190, 25, 130, 55);
   fill(255);
   text('Starry Night\nby Vincent van Gogh\n1889', 200, 40);
 } else {
   fill(255);
 }
ellipse(200, 18, 10, 10);

//ellipse 3
if ((mouseX > 326) && (mouseX < 346) &&
   (mouseY > 8) && (mouseY < 28)) {
     fill(0);
     rect(326, 25, 120, 55);
   fill(255);
   text('The Birth of Venus\nby Sandro Botticelli\n1480s', 335, 40);
 } else {
   fill(255);
 }
 ellipse(336, 18, 10, 10);

 //ellipse 4
 if ((mouseX > 80) && (mouseX < 100) &&
    (mouseY > 118) && (mouseY < 148)) {
      fill(0);
      rect(80, 135, 125, 55);
    fill(255);
    text('Girl with a Pearl Earring\nby Johannes Vermeer\n1665', 80, 150);
  } else {
    fill(255);
  }
ellipse(90, 128, 10, 10);

//ellipse 5
if ((mouseX > 206) && (mouseX < 236) &&
   (mouseY > 118) && (mouseY < 148)) {
     fill(0);
     rect(206, 135, 110, 55);
   fill(255);
   text('The Night Watch\nby Rembrandt\n1642', 216, 150);
 } else {
   fill(255);
 }
ellipse(216, 128, 10, 10);

//ellipse 6
if ((mouseX > 340) && (mouseX < 360) &&
   (mouseY > 118) && (mouseY < 148)) {
     fill(0);
     rect(340, 135, 200, 70);
   fill(255);
   text('A Sunday Afternoon on \nthe Island of La Grande Jatte\nby Georges Seurat\n1884', 345, 150);
 } else {
   fill(255);
 }
ellipse(350, 128, 10, 10);

//ellipse 7
if ((mouseX > 80) && (mouseX < 100) &&
   (mouseY > 230) && (mouseY < 250)) {
     fill(0);
     rect(80, 245, 70, 70);
   fill(255);
   text('Mona Lisa\nby Leonardo \nda Vinci\n1503', 80, 260);
 } else {
   fill(255);
 }
ellipse(90, 240, 10, 10);

//ellipse 8
if ((mouseX > 160) && (mouseX < 180) &&
   (mouseY > 230) && (mouseY < 250)) {
     fill(0);
     rect(157, 245, 125, 55);
   fill(255);
   text('The Last Supper\nby Leonardo da Vinci\n1498', 160, 260);
 } else {
   fill(255);
 }
ellipse(170, 240, 10, 10);

//ellipse 9
if ((mouseX > 80) && (mouseX < 100) &&
   (mouseY > 350) && (mouseY < 370)) {
     fill(0);
     rect(79, 365, 110, 55);
   fill(255);
   text('Fruit Bowl\nby Pablo Picasso\n1910', 80, 380);
 } else {
   fill(255);
 }
ellipse(90, 360, 10, 10);

//ellipse 10
if ((mouseX > 400) && (mouseX < 420) &&
   (mouseY > 230) && (mouseY < 250)) {
     fill(0);
     rect(400, 245, 125, 55);
   fill(255);
   text('American Gothic\nby Grant Wood\n1930', 400, 260);
 } else {
   fill(255);
 }
ellipse(410, 240, 10, 10);

//ellipse 11
if ((mouseX > 195) && (mouseX < 215) &&
   (mouseY > 350) && (mouseY < 370)) {
     fill(0);
     rect(191, 365, 160, 55);
   fill(255);
   text('Whistlers Mother\nby James McNeill Whistler\n1871', 195, 380);
 } else {
   fill(255);
 }
ellipse(205, 360, 10, 10);

//ellipse 12
if ((mouseX > 360) && (mouseX < 380) &&
   (mouseY > 350) && (mouseY < 370)) {
     fill(0);
     rect(355, 365, 100, 55);
   fill(255);
   text('The Kiss\nby Gustav Klimt\n1908', 360, 380);
 } else {
   fill(255);
 }
ellipse(370, 360, 10, 10);

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
fill(0);
  text('Title: ' + freq, 10, 470);
  text('Artist: ' + amp, 10, 490);

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
