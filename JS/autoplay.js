
var total_secs;
var total_mins;
var cronometer;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;

function SelectCell(x, y){
 board [x][y] = 1;
 PaintCell(CellSelected_x, CellSelected_y, "orange");
 PaintHorseCell(x, y, "green");
 CellSelected_x = x;
 CellSelected_y = y;
}

function CheckCell(x, y){
  CheckTrue = false;

  dif_x = x - CellSelected_x;
  dif_y = y - CellSelected_y;

  if ( dif_x == 1 && dif_y == -2) CheckTrue = true;
  if ( dif_x == 1 && dif_y == 2) CheckTrue = true;
  if ( dif_x == -1 && dif_y == -2) CheckTrue = true;
  if ( dif_x == -1 && dif_y == 2) CheckTrue = true;
  if ( dif_x == 2 && dif_y == -1) CheckTrue = true;
  if ( dif_x == 2 && dif_y == 1) CheckTrue = true;
  if ( dif_x == -2 && dif_y == -1) CheckTrue = true;
  if ( dif_x == -2 && dif_y == 1) CheckTrue = true;

  if (CheckTrue)SelectCell(x, y);
}

function autoplay(){
  //alert("Hola!");

  for (i=0; i<8; i++) board[i] = new Array(8);

  ClearBoard();
  ResetTime();
  startTime();

  x=Math.round(Math.random()*7);
  y=Math.round(Math.random()*7);

  CellSelected_x = x;
  CellSelected_y = y;

  SelectCell(x, y);
}

autoplay();
