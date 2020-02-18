

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 200,
  height: 200
});

// "add" rectangle onto canvas

canvas.add(rect);



//draw a circle
var circle = new fabric.Circle({
  radius: 50, fill: 'green', left: 500, top: 100
});

var triangle = new fabric.Triangle({
  width: 400, height: 300, fill: 'blue', left: 700, top: 50
});


canvas.add(triangle, circle);

