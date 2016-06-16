// Constructor, []'s because of minification when compiling
Q42Logo['canvas-code'] = function(logo){
  this.logo = logo;
};

// Use the Q42Logo.Canvas prototype (canvas2d.js)
var proto = Q42Logo['canvas-code'].prototype = Object.create(Q42Logo.Canvas.prototype);

// Overwrite its methods below
// This is called once onload, use requestAnimationFrame on mouse hover
// for animation. Check out webgl.js for a .render() example.
proto.draw = function(){
  this.text = this.drawLoop.toString().replace(/\s+/g, ' ');
  this.text += this.text + this.text;
  this.text += this.text + this.text;
  console.log(this.text.substr(this.text.length / 2, 100))

  var canvas = this.element;
  var ctx = this.ctx;
  var xo = canvas.width / 2;
  var yo = canvas.height / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(xo, yo);
  this.drawShape();
  ctx.translate(-xo, -yo);

  var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  this.widths = [];
  var halfW = Math.floor(pixels.width / 2);
  for (var y = 0; y < pixels.height; y++) {
    for (var x = 0; x < halfW; x++) {
      if (pixels.data[(y * pixels.width + x)*4 + 1] > 0.5) // test alpha
        break;
    }
    this.widths[y] = (halfW - x) * 2;
  }

  this.drawLoop = this.drawLoop.bind(this);
  this.drawLoop();
}

proto.drawLoop = function(){
  requestAnimationFrame(this.drawLoop);

  var canvas = this.element;
  var ctx = this.ctx;
  var xo = canvas.width / 2;
  var yo = canvas.height / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = this.logo.colors.background;
  var fontSize = Math.sin(new Date() / 1500) * 20 + 25;
  ctx.font = "bold " + fontSize + "px monospace";
  var charWidth = ctx.measureText("X").width;
  var rowCount = Math.ceil(canvas.height / fontSize / 2);

  var total = 0;
  var half;
  var lengths = {};
  var offsets = {};
  for (var i = -rowCount; i <= rowCount; i++) {
    var y = i * fontSize + canvas.height / 2;
    var width = this.widths[Math.round(y)];
    if (!width) continue;
    lengths[i] = Math.round(width / charWidth);
    if (i == 0)
      half = total + lengths[i] / 2;
    offsets[i] = total;
    total += lengths[i];
  }
  var offset = this.text.length / 2 - half;
  for (var i in lengths) {
    var text = this.text.substr(offset + offsets[i], lengths[i]);
    ctx.fillText(text, xo - ctx.measureText(text).width / 2, i * fontSize + canvas.height / 2);
  }

  // ctx.translate(xo, yo);
  //this.drawText();
  //ctx.translate(-xo, -yo);
};
