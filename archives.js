// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 200,
  fill: "red",
  width: 70,
  height: 70
});

// "add" rectangle onto canvas
canvas.add(rect);

// draw a triangle

//draw a circle
var circle = new fabric.Circle({
    radius: 50,
    fill: "green",
    left: 200,
    top: 250
  });

  
var triangle = new fabric.Triangle({
  width: 200,
  height: 100,
  fill: "blue",
  left: 300,
  top: 300
});

canvas.add(triangle, circle);


// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");


//draw an arrow when mouse click/drop!

// // click and drag to draw more arrow!
// var startX, startY, endX, endY;

// canvas.on('mouse:down', function() {
//     var pointer = canvas.getPointer(event.e);
//     startX = pointer.x;
//     startY = pointer.y;
// });
// canvas.on('mouse:up', function() {
//    	var pointer = canvas.getPointer(event.e);
//     endX = pointer.x;
//     endY = pointer.y;
//     drawArrow(startX, startY, endX, endY);
// });
