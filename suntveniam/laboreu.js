function toCanvas(grid, obj, color, opacity) {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // Set the global alpha value
  ctx.globalAlpha = opacity;

  // Draw your element on the canvas
  // ...
}
