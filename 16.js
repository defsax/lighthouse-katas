const camel = function(input){
  let converted = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      //if letter is a space, add next letter as a capital
      converted += input[i + 1].toUpperCase();
      //skip ahead to avoid duplicate letters
      i++;
    }
    else{
      //if letter is not a space, add like normal
      converted += input[i];
    }
  }
  return converted;
};

const pascal = function(input){
  let converted = '';
  for(let i = 0; i < input.length; i++){
    //if we're on the first letter, capitalize it
    if(i === 0){
      converted += input[0].toUpperCase();
    }
    else if(input[i] === ' '){
      //if letter is a space, add next letter as a capital
      converted += input[i + 1].toUpperCase();
      //skip ahead to avoid duplicate letters
      i++;
    }
    else{
      //if letter is not a space, add like normal
      converted += input[i];
    }
  }
  return converted;
};

const snake = function(input){
  let converted = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      //if letter is a space, add an underscore
      converted += '_';
    }
    else{
      //if letter is not a space, add like normal
      converted += input[i];
    }
  }
  return converted;
};
const kebab = function(input){
  let converted = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      //if letter is a space, add a skewer
      converted += '-';
    }
    else{
      //if letter is not a space, add like normal
      converted += input[i];
    }
  }
  return converted;
};

const title = function(input){
  let converted = '';
  for(let i = 0; i < input.length; i++){
    //if we're on the first letter, capitalize it
    if(i === 0){
      converted += input[0].toUpperCase();
    }
    else if(input[i] === ' '){
      //if letter is a space, add space and next letter as a capital
      converted += ' ';
      converted += input[i + 1].toUpperCase();
      //skip ahead to avoid duplicate letters
      i++;
    }
    else{
      //if letter is not a space, add like normal
      converted += input[i];
    }
  }
  return converted;
};

const vowel = function(input){
  /* 
    - loop input string letter by letter
    - add every letter to converted(return) string.
    - loop vowels letter by letter
    - if there's a match, remove existing(same) letter and capitalize
  */
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let converted = '';
  for(let i of input){
    converted += i;
    for(let j of vowels){
      if(j === i){
        converted = converted.substring(0, converted.length - 1);
        converted += i.toUpperCase();
        continue;
      } 
    }
  }
  return converted;
};

const consonant = function(input){
  //same as vowels but with consonants
  let consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 
    'k', 'l', 'm', 'n', 'p', 'q', 'r', 
    's', 't', 'v', 'w', 'x', 'y', 'z'
  ];
  let converted = '';
  for(let i of input){
    converted += i;
    for(let j of consonants){
      if(j === i){
        converted = converted.substring(0, converted.length - 1);
        converted += i.toUpperCase();
        continue;
      } 
    }
  }
  return converted;
};

const upper = function(input){
  let converted = ' ';
  for(let i of input){
    converted += i.toUpperCase();
  }
  return converted;
};

const lower = function(input){
  let converted = ' ';
  for(let i of input){
    converted += i.toLowerCase();
  }
  return converted;
};

const sortCase = function(input, caseStyle){
  let convertedString = ' ';
  switch(caseStyle){
    case 'camel':{
      convertedString = camel(input);
      break;
    }
    case 'pascal':{
      convertedString = pascal(input);
      break;
    }
    case 'snake':{
      convertedString = snake(input);
      break;
    }
    case 'kebab':{
      convertedString = kebab(input);
      break;
    }
    case 'title':{
      convertedString = title(input);
      break;
    }
    case 'vowel':{
      convertedString = vowel(input);
      break;
    }
    case 'consonant':{
      convertedString = consonant(input);
      break;
    }
    case 'upper':{
      convertedString = upper(input);
      break;
    }
    case 'lower':{
      convertedString = lower(input);
      break;
    }
    default:
      break;
  }
  return convertedString;
};

const makeCase = function(input, caseStyle) {
  let convertedString = input;
  
  if(typeof(caseStyle) === 'object'){
    /*
      - if case is an object(it requires multiple case operations), loop switch statement multiple times
    */
    for(let i of caseStyle){
      convertedString = sortCase(convertedString, i);
    }
  }
  else{
    //run switch only once
    convertedString = sortCase(convertedString, caseStyle);
  }
  return convertedString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
