const squareCode = function(message) {
  let coded = '';
  
  //remove spaces
  message = message.split(' ').join('');

  

  for(let i of message){
    console.log(i);
  }
  return coded;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(squareCode('if man was meant to stay on the ground god would have given us roots'));
