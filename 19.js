const WIDTH = 8;
const HEIGHT = 8;

const directions = [
  //up, right, down, left
  [0, -1], [1, 0], [0, 1], [-1, 0],
  //up-right, down-right, down-left, up-left
  [-1, 1], [1, 1], [1, -1], [-1, -1]
];

const generateBoard = function(wQueen, bQueen){
  let board = new Array(8);
  for(let i = 0; i < 8; i++){
    board[i] = new Array(8);

    for(let j = 0; j < 8; j++){
      if(wQueen[0] === i && wQueen[1] === j || 
        bQueen[0] === i && bQueen[1] === j)
        board[i][j] = 1;
      else 
        board[i][j] = 0;
    }
  }
  return board;
};

const queenThreat = function(generatedBoard){
  let threat = false;



  return threat;
};

const move = function(board, position){
  let xPos;
  let yPos;

  let xMove;
  let yMove;
  for(let moves = 0; moves < directions.length; moves++){
    xPos = position[0];
    yPos = position[1];

    yMove = directions[moves][1];
    xMove = directions[moves][0];
    let cell = 0;
    let count = 0;
    while((xPos < WIDTH - 1 || xPos > 0) && (yPos < HEIGHT - 1 || yPos > 0)){
      console.log(xPos < WIDTH - 1);
      console.log(xPos > 0);
      console.log(yPos < HEIGHT - 1);
      console.log(yPos > 0);

      if(board[xPos][yPos] !== undefined)
        console.log(board[xPos][yPos]);
      console.log('x: ' + xPos);
      console.log('y: ' + yPos + '\n');
      // cell = board[xPos][yPos];
      board[yPos][xPos] = '#';
      console.log(board);

      if((xPos < WIDTH - 1 && xPos > 0) && (yPos < HEIGHT - 1 && yPos > 0)){
        xPos += xMove;
        yPos += yMove;
      }
      // console.log('cell: ' + cell);
      count++;
    }
    count = 0;
    cell = 0;
  }

  console.log(board);
  console.log(' ');
  

  return board;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(move(generatedBoard, [5, 5]));
//console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
