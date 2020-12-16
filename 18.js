const squareCode = function(message) {
  let coded = [];
  let rows = [];
  let columns = [];
  
  //remove spaces
  message = message.split(' ').join('');

  //calculate length and height
  let length = Math.ceil(Math.sqrt(message.length));
  let height = Math.ceil(message.length / length);

  //loop from 0 to l * h so that last row gets added
  for(let i = 0; i <= length * height; i++){
    if(i % length === 0 && i !== 0){
      rows.push(columns);
      columns = [];
    }
    //don't add letters that aren't there
    if(message[i] !== undefined)
      columns.push(message[i]);
  }

  //loop back over array and add mixed letters to encoded return array
  for(let i = 0; i < length; i++){
    for(let j = 0; j < height; j++){
      if(rows[j][i] !== undefined){
        coded += rows[j][i];
      }
    }
    coded += ' ';
  }

  return coded;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(squareCode('if man was meant to stay on the ground god would have given us roots'));
