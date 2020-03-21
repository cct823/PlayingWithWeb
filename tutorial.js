

// this file is use for testing 




// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c", {
  // backgroundColor: "rgb(100,100,200)",
  //   selectionColor: "yellow",
  //   selectionLineWidth: 20
  // ...
});

// create a rectangle object
var rect = new fabric.Rect({
  left: 300,
  top: 200,
  fill: "red",
  width: 200,
  height: 200,
  angle: 45
});

// "add" rectangle onto canvas
canvas.add(rect);

var circle = new fabric.Circle({
  radius: 20,
  fill: "green",
  left: 150,
  top: 150
});
var triangle = new fabric.Triangle({
  width: 20,
  height: 30,
  fill: "blue",
  left: 50,
  top: 50
});

canvas.add(circle, triangle);

rect.set("fill", "yellow");
rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });
rect.set("angle", 15).set("flipY", true);

canvas.selection = false; // disable group selection
circle.set("selectable", false); // make object unselectable


