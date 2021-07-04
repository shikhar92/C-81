c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d");
color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

c1.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{color=document.getElementById("Colour").value;
mousex=e.clientX-c1.offsetLeft;
mousey=e.clientY-c1.offsetTop;
circle(mousex,mousey);
}
function circle(mousex,mousey)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}
function ERASE() 
{
ctx.clearRect(0,0,c1.width,c1.height);




}

