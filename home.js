// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: "red",
  width: 70,
  height: 70
});

// "add" rectangle onto canvas
canvas.add(rect).setActiveObject(rect);

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
