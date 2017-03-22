var numCircles = 12;
var circleDiameter;

function setup()
{
    createCanvas(480, 600);
    circleDiameter = width/numCircles;
    
    frameRate(30);
}

function draw()
{
    //ellipse(width/2,height/2,circleDiameter,circleDiameter);
    var x = circleDiameter;
    var y = circleDiameter;
    
    var xChange = circleDiameter / 2;
    var yChange = circleDiameter / 2;
    
    var red = 255;
    var gre = 0;
    var blu = 0;
    var strokeDif = 0;
    
    while(y < height)
    {
        while (x < width)
        {
            fill(color(red, gre, blu));
            stroke(color(red - strokeDif, gre - strokeDif, blu - strokeDif));
            ellipse(x, y, circleDiameter,circleDiameter);
            x += xChange;
            strokeDif += 1;
            red -= 5;
        }
        y += yChange;
        blu += 5;
        x = circleDiameter;
        strokeDif -= 25;
        red = 255;
    }
}

function keyPressed() {
  if (keyCode === 115 || keyCode === 83) {
    saveCanvas('geometricPattern', 'png');
  }
  return false;
}