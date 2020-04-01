// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");

//TODO: add text to the circle
// draw finite state machine
// drawCircle(radius,fill,left,top)
// drawArrow(startX, startY, endX, endY)

// -------------------------FINITE STATE MACHINE-------------------------------------
//draw top four circles + 3 arrows
c1= drawCircle(50,'#00CFFF',100,100)
drawArrow(200, 150, 270, 150)
drawCircle(50,'#00CFFF',270,100)
drawArrow(370, 150, 430, 150)
drawCircle(50,'#00CFFF',430,100)
drawArrow(530, 150, 590, 150)
drawCircle(50,'#00CFFF',590,100)

//draw bottom two circles
drawCircle(50,'#FC9BA0',345,350)
drawCircle(50,'#00FF00',590,350)

//draw other arrows
drawArrow(187,187,360,360)
drawArrow(330,200,385,350)
drawArrow(473,200,410,350)
drawArrow(625,200,440,375)
drawArrow(640,200,640,350)

// -------------------------BUTTON FUNCTION START-------------------------------------
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

// Add Arrows
function addArrow() {
  drawArrow(100, 100, 180, 100);
}

function addCircle(){
  drawCircle(50,'blue',200,300)
}

// create a function to move right for rect object
$("#b").click(function() {
  // rect.setLeft();
  rect.set({ left: rect.get("left") + 10 });
  canvas.renderAll();
});


// -------------------------DRAWING FUNCTION---------------------------------------
// draw circle
function drawCircle(r,f,l, t) {
  var circle = new fabric.Circle({
    radius:r,
    fill : f,
    left : l,
    top : t,
    strokeWidth: 1,
    stroke: "black",
  });

  canvas.add(circle);
  canvas.renderAll()
}

//draw arrow
function drawArrow(fromx, fromy, tox, toy) {
  var angle = Math.atan2(toy - fromy, tox - fromx);

  var headlen = 8; // arrow head size

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
