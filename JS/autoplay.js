
var total_secs;
var total_mins;
var cronometer;

var board = new Array(8);


function autoplay(){
  //alert("Hola!");

  for (i=0; i<8; i++) board[i] = new Array(8);
  
  ResetTime();
  startTime();
}

autoplay();
