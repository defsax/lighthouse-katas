const camelCase = function(input) {
  let convertedCamel = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      //if letter is a space, add next letter as a capital
      convertedCamel += input[i + 1].toUpperCase();
      //skip ahead to avoid duplicate letters
      i++;
    }
    else{
      //if letter is not a space, add like normal
      convertedCamel += input[i];
    }
  }
  return convertedCamel;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
