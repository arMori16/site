const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.style.background = "#ff8";


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var rectWidth = 700;
var rectHeight = 400;

var x = (canvas.width - rectWidth)/2; //610
var y = (canvas.height - rectHeight)/2; //340
function drawLetter(){
    ctx.lineWidth = 20;
    ctx.fillStyle = "#ffe1c9"
    ctx.strokeRect(x,y,rectWidth,rectHeight);
    ctx.fillRect(x,y,rectWidth,rectHeight);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineWidth = 8;
    ctx.lineTo(x + rectWidth/2,y + rectHeight/2);
    ctx.lineTo(x + rectWidth,y);
    ctx.stroke();
    ctx.closePath();
}

//Heart
function drawHeart(){
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.moveTo(x + rectWidth/2,(y + rectHeight/2)+60);
    /* ctx.bezierCurveTo((x + rectWidth/2)-60,(y + rectHeight/2)-30, (x + rectWidth/2)-80,(y + rectHeight/2)-40,(x + rectWidth/2)-10,(y + rectHeight/2)-20); */
    ctx.quadraticCurveTo((x + rectWidth/2)-95,(y + rectHeight/2), (x + rectWidth/2)-50,(y + rectHeight/2)-40);
    ctx.quadraticCurveTo((x + rectWidth/2)-10,(y + rectHeight/2)-60, (x + rectWidth/2),(y + rectHeight/2));
    ctx.moveTo(x + rectWidth/2,(y + rectHeight/2)+60);
    ctx.quadraticCurveTo((x + rectWidth/2)+100,(y + rectHeight/2), (x + rectWidth/2)+50,(y + rectHeight/2)-40);
    ctx.quadraticCurveTo((x + rectWidth/2)+10,(y + rectHeight/2)-60, (x + rectWidth/2),(y + rectHeight/2));
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath(); 
}
function moveHeart(offsetY){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawLetter();
    ctx.save();
    ctx.translate(0,offsetY);
    drawHeart();
    ctx.restore();
}
drawLetter();
moveHeart(-15);



