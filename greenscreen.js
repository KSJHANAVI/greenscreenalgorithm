var bgimg;
var bgcanvas;
var bgimage;
var fgimg;
var fgcanvas;
var fgimage;
function uploadfg()
{
fgimage=document.getElementById("fgimg");
fgcanvas=document.getElementById("fgcan");
fgimg=new SimpleImage(fgimage);
  fgimg.drawTo(fgcanvas);
}
function uploadbg()
{
bgimage=document.getElementById("bgimg");
bgcanvas=document.getElementById("bgcan");
bgimg=new SimpleImage(bgimage);
  bgimg.drawTo(bgcanvas);
}
//converting to gray scale involves taking
//average of rgb values of each pixel and 
//re-assigning that average to each of rgb values
function seeoutput()
{
opcanvas=document.getElementById("opcan");
opimg=new SimpleImage(bgimg.getWidth(),
                     bgimg.getHeight());

for(var pix of opimg.values())
{
    var x=pix.getX();
    var y=pix.getY();
    var fp=fgimg.getPixel(x,y);
    var bp=bgimg.getPixel(x,y);
    if(fp.getGreen()>(fp.getRed()+fp.getBlue()))
    pix.setAllFrom(bp);
    else
    pix.setAllFrom(fp);
}
  opimg.drawTo(opcanvas);
}
