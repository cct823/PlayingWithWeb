// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");

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

//draw a circle
var circle = new fabric.Circle({
  radius: 50,
  fill: "green",
  left: 200,
  top: 250
});

// draw a triangle

var triangle = new fabric.Triangle({
  width: 200,
  height: 100,
  fill: "blue",
  left: 300,
  top: 300
});

canvas.add(triangle, circle);

// create a function to move right for rect object
$("#b").click(function() {
  // rect.setLeft();
  rect.set({ left: rect.get("left") + 10 });
  canvas.renderAll();
});

function addCircle() {
  var circle = new fabric.Circle({
    radius: 55,
    fill: "green",
    left: 205,
    top: 255
  });

  canvas.add(circle);
}

function addArrow() {
  drawArrow(100, 100, 180, 100);
}

// change rectangle color
function changeRColor() {
  // Selecting the input element and get its value
  var hexVal = document.getElementById("rectColor").value;

  rect.set("fill", hexVal);
  canvas.renderAll();
}

// change circle color
function changeCColor() {
  // Selecting the input element and get its value
  var cirVal = document.getElementById("cirColor").value;
  circle.set("fill", cirVal);
  canvas.renderAll();
}

// change triangle color
function changeTColor() {
  // Selecting the input element and get its value
  var triVal = document.getElementById("triColor").value;

  triangle.set("fill", triVal);
  canvas.renderAll();
}

function drawArrow(fromx, fromy, tox, toy) {
  var angle = Math.atan2(toy - fromy, tox - fromx);

  var headlen = 15; // arrow head size

  // bring the line end back some to account for arrow head.
  tox = tox - headlen * Math.cos(angle);
  toy = toy - headlen * Math.sin(angle);

  // calculate the points.
  var points = [
    {
      x: fromx, // start point
      y: fromy
    },
    {
      x: fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
      y: fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
    },
    {
      x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
      y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
    },
    {
      x: tox - headlen * Math.cos(angle - Math.PI / 2),
      y: toy - headlen * Math.sin(angle - Math.PI / 2)
    },
    {
      x: tox + headlen * Math.cos(angle), // tip
      y: toy + headlen * Math.sin(angle)
    },
    {
      x: tox - headlen * Math.cos(angle + Math.PI / 2),
      y: toy - headlen * Math.sin(angle + Math.PI / 2)
    },
    {
      x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
      y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
    },
    {
      x: fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
      y: fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
    },
    {
      x: fromx,
      y: fromy
    }
  ];

  var pline = new fabric.Polyline(points, {
    fill: "black",
    stroke: "black",
    opacity: 1,
    strokeWidth: 2,
    originX: "left",
    originY: "top",
    selectable: true
  });

  canvas.add(pline);

  canvas.renderAll();
}

//draw an arrow!

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
