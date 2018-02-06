var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var stopButton = document.getElementById("stop");

var requestId;

ctx.fillStyle = "lightsteelblue";

var animate = function() {

  var radius = 100;
  var x = 0;
  var y = canvas.height / 2;

  var drawCircle = function() {
    clear();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    requestID = window.requestAnimationFrame(drawCircle);
    x++;
    radius+=0.1;

    if (x >= 500 || y >= 500) {
      stop();
    }
  }

  drawCircle();
}

var clear = function() {
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  ctx.beginPath();
}

var stop = function() {
  window.cancelAnimationFrame(requestID);
}

canvas.addEventListener('click', animate);
stopButton.addEventListener('click', stop);
