var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "black";
var x = 150
var y = 70
var w = 80
var e = 220
var n = 225
lienzo.moveTo(x,y);
lienzo.lineTo(w,x);
lienzo.stroke();
lienzo.moveTo(w,x);
lienzo.lineTo(x,n);
lienzo.stroke();
lienzo.moveTo(x,y);
lienzo.lineTo(e,x);
lienzo.stroke();
lienzo.moveTo(e,x);
lienzo.lineTo(x,n);
lienzo.stroke();
lienzo.moveTo(x,y);
lienzo.lineTo(w,y);
lienzo.stroke();
lienzo.moveTo(w,y);
lienzo.lineTo(w,x);
lienzo.stroke();
lienzo.moveTo(w,x);
lienzo.lineTo(w,n);
lienzo.stroke();
lienzo.moveTo(w,n);
lienzo.lineTo(x,n);
lienzo.stroke();
lienzo.moveTo(x,n);
lienzo.lineTo(e,n);
lienzo.stroke();
lienzo.moveTo(x,y);
lienzo.lineTo(e,y);
lienzo.stroke();
lienzo.moveTo(e,y);
lienzo.lineTo(e,x);
lienzo.stroke();
lienzo.moveTo(e,y);
lienzo.lineTo(e,x);
lienzo.stroke();
lienzo.moveTo(e,x);
lienzo.lineTo(e,n);
lienzo.stroke();


