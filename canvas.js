var myCanvas = document.getElementById("artboard")

var canvas = myCanvas.getContext("2d")
canvas.beginPath();
canvas.moveTo(0,0)
canvas.lineTo(400,400)
//canvas.stroke()
// face
canvas.beginPath();
canvas.arc(200, 200, 100, 0, 360, false)
canvas.stroke()

//left eye
canvas.moveTo(160,160);
canvas.beginPath();
canvas.arc(150,170,20,0,360,false)
canvas.stroke();

//right eye
canvas.moveTo(180,180)
canvas.beginPath();
canvas.arc(240,170,20,0,360,false)
canvas.stroke();

//nose
canvas.moveTo(200,190)
canvas.beginPath();
canvas.lineTo(200,240)
canvas.stroke();