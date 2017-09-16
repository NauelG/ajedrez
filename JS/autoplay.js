
var total_secs;
var total_mins;
var cronometer;


var Moves;
var Options;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;

function Check_SuccessfullEnd(){
  SuccessfullEnd = true;
  if (Moves > 0) SuccessfullEnd = false;
  if (SuccessfullEnd) alert ("Partida Ganada");
}

function Check_GameOver(x, y){
  Options = 0;

  Check_Moves(x, y, 1, 2);
  Check_Moves(x, y, 2, 1);
  Check_Moves(x, y, 1, -2);
  Check_Moves(x, y, 2, -1);
  Check_Moves(x, y, -1, 2);
  Check_Moves(x, y, -2, 1);
  Check_Moves(x, y, -1, -2);
  Check_Moves(x, y, -2, -1);

  document.getElementById("options").innerHTML = Options;
  if (!Options) alert ("Game Over");
}

function Check_Moves(x, y, mov_x, mov_y){
  option_x = x + mov_x;
  option_y = y + mov_y;
  if (option_x<8 && option_y<8 && option_x >=0 && option_y>=0){
    if (board[option_x][option_y] == 0) Options++;
  }
}

function SelectCell(x, y){

  Moves --;
  document.getElementById("moves").innerHTML = Moves;

  board [x][y] = 1;
  PaintCell(CellSelected_x, CellSelected_y, "orange");
  PaintHorseCell(x, y, "green");
  CellSelected_x = x;
  CellSelected_y = y;

  Check_SuccessfullEnd();
  Check_GameOver(x, y);
}

function CheckCell(x, y){
  CheckTrue = false;

  dif_x = x - CellSelected_x;
  dif_y = y - CellSelected_y;

  if (dif_x == 1 && dif_y == -2) CheckTrue = true;
  if (dif_x == 1 && dif_y == 2) CheckTrue = true;
  if (dif_x == -1 && dif_y == -2) CheckTrue = true;
  if (dif_x == -1 && dif_y == 2) CheckTrue = true;
  if (dif_x == 2 && dif_y == -1) CheckTrue = true;
  if (dif_x == 2 && dif_y == 1) CheckTrue = true;
  if (dif_x == -2 && dif_y == -1) CheckTrue = true;
  if (dif_x == -2 && dif_y == 1) CheckTrue = true;

  if (board[x][y] == 1) CheckTrue = false;

  if (CheckTrue) SelectCell(x, y);
}

function autoplay(){
  //alert("Hola!");

  Moves = 64;

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
