const multiplicationTable = function(maxValue) {
  let mRow = '';
  let mCol = '';

  for(let row = 0; row < maxValue; row++){
    for(let column = 0; column < maxValue; column++){
      mCol += (row + 1) * (column + 1) + '\t';
    }
    mRow += mCol + '\n';
    mCol = '';
  }
  return mRow;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));