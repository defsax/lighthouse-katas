const WIDTH = 8;
const HEIGHT = 8;

//direction vectors
const directions = [
  //up, right, down, left
  [0, -1], [1, 0], [0, 1], [-1, 0],
  //up-right, down-right, down-left, up-left
  [1, -1], [1, 1], [-1, 1], [-1, -1]
];

const generateBoard = function(wQueen, bQueen){
  let board = new Array(WIDTH);
  for(let i = 0; i < WIDTH; i++){
    board[i] = new Array(HEIGHT);

    for(let j = 0; j < HEIGHT; j++){
      if(wQueen[0] === i && wQueen[1] === j || 
        bQueen[0] === i && bQueen[1] === j)
        board[i][j] = 1;
      else 
        board[i][j] = 0;
    }
  }
  return board;
};

const detectQueenPosition = function(board){
  for(let i = 0; i < WIDTH; i++){
    for(let j = 0; j < HEIGHT; j++){
      if(board[i][j] === 1){
        return [i, j];
      }
    }
  }
  return 'Board doesn\'t have any queens.';
};

const queenThreat = function(generatedBoard){
  
  //first, find queen location. white or black, whichever is detected first.
  let position = detectQueenPosition(generatedBoard);

  //loop through move vector list
  for(let move = 0; move < directions.length; move++){
    let pos = {x: position[0], y: position[1]};

    //keep going on vector until we hit the 'board's edge'
    while((pos.x < WIDTH && pos.x >= 0) && (pos.y < HEIGHT && pos.y >= 0)){
      //if cell contains a 1, it's a queen. 
      //also, make sure that we're not detecting the queen in the starting cell
      if(generatedBoard[pos.x][pos.y] === 1 && 
        pos.x !== position[0] && 
        pos.y !== position[1]){
        return true;
      }
      //move position by adding vector
      pos.x += directions[move][0];
      pos.y += directions[move][1];
    }
  }
  //no queen threat detected
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
