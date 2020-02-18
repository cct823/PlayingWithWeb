// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: "red",
  width: 200,
  height: 200
});

// "add" rectangle onto canvas
canvas.add(rect);

// function not working -- aim to move the rectangle
$("#b").click(function() {
  // rect.setLeft();
  rect.set({ left: rect.get('left') + 50 })
  canvas.renderAll();
});

//draw a circle
var circle = new fabric.Circle({
  radius: 50,
  fill: "green",
  left: 100,
  top: 350
});

// draw a triangle

var triangle = new fabric.Triangle({
  width: 200,
  height: 100,
  fill: "blue",
  left: 100,
  top: 500
});

canvas.add(triangle, circle);
