
var total_secs;
var total_mins;
var cronometer;

var board = new Array(8);

function SelectCell(x, y){
 board [x][y] = 1;
 PaintCell(x, y, "green");
 PaintHorseCell(x, y, "green");
}

function autoplay(){
  //alert("Hola!");

  for (i=0; i<8; i++) board[i] = new Array(8);

  ClearBoard();
  ResetTime();
  startTime();

  x=Math.round(Math.random()*7);
  y=Math.round(Math.random()*7);

  SelectCell(x, y);
}

autoplay();
