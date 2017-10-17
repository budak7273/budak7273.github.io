var numCircles = 12;
var circleDiameter;

    var redDefault = 255;
    var redShift = -5;
    var greDefault = 0;
    var greShift = 0;
    var bluDefault = 0;
    var bluShift = 5;
    var strokeDifDefault = 0;
    var strokeDifShift = 1;
    
    var diameterDivisorDefault = 2.0;
    var diameterDivisorChange = 1;

function setup()
{
    createCanvas(480, 600);
    circleDiameter = width/numCircles;
    
    frameRate(30);
    updateLabels();
}

function draw()
{
    //ellipse(width/2,height/2,circleDiameter,circleDiameter);
    var x = circleDiameter;
    var y = circleDiameter;
    
    var xChange = circleDiameter / diameterDivisorDefault;
    var yChange = circleDiameter / diameterDivisorDefault;
    
    var red = redDefault;
    var gre = greDefault;
    var blu = bluDefault;
    var strokeDif = strokeDifDefault;
    var diameterDivisorRunning = diameterDivisorDefault;
    
    while(y < height)
    {
        while (x < width)
        {
            fill(color(red, gre, blu));
            stroke(color(red - strokeDif, gre - strokeDif, blu - strokeDif));
            ellipse(x, y, circleDiameter / diameterDivisorRunning, circleDiameter / diameterDivisorRunning);
            diameterDivisorRunning = diameterDivisorRunning / diameterDivisorChange;
            
            x += xChange;
            strokeDif += strokeDifShift;
            red += redShift;
            gre += greShift;
            blu += bluShift;
            
        }
        y += yChange;
        blu += bluShift;
        x = circleDiameter;
        strokeDif = strokeDifDefault;
        red = redDefault;
        gre = greDefault;
        blu = bluDefault;
        diameterDivisorRunning = diameterDivisorDefault;
        xChange = circleDiameter / diameterDivisorDefault;
        yChange = circleDiameter / diameterDivisorDefault;
    }
    
    /*strokeDif = 0;
    red = 255;
    gre = 0;
    blu = 0;*/
}

//below inspired by http://stackoverflow.com/questions/10655202/detect-multiple-keys-on-single-keypress-event-in-jquery
document.onkeydown = KeyPress;
document.onkeyup = KeyRelease;

var map = {83: false, 82:false, 71:false, 66:false, 37:false, 39:false, 38: false, 40:false, 16:false, 107:false, 109:false}; 
         //s,         r,        g,        b,        leftarrow rightarro uparrow    downarrow shift     add        subtract

function KeyPress(e) {
      e.preventDefault();
      var evtobj = window.event? event : e;
      map[e.keyCode] = true;
      //alert("pressed " + e.keyCode);
      checkKeyCombos();
}
function KeyRelease(e) {
    var evtobj = window.event? event : e;
    map[e.keyCode] = false;
    //alert("released " + e.keyCode);
}

function updateLabels()
{
    document.getElementById("redStart").innerHTML = "" + redDefault;
    document.getElementById("greStart").innerHTML = "" + greDefault;
    document.getElementById("bluStart").innerHTML = "" + bluDefault;
    document.getElementById("brdStart").innerHTML = "" + strokeDifDefault;
    document.getElementById("diaStart").innerHTML = "" + diameterDivisorDefault;
    
    document.getElementById("redShift").innerHTML = "" + redShift;
    document.getElementById("greShift").innerHTML = "" + greShift;
    document.getElementById("bluShift").innerHTML = "" + bluShift;
    document.getElementById("brdShift").innerHTML = "" + strokeDifShift;
    document.getElementById("diaShift").innerHTML = "" + diameterDivisorChange;
}

function checkKeyCombos() {
    updateLabels();
  if (map[83])
  {
    saveCanvas('geometricPattern', 'png');
  }
  else if (map[37]) //larrow
  {
    if(map[82] && redDefault > 0) //r
        redDefault -= 1;
    else if(map[71] && greDefault > 0) //g
        greDefault -= 1;
    else if(map[66] && bluDefault > 0) //b
        bluDefault -= 1;
  }
  else if (map[39]) //rarrow
  {
    if(map[82] && redDefault < 255) //r
        redDefault += 1;
    else if(map[71] && greDefault < 255) //g
        greDefault += 1;
    else if(map[66] && bluDefault < 255) //b
        bluDefault += 1;
  }
  else if (map[16]) //shift
  {
      if(map[38]) //uparrow
        strokeDifDefault += 1;
      else if (map[40]) //downarrow
        strokeDifDefault -= 1;
  }
  else if (map[38] && diameterDivisorChange < 6) //uparrow
  {
      diameterDivisorChange += .001;
  }
  else if (map[40] && diameterDivisorChange > 0) //darrow
  {
      diameterDivisorChange -= .001;
  }
}