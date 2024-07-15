let totalinput = [];
let outBit = [];
let oldbit = [];
let out = [];
let TTotal = [];
let TToTal = [];


let coUnt = 0;
let dec_value = 0;
let bittotal = 8;
let decimalT = 3;

let maTched = false;
let SwSW = true;
let cull = false;

let sTring;
let font;

let rectX = 170;
let rectY = 10;
let rectWidth = 25;
let rectHeight = 25;

let rectXX = 170;
let rectYY = 40;
let rectWWidth = 25;
let rectHHeight = 25;

function preload() {
  font = loadFont('assets/inconsolata.otf');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push();
  if(cull == true){
    fill(0, 0, 255);
  } else{
    fill(0);
  }
  rect(rectX, rectY, rectWidth, rectHeight);
  pop();
  push();
  if(maTched == false){
    fill(255, 0, 0);
  } else{
    fill(255);
  }
  rect(rectXX, rectYY, rectWWidth, rectHHeight);
  pop();
  push();
  textSize(25);
  text('# of Bits '+ bittotal, 10,30);
  if(SwSW == true){
    text('Input Binary', 200, 30);
  } else{
    text('Input Decimal', 200, 30);
  }
  pop();
  for(let i = 0; i < totalinput.length; i++){
    let y = 100;
    let x = i * (y - 80);
    push();
    textSize(15);
    text(totalinput[i], x, y);
    pop();
  }
  if(maTched){
    for(let i = 0; i < TTotal.length; i++){
      let y = 100;
      let x = i * (y - 80);
      push();
      textSize(15);
      text(TTotal[i], x, y);
      text(dec_value, 10, 120);
      pop();
    }
  }

  for(let i = 0; i < outBit.length; i++){
    let y = 200;
    let x = i * (y - 180);
    push();
    textSize(15);
    text(outBit[i], x, y);
    pop();
  }
  if(maTched){
    for(let i = 0; i < oldbit.length; i++){
      let y = 200;
      let x = i * (y - 180);
      push();
      textSize(15);
      text(oldbit[i], x, y);
      text(TToTal, 10, 220);
      pop();
    }
  }
  push();
  textSize(20);
  fill(0, 200, 0);
  text("Click the top box to change Input mode\nClick the bottom box to clear", 20, 300)
  pop();
}


function keyReleased(){
  switch (SwSW) {
    case true:
      totalinput[totalinput.length] = key;
      coUnt ++;

      if(coUnt == bittotal){
        binaryToDecimal(totalinput);
        totalinput = [];
         coUnt = 0;
      }
      break;
  
    case false:
      outBit[outBit.length] = key;
      oldbit[oldbit.length] = key;
      console.log(outBit);
      coUnt ++;

      if(coUnt == decimalT){
        let t;
        let e;
        e = int(outBit[0]) * 100;
        t = e;
        e = int(outBit[1]) * 10;
        t =  t + e;
        e = int(outBit[2]) * 1;
        t = t + e;
        decimalToBinary(t);
        console.log(t);
        outBit = [];
        out = [];
         coUnt = 0;
      }
    default:
      break;
  }
}

function binaryToDecimal(n)
{
    let num = n;
    dec_value = 0;
 
    // Initializing base value to 1, i.e 2^0
    let base = 1;
 
    let len = num.length;
    for (let i = len - 1; i >= 0; i--) {
        if (num[i] == '1')
            dec_value += base;
        base = base * 2;
    }
 
    console.log(dec_value);
    maTched = true;
    if(maTched){
      TTotal = totalinput;
    }
    return dec_value;
}

function decimalToBinary(convert){
  for (let i = bittotal; i >= 0; i--) {
    convert = convert - pow(2, i);
    if(convert < 0){
      outBit[bittotal - i] = 0;
      convert = convert + pow(2, i);
    } else{
      outBit[bittotal - i] = 1;
    }
  }
  maTched = true;
    if(maTched){
      TToTal = out;
    }
    
  for(let i = 0; i < outBit.length - 1; i++){
    out[i] = outBit[i + 1];
  }
  console.log(out);
  return out;
}
function mouseReleased(){
  if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
    SwSW = !SwSW;
    cull = !cull;
  }
  if (mouseX > rectXX && mouseX < rectXX + rectWWidth && mouseY > rectYY && mouseY < rectYY + rectHHeight) {
      totalinput = [];
      outBit = [];
      oldbit = [];
      out = [];
      TToTal = [];
      TTotal = [];
      TToTal = [];
      maTched = false;
  }
}